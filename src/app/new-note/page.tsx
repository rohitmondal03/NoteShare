import NewNoteForm from "./_components/new-note-form";


export default function NewNotePage() {
  return (
    <section className="py-16 space-y-16">
      <div className="space-y-3">
        <h1 className="text-5xl font-bold text-center">Create New Note</h1>
        <p className="text-center text-xl text-zinc-700 dark:text-zinc-400">Add a new Note to our database and share it with anyone if you want to.</p>
      </div>

      <NewNoteForm />
    </section>
  )
}
