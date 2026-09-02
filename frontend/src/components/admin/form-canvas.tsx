"use client";

import { useState } from "react";
import { SortableContext, verticalListSortingStrategy, } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import SortableFieldCard from "@/components/admin/sortable-field-card";
import DynamicForm from "@/components/renderer/dynamic-form";
import type { FormField } from "@/types/form";

type Props = {
    title: string;
    description: string;
    onTitleChange: (v: string) => void;
    onDescriptionChange: (v: string) => void;
    fields: FormField[];
    selectedFieldId: string | null;
    onSelectField: (id: string) => void;
    onRemoveField: (id: string) => void;
    onDuplicateField: (id: string) => void;
    isPreview: boolean;
};

const CanvasDropZone = ({ children, isEmpty }: { children: React.ReactNode; isEmpty: boolean }) => {

    const { setNodeRef, isOver } = useDroppable({ id: "canvas-drop-zone" });

    return (
        <div
            ref={setNodeRef}
            className={cn(
                "flex flex-col items-center justify-center rounded-2xl border border-dashed py-20 gap-2 transition-colors",
                isOver
                    ? "border-primary/60 bg-primary/5"
                    : "border-border bg-card/50",
                !isEmpty && "hidden"
            )}
        >
            {children}
        </div>
    );
};

const FormCanvas = ({
    title,
    description,
    onTitleChange,
    onDescriptionChange,
    fields,
    selectedFieldId,
    onSelectField,
    onRemoveField,
    onDuplicateField,
    isPreview,
}: Props) => {

    const [formState, setFormState] = useState<Record<string, string>>({});

    const handleChange = (id: string, value: string) => {
        setFormState((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <div className="flex-1 overflow-y-auto bg-muted/30 p-4 sm:p-8">
            <div className="max-w-2xl mx-auto flex flex-col gap-3">
                <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
                    <div className="h-1 w-full bg-primary" />
                    <div className="flex flex-col gap-0.5 p-6 pb-5">
                        {isPreview ? (
                            <>
                                <h1 className="text-xl font-semibold">
                                    {title || "Untitled Form"}
                                </h1>
                                {description && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {description}
                                    </p>
                                )}
                            </>
                        ) : (
                            <>
                                <input
                                    value={title}
                                    onChange={(e) => onTitleChange(e.target.value)}
                                    placeholder="Untitled Form"
                                    className="text-xl font-semibold bg-transparent border-none outline-none placeholder:text-muted-foreground/30 w-full"
                                />
                                <textarea
                                    value={description}
                                    rows={1}
                                    onChange={(e) => onDescriptionChange(e.target.value)}
                                    placeholder="Add a form description..."
                                    className="resize-none text-sm text-muted-foreground bg-transparent border-none outline-none placeholder:text-muted-foreground/40 w-full mt-1"
                                    style={{ fieldSizing: "content" } as React.CSSProperties}
                                />
                            </>
                        )}
                    </div>
                </div>

                {isPreview ? (
                    <div className="rounded-xl border border-border/60 bg-card overflow-hidden py-1">
                        <DynamicForm
                            fields={fields}
                            formState={formState}
                            onChange={handleChange}
                        />
                    </div>
                ) : (
                    <>
                        {fields.length === 0 ? (
                            <CanvasDropZone isEmpty>
                                <p className="text-sm font-medium text-muted-foreground">
                                    No fields yet
                                </p>
                                <p className="text-xs text-muted-foreground/60">
                                    Click or drag a field type from the left panel
                                </p>
                            </CanvasDropZone>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <SortableContext
                                    items={fields.map((f) => f.id)}
                                    strategy={verticalListSortingStrategy}
                                >
                                    {fields.map((field) => (
                                        <SortableFieldCard
                                            key={field.id}
                                            field={field}
                                            isSelected={field.id === selectedFieldId}
                                            onSelect={() => onSelectField(field.id)}
                                            onRemove={() => onRemoveField(field.id)}
                                            onDuplicate={() => onDuplicateField(field.id)}
                                        />
                                    ))}
                                </SortableContext>

                                <CanvasDropZone isEmpty={false}>
                                    <></>
                                </CanvasDropZone>

                                <div className={cn(
                                    "flex items-center justify-center rounded-xl border border-dashed border-border/60 py-3",
                                    "text-xs text-muted-foreground/50 transition-colors",
                                    "hover:border-primary/30 hover:text-muted-foreground"
                                )}>
                                    Click or drag a field type on the left to add more
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default FormCanvas;
