import { useState } from "react";
import { PlusIcon, TrashIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type { FormField, LogicRule, LogicOperator, LogicEffect } from "@/types/form";
import Icons from "@/components/global/icons";

type Props = {
    field: FormField;
    fields: FormField[];
    onChange: (rules: LogicRule[]) => void;
};

const OPERATORS: { value: LogicOperator; label: string }[] = [
    { value: "==", label: "Equals (==)" },
    { value: "!=", label: "Not Equals (!=)" },
    { value: ">", label: "Greater Than (>)" },
    { value: "<", label: "Less Than (<)" },
    { value: ">=", label: "Greater or Equal (>=)" },
    { value: "<=", label: "Less or Equal (<=)" },
];

const EFFECTS: { value: LogicEffect; label: string }[] = [
    { value: "show", label: "Show" },
    { value: "hide", label: "Hide" },
    { value: "require", label: "Require" },
    { value: "highlight", label: "Highlight" },
];

const LogicRulesEditor = ({ field, fields, onChange }: Props) => {

    const rules = field.rules || [];

    const otherFields = fields.filter((f) => f.id !== field.id);

    const handleAddRule = () => {
        if (otherFields.length === 0) return;

        const newRule: LogicRule = {
            fieldId: otherFields[0].id,
            operator: "==",
            value: "",
            effect: "show",
            targetFieldId: field.id,
        };

        onChange([...rules, newRule]);
    };

    const handleUpdateRule = (index: number, updates: Partial<LogicRule>) => {
        const newRules = [...rules];
        newRules[index] = { ...newRules[index], ...updates };
        onChange(newRules);
    };

    const handleRemoveRule = (index: number) => {
        const newRules = [...rules];
        newRules.splice(index, 1);
        onChange(newRules);
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <Label>
                    Logic Rules
                </Label>
            </div>

            <button
                type="button"
                onClick={handleAddRule}
                disabled={otherFields.length === 0}
                className="flex items-center gap-0.5 text-xs p-1.5 hover:bg-muted/30 rounded-md transition-colors cursor-pointer mt-1 border border-border/80"
            >
                <PlusIcon className="size-3.5" />
                Add rule
            </button>

            {rules.length === 0 ? (
                <div className="text-xs text-muted-foreground p-2 border border-border border-dashed rounded-md text-center mt-1">
                    No rules defined
                </div>
            ) : (
                <div className="flex flex-col gap-5">
                    {rules.map((rule, i) => {
                        const selectedField = otherFields.find((f) => f.id === rule.fieldId);
                        const selectedOperator = OPERATORS.find((op) => op.value === rule.operator);
                        const selectedEffect = EFFECTS.find((eff) => eff.value === rule.effect);

                        return (
                            <div key={i} className="flex flex-col gap-2 relative group">
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-muted-foreground">
                                            If Field
                                        </span>
                                        <Button
                                            size="icon-sm"
                                            type="button"
                                            variant="ghost"
                                            onClick={() => handleRemoveRule(i)}
                                            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors shrink-0"
                                        >
                                            <Icons.trash className="size-3.5" />
                                        </Button>
                                    </div>
                                    <Select
                                        value={rule.fieldId as string}
                                        onValueChange={(val) => handleUpdateRule(i, { fieldId: val as string })}
                                    >
                                        <SelectTrigger className="h-8 text-xs w-full">
                                            <span data-slot="select-value" className="flex flex-1 text-left truncate">
                                                {selectedField ? selectedField.label || "Unnamed field" : "Select field"}
                                            </span>
                                        </SelectTrigger>
                                        <SelectContent alignItemWithTrigger={false}>
                                            {otherFields.map((f) => (
                                                <SelectItem key={f.id} value={f.id}>
                                                    {f.label || "Unnamed field"}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Select
                                        value={rule.operator as string}
                                        onValueChange={(val) => handleUpdateRule(i, { operator: val as LogicOperator })}
                                    >
                                        <SelectTrigger className="h-8 text-xs w-[130px] shrink-0">
                                            <span data-slot="select-value" className="flex flex-1 text-left truncate">
                                                {selectedOperator ? selectedOperator.value : "Operator"}
                                            </span>
                                        </SelectTrigger>
                                        <SelectContent alignItemWithTrigger={false} align="start" className="w-50">
                                            {OPERATORS.map((op) => (
                                                <SelectItem key={op.value} value={op.value}>
                                                    {op.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <Input
                                        value={rule.value}
                                        onChange={(e) => handleUpdateRule(i, { value: e.target.value })}
                                        placeholder="Value"
                                        className="h-8 text-xs flex-1"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5 mt-0.5">
                                    <Select
                                        value={rule.effect as string}
                                        onValueChange={(val) => handleUpdateRule(i, { effect: val as LogicEffect })}
                                    >
                                        <SelectTrigger className="h-8 text-xs w-full">
                                            <span data-slot="select-value" className="flex flex-1 text-left truncate">
                                                {selectedEffect ? selectedEffect.label : "Select effect"}
                                            </span>
                                        </SelectTrigger>
                                        <SelectContent alignItemWithTrigger={false}>
                                            {EFFECTS.map((eff) => (
                                                <SelectItem key={eff.value} value={eff.value}>
                                                    {eff.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {otherFields.length === 0 && (
                <p className="text-[10px] text-muted-foreground text-center mt-1">
                    Add more fields to create rules.
                </p>
            )}
        </div>
    );
};

export default LogicRulesEditor;
