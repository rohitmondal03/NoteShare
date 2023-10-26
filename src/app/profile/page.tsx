import { Session } from "next-auth";

import { redirect } from "next/navigation";

import { getAuthSession } from "@/lib/nextauth"
import { prisma } from "@/lib/prisma";


export default async function ProfilePage() {
  const session: Session | null = await getAuthSession();

  // get user details
  const userDetails = session?.user;

  if(!session) {
    redirect("/api/auth/signin");
  }

  const getUsersNotes = await prisma.note.findMany({
    where: {
      userId: userDetails?.id,
    }
  })

  return (
    <section className="py-16">
      {getUsersNotes.map((note) => (
        <div key={note.id}>
          <p>{note.id}</p>
          <h1>{note.title}</h1>
          <p>{note.note}</p>
        </div>
      ))}
    </section>
  )
}