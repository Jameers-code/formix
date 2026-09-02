"use client";

import Icons from "@/components/global/icons";
import { Label } from "@/components/ui/label";
import { MAX_VIDEO_BYTES, MAX_VIDEO_MB, STORAGE_BUCKET, supabase } from "@/lib/supabase/supabase";
import { cn } from "@/lib/utils";
import type { FormField } from "@/types/form";
import { CheckCircle2Icon, Loader2Icon, XIcon } from "lucide-react";
import { useState } from "react";

type Props = {
    field: FormField;
    onChange: (id: string, value: string) => void;
    highlight?: boolean;
};

const VideoUploadField = ({ field, onChange, highlight }: Props) => {

    const [uploading, setUploading] = useState<boolean>(false);
    const [uploadedUrl, setUploadedUrl] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setError("");

        if (file.size > MAX_VIDEO_BYTES) {
            setError(`File too large. Max ${MAX_VIDEO_MB}MB allowed.`);
            return;
        }

        setUploading(true);

        const path = `videos/${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
        const { error: uploadError } = await supabase.storage
            .from(STORAGE_BUCKET)
            .upload(path, file, { upsert: false });

        if (uploadError) {
            setError("Upload failed. Please try again.");
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
                            "flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border py-8 cursor-pointer transition-colors",
                            uploading ? "opacity-60 pointer-events-none" : "hover:border-primary/50 hover:bg-muted/30"
                        )}
                    >
                        {uploading ? (
                            <>
                                <Loader2Icon className="size-7 animate-spin text-primary" />
                                <span className="text-sm text-muted-foreground">
                                    Uploading...
                                </span>
                            </>
                        ) : (
                            <>
                                <Icons.video className="size-7 text-muted-foreground" />
                                <span className="text-sm font-medium">
                                    Click to upload video
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    MP4, MOV, AVI, WebM · Max {MAX_VIDEO_MB}MB
                                </span>
                            </>
                        )}
                    </label>
                    <input
                        id={field.id}
                        type="file"
                        accept="video/*"
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
                <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-3 py-2.5">
                    <CheckCircle2Icon className="size-5 text-green-600 shrink-0" />
                    <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-sm font-medium text-green-700">
                            Video uploaded
                        </span>
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            setUploadedUrl("");
                            onChange(field.id, "");
                        }}
                        className="shrink-0 text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                    >
                        <XIcon className="size-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default VideoUploadField;
