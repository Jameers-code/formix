"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import VideoUploadField from "@/components/renderer/video-upload-field";
import ImageUploadField from "@/components/renderer/image-upload-field";
import type { FormField, Branch } from "@/types/form";
import { TriangleAlertIcon } from "lucide-react";

type Props = {
    field: FormField;
    value: string;
    onChange: (id: string, value: string) => void;
    branches: Branch[];
    highlight?: boolean;
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const PHONE_RE = /^\+?[\d\s\-(). ]{7,15}$/;

const validate = (field: FormField, value: string): string => {
    if (!value) return "";
    if (field.type === "email" && !EMAIL_RE.test(value))
        return "Enter a valid email address";
    if (field.type === "phone" && !PHONE_RE.test(value))
        return "Enter a valid phone number (7–15 digits)";
    if (field.maxLength && value.length > field.maxLength)
        return `Max ${field.maxLength} characters`;
    return "";
};

const FieldLabel = ({ field, highlight }: { field: FormField; highlight?: boolean }) => (
    <Label htmlFor={field.id} className="wrap-break-word whitespace-normal leading-tight w-full max-w-full flex">
        {field.label}
        {field.required && (
            <span className="text-primary ml-1">
                *
            </span>
        )}
        {highlight && (
            <span className="ml-2 rounded-sm bg-orange-100 px-1.5 py-0.5 text-xs font-medium text-orange-600 flex items-center gap-0.5 w-max">
                <TriangleAlertIcon className="size-3" /> Safety Condition
            </span>
        )}
    </Label>
);

const FieldError = ({ msg }: { msg: string }) =>
    msg ? <p className="text-xs text-destructive">{msg}</p> : null;

const DynamicField = ({ field, value, onChange, branches, highlight }: Props) => {

    const [error, setError] = useState<string>("");

    const wrapper = cn(
        "flex flex-col gap-1.5 rounded-xl p-2 transition-colors",
        highlight ? "" : "bg-transparent"
    );

    const handleChange = (val: string) => {
        onChange(field.id, val);
        setError(validate(field, val));
    };

    const inputProps = {
        id: field.id,
        value,
        maxLength: field.maxLength,
        placeholder: field.placeholder ?? `Enter ${field.label.toLowerCase()}`,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value),
    };

    switch (field.type) {
        case "text":
            return (
                <div className={wrapper}>
                    <FieldLabel field={field} highlight={highlight} />
                    <Input {...inputProps} />
                    <div className="flex items-center justify-between">
                        <FieldError msg={error} />
                        {field.maxLength && value && (
                            <p className="ml-auto text-xs text-muted-foreground">
                                {value.length}/{field.maxLength}
                            </p>
                        )}
                    </div>
                </div>
            );

        case "large_text":
            return (
                <div className={wrapper}>
                    <FieldLabel field={field} highlight={highlight} />
                    <Textarea
                        id={field.id}
                        value={value}
                        maxLength={field.maxLength}
                        placeholder={field.placeholder ?? `Enter ${field.label.toLowerCase()}`}
                        onChange={(e) => handleChange(e.target.value)}
                        className="min-h-24 max-h-40"
                    />
                    <div className="flex items-center justify-between">
                        <FieldError msg={error} />
                        {field.maxLength && value && (
                            <p className="ml-auto text-xs text-muted-foreground">
                                {value.length}/{field.maxLength}
                            </p>
                        )}
                    </div>
                </div>
            );

        case "email":
            return (
                <div className={wrapper}>
                    <FieldLabel field={field} highlight={highlight} />
                    <Input
                        {...inputProps}
                        type="email"
                        placeholder={field.placeholder ?? "you@example.com"}
                    />
                    <FieldError msg={error} />
                </div>
            );

        case "phone":
            return (
                <div className={wrapper}>
                    <FieldLabel field={field} highlight={highlight} />
                    <Input
                        {...inputProps}
                        type="tel"
                        placeholder={field.placeholder ?? "+91 98765 43210"}
                        onKeyDown={(e) => {
                            const allowed = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "+", " ", "-", "(", ")", "."];
                            if (!allowed.includes(e.key) && !/^\d$/.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                    />
                    <FieldError msg={error} />
                </div>
            );

        case "number":
            return (
                <div className={wrapper}>
                    <FieldLabel field={field} highlight={highlight} />
                    <Input
                        id={field.id}
                        type="number"
                        value={value}
                        placeholder="0"
                        onChange={(e) => handleChange(e.target.value)}
                        onKeyDown={(e) => {
                            if (["e", "E", "+"].includes(e.key)) e.preventDefault();
                        }}
                    />
                    <FieldError msg={error} />
                </div>
            );

        case "date":
            return (
                <div className={wrapper}>
                    <FieldLabel field={field} highlight={highlight} />
                    <Input {...inputProps} type="date" />
                </div>
            );

        case "select": {
            const options = field.dataSource === "branches"
                ? branches.map((b) => ({ value: b.id, label: `${b.name} — ${b.location}` }))
                : (field.options ?? []).map((o) => ({ value: o, label: o }));
            
            const selectedOption = options.find(opt => opt.value === value);

            return (
                <div className={wrapper}>
                    <FieldLabel field={field} highlight={highlight} />
                    <Select value={value} onValueChange={(v) => v && onChange(field.id, v)}>
                        <SelectTrigger className="w-full">
                            <span data-slot="select-value" className="flex flex-1 text-left truncate">
                                {selectedOption ? selectedOption.label : <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />}
                            </span>
                        </SelectTrigger>
                        <SelectContent alignItemWithTrigger={false}>
                            {options.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            );
        }

        case "radio_group":
            return (
                <div className={wrapper}>
                    <FieldLabel field={field} highlight={highlight} />
                    <div className="flex flex-wrap gap-2 mt-1">
                        {(field.options ?? []).map((opt) => (
                            <button
                                key={opt}
                                type="button"
                                onClick={() => onChange(field.id, opt)}
                                className={cn(
                                    "rounded-lg border px-4 py-1.5 text-sm transition-all cursor-pointer",
                                    value === opt
                                        ? "border-primary bg-primary text-primary-foreground"
                                        : "border-border bg-background hover:border-primary/50"
                                )}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            );

        case "video_upload":
            return (
                <VideoUploadField
                    field={field}
                    onChange={onChange}
                    highlight={highlight}
                />
            );

        case "image_upload":
            return (
                <ImageUploadField
                    field={field}
                    onChange={onChange}
                    highlight={highlight}
                />
            );

        default:
            return null;
    }
};

export default DynamicField;
