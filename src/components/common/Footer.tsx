import Link from "next/link";
import { Montserrat } from "next/font/google";


const roboto = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"]
})


// Credit links
const links: { title: string, href: string }[] = [
  {
    title: "nextjs",
    href: "https://nextjs.org/",
  },
  {
    title: "prisma",
    href: "https://prison.io",
  },
  {
    title: "supabase",
    href: "https://supabase.com"
  },
  {
    title: "next-auth",
    href: "https://next-auth.js.org/"
  },
  {
    title: "vercel",
    href: "https://vercel.com"
  }
]


export default function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black flex flex-row items-center justify-between py-6 px-20 text-center">
      <div className="space-y-10 font-bold">
        <h1 className="text-2xl font-bold">Developed by</h1>
        <Link
          href={`https://portfolio-ten-virid-46.vercel.app/`}
          className={`${roboto.className} text-3xl text-pink-600 dark:text-pink-500 underline`}
        >
          @rohit_mondal
        </Link>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Made with</h1>

        <div className="space-x-5">
          {links.map((item, idx: number) => (
            <Link
              key={idx}
              href={item.href}
              className="underline text-lg"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
