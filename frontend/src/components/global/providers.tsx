"use client";

import React, { useEffect, useState } from 'react'
import { Toaster } from "sonner";
import { useTheme } from "next-themes";

const ToasterComponent = () => {

    const { theme } = useTheme();

    return (
        <Toaster
            theme={theme as "light" | "dark" | "system"}
            position="bottom-center"
        />
    );
};

const Providers = ({ children }: { children: React.ReactNode }) => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);

        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkIsDesktop();
        window.addEventListener('resize', checkIsDesktop);

        return () => window.removeEventListener('resize', checkIsDesktop);
    }, []);

    if (!isDesktop) {
        return (
            <>
                <ToasterComponent />
                {children}
            </>
        );
    }

    return (
        <>
            <ToasterComponent />
            {children}
        </>
    )
};

export default Providers
