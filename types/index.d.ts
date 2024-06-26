// Definición de interfaces basadas en el esquema de Prisma

interface Course {
  id: string;
  course_title: string;
  course_description: string;
  course_flayer: ImageFile;
  Facilitator: Facilitator;
  Meeting: Meeting;
}

interface Facilitator {
  id: string;
  facilitator_name: string;
  facilitator_role: string;
  facilitator_skills: string;
  facilitator_socials: FacilitatorSocials;
  facilitator_image: ImageFile;
  facilitator_description: string;
  createdAt: Date;
  updatedAt: Date;
}

interface FacilitatorSocials {
  id: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  mail: string;
  facilitatorId: string;
  facilitator?: FacilitatorDB;
}

interface Meeting {
  id: string;
  url: string;
  datetime: Date;
  details: string;
}

interface ImageFile {
  id: string;
  public_id: string;
  secure_url: string;
  facilitatorId: string;
}

interface FacilitatorDB {
  id: string;
  facilitator_name: string;
  facilitator_role: string;
  facilitator_skills: string;
  facilitator_description: string;
  facilitator_image?: ImageDB;
  facilitator_socials?: FacilitatorSocialsDB;
  createdAt?: Date;
  updatedAt?: Date;
  courses?: CourseDB[];
}

interface CourseDB {
  id: string;
  course_title: string;
  course_description: string;
  course_flayer?: FlayerDB;
  courseFlayerId: string;
  facilitatorId?: string;
  facilitator: FacilitatorDB;
  meetings: MeetingDB[];
  createdAt: Date;
  updatedAt: Date;
}

interface FacilitatorSocialsDB {
  id: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  mail: string;
  facilitatorId: string;
  facilitator?: FacilitatorDB;
}

interface MeetingDB {
  id: string;
  url: string;
  datetime: Date;
  details: string;
  courseId: string;
  course: CourseDB;
}

interface FlayerDB {
  id: string;
  public_id: string;
  secure_url: string;
  courseId: string;
  course: CourseDB;
}

interface ImageDB {
  id: string;
  public_id: string;
  secure_url: string;
  facilitatorId: string;
  facilitator?: FacilitatorDB;
}
