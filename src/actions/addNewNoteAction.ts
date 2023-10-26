"use server"

import { redirect } from "next/navigation";
import { TnewNote } from "../../types";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export async function addNewNote(formData: TnewNote) {
  const data = await prisma.note.create({
    data: formData
  })

  revalidatePath("/profile")

  if(data) {
    redirect("/profile")
  }
}