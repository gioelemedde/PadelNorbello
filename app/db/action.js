"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";

export async function create(formData) {
  "use server";
  const nomeGenitore = formData.get("nomeGenitore");
  const cognomeGenitore = formData.get("cognomeGenitore");
  const numeroTelefono = formData.get("numeroTelefono");
  const email = formData.get("email");
  const nomeBambino = formData.get("nomeBambino");
  const cognomeBambino = formData.get("cognomeBambino");
  await prisma.CeIscritti.create({
    data: {
      nomeGenitore: nomeGenitore,
      cognomeGenitore: cognomeGenitore,
      numeroTelefono: numeroTelefono,
      email: email,
      nomeBambino: nomeBambino,
      cognomeBambino: cognomeBambino,
    },
  });
  revalidatePath("/dashboard");
}

export async function createAdmin(formData) {
  "use server";
  const nomeGenitore = formData.get("nomeGenitore");
  const cognomeGenitore = formData.get("cognomeGenitore");
  const numeroTelefono = formData.get("numeroTelefono");
  const email = formData.get("email");
  const nomeBambino = formData.get("nomeBambino");
  const cognomeBambino = formData.get("cognomeBambino");
  const giugnoPagato = formData.get("giugnoPagato");
  const luglioPagato = formData.get("luglioPagato");
  const agostoPagato = formData.get("agostoPagato");
  await prisma.CeIscritti.create({
    data: {
      nomeGenitore: nomeGenitore,
      cognomeGenitore: cognomeGenitore,
      numeroTelefono: numeroTelefono,
      email: email,
      nomeBambino: nomeBambino,
      cognomeBambino: cognomeBambino,
      giugnoPagato: giugnoPagato,
      luglioPagato: luglioPagato,
      agostoPagato: agostoPagato,
    },
  });
  revalidatePath("/dashboard");
}

export async function edit(formData) {
  "use server";
  const inputId = formData.get("id");
  const nomeGenitore = formData.get("nomeGenitore");
  const cognomeGenitore = formData.get("cognomeGenitore");
  const numeroTelefono = formData.get("numeroTelefono");
  const email = formData.get("email");
  const nomeBambino = formData.get("nomeBambino");
  const cognomeBambino = formData.get("cognomeBambino");
  const giugnoPagato = formData.get("giugnoPagato");
  const luglioPagato = formData.get("luglioPagato");
  const agostoPagato = formData.get("agostoPagato");
  await prisma.CeIscritti.update({
    where: {
      id: inputId,
    },
    data: {
      nomeGenitore: nomeGenitore,
      cognomeGenitore: cognomeGenitore,
      numeroTelefono: numeroTelefono,
      email: email,
      nomeBambino: nomeBambino,
      cognomeBambino: cognomeBambino,
      giugnoPagato: giugnoPagato,
      luglioPagato: luglioPagato,
      agostoPagato: agostoPagato,
    },
  });
  revalidatePath("/dashboard");
}

export async function deleteItem(formData) {
  "use server";
  const inputId = formData.get("id");
  await prisma.CeIscritti.delete({
    where: {
      id: inputId,
    },
  });
  revalidatePath("/dashboard");
}

export async function createTorneo(formData) {
  "use server";
  const nomeTorneo = formData.get("nomeTorneo");
  const dataInizio = formData.get("dataInizio");
  const dataFine = formData.get("dataFine");
  const tipologiaTorneo = formData.get("tipologiaTorneo");
  const linkTorneo = formData.get("linkTorneo");
  await prisma.Tornei.create({
    data: {
      nomeTorneo: nomeTorneo,
      dataInizio: dataInizio,
      dataFine: dataFine,
      tipologiaTorneo: tipologiaTorneo,
      linkTorneo: linkTorneo,
    },
  });
  revalidatePath("/dashboard");
  revalidatePath("/tornei");
}

export async function editTorneo(formData) {
  "use server";
  const inputId = formData.get("id");
  const nomeTorneo = formData.get("nomeTorneo");
  const dataInizio = formData.get("dataInizio");
  const dataFine = formData.get("dataFine");
  const tipologiaTorneo = formData.get("tipologiaTorneo");
  const linkTorneo = formData.get("linkTorneo");
  await prisma.Tornei.update({
    where: {
      id: inputId,
    },
    data: {
      nomeTorneo: nomeTorneo,
      dataInizio: dataInizio,
      dataFine: dataFine,
      tipologiaTorneo: tipologiaTorneo,
      linkTorneo: linkTorneo,
    },
  });
  revalidatePath("/dashboard");
  revalidatePath("/tornei");

}

export async function deleteTorneo(formData) {
  "use server";
  const inputId = formData.get("id");
  await prisma.Tornei.delete({
    where: {
      id: inputId,
    },
  });
  revalidatePath("/dashboard");
  revalidatePath("/tornei");
}

