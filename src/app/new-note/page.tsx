import { redirect } from "next/navigation";

import { getAuthSession } from "@/lib/nextauth";
import NewNoteForm from "./_components/new-note-form";


export default async function NewNotePage() {
  const session = await getAuthSession();

  // session 
  const userDetails = session?.user;

  if(!userDetails) {
    redirect("/api/auth/signin")
  }

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
