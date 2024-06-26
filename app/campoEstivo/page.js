import FromCreate from "@/components/formCreate";
import ".././css/campoEstivo.css";
import Image from "next/image";

export default async function CampoEstivo() {
  return (
    <>
      <header className="headerCampoEstivo flex items-center justify-center">
        <div className="containerTitle text-center ">
          <h1 className="text-[var(--white)] md:text-8xl text-7xl text-center font-bold">
            Campo Estivo
          </h1>
        </div>
      </header>
      <section className=" grid grid-cols-2 px-5 lg:px-20 mt-10 gap-10 overflow-hidden">
        <div className="col-span-2 lg:col-span-1 flex justify-center lg:mt-0 order-2 lg:order-1 lg:px-5 animation-left ">
          <FromCreate />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center lg:items-start order-1 lg:order-2 animation-right ">
          <h2 className="text-blue text-3xl mb-3">Summer Padel Kids</h2>
          <p>
            {" "}
            Divertimento sotto il sole! Un campo estivo emozionante e educativo
            per i giovani appassionati di padel. I bambini potranno immergersi
            in un ambiente divertente e sicuro, dove impareranno le basi del
            padel attraverso giochi, attività e lezioni guidate da istruttori
            esperti. Con un mix di allenamento tecnico e momenti ludici, il
            Campo <span className="font-bold text-blue">
              Summer Padel Kids
            </span>{" "}
            offre un&rsquo;esperienza indimenticabile che incoraggia lo sviluppo
            delle abilità motorie, la socializzazione e il divertimento
            all&rsquo;aria aperta. <br />
          </p>
          <div className="mt-5 md:flex items-center hidden">
            <Image
              src="/img/coach.png"
              width={500}
              height={500}
              priority
              alt="logo"
              className=" h-16 w-16 rounded-full border-4 border-[var(--acc)] p-1"
            />
            <div className="ms-5">
              <h3 className="text-blue">Mirko Usai</h3>
              <p>Coach Certificato</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
