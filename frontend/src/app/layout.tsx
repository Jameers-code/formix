import Providers from "@/components/global/providers";
import { base } from "@/constants/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased font-base",
                    base.variable,
                )}
            >
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
};
