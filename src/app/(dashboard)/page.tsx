import Image from "next/image";


export default function DashboardPage() {
  return (
    <section className="py-20 px-32 text-center space-y-28">
      <div className="space-y-7">
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-blue-500 dark:bg-gradient-to-l dark:from-blue-100 dark:to-cyan-600">Welcome to NoteShare</h1>

        <h1 className="text-4xl font-semibold text-zinc-600 dark:text-pink-500">Your Secure Note Sharing Platform</h1>

        <p className="text-2xl text-black dark:text-zinc-300">Share your thoughts, ideas, and sensitive information confidently with NoteShare. Our platform allows you to protect your notes, ensuring only authorized individuals can access them. Whether you&apos;re collaborating on a project, sharing personal thoughts, or storing important information, <span className="text-rose-500 dark:text-amber-500 font-bold">NoteShare</span> has got you covered.</p>
      </div>

      <div>
        <Image
          src={`/notes.svg`}
          alt="notes app"
          width={500}
          height={368}
          className="mx-auto"
        />
      </div>
    </section>
  )
}
