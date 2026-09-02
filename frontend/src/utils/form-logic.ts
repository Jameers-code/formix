import type { FormField, LogicRule } from "@/types/form";

type FormState = Record<string, string>;

export const evaluateRule = (rule: LogicRule, formState: FormState): boolean => {
    const sourceVal = formState[rule.fieldId];
    const rawValue = String(sourceVal || "").trim();
    
    switch (rule.operator) {
        case "==": return rawValue === String(rule.value);
        case "!=": return rawValue !== String(rule.value);
        case ">=": return Number(rawValue) >= Number(rule.value);
        case "<=": return Number(rawValue) <= Number(rule.value);
        case ">": return Number(rawValue) > Number(rule.value);
        case "<": return Number(rawValue) < Number(rule.value);
        default: return false;
    }
};

export const isFieldVisible = (field: FormField, formState: FormState): boolean => {
    if (!field.rules) return true;

    const hideRule = field.rules.find((r) => r.effect === "hide" && r.targetFieldId === field.id);
    const showRule = field.rules.find((r) => r.effect === "show" && r.targetFieldId === field.id);

    if (hideRule && evaluateRule(hideRule, formState)) return false;
    if (showRule) return evaluateRule(showRule, formState);

    return true;
};

export const isFieldRequired = (field: FormField, formState: FormState): boolean => {
    if (field.required) return true;
    if (!field.rules) return false;
    return field.rules.some(
        (r) => r.effect === "require" && evaluateRule(r, formState)
    );
};
