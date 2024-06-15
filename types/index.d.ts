interface Teacher {
  name: string;
  role: string;
  skills: string[];
  image: string;
  social: Array<{
    name: string;
    url: string;
    icon?: any;
  }>;
}

interface Meeting {
  url: string;
  // action: string;
  // text: string;
  date: string;
  // dates: {
  //   start: Date;
  //   end: Date;
  // };
  details: string;
  // location: string;
  // sf: boolean;
  // output: string;
}

interface Course {
  flayer: File | null;
  title: string;
  description: string;
  // completed?: boolean;
  teacher: Teacher;
  meeting: Meeting;
}

interface Facilitator {
  name: string;
  role: string;
  skills: string[];
  image: string;
}
