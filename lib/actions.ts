"use server";

import prisma from "./prisma";
import uploadImageToCloudinary from "@/lib/cloudinary";

export async function createCourse(formData: FormData): Promise<any> {

  // lower case all values
  for (var pair of formData.entries()) {
    formData.set(pair[0], pair[1].toString().toLowerCase());
  }

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

  const facilitator_image_buffer = await facilitator_image.arrayBuffer();
  const course_flayer_buffer = await course_flayer.arrayBuffer();

  const bufferFacilitatorImage = new Uint8Array(facilitator_image_buffer);
  const bufferCourseFlayer = new Uint8Array(course_flayer_buffer);

  // upload files to cloudinary
  const [courseFlayerResult, facilitatorImageResult] = await Promise.all([
    uploadImageToCloudinary(bufferCourseFlayer),
    uploadImageToCloudinary(bufferFacilitatorImage),
  ]);

  console.log({ courseFlayerResult, facilitatorImageResult });

  if (courseFlayerResult && facilitatorImageResult) {
    try {
      // prisma create course
      const course = await prisma.course.create({
        data: {
          course_title,
          course_description,
          course_flayer: {
            create: {
              public_id: courseFlayerResult.public_id,
              secure_url: courseFlayerResult.secure_url,
            },
          },
          facilitator: {
            create: {
              facilitator_name,
              facilitator_role,
              facilitator_skills,
              facilitator_description,
              facilitator_image: {
                create: {
                  public_id: facilitatorImageResult.public_id,
                  secure_url: facilitatorImageResult.secure_url,
                },
              },
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

  return "Failed to upload images!";
}
