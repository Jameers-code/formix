export type FieldType =
    | "text"
    | "large_text"
    | "email"
    | "phone"
    | "number"
    | "date"
    | "select"
    | "radio_group"
    | "image_upload"
    | "video_upload";

export type LogicOperator = "==" | "!=" | ">=" | "<=" | ">" | "<";
export type LogicEffect = "show" | "hide" | "highlight" | "require";

export type LogicRule = {
    fieldId: string;
    operator: LogicOperator;
    value: string;
    effect: LogicEffect;
    targetFieldId: string;
};

export type FormField = {
    id: string;
    type: FieldType;
    label: string;
    required: boolean;
    placeholder?: string;
    options?: string[];
    dataSource?: string;
    maxLength?: number;
    rules?: LogicRule[];
};

export type FormSchema = {
    title: string;
    description?: string;
    fields: FormField[];
};

export type FormDefinition = {
    id: string;
    title: string;
    schema: FormSchema;
    schema_version: number;
    created_at: string;
};

export type Branch = {
    id: string;
    name: string;
    location: string;
};
