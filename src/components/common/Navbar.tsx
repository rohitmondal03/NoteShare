"use client"

import Link from "next/link";
import { useSession } from "next-auth/react";

import { ModeToggle } from "@/components/theme_component/mode-toggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";


const buttonClasses = "text-md font-bold py-5 transition-all duration-300 hover:scale-110"


export default function Navbar() {
  const { data: session } = useSession();

  // user's details
  const user = session?.user;

  // first letter of name of user
  const fname = user?.name?.charAt(0);

  // user profile pic URL
  const profileImg = user?.image;


  return (
    <nav className="flex flex-row items-center justify-between border-b-2 border-zinc-400 dark:border-zinc-500 py-8 px-12">
      <Link href={`/`}>
        <h1 className="text-3xl text-center font-bold bg-black text-white dark:bg-white dark:text-black px-3 py-2 rounded-lg">NoteShare</h1>
      </Link>

      <div className="flex flex-row items-center justify-between gap-x-10">
        {session ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={`/your-notes`}>
                <Avatar className="hover:scale-110 hover:rotate-[15deg] transition duration-300">
                  <AvatarImage src={profileImg as string} alt="profile pic" />
                  <AvatarFallback>{fname}</AvatarFallback>
                </Avatar>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-black text-white dark:bg-white dark:text-black">
              <p>Your Notes</p>
            </TooltipContent>
          </Tooltip>
        ) : (
          null
        )}

        <Link href={`/new-note`}>
          <Button className={buttonClasses}>New Note</Button>
        </Link>

        <Link href={`/access-note`}>
          <Button className={buttonClasses}>Access Note</Button>
        </Link>

        {!session ? (
          <Link href={`/api/auth/signin`}>
            <Button className={buttonClasses}>Sign In</Button>
          </Link>
        ) : (
          <Link href={`/api/auth/signout`}>
            <Button
              variant={"destructive"}
              className={buttonClasses}
            >
              Sign Out
            </Button>
          </Link>
        )}
      </div>

      <ModeToggle />
    </nav>
  )
}
