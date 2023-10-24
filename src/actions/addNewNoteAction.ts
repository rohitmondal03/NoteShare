"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache";

import { TnewNote } from "../../types";
import { prisma } from "@/lib/prisma";


export async function addNewNote(formData: TnewNote) {
  await prisma.note.create({
    data: {...formData}
  })

  revalidatePath("/profile")
  redirect("/access-note")
}