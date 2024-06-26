// app/api/filter-courses/route.ts

import { NextRequest, NextResponse } from "next/server";

const allCourses: Course[] = [
  {
    title: "Curso de edición de video",
    description:
      "Aprende a editar videos con Adobe Premiere Pro y After Effects.",
    completed: false,
    facilitator: {
      name: "Jean Carlos",
      flayer: "/path/to/jeanCourseFlayer.jpg",
      social: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/jean_carlos",
          icon: "Instagram", // Usa el icono apropiado aquí
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/jean_carlos",
          icon: "Facebook", // Usa el icono apropiado aquí
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jean_carlos",
          icon: "Linkedin", // Usa el icono apropiado aquí
        },
      ],
    },
    meeting: {
      url: "https://meet.google.com/xyz-abc-def",
      start: "20240814T120000Z",
      end: "20240814T150000Z",
      action: "TEMPLATE",
      text: "Curso+de+edición+de+video",
      dates: {
        start: "20240814T120000Z",
        end: "20240814T150000Z",
      },
      details: `Aprende+a+editar+videos+con+Adobe+Premiere+Pro+y+After+Effects.%0AReunión+en+Google+Meet:`,
      location: "Google+Meet+link",
      sf: true,
      output: "xml",
    },
  },
  // Agrega más cursos aquí
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query")?.toLowerCase() || "";
  console.log({query});

  const filteredCourses = query
    ? allCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.facilitator.name.toLowerCase().includes(query)
      )
    : allCourses;

  return NextResponse.json(filteredCourses);
}
