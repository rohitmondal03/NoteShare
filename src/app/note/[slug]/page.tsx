import Link from "next/link";
import { Session } from "next-auth";

import { DeleteButton } from "./_components/DeleteBtn";
import { getAuthSession } from "@/lib/nextauth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";


export default async function EachNotePage(
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // redirect if session is not there...
  const session: Session | null = await getAuthSession();

  // get user details
  const userDetails = session?.user;

  // get project details
  const project = await prisma.note.findFirst({
    where: {
      id: slug,
    }
  })


  return (
    <section className="py-16 h-[80vh] flex items-center justify-center">
      {!project ? (
        <div className="text-center space-y-7">
          <h1 className="text-4xl font-bold text-zinc-700 dark:text-zinc-400">Not found</h1>
          <p className="text-2xl text-red-600 dark:text-red-500">The note you are finding has been deleted or not present in our database !!!</p>
          <Button className="font-bold text-lg">
            <Link href={`/your-notes`}>
              Your Notes
            </Link>
          </Button>
        </div>
      ) : (
        <Card className="mx-auto w-[40vw] border-2 border-zinc-700 dark:border-zinc-400">
          <CardHeader className="space-y-4">
            <CardTitle className="text-3xl">{project?.title}</CardTitle>
            <CardDescription className="text-md text-zinc-800 dark:text-zinc-300">
              {project?.note}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            {project?.userId === userDetails?.id ? (
              <DeleteButton noteId={project?.id as string} />
            ) : (
              <Button>Save Note</Button>
            )}
          </CardFooter>
        </Card>
      )}
    </section>
  )
}

export async function generateStaticParams() {
  const notes = await prisma.note.findMany();

  return notes.map((project) => ({
    slug: project.id
  }))
}