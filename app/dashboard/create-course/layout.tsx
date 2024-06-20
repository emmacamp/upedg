import type { Metadata } from "next";
import { FormProvider } from "@/app/context/FormContext";

export const metadata: Metadata = {
    title: "Admin UPEDG",
    description: "Unidos por el diseño gráfico",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        
        <FormProvider>
            <main className="flex min-h-screen flex-col items-center justify-between p-8">
                {children}
            </main>
        </FormProvider>
    );
}
