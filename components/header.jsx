import Image from "next/image";
import "../app/css/header.css";

function Header() {
  return (
    <>
      <header className="header md:grid grid-cols-12 text-[var(--white)] overflow-hidden relative hidden ">
        <div className="triangle"></div>
        <div className="triangleBlue"></div>
        <div className="col-span-12 md:col-span-6 flex flex-col items-center md:items-start justify-center px-8 h-full ">
          <div className="containerTitle text-center md:text-start mt-10 md:mt-0">
            <h1 className="text-[var(--white)] text-8xl uppercase font-bold">
              Sport Club Time <span>ASD</span>
            </h1>
          </div>
          <div className="animationLeft">
            <a
              href="https://playtomic.io/asd-sport-club-time/d8bd0052-8dc2-48cb-bba2-ba4b99bae9dc?q=PADEL~2024-05-11~~~"
              target="_blank"
            >
              <button className="btn2 mt-5 md:ms-3 ms-0 uppercase font-bolder">
                {" "}
                <h4>Prenota Campo</h4>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-6 md:flex hidden items-center justify-center pt-12  h-full">
          <div className="h-3/4 w-3/4 grid grid-cols-2 grid-rows-2 gap-3 gridAnimation">
            <div className="col-span-1 row-span-1 img-grid1 hidden lg:block "></div>
            <div className="col-span-2 lg:col-span-1 row-span-1 bg-[var(--acc-50)] flex flex-col justify-evenly items-center py-2 ">
              <div className="flex flex-col justify-evenly items-center containerAnimation">
                <h2 className=" font-bold text-xl">Orari</h2>
                <p>Lunedi: 8:00 - 23:00</p>
                <p>Martedì: 8:00 - 23:00</p>
                <p>Mercoledì: 8:00 - 23:00</p>
                <p>Giovedì: 8:00 - 23:00</p>
                <p>Venerdì: 8:00 - 23:00</p>
                <p>Sabato: 8:00 - 23:00</p>
                <p>Domenica: 8:00 - 23:00</p>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 row-span-1 bg-[var(--dark-blue-50)] backdrop-blur-sm flex flex-col justify-center items-center ">
              <h2 className=" font-bold text-xl mb-3 ">Contatti</h2>
              <div>
                <p className="flex mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 me-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>{" "}
                  <a href="mailto:sportclubtime@yahoo.com">sportclubtime@yahoo.com</a>
                </p>
                <p className="flex mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 me-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>{" "}
                  <a href="tel:+393487263203">3487263203</a>
                </p>

                <p className="mb-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 me-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  Via dell&rsquo;Autonomie, 35, Norbello
                </p>
              </div>
            </div>
            <div className="col-span-1 img-grid4 row-span-1"></div>
          </div>
        </div>
      </header>
      <header className="md:hidden h-screen headerMobile flex flex-col pt-[80px] overflow-hidden px-5 ">
        <div className=" flex flex-col mb-6 mt  pb-3">
          <h1 className="text-[var(--white)] text-5xl uppercase font-bold mt-2 animation-left titleMobile">
            Sport Club Time <span>ASD</span>
          </h1>
          <a
            href="https://playtomic.io/asd-sport-club-time/d8bd0052-8dc2-48cb-bba2-ba4b99bae9dc?q=PADEL~2024-05-11~~~"
            target="_blank"
          >
            <button className="btnCustomMobile mt-5 md:ms-3 ms-0 font-bolder text-white shadow-none animation-right hover:bg-[var(--acc)]">
              <h4>Prenota Campo</h4>
            </button>
          </a>
        </div>
        <div className="w-full flex flex-col items-center relative overflow-hidden text-lg">
          <div className=" bg-[var(--acc-50)] flex flex-col justify-evenly items-center p-3  w-full text-[var(--white)] mb-4 animation-zoom ">
            <h2 className=" font-bold text-xl mb-2">Orari</h2>
            <div className="flex justify-evenly w-full mb-1 ">
              <p>Lun: 8 - 21</p>
              <p>Mar: 8 - 21</p>
            </div>
            <div className="flex justify-evenly w-full mb-1">
              <p>Mer: 8 - 21</p>
              <p>Gio: 8 - 21</p>
            </div>
            <div className="flex justify-evenly w-full mb-1">
              <p>Ven: 8 - 21</p>
              <p>Sab: 8 - 21</p>
            </div>
            <div className="flex justify-evenly w-full mb-1">
              <p>Dom: 8 - 21</p>
            </div>
          </div>
          <div className=" bg-[var(--dark-blue)] flex flex-col justify-evenly items-center p-3 w-full text-[var(--white)] animation-zoom ">
            <h2 className=" font-bold text-xl mb-3 ">Contatti</h2>
            <div>
              <p className="flex mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 me-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <a href="mailto:sportclubtime@yahoo.com">sportclubtime@yahoo.com</a>
              </p>
              <p className="flex mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 me-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>{" "}
                <a href="tel:+393487263203">3487263203</a>
              </p>

              <p className="mb-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 me-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                Via dell&rsquo;Autonomie, 35, Norbello
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

{
  /* <div className="poligonMobile z-0"></div>
          <Image
            src="/img/header.png"
            width={500}
            height={500}
            priority
            alt="logo"
            className="w-auto h-full relative z-2 imgHeaderMobile "
          /> */
}
