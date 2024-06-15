interface Course {
  course_title: string;
  course_description: string;
  course_flayer: File | null | string;
  facilitator: FileCallbackacilitator;
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

// interface facilitator {
//   name: string;
//   role: string;
//   skills: string[];
//   facilitator_description: string;
//   image: string;
//   social: Array<{
//     name: string;
//     url: string;
//     icon?: any;
//   }>;
// }

// interface Meeting {
//   url: string;
//   date: string;
//   details: string;
//   // action: string;
//   // text: string;
//   // dates: {
//   //   start: Date;
//   //   end: Date;
//   // };
//   // location: string;
//   // sf: boolean;
//   // output: string;
// }

// interface Course {
//   flayer: File | null;
//   title: string;
//   course_description;
//   description: string;
//   facilitator: facilitator;
//   meeting: Meeting;
//   // completed?: boolean;
// }

// interface Facilitator {
//   name: string;
//   role: string;
//   skills: string[];
//   image: string;
// }
