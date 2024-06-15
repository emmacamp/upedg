'use server'

import { fetchCourses } from "@/lib/data";
import { CardCourse } from "./card-courses";
interface GridCoursesProps {
    query: string;
}

export async function GridCourses({ query }: GridCoursesProps) {
    const courses = await fetchCourses(query);
    console.log({ courses });

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
                <CardCourse key={course.meeting.url} course={course} />
            ))}
        </div>
    );
}