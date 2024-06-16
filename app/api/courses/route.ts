// app/api/courses/route.ts
/*  meeting: {
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
    }, */
import { NextRequest, NextResponse } from "next/server";

const allCourses: Course<Facilitator>[] = [
  {
    course_title: "Curso de edición de video",
    course_description:"Aprende a editar videos con Adobe Premiere Pro y After Effects.",
    course_flayer: "/path/to/videoCourseFlayer.jpg",
    facilitator: {
      facilitator_name: "Jean Carlos",
      facilitator_image: "/path/to/jeanCourseFlayer.jpg",
      facilitator_role: "Facilitador",
      facilitator_skills: [
        "Illustrator",
        "Photoshop",
        "InDesign",
        "Figma",
        "Web",
      ],
      facilitator_description:
        "Jean Carlos es un diseñador gráfico con más de 10 años de experiencia en la industria. Ha trabajado en agencias de publicidad y en empresas de diseño de renombre. Actualmente es el director creativo de su propia agencia de diseño.",
      facilitator_socials: {
        instagram: "https://www.instagram.com/jean_carlos",
        facebook: "https://www.facebook.com/jean_carlos",
        linkedin: "https://www.linkedin.com/in/jean_carlos",
        mail: "",
      },
    },
    meeting: {
      url: "https://meet.google.com/xyz-abc-def",
      datetime: "20240814T120000Z",
      details: `Aprende+a+editar+videos+con+Adobe+Premiere+Pro+y+After+Effects.%0AReunión+en+Google+Meet:`,
    },
  },
];

export async function GET(req: NextRequest) {
  // return all courses

  return NextResponse.json(allCourses);
}
