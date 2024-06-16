interface FacilitatorSocialsDB {
  id: number;
  instagram: string;
  facebook: string;
  linkedin: string;
  mail: string;
}

interface FacilitatorDB {
  id: number;
  facilitator_name: string;
  facilitator_role: string;
  facilitator_skills: string;
  facilitator_description: string;
  facilitator_image: string;
  facilitatorSocialsId: number;
  facilitator_socials: FacilitatorSocialsDB;
}

interface MeetingDB {
  id: number;
  url: string;
  datetime: Date;
  details: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CourseDB {
  id: number;
  course_title: string;
  course_description: string;
  course_flayer: string;
  facilitatorId: number;
  meetingId: number;
  createdAt: Date;
  updatedAt: Date;
  facilitator: FacilitatorDB;
  meeting: MeetingDB;
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
