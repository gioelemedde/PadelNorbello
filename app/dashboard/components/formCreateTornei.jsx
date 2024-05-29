"use client";
import { createTorneo } from "@/app/db/action";
import { useRef } from "react";

function FormCreateTornei() {
  const form = useRef();
  return (
    <form
      action={createTorneo}
      className="text-white px-2 bg-[var(--blue-soft)] rounded-t-xl"
      ref={form}
      onSubmit={form.current?.reset()}
    >
      <div className="grid grid-cols-6  py-5  gap-2">
        <div className="col-span-1 text-center ">
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="text"
            name="nomeTorneo"
            placeholder="Nome Torneo"
          />
        </div>
        <div className="col-span-1 text-center ">
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="date"
            name="dataInizio"
            placeholder="Data Inizio"
          />
        </div>
        <div className="col-span-1 text-center ">
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="date"
            name="dataFine"
            placeholder="Data Fine"
          />
        </div>
        <div className="col-span-1 text-center ">
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="text"
            name="tipologiaTorneo"
            placeholder="Tipologia Torneo"
          />
        </div>
        <div className="col-span-1 text-center ">
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="text"
            name="linkTorneo"
            placeholder="Link Torneo"
          />
        </div>
        <div className="col-span-1 text-center ">
          <button  className="rounded-md bg-[var(--acc)] w-full flex justify-center py-1 font-bold active:scale-90">
            Aggiungi
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormCreateTornei;
