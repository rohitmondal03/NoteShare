"use client"

import { useSession } from "next-auth/react"
import { ChangeEvent, useState } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { TnewNote } from "../../../../types"
import NewNoteSubmitBtn from "./SubmitBtn"
import { addNewNote } from "@/actions/addNewNoteAction"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export default function NewNoteForm() {
  const { data: session } = useSession();

  const [password, setPassword] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [note, setNote] = useState<string>();

  // user details
  const userDetails = session?.user;

  const params: TnewNote = {
    title: title as string,
    note: note as string,
    password: password as string,
    userId: userDetails?.id as string,
  }

  return (
    <form
      action={async () => {
        await addNewNote(params);
      }}
    >
      <Card className="mx-auto w-[30vw] outline-double">
        <CardHeader>
          <CardTitle className="text-2xl">New Note 🚀</CardTitle>
          <CardDescription>
            Add a new note for yourself and share it with others in secured way.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              placeholder="Give a unique title..."
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              className="outline"
              autoComplete="off"
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="note">Title</Label>
            <Textarea
              id="note"
              placeholder="Write note here..."
              rows={7}
              value={title}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setNote(e.target.value)
              }
              className="outline"
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
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










