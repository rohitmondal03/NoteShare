import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"



export default function NewNotePage() {
  return (
    <section className="py-16 space-y-10">
      <h1 className="text-5xl font-bold text-center">Create New Note</h1>

      <Tabs defaultValue="note" className="w-[30vw] mx-auto">
        <TabsList className="grid w-full h-[6vh] grid-cols-2 border-2 border-zinc-700 dark:border-zinc-400">
          <TabsTrigger value="note">Add Note</TabsTrigger>
          <TabsTrigger value="secure">Add password</TabsTrigger>
        </TabsList>
        <TabsContent value="note" className="border-2 border-zinc-700 dark:border-zinc-400 rounded-xl">
          <Card>
            <CardHeader>
              <CardTitle>New Note</CardTitle>
              <CardDescription>
                Add a new note for yourself and share it with others in secured way.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Title</Label>
                <Input id="name" placeholder="Personal....." />
              </div>
              <div className="space-y-1">
                <Label htmlFor="title">Your Note</Label>
                <Textarea rows={7} id="title" placeholder="User Id........" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="secure" className="border-2 border-zinc-700 dark:border-zinc-400 rounded-xl">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Add a password to you Note
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="password">Current password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirmPassword">New password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Note</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
