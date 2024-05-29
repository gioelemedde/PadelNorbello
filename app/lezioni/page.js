import ".././css/lezioni.css";
import Observer from "@/components/observer";
function Lezioni() {
  return (
    <>
      <header className="headerLezioni flex items-center justify-center">
        <div className="containerTitle text-center ">
          <h1 className="text-[var(--white)] md:text-8xl text-7xl text-center font-bold">
            Lezioni
          </h1>
        </div>
      </header>
      <section className="mt-14 grid grid-cols-2 gap-2 overflow-x-hidden">
        <div className="col-span-2 lg:col-span-1 flex lg:justify-end justify-center order-2 lg:order-1 px-6 md:px-0 ">
          <div className="imgLezioni border lg:h-full h-[300px] md:w-2/3 w-full mt-5 md:mt-0 animation-left "></div>
        </div>
        <div  className="col-span-2 lg:col-span-1 flex flex-col justify-center items-center lg:justify-start lg:items-start px-6 md:px-10 lg:pe-36 order-1 lg:order-2 lg:py-8 animation-right">
          <h3 className="bg-[var(--acc)] px-3 rounded-xl text-[var(--white)]">
            Corsi individuali e di gruppo
          </h3>
          <h2 className="mt-5 md:text-4xl text-3xl text-blue">
            {" "}
            I migliori corsi per tutte le età
          </h2>
          <p className="mt-5">
            Esplora le nostre opzioni di lezioni di padel, progettate per
            soddisfare le esigenze di giocatori di tutte le età e livelli di
            abilità. Offriamo corsi sia individuali che di gruppo, adatti a
            chiunque desideri imparare il gioco del padel o migliorare le
            proprie capacità. I nostri istruttori altamente qualificati e
            appassionati sono pronti ad aiutarti a padroneggiare le tecniche di
            gioco, sviluppare strategie vincenti e divertirti sulla nostra
            struttura moderna e sicura. Che tu sia un principiante assoluto o un
            giocatore esperto, inclusi i più piccoli, c&rsquo;è una lezione su
            misura per te per esplorare il meraviglioso mondo del padel.
          </p>
        </div>
      </section>
      <Observer
        tag="section"
        classAdd="observerZoom"
        className="w-full h-[30vh] sectionIcon lg:grid grid-cols-4 my-16 text-white hidden"
      >
        <div className="col-span-1 flex justify-center items-center">
          <h2 className="text-4xl">Lezioni Adulti</h2>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <h2 className="text-4xl">Lezioni Bambini</h2>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <h2 className="text-4xl">Lezioni Individuali</h2>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <h2 className="text-4xl">Lezioni di Gruppo</h2>
        </div>
      </Observer>
      <section className=" grid grid-cols-3 px-10 lg:px-20 mt-16 lg:mt-0 items-center ">
        <div className="col-span-3 lg:col-span-1 ">
          <h3 className="bg-[var(--acc)] text-white inline px-5 rounded-2xl">Coach certificati</h3>
          <h2 className="md:text-5xl text-3xl mt-1 text-blue ">
            Scegli il piano perfetto per te
          </h2>
          <p className="mt-5">
          Scopri le lezioni individuali e di gruppo personalizzate, tenute da istruttori certificati, per migliorare le tue abilità nel padel. Pianifica la tua sessione di allenamento su misura e goditi un&rsquo;esperienza di apprendimento coinvolgente e divertente con i tuoi amici o con istruttori dedicati. 
          </p>
        </div>
        <div className="col-span-3 lg:col-span-2 flex flex-wrap justify-center items-center mt-10 lg:mt-0">
          <Observer classAdd="observerZoom" className="shadow-xl mb-5 lg:mb-0 hover:scale-105 bg-[var(--white)] transition w-[345px]">
            <div className="imgCardLezioni flex flex-col items-center justify-center">
              <p>Individuale</p>
              <h2 className="text-5xl mt-1">30 €</h2>
            </div>
            <div className="mt-5 flex justify-center py-5">
              <ul>
                <li className="flex items-center justify-center my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block me-1 text-[var(--acc)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Miglioramento tecnico
                </li>
                <li className="flex items-center justify-center my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block me-1 text-[var(--acc)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Focus sulla progressione individuale
                </li>
                <li className="flex items-center justify-center my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block me-1 text-[var(--acc)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Feedback dettagliato e diretto
                </li>
                <li className="flex items-center justify-center my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block me-1 text-[var(--acc)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Durata: 1 ora
                </li>
              </ul>
            </div>
            <div className="py-5 flex justify-center items-center">
              <a href="tel:+393496600822">
              <button className="btn2  text-white">Chiama e pronota</button>
              </a>
            </div>
          </Observer>
          <Observer classAdd="observerZoom" className="shadow-xl mb-5 lg:mb-0 hover:scale-105 bg-[var(--white)] transition w-[345px] ">
            <div className="imgCardLezioni2 flex flex-col items-center justify-center">
              <p>Di Gruppo</p>
              <h2 className="text-5xl mt-1">35 €</h2>
            </div>
            <div className="mt-5 flex justify-center py-5">
              <ul>
                <li className="flex items-center justify-center my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block me-1 text-[var(--acc)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Prezzo Totale
                </li>
                <li className="flex items-center justify-center my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block me-1 text-[var(--acc)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Max: 6 persone
                </li>
                <li className="flex items-center justify-center my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block me-1 text-[var(--acc)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Durata: 90 min
                </li>
                <li className="flex items-center justify-center my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block me-1 text-[var(--acc)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                   Apprendimento Collettivo
                </li>
              </ul>
            </div>
            <div className="py-5 flex justify-center items-center">
            <a href="tel:+393496600822">
              <button className="btnCustom  text-white">Chiama e pronota</button>
              </a>
            </div>
          </Observer>
        </div>
      </section>
    </>
  );
}

export default Lezioni;
