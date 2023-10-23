"use client"

// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";


export default function NewNoteSubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant={pending ? "destructive" : "default"}>
      {pending ?
        <>Adding...</> :
        <>Submit</>
      }
    </Button>
  )
}