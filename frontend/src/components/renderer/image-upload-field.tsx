"use client";

import Icons from "@/components/global/icons";
import { Label } from "@/components/ui/label";
import { STORAGE_BUCKET, supabase } from "@/lib/supabase/supabase";
import { cn } from "@/lib/utils";
import type { FormField } from "@/types/form";
import { CheckCircle2Icon, Loader2Icon, XIcon } from "lucide-react";
import { useState } from "react";

const MAX_IMAGE_MB = 10;
const MAX_IMAGE_BYTES = MAX_IMAGE_MB * 1024 * 1024;

type Props = {
    field: FormField;
    onChange: (id: string, value: string) => void;
    highlight?: boolean;
};

const ImageUploadField = ({ field, onChange, highlight }: Props) => {

    const [uploading, setUploading] = useState<boolean>(false);
    const [uploadedUrl, setUploadedUrl] = useState<string>("");
    const [preview, setPreview] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setError("");

        if (file.size > MAX_IMAGE_BYTES) {
            setError(`File too large. Max ${MAX_IMAGE_MB}MB allowed.`);
            return;
        }

        setPreview(URL.createObjectURL(file));
        setUploading(true);

        const path = `images/${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
        const { error: uploadError } = await supabase.storage
            .from(STORAGE_BUCKET)
            .upload(path, file, { upsert: false });

        if (uploadError) {
            setError("Upload failed. Please try again.");
            setPreview("");
        } else {
            const { data } = supabase.storage
                .from(STORAGE_BUCKET)
                .getPublicUrl(path);
            setUploadedUrl(data.publicUrl);
            onChange(field.id, data.publicUrl);
        }

        setUploading(false);
    };

    const wrapper = cn(
        "flex flex-col gap-1.5 rounded-xl p-2 transition-colors",
        highlight ? "" : "bg-transparent"
    );

    return (
        <div className={wrapper}>
            <Label htmlFor={field.id}>
                {field.label}
                {field.required && (
                    <span className="text-primary ml-1">
                        *
                    </span>
                )}
            </Label>

            {!uploadedUrl ? (
                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor={field.id}
                        className={cn(
                            "relative flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border py-8 cursor-pointer transition-colors overflow-hidden",
                            uploading ? "opacity-60 pointer-events-none" : "hover:border-primary/50 hover:bg-muted/30"
                        )}
                    >
                        {preview && (
                            <img
                                src={preview}
                                alt="preview"
                                className="absolute inset-0 w-full h-full object-cover opacity-30"
                            />
                        )}
                        <div className="relative flex flex-col items-center gap-2">
                            {uploading ? (
                                <>
                                    <Loader2Icon className="size-7 animate-spin text-primary" />
                                    <span className="text-sm text-muted-foreground">
                                        Uploading...
                                    </span>
                                </>
                            ) : (
                                <>
                                    <Icons.image className="size-7 text-muted-foreground" />
                                    <span className="text-sm font-medium">
                                        Click to upload image
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        JPG, PNG, WebP · Max {MAX_IMAGE_MB}MB
                                    </span>
                                </>
                            )}
                        </div>
                    </label>
                    <input
                        id={field.id}
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                        disabled={uploading}
                        className="sr-only"
                    />
                    {error && (
                        <p className="text-xs text-destructive">
                            {error}
                        </p>
                    )}
                </div>
            ) : (
                <div className="relative rounded-lg overflow-hidden border border-border">
                    <img
                        src={uploadedUrl}
                        alt="Uploaded"
                        className="w-full max-h-48 object-contain"
                    />
                    <button
                        type="button"
                        onClick={() => {
                            setUploadedUrl("");
                            setPreview("");
                            onChange(field.id, "");
                        }}
                        className="absolute top-2 right-2 flex items-center justify-center size-7 rounded-full bg-background/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                    >
                        <XIcon className="size-3.5" />
                    </button>
                    <div className="flex items-center gap-2 px-3 py-2 bg-green-50 border-t border-green-200">
                        <CheckCircle2Icon className="size-4 text-green-600 shrink-0" />
                        <span className="text-xs font-medium text-green-700">
                            Image uploaded
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageUploadField;
