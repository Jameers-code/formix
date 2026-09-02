"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import FieldCard from "@/components/admin/field-card";
import type { FormField } from "@/types/form";

type Props = {
    field: FormField;
    isSelected: boolean;
    onSelect: () => void;
    onRemove: () => void;
    onDuplicate: () => void;
};

const SortableFieldCard = ({ field, ...rest }: Props) => {
    
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: field.id });

    return (
        <div
            ref={setNodeRef}
            style={{
                transform: CSS.Transform.toString(transform),
                transition,
            }}
            className={cn(isDragging && "opacity-50")}
            {...attributes}
        >
            <FieldCard
                field={field}
                {...rest}
                dragListeners={listeners as Record<string, unknown>}
            />
        </div>
    );
};

export default SortableFieldCard;
