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
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";



interface CardCoursesProps {
    course: Course;
}

export function CardCourse({ course }: CardCoursesProps) {
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=${course.meeting.action}&text=${course.meeting.text}&dates=${course.meeting.dates.start}/${course.meeting.dates.end}&details=${course.meeting.details}${course.meeting.url}&location=${encodeURIComponent(course.meeting.url)}&sf=${course.meeting.sf}&output=${course.meeting.output}`;

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <Image
                    src={course.teacher.flayer}
                    alt="Flayer"
                    width={350}
                    height={200}
                    className="object-cover rounded-lg"
                />
            </CardHeader>
            <CardContent>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
                <NavigationMenu className="border rounded-md">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Redes</NavigationMenuTrigger>
                            <NavigationMenuContent className="w-[150px] p-2 space-y-2">
                                {course.teacher.social.map((social, index) => (
                                    <NavigationMenuLink key={index} href={social.url} className="flex space-x-2 hover:bg-gray-100">
                                        <social.icon />
                                        <p>{social.name}</p>
                                    </NavigationMenuLink>
                                ))}
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
            </CardFooter>
        </Card>
    );
}
