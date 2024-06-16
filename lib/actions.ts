"use server";

import prisma from "./prisma";

export async function createCourse(formData: FormData): Promise<any> {
  // ? Course
  const course_title = formData.get("course_title") as string;
  const course_description = formData.get("course_description") as string;
  const course_flayer = formData.get("course_flayer") as File;
  // ? Facilitator
  const facilitator_name = formData.get("facilitator_name") as string;
  const facilitator_role = formData.get("facilitator_role") as string;
  const facilitator_skills = formData.get("facilitator_skills") as string;
  const facilitator_description = formData.get(
    "facilitator_description"
  ) as string;
  const facilitator_image = formData.get("facilitator_image") as File;
  // ? Social
  const instagram = formData.get("instagram") as string;
  const facebook = formData.get("facebook") as string;
  const linkedin = formData.get("linkedin") as string;
  const mail = formData.get("mail") as string;
  // ? Meeting
  const url = formData.get("url") as string;
  const datetime = formData.get("datetime") as string;
  const details = formData.get("details") as string;

  // upload files to cloudinary
  //...
  const course_flayer_url = "https://res.cloudinary.com/...";
  const facilitator_image_url = "https://res.cloudinary.com/...";

  const data = {
    course_title,
    course_description,
    course_flayer,
    facilitator: {
      facilitator_name,
      facilitator_role,
      facilitator_skills,
      facilitator_description,
      facilitator_image,
      facilitator_socials: {
        instagram,
        facebook,
        linkedin,
        mail,
      },
    },
    meeting: {
      url,
      datetime,
      details,
    },
  };

  try {
    // prisma create course
    const course = await prisma.course.create({
      data: {
        course_title,
        course_description,
        course_flayer: course_flayer_url,
        facilitator: {
          create: {
            facilitator_name,
            facilitator_role,
            facilitator_skills,
            facilitator_description,
            facilitator_image: facilitator_image_url,
            facilitator_socials: {
              create: {
                instagram,
                facebook,
                linkedin,
                mail,
              },
            },
          },
        },
        meeting: {
          create: {
            url,
            datetime: new Date(datetime),
            details,
          },
        },
      },
    });

    console.log(course);

    return "Course created successfully!";
  } catch (error) {
    console.log(error);
    return "Failed to create course!";
  }
}
