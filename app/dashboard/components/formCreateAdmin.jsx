"use client";
import { createAdmin } from "@/app/db/action";
import { useRef } from "react";

function FormCreateAdmin() {
  const form = useRef();
  return (
    <form
      action={createAdmin}
      className="text-white px-2 bg-[var(--blue-soft)] rounded-t-xl"
      ref={form}
      onSubmit={form.current?.reset()}
    >
      <div className="grid grid-cols-12  py-5  gap-2">
        <div className="col-span-1 text-center ">
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="text"
            name="nomeGenitore"
            placeholder="Nome Gen"
          />
        </div>
        <div className="col-span-1 text-center ">
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="text"
            name="cognomeGenitore"
            placeholder="Cognome Gen"
          />
        </div>
        <div className="col-span-2 text-center ">
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="text"
            name="numeroTelefono"
            placeholder="Telefono"
          />
        </div>
        <div className="col-span-2 text-center ">
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="col-span-1 text-center ">
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="text"
            name="nomeBambino"
            placeholder="Nome Bamb"
          />
        </div>
        <div className="col-span-1 text-center ">
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="text"
            name="cognomeBambino"
            placeholder="Cognome Bamb"
          />
        </div>
        <div className={`col-span-1 text-center font-bold`}>
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="text"
            name="giugnoPagato"
            placeholder="Giug Pagato"
            defaultValue="NO"
          />
        </div>
        <div className={`col-span-1 text-center font-bold `}>
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="text"
            name="luglioPagato"
            placeholder="Lugl Pagato"
            defaultValue="NO"
          />
        </div>
        <div className={`col-span-1 text-center font-bold `}>
          <input
            className=" bg-transparent w-full text-center border-2 rounded-md pb-1 "
            type="text"
            name="agostoPagato"
            placeholder="Ago Pagato"
            defaultValue="NO"
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

export default FormCreateAdmin;
