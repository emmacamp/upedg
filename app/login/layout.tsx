import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import "../globals.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
})

export const metadata: Metadata = {
    title: "Login Page",
    description: "Unidos por el diseño gráfico",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased container mx-auto mt-32 px-1 sm:px-4 lg:px-8 ",
                inter.variable
            )}>
                {/* <Navbar /> */}
                {children}
                {/* <Footer /> */}
                <Toaster richColors position="top-right" />
            </body>
        </html>
    );
}
