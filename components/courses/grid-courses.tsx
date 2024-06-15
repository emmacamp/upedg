'use server'

import { CardCourse } from "./card-courses";
interface GridCoursesProps {
    query: string;
}


async function fetchCourses(query: string): Promise<Course[]> {
    if (!query) {
        return [];
    }

    const res = await fetch(`http://localhost:3000/api/filter-courses?query=${query}`, {
        cache: 'no-store'
    });
    const courses = await res.json();

    return courses;
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