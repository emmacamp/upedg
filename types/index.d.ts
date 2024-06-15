interface Teacher {
  name: string;
  flayer: string;
  social: Array<{
    name: string;
    url: string;
    icon: any;
  }>;
}

interface Meeting {
  url: string;
  start: string;
  end: string;
  action: string;
  text: string;
  dates: {
    start: string;
    end: string;
  };
  details: string;
  location: string;
  sf: boolean;
  output: string;
}

interface Course {
  title: string;
  description: string;
  completed: boolean;
  teacher: Teacher;
  meeting: Meeting;
}

interface Facilitator {
  name: string;
  role: string;
  skills: string[];
  image: string;
}
