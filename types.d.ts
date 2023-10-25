import { Note } from "@prisma/client"

type TnewNote = {
  title: string;
  note: string;
  userId: string
}