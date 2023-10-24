"use client"

// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";


export default function NewNoteSubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant={pending ? "destructive" : "default"}
      className="hover:scale-105 transition-all duration-200 ease-out"
    >
      {pending ?
        <>Adding...</> :
        <>Submit</>
      }
    </Button>
  )
}