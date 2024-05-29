import Image from "next/image";
import "../app/css/chiSiamo.css";
import Increment from "./numberIncrement";
import Observer from "./observer";

function ChiSiamo() {
  return (
    <main>
      <section className=" min-h-screen sectionChiSiamo">
        <h2 className="text-center text-5xl pt-10 text-[var(--dark-blue)]">
          Chi siamo
        </h2>
        <div className="grid grid-cols-7 px-5 gap-7 mt-10  ">
          <div className="col-span-7 lg:col-span-3 p-0 md:pe-10 flex justify-center lg:justify-end ">
            <div className="relative">
              <div className="imgInfo lg:flex flex-col justify-evenly items-center hidden ">
                <Image
                  src="/img/padel2.png"
                  alt="ragazzo che gioca a padel"
                  width={500}
                  height={500}
                  className="h-2/5 w-2/5 "
                />
                <div className="text-center text-[var(--white)]">
                  <Increment />
                  <p className="text">ISCRITTI</p>
                </div>
              </div>
              <Image
                src="/img/section1.jpg"
                alt="ragazzo che gioca a padel"
                width={450}
                height={500}
                className=" h-[500px] object-cover "
              />
            </div>
          </div>
          <div className="col-span-7 lg:col-span-4 p-5 flex justify-center items-center lg:justify-start">
            <div>
              <h3 className="text-[var(--dark-blue)] text-2xl font-bold">
                Benvenuti alla nostra struttura di padel a Norbello
              </h3>
              <div className="grid grid-cols-2 gap-8 gap-y-8 mt-5 text">
                <div className="col-span-2 lg:col-span-1 ">
                  <p>
                    Benvenuti alla {""}
                    <span className=" font-bold text-[var(--dark-blue)]">
                       Sport Club Time ASD
                    </span>
                    , la tua destinazione per un&rsquo;esperienza di padel di
                    qualità a Norbello. Fondata nel 2024, siamo orgogliosi di
                    offrire due campi da padel all&rsquo;avanguardia, uno
                    coperto per goderti il gioco in qualsiasi condizione
                    meteorologica e uno all&rsquo;aperto per immergerti
                    completamente nella bellezza del nostro clima.
                  </p>
                </div>
                <div className="col-span-2 lg:col-span-1 ">
                  <p>
                    Inoltre, abbiamo un campo da pickleball per coloro che
                    desiderano provare una variante eccitante del gioco. La
                    nostra struttura moderna non solo offre strutture sportive
                    di alta qualità, ma è anche dotata di un punto ristoro dove
                    puoi rilassarti e rigenerarti dopo una partita intensa.
                  </p>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <p>
                    Presso la{" "}
                    <span className=" font-bold text-[var(--dark-blue)]">
                      Sport Club Time ASD
                    </span>{" "}
                    , la passione per il padel si combina con un servizio
                    clienti eccezionale e un ambiente accogliente che ti farà
                    sentire parte della nostra famiglia. Siamo ansiosi di darti
                    il benvenuto e di condividere la nostra passione per questo
                    sport con te.
                  </p>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <p>
                    Non ci fermiamo qui. Durante i mesi estivi, organizziamo
                    campi estivi per bambini, dove possono imparare il gioco del
                    padel in un ambiente divertente e sicuro, sotto la guida dei
                    nostri istruttori esperti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Observer
        tag="section"
        classAdd="observerZoom"
        className="w-full h-[30vh] sectionIcon lg:grid grid-cols-4 my-5 text-white hidden"
      >
        <div className="col-span-1 flex justify-center items-center">
          <h2 className="text-4xl">3 Campi</h2>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <h2 className="text-4xl">2 Coach </h2>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <h2 className="text-4xl">1 Punto Ristoro</h2>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <h2 className="text-4xl">5 Corsi</h2>
        </div>
      </Observer>

      <section className=" sectionChiSiamo hidden md:block overflow-hidden">
        <div className="grid grid-cols-12 grid-rows-3 lg:gap-y-10 gap-y-10 pt-16 ">
          <Observer
            classAdd="observerLeft"
            className="col-span-12 lg:col-span-9 lg:ps-10 px-5 flex flex-col items-center lg:block "
          >
            <h3 className="text-[var(--dark-blue)] text-2xl mb-5">
              Campo all&rsquo;aperto
            </h3>
            <div className="flex flex-col items-center justify-center lg:flex-row w-full">
              <div className="bgCampo1 h-[300px] p-4">
                <div className="border-2 border-[var(--white)] w-full h-full flex flex-col justify-center items-center">
                  <h2 className="text-[var(--white)] text-2xl text-center">
                    Affitto Campo: 32€
                  </h2>
                  <a
                    href="https://playtomic.io/asd-sport-club-time/d8bd0052-8dc2-48cb-bba2-ba4b99bae9dc?q=PADEL~2024-05-11~~~"
                    target="_blank"
                  >
                    <button className="btn-card mt-5">Prenota</button>
                  </a>
                </div>
              </div>
              <div className=" w-full lg:ps-10 mt-5 lg:mt-0">
                <div className=" lg:max-h-[300px] lg:overflow-y-auto">
                  <p className="mb-2 hidden lg:block ">
                    Scopri l&rsquo;esperienza unica del padel nel nostro campo all&rsquo;aperto, immerso in un ambiente naturale e rilassante. Progettato per giocatori di tutti i livelli, il nostro campo offre la superficie ideale per partite avvincenti e divertenti. Vieni a goderti il sole e l&rsquo;aria fresca mentre pratichi il tuo sport preferito. Che tu sia un principiante o un esperto, il nostro campo di padel è il luogo perfetto per migliorare il tuo gioco e trascorrere del tempo di qualità con amici e familiari..
                  </p>
                </div>
                <p className="text-[var(--dark-blue)] mb-2 ">
                  <span className="text-[var(--acc)] font-extrabold">
                    Superficie:
                  </span>
                  Erba Sintetica
                </p>
                <p className="text-[var(--dark-blue)] mb-2 ">
                  <span className="text-[var(--acc)] font-extrabold">
                    Illuminazione:
                  </span>
                  Fari Notturni
                </p>
                <p className="text-[var(--dark-blue)] mb-2 ">
                  <span className="text-[var(--acc)] font-extrabold">
                    Dimesioni:
                  </span>
                  10m X 20m
                </p>
              </div>
            </div>
          </Observer>
          <Observer
            classAdd="observerRight"
            className="col-span-12 lg:col-span-9 lg:col-start-4 lg:pe-10 px-5 flex flex-col items-center lg:block  "
          >
            <h3 className="text-[var(--dark-blue)] text-2xl mb-5 lg:text-end">
              Campo al coperto
            </h3>
            <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:text-end w-full">
              <div className=" w-full lg:pe-10 mt-5 lg:mt-0 ">
                <div className="lg:max-h-[300px] lg:overflow-y-auto">
                  <p className="mb-2 hidden lg:block ">
                    Scopri l&rsquo;esperienza unica del padel nel nostro campo al chiuso, perfetto per giocare in qualsiasi condizione meteorologica. Progettato per giocatori di tutti i livelli, il nostro campo offre la superficie ideale per partite avvincenti e divertenti. Vieni a migliorare le tue abilità tecniche in un ambiente confortevole e ben illuminato. Che tu sia un principiante o un esperto, il nostro campo di padel è il luogo perfetto per migliorare il tuo gioco e trascorrere del tempo di qualità con amici e familiari.
                  </p>
                </div>
                <p className="text-[var(--dark-blue)] mb-2 ">
                  <span className="text-[var(--acc)] font-extrabold">
                    Superficie:
                  </span>
                  Erba Sintetica
                </p>
                <p className="text-[var(--dark-blue)] mb-2 ">
                  <span className="text-[var(--acc)] font-extrabold">
                    Illuminazione:
                  </span>
                  Fari Notturni
                </p>
                <p className="text-[var(--dark-blue)] mb-2 ">
                  <span className="text-[var(--acc)] font-extrabold">
                    Dimesioni:
                  </span>
                  10m X 20m
                </p>
              </div>
              <div className="bgCampo2 h-[300px] p-4">
                <div className="border-2 border-[var(--white)] w-full h-full flex flex-col justify-center items-center">
                  <h2 className="text-[var(--white)] text-2xl text-center">
                    Affitto Campo: 40€
                  </h2>
                  <a
                    href="https://playtomic.io/asd-sport-club-time/d8bd0052-8dc2-48cb-bba2-ba4b99bae9dc?q=PADEL~2024-05-11~~~"
                    target="_blank"
                  >
                    <button className="btn-card mt-5">Prenota</button>
                  </a>
                </div>
              </div>
            </div>
          </Observer>
          <Observer
            classAdd="observerLeft"
            className="col-span-12 lg:col-span-9 lg:ps-10 px-5 flex flex-col items-center lg:block "
          >
            <h3 className="text-[var(--dark-blue)] text-2xl mb-5">
              Campo da pickleball
            </h3>
            <div className="flex flex-col items-center justify-center lg:flex-row w-full">
              <div className="bgCampo3 h-[300px] p-4">
                <div className="border-2 border-[var(--white)] w-full h-full flex flex-col justify-center items-center">
                  <h2 className="text-[var(--white)] text-2xl text-center">
                    Affitto Campo: 32€
                  </h2>
                  <a disabled={true} 
                    href="https://playtomic.io/asd-sport-club-time/d8bd0052-8dc2-48cb-bba2-ba4b99bae9dc?q=PADEL~2024-05-11~~~"
                    target="_blank"
                  >
                    <button disabled={true} className="btn-card mt-5 cursor-not-allowed opacity-50">Prenota</button>
                  </a>
                </div>
              </div>
              <div className=" w-full lg:ps-10 mt-5 lg:mt-0">
                <div className=" lg:max-h-[300px] lg:overflow-y-auto">
                  <p className="mb-2 hidden lg:block ">
                  Scopri l&rsquo;esperienza entusiasmante del pickleball nel nostro campo, progettato per giocatori di tutti i livelli. Che tu sia un principiante o un esperto, il nostro campo offre la superficie ideale per partite divertenti e competitive. Vieni a migliorare le tue abilità tecniche in un ambiente confortevole e ben attrezzato. Il nostro campo di pickleball è il luogo perfetto per trascorrere del tempo di qualità con amici e familiari, praticando uno sport dinamico e coinvolgente.
                  </p>
                </div>
                <p className="text-[var(--dark-blue)] mb-2 ">
                  <span className="text-[var(--acc)] font-extrabold">
                    Superficie:
                  </span>
                  Erba Sintetica
                </p>
                <p className="text-[var(--dark-blue)] mb-2 ">
                  <span className="text-[var(--acc)] font-extrabold">
                    Illuminazione:
                  </span>
                  Fari Notturni
                </p>
                <p className="text-[var(--dark-blue)] mb-2 ">
                  <span className="text-[var(--acc)] font-extrabold">
                    Dimesioni:
                  </span>
                  10m X 20m
                </p>
              </div>
            </div>
          </Observer>
        </div>
      </section>
      <section className="sectionChisiamo md:hidden mt-10">
        <h2 className="text-center mb-5 text-[var(--dark-blue)] text-2xl ">
          I NOSTRI CAMPI
        </h2>
        <div className="grid grid-cols-1 px-5 gap-y-10">
          <div className="col-span-1">
            <Observer classAdd="observerZoom" className="cardCampo1 p-3">
              <div className="border-2 p-8">
                <h3 className="text-[var(--white)] text-xl mb-5 text-center">
                  Campo all&rsquo;aperto
                </h3>
                <div className="flex flex-col">
                  <span className="text-[var(--white)] mb-2 ">
                    <h3 className="text-[var(--acc)] font-extrabold inline-block me-3">
                      Superficie:
                    </h3>
                    Erba Sintetica
                  </span>
                  <span className="text-[var(--white)] mb-2 ">
                    <h3 className="text-[var(--acc)] font-extrabold inline-block me-3">
                      Illuminazione:
                    </h3>
                    Fari Notturni
                  </span>
                  <span className="text-[var(--white)] mb-2 ">
                    <h3 className="text-[var(--acc)] font-extrabold inline-block me-3">
                      Dimesioni:
                    </h3>
                    10m X 20m
                  </span>
                  <span className="text-[var(--white)] mb-2 ">
                    <h3 className="text-[var(--acc)] font-extrabold inline-block me-3">
                      Affitto Campo:
                    </h3>
                    32€
                  </span>
                </div>
                <a
                  className=""
                  href="https://playtomic.io/asd-sport-club-time/d8bd0052-8dc2-48cb-bba2-ba4b99bae9dc?q=PADEL~2024-05-11~~~"
                  target="_blank"
                >
                  <button className="btn-card mt-5 w-full uppercase">
                    Prenota
                  </button>
                </a>
              </div>
            </Observer>
          </div>
          <div className="col-span-1">
            <Observer classAdd="observerZoom" className="cardCampo2 p-3">
              <div className="border-2 p-8">
                <h3 className="text-[var(--white)] text-xl mb-5 text-center">
                  Campo coperto
                </h3>
                <div className="flex flex-col">
                  <span className="text-[var(--white)] mb-2 ">
                    <h3 className="text-[var(--acc)] font-extrabold inline-block me-3">
                      Superficie:
                    </h3>
                    Erba Sintetica
                  </span>
                  <span className="text-[var(--white)] mb-2 ">
                    <h3 className="text-[var(--acc)] font-extrabold inline-block me-3">
                      Illuminazione:
                    </h3>
                    Fari Notturni
                  </span>
                  <span className="text-[var(--white)] mb-2 ">
                    <h3 className="text-[var(--acc)] font-extrabold inline-block me-3">
                      Dimesioni:
                    </h3>
                    10m X 20m
                  </span>
                  <span className="text-[var(--white)] mb-2 ">
                    <h3 className="text-[var(--acc)] font-extrabold inline-block me-3">
                      Affitto Campo:
                    </h3>
                    40€
                  </span>
                </div>
                <a
                  className=""
                  href="https://playtomic.io/asd-sport-club-time/d8bd0052-8dc2-48cb-bba2-ba4b99bae9dc?q=PADEL~2024-05-11~~~"
                  target="_blank"
                >
                  <button className="btn-card mt-5 w-full uppercase">
                    Prenota
                  </button>
                </a>
              </div>
            </Observer>
          </div>
          <div className="col-span-1">
            <Observer classAdd="observerZoom" className="cardCampo3 p-3">
              <div className="border-2 p-8 flex flex-col">
                <h3 className="text-[var(--white)] text-xl mb-5 text-center">
                  Campo pickleball
                </h3>
                <div className="flex flex-col">
                  <span className="text-[var(--white)] mb-2 ">
                    <h3 className="text-[var(--acc)] font-extrabold inline-block me-3">
                      Superficie:
                    </h3>
                    Erba Sintetica
                  </span>
                  <span className="text-[var(--white)] mb-2 ">
                    <h3 className="text-[var(--acc)] font-extrabold inline-block me-3">
                      Illuminazione:
                    </h3>
                    Fari Notturni
                  </span>
                  <span className="text-[var(--white)] mb-2 ">
                    <h3 className="text-[var(--acc)] font-extrabold inline-block me-3">
                      Dimesioni:
                    </h3>
                    10m X 20m
                  </span>
                  <span className="text-[var(--white)] mb-2 ">
                    <h3 className="text-[var(--acc)] font-extrabold inline-block me-3">
                      Affitto Campo:
                    </h3>
                    32€
                  </span>
                </div>
                <a disabled={true}
                  className=""
                  href="https://playtomic.io/asd-sport-club-time/d8bd0052-8dc2-48cb-bba2-ba4b99bae9dc?q=PADEL~2024-05-11~~~"
                  target="_blank"
                >
                  <button className="btn-card mt-5 w-full uppercase opacity-50" disabled={true}>
                    Prenota
                  </button>
                </a>
              </div>
            </Observer>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ChiSiamo;
