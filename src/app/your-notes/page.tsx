import Link from "next/link";
import { redirect } from "next/navigation";
import { Session } from "next-auth";

import { getAuthSession } from "@/lib/nextauth"
import { prisma } from "@/lib/prisma";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";


export const revalidate = "true";


export default async function ProfilePage() {
  const session: Session | null = await getAuthSession();

  // get user details
  const userDetails = session?.user;

  if (!session) {
    redirect("/api/auth/signin");
  }

  const getUsersNotes = await prisma.note.findMany({
    where: {
      userId: userDetails?.id,
    }
  })

  return (
    <section className="py-16 space-y-10">
      <h1 className="text-5xl font-bold text-center">Your Notes</h1>

      {getUsersNotes.length > 0 ? (
        <div className="px-8 grid grid-cols-3 gap-5">
          {getUsersNotes.map((note) => (
            <Link key={note.id} href={`note/${note.id}`}>
              <Card className="text-2xl border-2 border-zinc-700 dark:border-zinc-400 w-fit transition-all duration-200 hover:scale-105">
                <CardHeader className="pb-0">
                  <CardTitle className="text-3xl">{note.title}</CardTitle>
                  <CardDescription className="font-semibold text-lg leading-tight">
                    {note.note.slice(0, 100) + "...."}
                  </CardDescription>
                </CardHeader>
                <Separator orientation="horizontal" className="my-6 bg-zinc-600" />
                <CardContent className="text-2xl text-zinc-600 dark:text-zinc-400">
                  ID: <span className="underline font-bold text-zinc-700 dark:text-zinc-300">{note.id}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="h-[50vh] flex items-center justify-center ">
          <h1 className="text-center text-3xl font-bold w-full text-zinc-500">
            You don&apos;t have any notes...!!
          </h1>

          <Link href={`/new-note`}>
            <Button>Make first note</Button>
          </Link>
        </div>
      )}
    </section>
  )
}