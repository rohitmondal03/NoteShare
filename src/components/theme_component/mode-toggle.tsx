"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant={"default"}
      size={"icon"}
      className="transition-all duration-300 hover:rotate-90 hover:scale-110"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <MoonIcon />
      ) : (
        <SunIcon />
      )}
    </Button >
  )
}