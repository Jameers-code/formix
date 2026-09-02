"use client";

import { useEffect, useState } from "react";
import DynamicField from "@/components/renderer/dynamic-field";
import type { FormField, Branch, LogicRule } from "@/types/form";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

type FormState = Record<string, string>;

import { evaluateRule, isFieldVisible, isFieldRequired } from "@/utils/form-logic";

const shouldHighlight = (field: FormField, formState: FormState): boolean => {
    if (!field.rules) return false;
    return field.rules.some(
        (r) => r.effect === "highlight" && evaluateRule(r, formState)
    );
};

type DynamicFormProps = {
    fields: FormField[];
    formState: FormState;
    onChange: (id: string, value: string) => void;
};

const DynamicForm = ({ fields, formState, onChange }: DynamicFormProps) => {
    
    const [branches, setBranches] = useState<Branch[]>([]);

    useEffect(() => {
        const hasBranchSource = fields.some((f) => f.dataSource === "branches");
        if (!hasBranchSource) return;

        fetch(`${API_BASE}/metadata/branches`)
            .then((r) => r.json())
            .then(setBranches)
            .catch(() => { });
    }, [fields]);

    return (
        <div className="flex flex-col gap-1 p-2">
            {fields.map((field) => {
                if (!isFieldVisible(field, formState)) return null;

                return (
                    <DynamicField
                        key={field.id}
                        field={{ ...field, required: isFieldRequired(field, formState) }}
                        value={formState[field.id] ?? ""}
                        onChange={onChange}
                        branches={branches}
                        highlight={shouldHighlight(field, formState)}
                    />
                );
            })}
        </div>
    );
};

export default DynamicForm;
