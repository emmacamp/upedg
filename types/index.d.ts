interface FacilitatorDB {
  id: string;
  facilitator_name: string;
  facilitator_role: string;
  facilitator_skills: string;
  facilitator_description: string;
  facilitator_image?: ImageDB;
  facilitatorSocialsId: string;
  facilitator_socials?: FacilitatorSocialsDB;
  createdAt: Date;
  updatedAt: Date;
}

interface CourseDB {
  id: string;
  course_title: string;
  course_description: string;
  course_flayer: FlayerDB;
  facilitatorId: string;
  meetingId: string;
  createdAt: Date;
  updatedAt: Date;
  facilitator: FacilitatorDB;
  meeting: MeetingDB;
  createdAt: Date;
  updatedAt: Date;
}

interface FacilitatorSocialsDB {
  id: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  mail: string;
}

interface MeetingDB {
  id: string;
  url: string;
  datetime: Date;
  details: string;
}

interface ImageDB {
  id: string;
  public_id: string;
  secure_url: string;
}
interface FlayerDB {
  id: string;
  public_id: string;
  secure_url: string;
}



// // course response from api
// interface CoursePrismaResponse {
//   id: number;
//   course_title: string;
//   course_description: string;
//   course_flayer: string;
//   facilitatorId: number;
//   meetingId: number;
//   createdAt: Date;
//   updatedAt: Date;
//   facilitator: Facilitator;
//   meeting: Meeting;
// }

interface Course<T> {
  course_title: string;
  course_description: string;
  course_flayer: File | null | string;
  facilitator: T; // Facilitator | string;
  meeting: Meeting;
}

interface Social {
  instagram: string;
  facebook: string;
  linkedin: string;
  mail: string;
}

interface Facilitator {
  facilitator_name: string;
  facilitator_role: string;
  facilitator_skills: string[];
  facilitator_description: string;
  facilitator_image: File | null | string;
  facilitator_socials: Social;
}

interface Meeting {
  url: string;
  datetime: string;
  details: string;
}
