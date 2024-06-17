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
import { deleteCourse } from "@/lib/actions";
import { toast } from "sonner";

interface CardCoursesProps {
    course: CourseDB;
}

export function CardCourse({ course }: CardCoursesProps) {
    // console.log({ course });
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${course.course_title}&dates=${course.meeting.datetime}/${course.meeting.datetime}&details=${course.meeting.details}&location=${encodeURIComponent(course.meeting.url)}&sf=true&output=xml`;

    const handleDelete = async () => {
        const response = await deleteCourse(course.id);
        if (response.success) {
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
    };


    return (
        <Card className="w-[350px]">
            <CardHeader>
                <Image
                    src={course.course_flayer.secure_url}
                    alt="Flayer"
                    width={350}
                    height={200}
                    className="object-cover rounded-lg"
                />
            </CardHeader>
            <CardContent>
                <CardTitle>{course.course_title}</CardTitle>
                <CardDescription>{course.course_description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
                <NavigationMenu className="border rounded-md">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Redes</NavigationMenuTrigger>
                            <NavigationMenuContent className="w-[150px] p-2 space-y-2">
                                <NavigationMenuLink href={course.facilitator.facilitator_socials?.instagram} className="flex space-x-2 hover:bg-gray-100">
                                    <Instagram />
                                    <p>Instagram</p>
                                </NavigationMenuLink>
                                <NavigationMenuLink href={course.facilitator.facilitator_socials?.facebook} className="flex space-x-2 hover:bg-gray-100">
                                    <Facebook />
                                    <p>Facebook</p>
                                </NavigationMenuLink>
                                <NavigationMenuLink href={course.facilitator.facilitator_socials?.linkedin} className="flex space-x-2 hover:bg-gray-100">
                                    <Linkedin />
                                    <p>Linkedin</p>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
                    <Button>
                        <MailIcon className="mr-2" />
                        Agendar
                    </Button>
                </a>
                <Button variant="destructive" onClick={handleDelete}>
                    Eliminar
                </Button>
            </CardFooter>
        </Card>
    );
}