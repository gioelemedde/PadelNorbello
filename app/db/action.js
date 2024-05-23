'use server'
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
    revalidatePath('/campoEstivo')
  }

  export async function edit(formData) {
    "use server";
    const input = formData.get("input");
    const inputId = formData.get("inputId");
    await prisma.CeIscritti.update({
      where:{
        id: inputId,
      },
      data: {
        input: input,
      },
    });
    // revalidatePath('/better')
  }

  export async function deleteItem(formData) {
    "use server";
    const inputId = formData.get("inputId");
    await prisma.CeIscritti.delete({
      where:{
        id: inputId,
      }
    });
    // revalidatePath('/better')
  }