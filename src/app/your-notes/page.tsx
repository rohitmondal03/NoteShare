import Link from "next/link";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import { Note } from "@prisma/client";

import NotesCard from "./_components/NotesCard";
import { getAuthSession } from "@/lib/nextauth"
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";


export const dynamic = "auto"
export const revalidate = "true";


export default async function ProfilePage() {
  const session: Session | null = await getAuthSession();

  // get user details...
  const userDetails = session?.user;

  // redirect if session is not there...
  if (!session) {
    redirect("/api/auth/signin");
  }

  // fetching all users notes...
  const getUsersNotes: Note[] = await prisma.note.findMany({
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
            <NotesCard key={note.id} {...note} />
          ))}
        </div>
      ) : (
        <div className="h-[50vh] flex flex-col items-center justify-center gap-y-8">
          <h1 className="text-center text-4xl font-bold w-full text-zinc-500">
            You don&apos;t have any notes...!!
          </h1>

          <Link href={`/new-note`}>
            <Button className="font-bold">
              Make first note
            </Button>
          </Link>
        </div>
      )}
    </section>
  )
}