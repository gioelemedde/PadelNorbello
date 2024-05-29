import { redirect } from "next/navigation";
import readUserSession from "../lib/actions";
import Image from "next/image";
import TabCampoEstivo from "./components/tabCampoEstivo";
import ".././css/admin.css";
import TabTornei from "./components/tabTornei";
import { unstable_noStore as noStore } from 'next/cache';


export default async function PrivatePage() {
  noStore();
  const { data, error } = await readUserSession();


  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
    <h1 className="text-center font-bold text-red-500 pt-20 text-4xl lg:hidden">Tabelle disponibili solo da Desktop</h1>
    <div className=" pt-24 px-5 hidden lg:block ">
      <div className="flex justify-center items-center gap-5 mb-10 ">
        <h1 className="text-6xl text-[var(--acc)] my-a">
          Bentornato Roby
        </h1>
        <Image width={40} height={40} alt="skull" src="/img/skull.png" className="w-auto h-auto mt-2" />
      </div>
      <div>
      <h2 className="text-xl mb-2">Iscrizioni Campo Estivo</h2>
        <TabCampoEstivo /> 
        <h2 className="text-xl mb-2 mt-8">Tabella Tornei</h2>
        <TabTornei />
      </div>
    </div>
    </>
  );
}
