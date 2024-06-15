import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import "./globals.css";
import { Navbar } from "@/components/navbar";

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
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
