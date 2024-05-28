'use client';
import signInWhitYourPassword from "@/app/login/actions";
import { useRef } from "react";
;

export default function FormLogin() {
  const formRef = useRef(null);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    try {
      const result = await signInWhitYourPassword(formDataObj);
      if (result.error) {
        alert("Errore durante l'accesso ");
      } 
    } catch (err) {
      alert("Errore durante l'accesso ");
    }
  }


  return (
    <div className="flex justify-center min-h-[80vh] lg:min-h-[70vh] items-center px-5">
       <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-[var(--dark-blue)] px-8 py-5 shadow-xl flex flex-col items-center rounded-3xl formCreate"
    >
      <h2 className="text-[var(--acc)] mb-8 text-center text-2xl">
      Inserisci i tuoi dati per accedere
      </h2>
      <div className="grid grid-cols-2 gap-y-10 gap-x-8 my-4 ">
        <div className="col-span-2 md:col-span-1">
          <label className="mb-2">Email</label>
          <input className="w-full" type="email" name="email" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="mb-2">Password</label> {/* Corretto label */}
          <input className="w-full" type="password" name="password" />
        </div>
      </div>
      <button
        type="submit"
        className="mt-5 font-bold btnCustom w-full lg:w-auto"
      >
        Accedi
      </button>
    </form>
    </div>
   );
}
