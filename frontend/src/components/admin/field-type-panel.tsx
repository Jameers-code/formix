"use client";

import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { FIELD_CATEGORIES } from "@/constants/form-fields";
import Icons from "@/components/global/icons";
import type { FieldType } from "@/types/form";

type Props = {
    onAddField: (type: FieldType) => void;
};

type DraggableFieldButtonProps = {
    type: FieldType;
    icon: string;
    label: string;
    onAddField: (type: FieldType) => void;
};

const DraggableFieldButton = ({ type, icon, label, onAddField }: DraggableFieldButtonProps) => {
    
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: `panel::${type}`,
        data: { type },
    });

    const IconComponent = Icons[icon as keyof typeof Icons] as React.ComponentType<React.SVGProps<SVGSVGElement>>;

    return (
        <button
            ref={setNodeRef}
            type="button"
            onClick={() => onAddField(type)}
            {...listeners}
            {...attributes}
            className={cn(
                "flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-sm transition-all",
                "border border-transparent hover:bg-muted/60 active:scale-[0.98] cursor-grab active:cursor-grabbing",
                isDragging && "opacity-40"
            )}
        >
            <IconComponent className="size-4 text-muted-foreground shrink-0" />
            <span className="font-medium">
                {label}
            </span>
        </button>
    );
};

const FieldTypePanel = ({ onAddField }: Props) => (
    <div className="w-full lg:w-64 shrink-0 bg-card border-r border-border/40 overflow-y-auto flex flex-col gap-5 p-4 h-full">
        {FIELD_CATEGORIES.map((category) => (
            <div key={category.label} className="flex flex-col gap-1">
                <span className="px-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {category.label}
                </span>
                {category.types.map((ft) => (
                    <DraggableFieldButton
                        key={ft.type}
                        type={ft.type}
                        icon={ft.icon}
                        label={ft.label}
                        onAddField={onAddField}
                    />
                ))}
            </div>
        ))}
    </div>
);

export default FieldTypePanel;
