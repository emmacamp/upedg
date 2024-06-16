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