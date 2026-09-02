"use client";

import Icons from "@/components/global/icons";
import { Button } from "@/components/ui/button";
import { FIELD_TYPE_COLORS, FIELD_TYPE_LABELS } from "@/constants/form-fields";
import { cn } from "@/lib/utils";
import type { FormField } from "@/types/form";
import { CopyIcon, GripVerticalIcon } from "lucide-react";

type Props = {
    field: FormField;
    isSelected: boolean;
    onSelect: () => void;
    onRemove: () => void;
    onDuplicate: () => void;
    dragListeners?: Record<string, unknown>;
};

const FieldCard = ({ field, isSelected, onSelect, onRemove, onDuplicate, dragListeners }: Props) => (
    <div
        onClick={onSelect}
        className={cn(
            "group flex items-center gap-2 rounded-xl border bg-card px-3 py-3.5 cursor-pointer transition-all",
            isSelected
                ? "border-primary ring-2ring-primary/20"
                : "border-border hover:border-primary/30"
        )}
    >
        <button
            type="button"
            {...(dragListeners as React.ButtonHTMLAttributes<HTMLButtonElement>)}
            onClick={(e) => e.stopPropagation()}
            className="cursor-grab active:cursor-grabbing text-muted-foreground/40 hover:text-muted-foreground transition-colors shrink-0 touch-none h-10"
        >
            <GripVerticalIcon className="size-4" />
        </button>

        <div className="flex flex-col flex-1 gap-0.5 min-w-0">
            <div className="flex items-start gap-1.5 w-full">
                <span className="text-sm font-medium wrap-break-word whitespace-normal leading-tight">
                    {field.label}
                </span>
                {field.required && (
                    <span className="text-primary text-xs font-semibold shrink-0">
                        *
                    </span>
                )}
            </div>
            <div className="flex items-center gap-1.5">
                <span className={cn(
                    "text-xs font-medium px-1.5 py-0.5 rounded-sm",
                    FIELD_TYPE_COLORS[field.type]
                )}>
                    {FIELD_TYPE_LABELS[field.type]}
                </span>
                {field.dataSource && (
                    <span className="text-xs text-muted-foreground">
                        · dynamic
                    </span>
                )}
                {field.maxLength && (
                    <span className="text-xs text-muted-foreground">
                        · max {field.maxLength}
                    </span>
                )}
            </div>
        </div>

        <div className={cn(
            "flex items-center gap-0.5 shrink-0 transition-all",
            isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}>
            <Button
                type="button"
                size="icon-sm"
                variant="ghost"
                onClick={(e) => { e.stopPropagation(); onDuplicate(); }}
                className="flex items-center justify-center h-7 w-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
                <CopyIcon className="size-3.5" />
            </Button>
            <Button
                type="button"
                size="icon-sm"
                variant="ghost"
                onClick={(e) => { e.stopPropagation(); onRemove(); }}
                className="flex items-center justify-center h-7 w-7 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
            >
                <Icons.trash className="size-3.5" />
            </Button>
        </div>
    </div>
);

export default FieldCard;
