"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { FIELD_TYPE_LABELS, HAS_OPTIONS, HAS_MAX_LENGTH } from "@/constants/form-fields";
import OptionsEditor from "@/components/admin/options-editor";
import LogicRulesEditor from "@/components/admin/logic-rules-editor";
import type { FormField } from "@/types/form";

type Props = {
    field: FormField | null;
    fields: FormField[];
    onUpdate: (updates: Partial<FormField>) => void;
};

const FieldSettingsPanel = ({ field, fields, onUpdate }: Props) => {
    if (!field) {
        return (
            <div className="w-full lg:w-72 shrink-0 bg-card flex flex-col items-center justify-center p-6 text-center gap-2">
                <p className="text-sm font-medium text-muted-foreground">
                    No field selected
                </p>
                <p className="text-xs text-muted-foreground/60">
                    Click any field in the canvas to edit its settings
                </p>
            </div>
        );
    }

    const isDynamic = field.dataSource === "branches";
    const hasOptions = HAS_OPTIONS.includes(field.type);
    const hasMaxLength = HAS_MAX_LENGTH.includes(field.type);

    return (
        <div className="w-full lg:w-72 shrink-0 bg-card overflow-y-auto flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-border/40">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Field Settings
                </p>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-sm">
                    {FIELD_TYPE_LABELS[field.type]}
                </span>
            </div>

            <div className="flex flex-col gap-5 p-4 h-full">
                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="settings-label">
                        Label
                    </Label>
                    <Input
                        id="settings-label"
                        value={field.label}
                        onChange={(e) => onUpdate({ label: e.target.value })}
                        placeholder="Field label"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="settings-placeholder">
                        Placeholder{" "}
                        <span className="font-normal text-muted-foreground">
                            (optional)
                        </span>
                    </Label>
                    <Input
                        id="settings-placeholder"
                        value={field.placeholder ?? ""}
                        onChange={(e) => onUpdate({ placeholder: e.target.value || undefined })}
                        placeholder="Hint text for the user"
                        className="text-sm"
                    />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-border p-3">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-medium">
                            Required
                        </span>
                        <span className="text-xs text-muted-foreground">
                            Must be filled to submit
                        </span>
                    </div>
                    <Switch
                        checked={field.required}
                        onCheckedChange={(v) => onUpdate({ required: v })}
                    />
                </div>

                {hasMaxLength && (
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <Label>
                                Max Characters
                            </Label>
                            <Switch
                                checked={!!field.maxLength}
                                onCheckedChange={(v) =>
                                    onUpdate({ maxLength: v ? 100 : undefined })
                                }
                            />
                        </div>
                        {field.maxLength && (
                            <Input
                                type="number"
                                value={field.maxLength}
                                min={10}
                                max={5000}
                                onChange={(e) =>
                                    onUpdate({ maxLength: Number(e.target.value) || undefined })
                                }
                                className="h-8 text-sm"
                            />
                        )}
                    </div>
                )}

                {field.type === "select" && (
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between rounded-lg border border-border p-3">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-sm font-medium">
                                    Populate from Job Sites
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    Auto-fills options from Branches
                                </span>
                            </div>
                            <Switch
                                checked={isDynamic}
                                onCheckedChange={(v) =>
                                    onUpdate({
                                        dataSource: v ? "branches" : undefined,
                                        options: v ? undefined : [],
                                    })
                                }
                            />
                        </div>

                        {!isDynamic && (
                            <div className="flex flex-col gap-1.5 pt-4">
                                <Label>
                                    Options
                                </Label>
                                <OptionsEditor
                                    options={field.options ?? []}
                                    onChange={(options) => onUpdate({ options })}
                                />
                            </div>
                        )}
                    </div>
                )}

                <div className="pt-2 space-y-5">
                    {field.type === "radio_group" && (
                        <div className="flex flex-col gap-1.5">
                            <Label>
                                Options
                            </Label>
                            <OptionsEditor
                                options={field.options ?? []}
                                onChange={(options) => onUpdate({ options })}
                            />
                        </div>
                    )}

                    <LogicRulesEditor
                        field={field}
                        fields={fields}
                        onChange={(rules) => onUpdate({ rules })}
                    />
                </div>
            </div>
        </div>
    );
};

export default FieldSettingsPanel;
