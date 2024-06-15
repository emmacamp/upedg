// app/api/courses/route.ts

import { NextRequest, NextResponse } from "next/server";

const allCourses: Course[] = [
  {
    title: "Curso de edición de video",
    description:
      "Aprende a editar videos con Adobe Premiere Pro y After Effects.",
    completed: false,
    teacher: {
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
  {
    title: "Curso de edición de video",
    description:
      "Aprende a editar videos con Adobe Premiere Pro y After Effects.",
    completed: false,
    teacher: {
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
  {
    title: "Curso de edición de video",
    description:
      "Aprende a editar videos con Adobe Premiere Pro y After Effects.",
    completed: false,
    teacher: {
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
];

export async function GET(req: NextRequest) {
// return all courses

  return NextResponse.json(allCourses);
}
