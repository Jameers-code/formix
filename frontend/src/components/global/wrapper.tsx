import React from "react";
import { cn } from "@/lib";

interface Props {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

const Wrapper = ({ id, children, className }: Props) => {
    return (
        <div
            id={id}
            className={cn(
                "w-full mx-auto lg:max-w-7xl px-4 lg:px-0",
                className
            )}
        >
            {children}
        </div>
    )
};

export default Wrapper
