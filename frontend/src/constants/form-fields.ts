import type { FieldType } from "@/types/form";

export const FIELD_TYPE_LABELS: Record<FieldType, string> = {
    text: "Short Text",
    large_text: "Long Text",
    email: "Email",
    phone: "Phone",
    number: "Number",
    date: "Date",
    select: "Dropdown",
    radio_group: "Radio Group",
    image_upload: "Image Upload",
    video_upload: "Video Upload",
};

export const FIELD_TYPE_COLORS: Record<FieldType, string> = {
    text: "bg-blue-100 text-blue-700",
    large_text: "bg-blue-100 text-blue-700",
    email: "bg-cyan-100 text-cyan-700",
    phone: "bg-teal-100 text-teal-700",
    number: "bg-purple-100 text-purple-700",
    date: "bg-indigo-100 text-indigo-700",
    select: "bg-amber-100 text-amber-700",
    radio_group: "bg-green-100 text-green-700",
    image_upload: "bg-pink-100 text-pink-700",
    video_upload: "bg-rose-100 text-rose-700",
};

export const FIELD_CATEGORIES: {
    label: string;
    types: { type: FieldType; icon: string; label: string }[];
}[] = [
        {
            label: "Text",
            types: [
                { type: "text", icon: "text", label: "Short Text" },
                { type: "large_text", icon: "textLarge", label: "Long Text" },
                { type: "email", icon: "email", label: "Email" },
                { type: "phone", icon: "phone", label: "Phone" },
                { type: "number", icon: "number", label: "Number" },
                { type: "date", icon: "calendar", label: "Date" },
            ],
        },
        {
            label: "Selection",
            types: [
                { type: "select", icon: "dropdown", label: "Dropdown" },
                { type: "radio_group", icon: "radio", label: "Radio Group" },
            ],
        },
        {
            label: "Media",
            types: [
                { type: "image_upload", icon: "image", label: "Image Upload" },
                { type: "video_upload", icon: "video", label: "Video Upload" },
            ],
        },
    ];

export const HAS_OPTIONS: FieldType[] = ["select", "radio_group"];
export const HAS_MAX_LENGTH: FieldType[] = ["text", "large_text", "email", "phone"];
export const HAS_MEDIA_UPLOAD: FieldType[] = ["image_upload", "video_upload"];
