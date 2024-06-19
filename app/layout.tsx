import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Toaster } from "sonner";
import Footer from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "UPEDG",
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
        "min-h-screen bg-background font-sans antialiased container max-w-[1280px] mx-auto px-1 sm:px-4 lg:px-8 xl:px-12 2xl:px-16",
        fontSans.variable
      )}>
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
