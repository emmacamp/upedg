'use server'

import { CardCourse } from "./card-courses";
import prisma from "@/lib/prisma";
interface GridCoursesProps {
    query: string;
}

interface GridCoursesProps {
    query: string;
}



export async function GridCourses({ query }: GridCoursesProps) {
    const courses = await prisma.course.findMany({
        where: {
            // course_title and course_description and facilitator_name search
            OR: [
                {
                    course_title: {
                        contains: query,
                    },
                },
                {
                    course_description: {
                        contains: query,
                    },
                },
                {
                    Facilitator: {
                        facilitator_name: {
                            contains: query,
                        },
                    },
                }
            ],
        },
        include: {
            course_flayer: true,
            Facilitator: {
                include: {
                    facilitator_socials: true,
                },

            },
            Meeting: true,
        },
    });

    return courses.map((course) => (
        <CardCourse
            key={course.id}
            course={course as Course}
        />
    ));
}