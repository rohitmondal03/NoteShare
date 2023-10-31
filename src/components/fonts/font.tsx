import { Baloo_Bhai_2 as BalooBhai } from "next/font/google"
import { Montserrat } from "next/font/google";

export const balooFont = BalooBhai({
  subsets: ["latin"],
  weight: ["400", "600", "700", '800']
})

export const monsterratFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"]
})