"use server"

import { prisma } from "@/lib/prisma"
import { TnewNote } from "../../types";

export async function addNewNote(formData: TnewNote) {
  const { password, title, confirmPassword, userId, note } = formData;

  // await prisma.note.create({
  //   data: {...formData}
  // })

  console.log(password, title, confirmPassword, userId, note)
}