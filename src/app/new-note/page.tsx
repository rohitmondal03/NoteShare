import { redirect } from "next/navigation";

import NewNoteForm from "./_components/new-note-form";
import { getAuthSession } from "@/lib/nextauth";


export default async function NewNotePage() {
  const session = await getAuthSession();

  // redirect if session is not there...
  if (!session) {
    redirect("/api/auth/signin")
  }
  
  // get session...
  const userDetails = session?.user;


  return (
    <section className="py-16 space-y-16">
      <div className="space-y-3">
        <h1 className="text-5xl font-bold text-center">Create New Note</h1>
        <p className="text-center text-xl text-zinc-700 dark:text-zinc-400">Add a new Note to our database and share it with anyone.</p>
      </div>

      <NewNoteForm />
    </section>
  )
}
