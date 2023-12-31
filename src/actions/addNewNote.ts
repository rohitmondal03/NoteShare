"use server"

import { redirect } from "next/navigation";
import { TnewNote } from "../../types";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export async function addNewNote(formData: TnewNote) {
  const { note, title, userId } = formData

  const data = await prisma.note.create({
    data: {
      userId: userId,
      title: title.trim(),
      note: note.trim(),
    }
  })

  revalidatePath("/profile")

  if (data) {
    redirect("/your-notes")
  }
}