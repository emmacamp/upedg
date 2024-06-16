'use client'
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";

export const SubmitButton = ({ text = 'Submit' }: { text: string }) => {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} type="submit" className="w-full">
            {text}
            {
                pending && <Loader className="ml-2 animate-spin" size={20} />
            }
        </Button>
    );
}