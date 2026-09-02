"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import FieldTypePanel from "@/components/admin/field-type-panel";
import FieldSettingsPanel from "@/components/admin/field-settings-panel";
import type { FormField, FieldType } from "@/types/form";

type Props = {
    leftOpen: boolean;
    setLeftOpen: (open: boolean) => void;
    rightOpen: boolean;
    setRightOpen: (open: boolean) => void;
    onAddField: (type: FieldType) => void;
    selectedField: FormField | null;
    fields: FormField[];
    onUpdateField: (updates: Partial<FormField>) => void;
};

const MobilePanels = ({
    leftOpen,
    setLeftOpen,
    rightOpen,
    setRightOpen,
    onAddField,
    selectedField,
    fields,
    onUpdateField,
}: Props) => {
    return (
        <>
            <Sheet open={leftOpen} onOpenChange={setLeftOpen}>
                <SheetContent side="left" className="p-0 border-r-0 w-[280px]">
                    <SheetHeader className="sr-only">
                        <SheetTitle>
                            Add Fields
                        </SheetTitle>
                    </SheetHeader>
                    <div className="h-full bg-card pt-12">
                        <FieldTypePanel onAddField={(type) => {
                            onAddField(type);
                            setLeftOpen(false);
                        }} />
                    </div>
                </SheetContent>
            </Sheet>

            <Sheet open={rightOpen} onOpenChange={setRightOpen}>
                <SheetContent side="right" className="p-0 border-l-0 w-[280px]">
                    <SheetHeader className="sr-only">
                        <SheetTitle>
                            Field Settings
                        </SheetTitle>
                    </SheetHeader>
                    <div className="h-full bg-card pt-12">
                        <FieldSettingsPanel
                            field={selectedField}
                            fields={fields}
                            onUpdate={onUpdateField}
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default MobilePanels;
