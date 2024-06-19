import Image from "next/image";
import upedglogo from "@/assets/logo.png";
import headerLogo from "@/assets/home/diseno-grafico-hearder-transformed.webp";
import misionImage from "@/assets/home/mision-image.webp";
import visionImage from "@/assets/home/vision-image.webp";
import valoresImage from "@/assets/home/valores-image.webp";
import { CousesCard, CousesCarouselMobile, FacilitatorsCard, FacilitatorsCarouselMobile } from "@/components/Carrousel";

export default function Home() {


  return (
    <main>

      <div className="flex flex-col md:flex-row  w-full h-[300px] my-10 px-8">

        <div className="md:w-[50%] flex flex-col justify-center ">
          <h1 className="text-6xl md:text-6xl font-bold flex-col">
            <span className="text-secondary text-6xl">UNIDOS</span> POR EL {' '}
            <span className="text- text-6xl">DISEÑO </span><span className="text-primary text-6xl">GRÁFICO</span>
          </h1>
          <p className="text-sm font-bold text-slate-800">FACILITADOR EZEQUIEL SILVA</p>

          {/* call to action */}
          <div className="flex items-center mt-4 gap-4">
            <button className="bg-primary text-white px-4 py-2 rounded-md">Ver cursos</button>
            <button className="bg-secondary text-white px-4 py-2 rounded-md">Ver facilitadores</button>
          </div>
        </div>

        <div className="hidden w-[50%] md:flex justify-center items-center bg-primary/15 rounded-tl-[300px] rounded-lg">
          <Image
            src={headerLogo}
            alt="UPEDG"
            width={500}
            height={400}
          />
        </div>
      </div>

      <section className="mision-section flex flex-col items-center mb-4 space-y-3 mt-5">

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
          
          <div id="mision" className="flex flex-col items-center p-4 bg-primary/35 text-white rounded-lg">
            <h2 className="text-2xl font-bold mb-2">NUESTRA MISION</h2>
            <p className="w-[400px]">
              Nuestra misión es empoderar a
              jóvenes de escasos recursos,
              guiándolos en su búsqueda de
              pasión y propósito a través del
              diseño gráfico y audiovisual,
              proporcionándoles las
              herramientas necesarias para
              explorar y expresar su creatividad.
            </p>
          </div>

          <div id="mision-img" className="flex flex-col items-center p-4  text-white rounded-lg">
            <Image
              src={misionImage}
              alt="Mision"
              width={250}
              height={250}
            />


          </div>

          <div id="vivion-img" className="flex flex-col items-center p-4  text-white rounded-lg">

            <Image
              src={visionImage}
              alt="Vision"
              width={250}
              height={250}
            />

          </div>

          <div id="vision" className="flex flex-col items-center p-4 bg-secondary/15 text-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">NUESTRA VISION</h2>
            <p className="w-[400px]">
              Nuestra visión es crear un mundo donde
              todos los jóvenes, independientemente
              de sus circunstancias económicas,
              tengan acceso a oportunidades
              educativas que les permitan explorar y
              desarrollar su creatividad. Queremos ser
              líderes en el fomento del diseño gráfico
              y audiovisual como herramientas para el
              empoderamiento juvenil y el desarrollo
              comunitario, creando un impacto
              positivo y duradero en la sociedad.
            </p>
          </div>

          <div id="valores" className="flex flex-col items-center p-4 bg-primary/35 text-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">NUESTROS VALORES</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div id="valores-img" className="flex flex-col items-center p-4  text-gray-800 rounded-lg">
            <Image
              src={valoresImage}
              alt="Valores"
              width={250}
              height={250}
            />
          </div>
        </div>

        <div className="md:hidden grid grid-cols-1 gap-4 p-8">
          <div className="flex flex-col items-center p-4 bg-primary/35 text-white rounded-lg">
            <h2 className="text-2xl font-bold mb-2">NUESTRA MISIÓN</h2>
            <div className="md:hidden">
              <Image src={misionImage} alt="Misión" width={250} height={250} />
            </div>
            <p className="w-full md:w-[400px]">
              Nuestra misión es empoderar a jóvenes de escasos recursos, guiándolos en su búsqueda de pasión y propósito a través del diseño gráfico y audiovisual, proporcionándoles las herramientas necesarias para explorar y expresar su creatividad.
            </p>
            <div className="hidden md:block mt-4">
              <Image src={misionImage} alt="Misión" width={250} height={250} />
            </div>
          </div>

          <div className="flex flex-col items-center p-4 bg-secondary/15 text-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">NUESTRA VISIÓN</h2>
            <div className="md:hidden">
              <Image src={visionImage} alt="Visión" width={250} height={250} />
            </div>
            <p className="w-full md:w-[400px]">
              Nuestra visión es crear un mundo donde todos los jóvenes, independientemente de sus circunstancias económicas, tengan acceso a oportunidades educativas que les permitan explorar y desarrollar su creatividad. Queremos ser líderes en el fomento del diseño gráfico y audiovisual como herramientas para el empoderamiento juvenil y el desarrollo comunitario, creando un impacto positivo y duradero en la sociedad.
            </p>
            <div className="hidden md:block mt-4">
              <Image src={visionImage} alt="Visión" width={250} height={250} />
            </div>
          </div>

          <div className="flex flex-col items-center p-4 bg-primary/35 text-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">NUESTROS VALORES</h2>
            <div className="md:hidden">
              <Image src={valoresImage} alt="Valores" width={250} height={250} />
            </div>
            <p className="text-center w-full md:w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="hidden md:block mt-4">
              <Image src={valoresImage} alt="Valores" width={250} height={250} />
            </div>
          </div>
        </div>

      </section>

      <section className="mision-section flex flex-col items-center mb-4 space-y-3 mt-5">

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
