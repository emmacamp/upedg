import Image from "next/image";
import upedglogo from "@/assets/logo.png";
import { CousesCard, CousesCarouselMobile,  FacilitatorsCard,  FacilitatorsCarouselMobile } from "@/components/Carrousel";

export default function Home() {

  const courses: Course[] = [
    {
      course: "Diseño Gráfico",
      facilitator: "Ezequiel Silva",
      description: "Curso de diseño gráfico",
      image: "https://xsgames.co/randomusers/avatar.php?g=pixel"
    },
    {
      course: "Adobe Illustrator",
      facilitator: "Ezequiel Silva",
      description: "Curso de Adobe Illustrator",
      image: "https://xsgames.co/randomusers/avatar.php?g=female"
    },
    {
      course: "Adobe Photoshop",
      facilitator: "Ezequiel Silva",
      description: "Curso de Adobe Photoshop",
      image: "https://xsgames.co/randomusers/avatar.php?g=male"
    },
    {
      course: "Adobe InDesign",
      facilitator: "Ezequiel Silva",
      description: "Curso de Adobe InDesign",
      image: "https://xsgames.co/randomusers/avatar.php?g=pixel"
    },
  ]

  const facilitators: Facilitator[] = [
    {
      name: "Ezequiel Silva",
      role: "Facilitador",
      skills: ["Illustrator", "Photoshop", "InDesign", "Figma", "Web"],
      image: "https://xsgames.co/randomusers/avatar.php?g=male"
    },
    {
      name: "Emmanuel Popa",
      role: "Desarrollador web",
      skills: ["Web", "VS Code", "Next.js", "UX/UI", "Figma", "React"],
      image: "https://xsgames.co/randomusers/avatar.php?g=male"
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
