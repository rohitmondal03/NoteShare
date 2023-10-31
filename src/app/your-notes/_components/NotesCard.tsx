"use client"

import Link from "next/link";
import { useRef } from "react";
import { Note } from "@prisma/client";
import { CopyIcon } from "@radix-ui/react-icons"

import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";


export default function NotesCard(noteDetails: Note) {
  const { id, note, title } = noteDetails;

  const copyTextRef = useRef<HTMLSpanElement>(null)

  // function to copy note ID,
  const handleClick = () => {
    navigator.clipboard.writeText(copyTextRef.current?.innerHTML as string)
  }


  return (
    <Card className="text-2xl border-2 border-zinc-400 dark:border-zinc-600 w-fit transition-all duration-200">
      <Link href={`note/${id}`}>
        <CardHeader className="pb-0">
          <CardTitle className="text-3xl">{title}</CardTitle>
          <CardDescription className="font-semib0old text-lg leading-tight">
            {note.length > 100 ? (
              `${note.slice(0, 97)}...`
            ) : (
              note
            )}
          </CardDescription>
        </CardHeader>
      </Link>
      <Separator orientation="horizontal" className="my-6 bg-zinc-600" />
      <CardContent className="flex flex-row items-center justify-between text-2xl text-zinc-600 dark:text-zinc-400">
        <div>
          ID:
          <span
            ref={copyTextRef}
            className="underline font-semibold text-zinc-700 dark:text-zinc-300"
          >
            {" " + id}
          </span>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <CopyIcon
              onClick={handleClick}
              className="cursor-pointer transition ease-out hover:scale-150"
            />
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white dark:bg-white dark:text-black">
            Copy ID
          </TooltipContent>
        </Tooltip>
      </CardContent>
    </Card>
  )
}
