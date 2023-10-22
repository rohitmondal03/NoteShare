import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme_component/mode-toggle";


const buttonClasses = "text-md font-bold py-5"

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between border-b-2 py-9 px-16">
      <Link href={`/`}>
        <h1 className="text-5xl font-bold">Logo</h1>
      </Link>

      <div className="flex flex-row items-center justify-between gap-x-10">
        <Link href={`/new-note`}>
          <Button className={buttonClasses}>New Note</Button>
        </Link>

        <Link href={`/access-note`}>
          <Button className={buttonClasses}>Access Note</Button>
        </Link>

        <Link href={`/sign-in`}>
          <Button className={buttonClasses}>Sign In</Button>
        </Link>
      </div>

      <ModeToggle />
    </nav>
  )
}
