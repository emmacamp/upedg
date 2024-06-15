import Image from "next/image";
import upedglogo from "@/assets/logo.png";
import { CousesCard, CousesCarouselMobile,  FacilitatorsCard,  FacilitatorsCarouselMobile } from "@/components/Carrousel";

export default function Home() {

  const courses: Course[] = [
    {
      course_title: "Diseño Gráfico",
      facilitator: "Ezequiel Silva",
      course_description: "Curso de diseño gráfico",
      course_flayer: "https://xsgames.co/randomusers/avatar.php?g=male",
      meeting: {
        url: "https://meet.google.com/xyz-abc-def",
        datetime: "20240814T120000Z",
        details: "Aprende+a+editar+videos+con+Adobe+Premiere+Pro+y+After+Effects.%0AReunión+en+Google+Meet:"
      }
    },
    {
      course_title: "Adobe Illustrator",
      facilitator: "Ezequiel Silva",
      course_description: "Curso de Adobe Illustrator",
      course_flayer: "https://xsgames.co/randomusers/avatar.php?g=pixel",
      meeting: {
        url: "https://meet.google.com/xyz-abc-def",
        datetime: "20240814T120000Z",
        details: "Aprende+a+editar+videos+con+Adobe+Premiere+Pro+y+After+Effects.%0AReunión+en+Google+Meet:"
      }
    },
    {
      course_title: "Adobe Photoshop",
      facilitator: "Ezequiel Silva",
      course_description: "Curso de Adobe Photoshop",
      course_flayer: "https://xsgames.co/randomusers/avatar.php?g=male",
      meeting: {
        url: "https://meet.google.com/xyz-abc-def",
        datetime: "20240814T120000Z",
        details: "Aprende+a+editar+videos+con+Adobe+Premiere+Pro+y+After+Effects.%0AReunión+en+Google+Meet:"
      }
    }
  ]

  const facilitators: Facilitator[] = [
    {
      facilitator_name: "Ezequiel Silva",
      facilitator_role: "Facilitador",
      facilitator_skills: ["Illustrator", "Photoshop", "InDesign", "Figma", "Web"],
      facilitator_image: "https://xsgames.co/randomusers/avatar.php?g=male",
      facilitator_description: "Ezequiel Silva es un diseñador gráfico con más de 10 años de experiencia en la industria. Ha trabajado en agencias de publicidad y en empresas de diseño de renombre. Actualmente es el director creativo de su propia agencia de diseño.",
      facilitator_socials: {
        facebook: "https://www.facebook.com/ezequielsilva",
        instagram: "https://www.instagram.com/ezequielsilva",
        linkedin: "https://www.linkedin.com/in/ezequielsilva",
        mail: "esilva@upedg.edu.do"
      }
    },
    {
      facilitator_name: "Emmanuel Popa",
      facilitator_role: "Desarrollador web",
      facilitator_skills: ["Web", "VS Code", "Next.js", "UX/UI", "Figma", "React"],
      facilitator_image: "https://xsgames.co/randomusers/avatar.php?g=male",
      facilitator_description: "Emmanuel Popa es un desarrollador web con más de 5 años de experiencia en la industria. Ha trabajado en empresas de tecnología y en proyectos de desarrollo web freelance. Actualmente es el director de tecnología de su propia agencia de desarrollo web.",
      facilitator_socials: {
        facebook: "https://www.facebook.com/emmanuelpopa",
        instagram: "https://www.instagram.com/emmanuelpopa",
        linkedin: "https://www.linkedin.com/in/emmanuelpopa",
        mail: "epopa@upedg.edu.do"
      }

    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="">

        <h1 className="text-4xl md:text-6xl font-bold flex flex-col">
          <div className="">
            <span className="text-3xl text-secondary">UNIDOS</span>
            <span className="text-2xl">{' '}POR EL</span>
          </div>
          <span className="text-primary text-6xl">DISEÑO GRÁFICO</span>
        </h1>
        <p className="text-sm font-bold text-slate-800">FACILITADOR EZEQUIEL SILVA</p>
      </div>

      <section className="flex flex-col items-center mb-4 space-y-3 mt-5">
        <h2 className="text-xl font-bold w-fit mb-3 border-b-2 border-primary">Cursos</h2>
        <CousesCard courses={courses} />
        <CousesCarouselMobile courses={courses} />
      </section>

      <section className="flex flex-col items-center mb-4 space-y-3 mt-5">
        <h2 className="text-xl font-bold w-fit mb-3 border-b-2 border-primary">Facilitadores</h2>
        <FacilitatorsCard facilitators={facilitators} />
        <FacilitatorsCarouselMobile facilitators={facilitators} />
      </section>



      {/* <section>
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={upedglogo}
            alt="UPEDG"
            width={100}
            height={100}
          />
          <p className="text-lg text-slate-800">Unidos por el diseño gráfico</p>
        </div>
      </section> */}



      {/* <div className="flex flex-col items-center space-y-4">
        <Image
          src={upedglogo}
          alt="UPEDG"
          width={100}
          height={100}
        />
        <p className="text-lg text-slate-800">Unidos por el diseño gráfico</p>
      </div> */}
    </main>
  );
}
