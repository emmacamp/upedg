import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import "../globals.css";
import { Toaster } from "sonner";

import { AdminHeader } from "@/components/admin-header";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
})

export const metadata: Metadata = {
    title: "UPEDG",
    description: "Unidos por el diseño gráfico",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await auth();

    return (
        <html lang="es" suppressHydrationWarning>
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased container mx-auto ",
                inter.variable
            )}>
                <SessionProvider session={session}>
                    <div className="flex min-h-screen w-full flex-col">
                        <AdminHeader />
                        {children}
                    </div>
                    <Toaster richColors position="top-right" />
                </SessionProvider>
            </body>
        </html>
    );
}
