"use client"

import { Session } from "next-auth"
import { ChangeEvent, useEffect, useState } from "react"

import { TnewNote } from "../../../../types"
import NewNoteSubmitBtn from "./SubmitBtn"
import { addNewNote } from "@/actions/addNewNoteAction"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function NewNoteForm() {
  const [user, setUser] = useState<Session["user"]>();


  useEffect(() => {
    async function getUser() {
      await fetch("/api/getUser")
        .then((data) => data.json())
        .then((data) => { setUser(data) })
        .catch((error) => console.error("Error getting user", error))
    }
    getUser();
  }, [])

  const [noteDetails, setNoteDetails] = useState<TnewNote>({
    title: "",
    note: "",
    userId: ""
  });

  useEffect(() => {
    setNoteDetails(prev => ({ ...prev, userId: user?.id as string }))
  }, [user])

  // console.log(noteDetails)


  return (
    <form
      action={async () => {
        await addNewNote(noteDetails);
      }}
    >
      <Card className="mx-auto w-[30vw] outline-double">
        <CardHeader>
          <CardTitle className="text-2xl">New Note 🚀</CardTitle>
          <CardDescription>
            Add a new note for yourself and share it with others in secured way.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              placeholder="Give a unique title..."
              value={noteDetails.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNoteDetails((prev) => ({ ...prev, title: e.target.value }))
              }
              className="outline"
              autoComplete="off"
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="note">Note</Label>
            <Textarea
              id="note"
              placeholder="Write your note here..."
              rows={7}
              value={noteDetails.note}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                setNoteDetails(prev => ({ ...prev, note: e.target.value }))
              }}
              className="outline"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <NewNoteSubmitBtn />
        </CardFooter>
      </Card>
    </form>
  )
}










