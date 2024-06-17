import prisma from "@/lib/prisma";
import CreateCourseForm from "./create-courser-form";

export default async function CreateCoursePage() {
  const facilitators: FacilitatorDB[] = await prisma.facilitator.findMany();

  return (
    <div className="p-4">
      <CreateCourseForm facilitators={facilitators} />
    </div>
  )
}
