'use server'
import { SessionProvider } from "next-auth/react";

export const SessionProv = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}