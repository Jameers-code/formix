"use client";

import { useEffect, useRef, useState } from "react";
import {
    Loader2Icon,
    LinkIcon,
    CheckIcon,
    ExternalLinkIcon,
    XIcon,
    MenuIcon,
    SettingsIcon,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icons from "@/components/global/icons";
import Link from "next/link";
import type { FormField } from "@/types/form";

type Props = {
    title: string;
    description: string;
    fields: FormField[];
    onTitleChange: (title: string) => void;
    onSave: () => void;
    isSaving: boolean;
    canSave: boolean;
    formId: string | null;
    isPreview: boolean;
    onTogglePreview: () => void;
    onToggleLeftPanel?: () => void;
    onToggleRightPanel?: () => void;
    isEditing?: boolean;
};

const AdminTopBar = ({
    title,
    fields,
    onTitleChange,
    onSave,
    isSaving,
    canSave,
    formId,
    isPreview,
    onTogglePreview,
    onToggleLeftPanel,
    onToggleRightPanel,
    isEditing = false,
}: Props) => {

    const [copied, setCopied] = useState<boolean>(false);
    const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
    const publishRef = useRef<HTMLDivElement>(null);

    const shareLink = formId
        ? (typeof window !== "undefined" ? `${window.location.origin}/forms/${formId}` : `/forms/${formId}`)
        : null;

    const handleCopy = () => {
        if (!shareLink) return;
        navigator.clipboard.writeText(shareLink);
        setCopied(true);
        toast.success("Link copied to clipboard");
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        if (formId) setPopoverOpen(true);
    }, [formId]);

    return (
        <div className="flex flex-col shrink-0 z-10">
            <div className="flex h-14 items-center justify-between border-b border-border/40 bg-card px-4">
                <div className="flex items-center gap-3">
                    <Link href="/forms" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                        <Icons.logo className="size-6" />
                        <span className="text-sm font-semibold tracking-tight hidden lg:flex">
                            Formix
                        </span>
                    </Link>
                    <div className="w-px h-5 bg-border hidden lg:block" />
                    <Input
                        value={title}
                        onChange={(e) => onTitleChange(e.target.value)}
                        placeholder="Untitled Form"
                        className="h-8 w-32 sm:w-56 border-transparent bg-transparent text-sm font-medium shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-transparent hidden lg:flex"
                    />
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                    {!isPreview && (
                        <>
                            <Button
                                variant="ghost"
                                size="icon-sm"
                                onClick={onToggleLeftPanel}
                                title="Add fields"
                                className="lg:hidden"
                            >
                                <MenuIcon className="size-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon-sm"
                                onClick={onToggleRightPanel}
                                title="Field settings"
                                className="lg:hidden"
                            >
                                <SettingsIcon className="size-4" />
                            </Button>
                        </>
                    )}
                    {formId && (
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => window.location.href = `/forms/${formId}/submissions`}
                        >
                            Responses
                        </Button>
                    )}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={onTogglePreview}
                        disabled={fields.length === 0}
                    >
                        {isPreview ? "Edit" : "Preview"}
                    </Button>

                    <div ref={publishRef} className="relative">
                        <Button
                            size="sm"
                            onClick={onSave}
                            disabled={!canSave || isSaving}
                            className="w-20"
                        >
                            {isSaving ? (
                                <Loader2Icon className="size-4 animate-spin" />
                            ) : isEditing ? (
                                "Update"
                            ) : (
                                "Publish"
                            )}
                        </Button>

                        {popoverOpen && shareLink && (
                            <>
                                <div
                                    className="fixed inset-0 z-40"
                                    onClick={() => setPopoverOpen(false)}
                                />
                                <div className="absolute right-0 top-full mt-2 z-50 w-80 rounded-lg border border-border/50 bg-card shadow-xl shadow-neutral-400/30 overflow-hidden">
                                    <div className="flex items-center justify-between px-4 pt-4 pb-2">
                                        <span className="text-sm font-medium">
                                            {isEditing ? "Updated" : "Published"}
                                        </span>
                                        <Button
                                            size="icon-sm"
                                            type="button"
                                            variant="ghost"
                                            onClick={() => setPopoverOpen(false)}
                                            className="size-6"
                                        >
                                            <XIcon className="size-3.5" />
                                        </Button>
                                    </div>

                                    <div className="px-4 pb-2">
                                        <p className="text-xs text-muted-foreground">
                                            {isEditing
                                                ? "Your changes have been saved."
                                                : "Share this link with your team to collect responses."}
                                        </p>
                                    </div>

                                    <div className="px-4 pb-3">
                                        <div className="flex items-center gap-1.5 rounded-lg bg-muted px-3 py-2">
                                            <LinkIcon className="size-3 text-muted-foreground shrink-0" />
                                            <span className="text-xs font-mono text-muted-foreground truncate flex-1 select-all">
                                                {shareLink}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 border-t border-border/50 px-4 py-3">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="flex-1 gap-1.5 h-8 text-xs"
                                            onClick={handleCopy}
                                        >
                                            {copied ? (
                                                <CheckIcon className="size-3" />
                                            ) : (
                                                <LinkIcon className="size-3" />
                                            )}
                                            {copied ? "Copied!" : "Copy link"}
                                        </Button>
                                        <Button
                                            size="sm"
                                            className="flex-1 gap-1.5 h-8 text-xs"
                                            onClick={() => {
                                                window.open(shareLink, "_blank");
                                                setPopoverOpen(false);
                                            }}
                                        >
                                            <ExternalLinkIcon className="size-3" />
                                            View form
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminTopBar;
