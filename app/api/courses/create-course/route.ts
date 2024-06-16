import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { course_title } = await req.json();
    console.log(course_title);

    // const {
    //   course_title,
    //   course_description,
    //   course_flayer,
    //   facilitator_name,
    //   facilitator_role,
    //   facilitator_skills,
    //   facilitator_description,
    //   facilitator_image,
    //   facilitator_socials,
    //   meeting_url,
    //   meeting_datetime,
    //   meeting_details,
    // } = data;

    // const facilitator = await prisma.facilitator.create({
    //   data: {
    //     facilitator_name,
    //     facilitator_role,
    //     facilitator_skills,
    //     facilitator_description,
    //     facilitator_image,
    //     facilitator_socials: {
    //       create: facilitator_socials,
    //     },
    //   },
    // });

    // const meeting = await prisma.meeting.create({
    //   data: {
    //     url: meeting_url,
    //     datetime: new Date(meeting_datetime),
    //     details: meeting_details,
    //   },
    // });

    // const course = await prisma.course.create({
    //   data: {
    //     course_title,
    //     course_description,
    //     course_flayer,
    //     facilitatorId: facilitator.id,
    //     meetingId: meeting.id,
    //   },
    // });

    return NextResponse.json({course: ''});
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error creating course" },
      { status: 500 }
    );
  }
}
