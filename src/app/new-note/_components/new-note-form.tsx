"use client"

import { useSession } from "next-auth/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { TnewNote } from "../../../../types"
import { addNewNote } from "@/actions/addNewNoteAction"
import NewNoteSubmitBtn from "./SubmitBtn"
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
import { redirect } from "next/navigation"



export default function NewNoteForm() {
  const { data } = useSession();

  const [password, setPassword] = useState<string | undefined>();
  const [confirmPassword, setConfirmPassword] = useState<string | undefined>();
  const [title, setTitle] = useState<string | undefined>();
  const [note, setNote] = useState<string | undefined>();


  const params: TnewNote= {
    title: title as string,
    note: note as string,
    password: password as string,
    confirmPassword: confirmPassword as string,
    userId: "",
  }

  return (
    <form
      action={async () => {
        await addNewNote(params);
        redirect("/access-note");
      }}
    >
      <Tabs defaultValue="note" className="w-[30vw] mx-auto">
        <TabsList className="grid w-full h-[6vh] grid-cols-2 border-2 border-zinc-700 dark:border-zinc-400">
          <TabsTrigger value="note">Add Note</TabsTrigger>
          <TabsTrigger value="secure">Add password</TabsTrigger>
        </TabsList>
        <TabsContent
          value="note"
          className="border-2 border-zinc-700 dark:border-zinc-400 rounded-xl"
        >
          <Card>
            <CardHeader>
              <CardTitle>New Note</CardTitle>
              <CardDescription>
                Add a new note for yourself and share it with others in secured way.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Title</Label>
                <Input
                  id="name"
                  placeholder="Personal....."
                  value={title}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="title">Your Note</Label>
                <Textarea
                  rows={7}
                  id="title"
                  placeholder="User Id........"
                  value={note}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNote(e.target.value)}
                  required
                />
              </div>
              <Alert className="border-2 border-red-600">
                <ArrowRightIcon className="h-4 w-4" />
                <AlertTitle className="text-lg font-bold">Head to &quot;Add password&quot; section...</AlertTitle>
                <AlertDescription>
                  to add password to your note and save it.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent
          value="secure"
          className="border-2 border-zinc-700 dark:border-zinc-400 rounded-xl"
        >
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Add a password to you Note
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="password">Current password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirmPassword">New password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              {/* <Button type="submit">Save Note</Button> */}
              <NewNoteSubmitBtn />
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </form>
  )
}










