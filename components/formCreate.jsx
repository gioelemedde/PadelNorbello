"use client";
import { useFormStatus } from "react-dom";
import { create } from "@/app/db/action";
import { useRef, useState } from "react";

function FormCreate() {
  const { pending } = useFormStatus();
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    // Validazione
    let formErrors = {};
    if (!formData.get("nomeGenitore")) {
      formErrors.nomeGenitore = "Campo obbligatorio";
    }
    if (!formData.get("cognomeGenitore")) {
      formErrors.cognomeGenitore = "Campo obbligatorio";
    }
    const numeroTelefono = formData.get("numeroTelefono");
    if (!numeroTelefono) {
      formErrors.numeroTelefono = "Campo obbligatorio";
    } else if (!/^\d+$/.test(numeroTelefono)) {
      formErrors.numeroTelefono = "Numero di telefono non valido ";
    }
    const email = formData.get("email");
    if (!email) {
      formErrors.email = "Campo obbligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formErrors.email = "Inserisci un'email valida";
    }
    if (!formData.get("nomeBambino")) {
      formErrors.nomeBambino = "Campo obbligatorio";
    }
    if (!formData.get("cognomeBambino")) {
      formErrors.cognomeBambino = "Campo obbligatorio";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    } else {
      setErrors({});
    }
    setMessage(
      "Iscrizione effettuata correttamente. Ti ricontatteremo a breve per fornirti tutte le informazioni necessarie."
    );
    await create(formData);

    formRef.current.reset();

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-[var(--dark-blue)] px-8 py-5 shadow-xl w-full flex flex-col items-center rounded-3xl formCreate"
      >
        <h2 className="text-[var(--acc)] mb-8 text-center text-2xl">
          Compila e Iscriviti
        </h2>
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 my-4 ">
          <div className="col-span-2 md:col-span-1">
            <label className="mb-2">Nome Genitore</label>
            <input
              className={
                errors.nomeGenitore ? "border border-red-500 w-full" : " w-full"
              }
              type="text"
              name="nomeGenitore"
            />
            {errors.nomeGenitore && (
              <span className="text-red-500">{errors.nomeGenitore}</span>
            )}
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="mb-2">Cognome Genitore</label>
            <input
              className={
                errors.cognomeGenitore
                  ? "border border-red-500 w-full"
                  : "w-full"
              }
              type="text"
              name="cognomeGenitore"
            />
            {errors.cognomeGenitore && (
              <span className="text-red-500">{errors.cognomeGenitore}</span>
            )}
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="mb-2">Numero di Telefono</label>
            <input
              className={
                errors.numeroTelefono
                  ? "border border-red-500 w-full"
                  : "w-full"
              }
              type="tel"
              name="numeroTelefono"
              inputMode="numeric"
              pattern="\d*"
              onChange={(e) => {
                const value = e.target.value;
                if (!/^\d*$/.test(value)) {
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    numeroTelefono: "Numero di telefono non valido ",
                  }));
                } else {
                  setErrors((prevErrors) => {
                    const { numeroTelefono, ...rest } = prevErrors;
                    return rest;
                  });
                }
              }}
            />
            {errors.numeroTelefono && (
              <span className="text-red-500">{errors.numeroTelefono}</span>
            )}
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="mb-2">Email</label>
            <input
              className={
                errors.email ? "border border-red-500 w-full" : "w-full"
              }
              type="email"
              name="email"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              onChange={(e) => {
                const value = e.target.value;
                if (!/^[^\s@]+\@[^\s@]+\.[^\s@]+$/.test(value)) {
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: "Inserisci un'email valida",
                  }));
                } else {
                  setErrors((prevErrors) => {
                    const { email, ...rest } = prevErrors;
                    return rest;
                  });
                }
              }}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="mb-2">Nome Bambino</label>
            <input
              className={
                errors.nomeBambino ? "border border-red-500 w-full" : "w-full"
              }
              type="text"
              name="nomeBambino"
            />
            {errors.nomeBambino && (
              <span className="text-red-500">{errors.nomeBambino}</span>
            )}
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="mb-2">Cognome Bambino</label>
            <input
              className={
                errors.cognomeBambino
                  ? "border border-red-500 w-full"
                  : "w-full"
              }
              type="text"
              name="cognomeBambino"
            />
            {errors.cognomeBambino && (
              <span className="text-red-500">{errors.cognomeBambino}</span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-5 font-bold btnCustom w-full lg:w-auto"
          disabled={pending}
        >
          {pending ? "Invio dati..." : "Conferma Iscrizione"}
        </button>
        {message && (
          <div className="mt-5 text-green-500">
            <h2>{message}</h2>
          </div>
        )}
      </form>
    </>
  );
}

export default FormCreate;
