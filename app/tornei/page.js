import Image from "next/image";
import ".././css/tornei.css";
import prisma from "../db/db";
import Link from "next/link";
async function getData() {
  const data = await prisma.Tornei.findMany({
    orderBy: {
      createAt: "desc",
    },
  });
  return data;
}
async function Tornei() {
  const data = await getData();
  return (
    <>
      <header className="headerTornei flex items-center justify-center">
        <div className="containerTitle text-center ">
          <h1 className="text-[var(--white)] md:text-8xl text-7xl text-center font-bold">
            Tornei
          </h1>
        </div>
      </header>
      {data.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-center mt-10 text-3xl text-blue">
            Non ci sono tornei disponibili al momento.
          </h2>
          <Link href='/'>
            <button className="btn2 text-white">Torna alla home</button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 mt-10 gap-y-10">
          {data.map((torneo) => {
            let bgCard = (() => {
              let bg = "bgMisto";
              switch (torneo.tipologiaTorneo.toLowerCase()) {
                case "femminile":
                  bg = "bgFemminile";
                  break;
                case "maschile":
                  bg = "bgMaschile";
                  break;
                default:
                  bg = "bgMisto";
              }
              return bg;
            })();

            return (
              <div
                className="col-span-1 flex justify-center px-3 text-[var(--white)] "
                key={torneo.id}
              >
                <div
                  className={`border shadow-2xl flex flex-col justify-between rounded-md w-full md:w-1/2 lg:w-1/3 min-h-72 p-5 ${bgCard}`}
                >
                  <div>
                    <h2 className="text-center text-[var(--white)] uppercase text-2xl">
                      {torneo.nomeTorneo}
                    </h2>
                  </div>
                  <div>
                    <p className="text-[var(--acc)] font-bold mb-3 ">
                      Tipo Torneo:{" "}
                      <span className="text-[var(--white)] ms-2">
                        {torneo.tipologiaTorneo}
                      </span>
                    </p>
                    <p className="text-[var(--acc)] font-bold mb-3 ">
                      Data Inizio Torneo:{" "}
                      <span className="text-[var(--white)] ms-2">
                        {torneo.dataInizio}
                      </span>
                    </p>
                    <p className="text-[var(--acc)] font-bold mb-3 ">
                      Data Fine Torneo:{" "}
                      <span className="text-[var(--white)] ms-2">
                        {torneo.dataFine}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                   { torneo.linkTorneo &&
                    <a href={torneo.linkTorneo} target="_blank">
                      <button className="btn-nav">Partecipa</button>
                    </a>
                    }
                    {!torneo.linkTorneo && <a href="tel:+3487263203" target="_blank">
                      <button className="btn-nav">Chiama e Pronota</button>
                    </a>
                    }
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Tornei;
