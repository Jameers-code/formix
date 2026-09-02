"use client";

import Icons from "@/components/global/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";

const MAX_OPTIONS = 6;

type Props = {
    options: string[];
    onChange: (options: string[]) => void;
};

const OptionsEditor = ({ options, onChange }: Props) => {

    const addOption = () => {
        if (options.length >= MAX_OPTIONS) return;
        onChange([...options, ""]);
    };

    const update = (index: number, value: string) => {
        const updated = [...options];
        updated[index] = value;
        onChange(updated);
    };

    const remove = (index: number) => {
        onChange(options.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col gap-2">
            {options.length < MAX_OPTIONS ? (
                <button
                    type="button"
                    onClick={addOption}
                    className="flex items-center gap-0.5 text-xs p-1.5 hover:bg-muted/30 rounded-md transition-colors cursor-pointer mt-1 border border-border/80"
                >
                    <PlusIcon className="size-3.5" />
                    Add option
                    <span className="ml-auto text-muted-foreground/60">
                        {options.length}/{MAX_OPTIONS}
                    </span>
                </button>
            ) : (
                <p className="text-xs text-muted-foreground/60">
                    Max {MAX_OPTIONS} options reached
                </p>
            )}

            {options.length === 0 && (
                <div className="text-xs text-muted-foreground p-2 border border-border border-dashed rounded-md text-center">
                    No options defined
                </div>
            )}

            {options.map((opt, index) => (
                <div key={index} className="flex items-center gap-2">
                    <span className="w-4 shrink-0 text-right text-xs text-muted-foreground">
                        {index + 1}.
                    </span>
                    <Input
                        value={opt}
                        onChange={(e) => update(index, e.target.value)}
                        placeholder={`Option ${index + 1}`}
                        className="h-8 text-sm"
                    />
                    <Button
                        size="icon-sm"
                        type="button"
                        variant="ghost"
                        onClick={() => remove(index)}
                        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors shrink-0"
                    >
                        <Icons.trash className="size-3.5" />
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default OptionsEditor;
