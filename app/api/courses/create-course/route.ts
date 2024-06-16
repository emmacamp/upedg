import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const course_title = data.get("course_title") as string;
    const course_description = data.get("course_description") as string;
    const course_flayer = data.get("course_flayer") as File;
    const facilitator_name = data.get("facilitator_name") as string;
    const facilitator_role = data.get("facilitator_role") as string;
    const facilitator_skills = (data.get("facilitator_skills") as string).split(
      ","
    );
    const facilitator_description = data.get(
      "facilitator_description"
    ) as string;
    const facilitator_image = data.get("facilitator_image") as File;
    const facilitator_socials = JSON.parse(
      data.get("facilitator_socials") as string
    );
    const meeting_url = data.get("url") as string;
    const meeting_datetime = new Date(data.get("datetime") as string);
    const meeting_details = data.get("details") as string;

    // Guardar archivos (course_flayer y facilitator_image) en el servidor o S3 y obtener sus URLs
    // Este ejemplo asume que ya tienes las URLs después de subir los archivos

    const courseFlayerUrl = "path_to_course_flayer";
    const facilitatorImageUrl = "path_to_facilitator_image";

    const facilitator = await prisma.facilitator.create({
      data: {
        facilitator_name,
        facilitator_role,
        facilitator_skills,
        facilitator_description,
        facilitator_image: facilitatorImageUrl,
        facilitator_socials,
      },
    });

    const meeting = await prisma.meeting.create({
      data: {
        url: meeting_url,
        datetime: meeting_datetime,
        details: meeting_details,
      },
    });

    const course = await prisma.course.create({
      data: {
        course_title,
        course_description,
        course_flayer: courseFlayerUrl,
        facilitatorId: facilitator.id,
        meetingId: meeting.id,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error creating course" },
      { status: 500 }
    );
  }
}
