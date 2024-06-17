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
            course_title: {
                contains: query,
            },
            course_description: {
                contains: query,
            },
            facilitator: {
                facilitator_name: {
                    contains: query,
                },
            },
        },
        include: {
            course_flayer: true,
            facilitator: {
                include: {
                    facilitator_socials: true,
                    facilitator_image: true,
                },
            },
            meeting: true,
        },
    });

    console.log({ courses });

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
                <CardCourse
                    key={course.id}
                    course={course as CourseDB}
                />
            ))}
        </div>
    );
}