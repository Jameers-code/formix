"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Icons from "@/components/global/icons";

const Navbar = () => {
    return (
        <header className="w-full fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                <Link 
                    href="/" 
                    className="flex items-center gap-2"
                >
                    <Icons.logo className="size-6 text-primary" />
                    <span className="font-semibold text-lg tracking-tight">
                        Formix
                    </span>
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/admin">
                        <Button 
                            variant="default" 
                            size="sm"
                        >
                            Build Form
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
