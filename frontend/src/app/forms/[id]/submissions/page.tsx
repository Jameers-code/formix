"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { ArrowLeftIcon, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FormField } from "@/types/form";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

type Submission = {
    id: string;
    data: Record<string, string>;
    branch_id: string | null;
    created_at: string;
};

type Branch = {
    id: string;
    name: string;
    location: string;
};

type SubmissionsResponse = {
    form: { id: string; title: string; schema: { fields: FormField[] } };
    submissions: Submission[];
};

const SubmissionsPage = () => {

    const { id } = useParams<{ id: string }>();

    const [data, setData] = useState<SubmissionsResponse | null>(null);
    const [branches, setBranches] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        Promise.all([
            fetch(`${API_BASE}/forms/${id}/submissions`).then((r) => r.json()),
            fetch(`${API_BASE}/metadata/branches`).then((r) => r.json()).catch(() => []),
        ])
            .then(([resData, branchesData]) => {
                setData(resData);
                const bMap: Record<string, string> = {};
                branchesData.forEach((b: Branch) => {
                    bMap[b.id] = `${b.name} — ${b.location}`;
                });
                setBranches(bMap);
            })
            .catch(() => toast.error("Could not load submissions"))
            .finally(() => setLoading(false));
    }, [id]);

    const formatDate = (iso: string) =>
        new Date(iso).toLocaleString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });

    const formatValue = (val: string): string => {
        if (!val) return "—";
        if (val.startsWith("http")) return val.length > 40 ? val.slice(0, 40) + "…" : val;
        return val;
    };

    if (loading) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center">
                <Loader2Icon className="size-6 animate-spin text-muted-foreground" />
            </main>
        );
    }

    if (!data) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Form not found.</p>
            </main>
        );
    }

    const { form, submissions } = data;
    const fields = form?.schema?.fields;

    return (
        <main className="min-h-dvh bg-background">
            <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                    <Link href="/forms">
                        <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
                            <ArrowLeftIcon className="size-3.5" />
                            Forms
                        </Button>
                    </Link>
                </div>

                <div className="flex flex-col gap-0.5">
                    <h1 className="text-xl font-semibold tracking-tight">
                        {form?.title}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {submissions?.length} response{submissions?.length !== 1 ? "s" : ""}
                    </p>
                </div>

                {submissions?.length === 0 ? (
                    <div className="flex flex-col items-center gap-2 py-24 text-center">
                        <p className="text-sm font-medium text-muted-foreground">
                            No responses yet
                        </p>
                        <p className="text-xs text-muted-foreground/60">
                            Share the form link to start collecting data
                        </p>
                        <Link href={`/forms/${id}`} className="mt-2">
                            <Button size="sm" variant="outline">
                                Fill Form
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="overflow-hidden rounded-lg border border-border">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-border bg-muted/40">
                                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground whitespace-nowrap">
                                            #
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground whitespace-nowrap">
                                            Submitted
                                        </th>
                                        {fields.map((f) => (
                                            <th
                                                key={f.id}
                                                className="px-4 py-3 text-left text-xs font-medium text-muted-foreground whitespace-nowrap"
                                            >
                                                {f.label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {submissions?.map((sub, i) => (
                                        <tr
                                            key={sub.id}
                                            className="hover:bg-muted/20 transition-colors"
                                        >
                                            <td className="px-4 py-3 text-xs text-muted-foreground">
                                                {submissions?.length - i}
                                            </td>
                                            <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                                                {formatDate(sub.created_at)}
                                            </td>
                                            {fields.map((f) => (
                                                <td key={f.id} className="px-4 py-3 text-sm md:min-w-[200px] max-w-[400px] align-middle wrap-break-word whitespace-normal leading-relaxed">
                                                    {(() => {
                                                        const rawValue = sub.data[f.id];
                                                        const isBranchField = f.dataSource === "branches";
                                                        
                                                        const valueToDisplay = (isBranchField && !rawValue) ? (sub.branch_id || "") : (rawValue || "");
                                                        
                                                        if (valueToDisplay.startsWith("http")) {
                                                            return (
                                                                <a
                                                                    href={valueToDisplay}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-primary underline underline-offset-2 text-xs"
                                                                >
                                                                    View file
                                                                </a>
                                                            );
                                                        }

                                                        const formatted = isBranchField 
                                                            ? (branches[valueToDisplay] || valueToDisplay)
                                                            : valueToDisplay;

                                                        return (
                                                            <span className="wrap-break-word">
                                                                {formatValue(formatted)}
                                                            </span>
                                                        );
                                                    })()}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default SubmissionsPage;
