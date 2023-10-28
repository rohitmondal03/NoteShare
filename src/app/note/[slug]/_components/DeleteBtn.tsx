"use client"

import { useRouter } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";


type TProps = {
  noteId: string
}

export function DeleteButton(props: TProps) {
  const { noteId } = props;

  const router = useRouter();

  const deleteNote = async (noteId: string) => {
    // code to delete note here
    const data= await fetch("/api/deleteProject", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: noteId })
    })

    if(data.status === 500) {
      router.refresh()
    }
  }

  return (
    <Button
      variant={"destructive"}
      className="font-bold"
      onClick={() => deleteNote(noteId)}
    >
      Delete Note
    </Button>
  )
}