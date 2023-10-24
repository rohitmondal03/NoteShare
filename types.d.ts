import { Note } from "@prisma/client"

type TnewNote = {
  title: string;
  note: string;
  password: string;
  userId: string
}