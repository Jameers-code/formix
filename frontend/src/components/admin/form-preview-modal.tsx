"use client";

import DynamicForm from "@/components/renderer/dynamic-form";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import type { FormField } from "@/types/form";
import { useState } from "react";

type Props = {
    title: string;
    description: string;
    fields: FormField[];
};

const FormPreviewModal = ({ title, description, fields }: Props) => {

    const [formState, setFormState] = useState<Record<string, string>>({});

    const handleChange = (id: string, value: string) => {
        setFormState((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <Dialog>
            <DialogTrigger
                render={
                    <Button
                        size="sm"
                        variant="outline"
                        className="gap-1.5"
                        disabled={fields.length === 0}
                    >
                        Preview
                    </Button>
                }
            />
            <DialogContent className="sm:max-w-2xl max-h-[85dvh] flex flex-col overflow-hidden p-0">
                <DialogHeader className="px-6 py-4">
                    <DialogTitle>
                        Form Preview
                    </DialogTitle>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto">
                    <div className="px-4">
                        <h1 className="text-xl font-semibold">
                            {title || "Untitled Form"}
                        </h1>
                        {description && (
                            <p className="mt-1 text-sm text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </div>
                    <div className="pb-4">
                        <DynamicForm
                            fields={fields}
                            formState={formState}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default FormPreviewModal;
