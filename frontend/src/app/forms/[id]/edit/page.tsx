"use client";

import AdminTopBar from "@/components/admin/admin-top-bar";
import FieldSettingsPanel from "@/components/admin/field-settings-panel";
import FieldTypePanel from "@/components/admin/field-type-panel";
import FormCanvas from "@/components/admin/form-canvas";
import Icons from "@/components/global/icons";
import MobilePanels from "@/components/admin/mobile-panels";
import { Button } from "@/components/ui/button";
import { FIELD_CATEGORIES, FIELD_TYPE_LABELS } from "@/constants/form-fields";
import type { FieldType, FormDefinition, FormField } from "@/types/form";
import {
    closestCenter,
    DndContext,
    DragOverlay,
    PointerSensor,
    useSensor,
    useSensors,
    type DragEndEvent,
    type DragStartEvent,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { InfoIcon, Loader2Icon, XIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const EditFormPage = () => {

    const params = useParams();
    const router = useRouter();
    const formId = params.id as string;

    const [title, setTitle] = useState<string>("Untitled Form");
    const [description, setDescription] = useState<string>("");
    const [fields, setFields] = useState<FormField[]>([]);
    const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isPreview, setIsPreview] = useState<boolean>(false);
    const [activeDragType, setActiveDragType] = useState<string | null>(null);
    const [showBanner, setShowBanner] = useState<boolean>(false);
    const [leftPanelOpen, setLeftPanelOpen] = useState<boolean>(false);
    const [rightPanelOpen, setRightOpen] = useState<boolean>(false);

    useEffect(() => {
        const loadForm = async () => {
            try {
                const res = await fetch(`${API_BASE}/forms/${formId}`);
                if (!res.ok) throw new Error("Failed to load form");
                const form: FormDefinition = await res.json();
                setTitle(form.schema.title);
                setDescription(form.schema.description || "");
                setFields(form.schema.fields);
            } catch (error) {
                toast.error("Could not load form");
                router.push("/forms");
            } finally {
                setIsLoading(false);
            }
        };

        loadForm();

        if (!localStorage.getItem("formix_coldstart_banner")) {
            setShowBanner(true);
        }
    }, [formId, router]);

    const dismissBanner = () => {
        localStorage.setItem("formix_coldstart_banner", "true");
        setShowBanner(false);
    };

    const selectedField = fields.find((f) => f.id === selectedFieldId) ?? null;

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
    );

    const handleAddField = (type: FieldType, atIndex?: number) => {
        const newField: FormField = {
            id: `f_${Date.now()}`,
            type,
            label: FIELD_TYPE_LABELS[type],
            required: false,
        };
        setFields((prev) => {
            if (atIndex !== undefined) {
                const next = [...prev];
                next.splice(atIndex, 0, newField);
                return next;
            }
            return [...prev, newField];
        });
        setSelectedFieldId(newField.id);
    };

    const handleUpdateField = (updates: Partial<FormField>) => {
        if (!selectedFieldId) return;
        setFields((prev) =>
            prev.map((f) => f.id === selectedFieldId ? { ...f, ...updates } : f)
        );
    };

    const handleRemoveField = (id: string) => {
        setFields((prev) => prev.filter((f) => f.id !== id));
        if (selectedFieldId === id) setSelectedFieldId(null);
    };

    const handleDuplicateField = (id: string) => {
        const field = fields.find((f) => f.id === id);
        if (!field) return;
        const copy: FormField = {
            ...field,
            id: `f_${Date.now()}`,
            label: `${field.label} (copy)`,
        };
        const index = fields.findIndex((f) => f.id === id);
        setFields((prev) => [
            ...prev.slice(0, index + 1),
            copy,
            ...prev.slice(index + 1),
        ]);
    };

    const handleDragStart = (event: DragStartEvent) => {
        setActiveDragType(String(event.active.id));
    };

    const handleDragEnd = (event: DragEndEvent) => {
        setActiveDragType(null);
        const { active, over } = event;
        if (!over) return;

        const activeId = String(active.id);
        const overId = String(over.id);

        if (activeId.startsWith("panel::")) {
            const type = activeId.replace("panel::", "") as FieldType;

            if (overId === "canvas-drop-zone") {
                handleAddField(type);
            } else {
                const overIndex = fields.findIndex((f) => f.id === overId);
                if (overIndex >= 0) {
                    handleAddField(type, overIndex);
                }
            }
            return;
        }

        if (activeId !== overId) {
            setFields((prev) => {
                const oldIndex = prev.findIndex((f) => f.id === activeId);
                const newIndex = prev.findIndex((f) => f.id === overId);
                return arrayMove(prev, oldIndex, newIndex);
            });
        }
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const res = await fetch(`${API_BASE}/forms/${formId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    schema: { title, description, fields },
                }),
            });
            if (!res.ok) throw new Error("Failed to save");
            toast.success("Form has been updated!");
            router.push("/forms");
        } catch {
            toast.error("Could not save form. Please try again");
        } finally {
            setIsSaving(false);
        }
    };

    const activePanelType = activeDragType?.startsWith("panel::")
        ? activeDragType.replace("panel::", "")
        : null;

    const activePanelItem = activePanelType
        ? FIELD_CATEGORIES.flatMap((c) => c.types).find((t) => t.type === activePanelType)
        : null;

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-dvh bg-background">
                <div className="flex flex-col items-center gap-2">
                    <Loader2Icon className="size-5 text-muted-foreground animate-spin" />
                </div>
            </div>
        );
    }

    return (
        <DndContext
            id="form-builder-dnd-context"
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div className="flex flex-col h-dvh bg-background overflow-hidden">
                {showBanner && (
                    <div className="flex items-center justify-between gap-3 bg-blue-500/10 border-b border-blue-500/20 text-blue-600 dark:bg-blue-500/5 dark:text-blue-400 px-4 py-2 text-sm shrink-0">
                        <div className="flex items-center gap-2">
                            <InfoIcon className="size-4 shrink-0" />
                            <p className="leading-relaxed text-xs sm:text-sm">
                                <strong>Note:</strong> The backend is hosted on Render. Initial requests may take 50s to boot.
                            </p>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon-sm"
                            className="size-6 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 hover:text-blue-700 dark:hover:text-blue-300"
                            onClick={dismissBanner}
                        >
                            <XIcon className="size-3.5" />
                        </Button>
                    </div>
                )}
                <AdminTopBar
                    title={title}
                    description={description}
                    fields={fields}
                    onTitleChange={setTitle}
                    onSave={handleSave}
                    isSaving={isSaving}
                    canSave={!!title.trim() && fields.length > 0}
                    formId={formId}
                    isPreview={isPreview}
                    onTogglePreview={() => setIsPreview((p) => !p)}
                    onToggleLeftPanel={() => setLeftPanelOpen(true)}
                    onToggleRightPanel={() => setRightOpen(true)}
                    isEditing={true}
                />
                <div className="flex flex-1 overflow-hidden relative">
                    {!isPreview && (
                        <div className="hidden lg:block h-full">
                            <FieldTypePanel onAddField={handleAddField} />
                        </div>
                    )}
                    <FormCanvas
                        title={title}
                        description={description}
                        onTitleChange={setTitle}
                        onDescriptionChange={setDescription}
                        fields={fields}
                        selectedFieldId={selectedFieldId}
                        onSelectField={setSelectedFieldId}
                        onRemoveField={handleRemoveField}
                        onDuplicateField={handleDuplicateField}
                        isPreview={isPreview}
                    />
                    {!isPreview && (
                        <div className="hidden lg:block h-full">
                            <FieldSettingsPanel
                                field={selectedField}
                                fields={fields}
                                onUpdate={handleUpdateField}
                            />
                        </div>
                    )}
                </div>

                <MobilePanels
                    leftOpen={leftPanelOpen}
                    setLeftOpen={setLeftPanelOpen}
                    rightOpen={rightPanelOpen}
                    setRightOpen={setRightOpen}
                    onAddField={handleAddField}
                    selectedField={selectedField}
                    fields={fields}
                    onUpdateField={handleUpdateField}
                />
            </div>

            <DragOverlay>
                {activePanelItem && (
                    <div className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium bg-card border border-primary/30 shadow-lg text-foreground cursor-grabbing">
                        {(() => {
                            const IconComponent = Icons[activePanelItem.icon as keyof typeof Icons] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
                            return <IconComponent className="size-4 text-primary shrink-0" />;
                        })()}
                        {activePanelItem.label}
                    </div>
                )}
            </DragOverlay>
        </DndContext>
    );
};

export default EditFormPage;
