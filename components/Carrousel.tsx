import * as React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"



export function CousesCard({ courses }: { courses: Course[] }) {
    return (
        <Carousel className="w-full max-w-sm hidden md:block">
            <CarouselContent className="-ml-1">
                {courses.map((course, index) => (
                    <CarouselItem key={index} className="w-1/2">
                        <Card key={index} className="flex flex-col justify-center items-center">
                            <CardHeader className="text-xl font-bold">
                                <Image
                                    className="rounded-full"
                                    src={course.course_flayer as string}
                                    alt={course.course_title}
                                    width={100}
                                    height={100}
                                />
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle className="text-lg">{course.course_title}</CardTitle>
                                <CardDescription>{course.course_description}</CardDescription>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export function FacilitatorsCard({ facilitators }: { facilitators: Facilitator[] }) {
    return (
        <Carousel className="w-full max-w-sm hidden md:block">
            <CarouselContent className="-ml-1">
                {facilitators.map((facilitator, index) => (
                    <CarouselItem key={index} className="w-1/2">
                        <Card key={index} className="flex flex-col justify-center items-center">
                            <CardHeader className="text-xl font-bold">
                                <Image
                                    className="rounded-full"
                                    src={facilitator.facilitator_image as string}
                                    alt={facilitator.facilitator_name}
                                    width={100}
                                    height={100}
                                />
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle className="text-lg">{facilitator.facilitator_name}</CardTitle>
                                <CardDescription>{facilitator.facilitator_role}</CardDescription>
                                <div className="space-x-1">
                                    {
                                        facilitator.facilitator_skills.slice(0, 3).map((skill, index) => (
                                            <small
                                                key={index}
                                                className="text-xs text-muted-foreground text-center border-2 rounded-full px-2 py-1"
                                            >
                                                {skill}
                                            </small>
                                        ))
                                    }

                                    {
                                        facilitator.facilitator_skills.length > 3 && (
                                            <span className="text-xs text-white text-center border-2 border-primary rounded-full px-2 py-1 bg-primary">
                                                +{facilitator.facilitator_skills.length - 3}
                                            </span>
                                        )
                                    }
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}


export function CousesCarouselMobile({ courses }: { courses: Course[] }) {
    return (
        <Carousel className="w-full max-w-sm md:hidden">
            <CarouselContent className="-ml-1">
                {courses.map((course, index) => (
                    <CarouselItem key={index} className="w-1/2">
                        <Card key={index} className="flex flex-col justify-center items-center">
                            <CardHeader className="text-xl font-bold">
                                <Image
                                    className="rounded-full"
                                    src={course.course_flayer as string}
                                    alt={course.course_title}
                                    width={100}
                                    height={100}
                                />
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle className="text-lg">{course.course_title}</CardTitle>
                                <CardDescription>{course.course_description}</CardDescription>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export function FacilitatorsCarouselMobile({ facilitators }: { facilitators: Facilitator[] }) {
    return (
        <Carousel className="w-full max-w-sm md:hidden">
            <CarouselContent className="-ml-1">
                {facilitators.map((facilitator, index) => (
                    <CarouselItem key={index} className="w-1/2">
                        <Card key={index} className="flex flex-col justify-center items-center">
                            <CardHeader className="text-xl font-bold">
                                <Image
                                    className="rounded-full"
                                    src={facilitator.facilitator_image as string}
                                    alt={facilitator.facilitator_name}
                                    width={100}
                                    height={100}
                                />
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle className="text-lg">{facilitator.facilitator_name}</CardTitle>
                                <CardDescription>{facilitator.facilitator_role}</CardDescription>
                                <div className="space-x-1">
                                    {
                                        facilitator.facilitator_skills.slice(0, 3).map((skill, index) => (
                                            <small
                                                key={index}
                                                className="text-xs text-muted-foreground text-center border-2 rounded-full px-2 py-1"
                                            >
                                                {skill}
                                            </small>
                                        ))
                                    }

                                    {
                                        facilitator.facilitator_skills.length > 3 && (
                                            <span className="text-xs text-white text-center border-2 border-primary rounded-full px-2 py-1 bg-primary">
                                                +{facilitator.facilitator_skills.length - 3}
                                            </span>
                                        )
                                    }
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}