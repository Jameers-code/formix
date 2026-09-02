"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { CheckCircle2Icon, Loader2Icon } from "lucide-react";
import DynamicForm from "@/components/renderer/dynamic-form";
import { Button } from "@/components/ui/button";
import type { FormDefinition } from "@/types/form";
import { isFieldVisible, isFieldRequired } from "@/utils/form-logic";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const FormPage = () => {

    const { id } = useParams<{ id: string }>();
    
    const [form, setForm] = useState<FormDefinition | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [formState, setFormState] = useState<Record<string, string>>({});
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);

    useEffect(() => {
        fetch(`${API_BASE}/forms/${id}`)
            .then((r) => r.json())
            .then((data) => {
                setForm(data);
                const initial: Record<string, string> = {};
                data.schema.fields.forEach((f: { id: string }) => {
                    initial[f.id] = "";
                });
                setFormState(initial);
            })
            .catch(() => toast.error("Could not load form"))
            .finally(() => setLoading(false));
    }, [id]);

    const handleChange = (fieldId: string, value: string) => {
        setFormState((prev) => ({ ...prev, [fieldId]: value }));
    };

    const handleSubmit = async () => {
        if (!form) return;

        // 1. Validate required fields (including visible based on rules)
        const missingFields: string[] = [];
        let hasAnyData = false;

        form.schema.fields.forEach((field) => {
            const visible = isFieldVisible(field, formState);
            if (!visible) return;

            const val = (formState[field.id] || "").trim();
            if (val) hasAnyData = true;

            const required = isFieldRequired(field, formState);
            if (required && !val) {
                missingFields.push(field.label);
            }
        });

        if (missingFields.length > 0) {
            toast.error(`Please fill required fields: ${missingFields.join(", ")}`);
            return;
        }

        // 2. Prevent completely empty form submission
        if (!hasAnyData) {
            toast.error("Cannot submit an empty form. Please fill at least one field.");
            return;
        }

        const branchField = form.schema.fields.find((f) => f.dataSource === "branches");
        const branchId = branchField ? formState[branchField.id] : undefined;

        setSubmitting(true);
        try {
            const res = await fetch(`${API_BASE}/forms/${id}/submission`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ branch_id: branchId, data: formState }),
            });
            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.detail ?? "Submission failed");
            }
            setSubmitted(true);
        } catch (e: unknown) {
            toast.error(e instanceof Error ? e.message : "Submission failed");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center">
                <Loader2Icon className="size-6 animate-spin text-muted-foreground" />
            </main>
        );
    }

    if (!form) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                    Form not found.
                </p>
            </main>
        );
    }

    if (submitted) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center px-4">
                <div className="w-full max-w-sm flex flex-col items-center gap-6 text-center">
                    <div className="relative flex items-center justify-center size-20 rounded-2xl corner-shape bg-primary/10">
                        <CheckCircle2Icon className="size-10 text-primary" strokeWidth={1.5} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Response recorded
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Your submission for <span className="font-medium text-foreground">{form.schema.title}</span> has been saved successfully.
                        </p>
                    </div>

                    <div className="w-full border-t border-border" />

                    <div className="flex flex-col gap-1.5 w-full">
                        <p className="text-xs text-muted-foreground">
                            {new Date().toLocaleString("en-IN", {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setSubmitted(false);
                                setFormState(
                                    Object.fromEntries(form.schema.fields.map((f) => [f.id, ""]))
                                );
                            }}
                            className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors underline underline-offset-2 cursor-pointer"
                        >
                            Submit another response
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background">
            <div className="max-w-2xl mx-auto py-12 flex flex-col gap-6">
                <div className="flex flex-col gap-1 px-4">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        {form.schema.title}
                    </h1>
                    {form.schema.description && (
                        <p className="text-sm text-muted-foreground">
                            {form.schema.description}
                        </p>
                    )}
                </div>

                <DynamicForm
                    fields={form.schema.fields}
                    formState={formState}
                    onChange={handleChange}
                />

                <div className="px-4 -mt-4 w-full">
                    <Button
                        size="lg"
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="w-full rounded-lg"
                    >
                        {submitting ? (
                            <Loader2Icon className="size-4 animate-spin" />
                        ) : (
                            "Submit"
                        )}
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default FormPage;
