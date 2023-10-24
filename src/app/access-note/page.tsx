import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function AccessNotePage() {
  return (
    <section className="py-16 space-y-16">
      <div className="space-y-3">
        <h1 className="font-bold text-5xl text-center">Access Note</h1>
        <p className="text-center text-xl text-zinc-700 dark:text-zinc-400">Access any note you require, by asking the Unique ID and password of that note by the owner.</p>
      </div>

      <Card className="w-[30vw] mx-auto border-2 border-zinc-700 dark:border-zinc-400 outline-double">
        <CardHeader>
          <CardTitle className="text-2xl">Get Note</CardTitle>
          <CardDescription>
            Ask for a unique id and password to access your notes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="uid">Unique Id</Label>
            <Input
              id="uid"
              type="text"
              placeholder="Enter Unique ID...."
              className="outline"
              autoComplete="off"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter Password...."
              className="outline"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Get Note</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
