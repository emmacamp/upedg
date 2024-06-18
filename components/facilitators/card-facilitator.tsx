'use client';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MailIcon } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface CardFacilitatorsProps {
    facilitator: Facilitator
}

export function CardFacilitator({ facilitator }: CardFacilitatorsProps) {

    return (
        <Card className="max-w-[350px] ">
            <CardHeader>
                <Image
                    src={facilitator.facilitator_image.secure_url}
                    alt="Flayer"
                    width={350}
                    height={200}
                    className="object-cover rounded-lg"
                />
            </CardHeader>
            <CardContent>
                <CardTitle>{facilitator.facilitator_name}</CardTitle>
                <CardDescription>{facilitator.facilitator_description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
                <NavigationMenu className="border rounded-md">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Redes</NavigationMenuTrigger>
                            <NavigationMenuContent className="w-[150px] p-2 space-y-2">
                                <NavigationMenuLink href={facilitator.facilitator_socials?.instagram} className="flex space-x-2 hover:bg-gray-100">
                                    <Instagram />
                                    <p>Instagram</p>
                                </NavigationMenuLink>
                                <NavigationMenuLink href={facilitator.facilitator_socials?.instagram} className="flex space-x-2 hover:bg-gray-100">
                                    <Facebook />
                                    <p>Facebook</p>
                                </NavigationMenuLink>
                                <NavigationMenuLink href={facilitator.facilitator_socials?.linkedin} className="flex space-x-2 hover:bg-gray-100">
                                    <Linkedin />
                                    <p>Linkedin</p>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                {/* <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
                    <Button>
                        <MailIcon className="mr-2" />
                        Agendar
                    </Button>
                </a> */}
                {/* <Button variant="destructive" onClick={handleDelete}>
                    Eliminar
                </Button> */}
            </CardFooter>
        </Card>
    );
}