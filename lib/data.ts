"use server";

export async function fetchCourses(
  query: string
): Promise<CoursePrismaResponse | CoursePrismaResponse[]> {
  if (!query) {
    return await fetch("http://localhost:3000/api/courses", {
      cache: "no-store",
    }).then((res) => res.json());
  }

  const res = await fetch(
    `http://localhost:3000/api/filter-courses?query=${query}`,
    {
      cache: "no-store",
    }
  );
  const courses = await res.json();

  return courses;
}
