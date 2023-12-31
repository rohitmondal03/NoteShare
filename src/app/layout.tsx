import type { Metadata } from 'next'
import { ReactNode } from 'react'

import SmoothScrollProvider from '@/components/common/SmoothScrollProvider'
import AuthProvider from '@/components/common/AuthProvider'
import { ThemeProvider } from '@/components/theme_component/theme-provider'
import { balooFont } from '@/components/fonts/font'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'

import "./styles/globals.css"



type TRootLayout = {
  children: ReactNode
}


export const metadata: Metadata = {
  title: 'NoteShare',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }: TRootLayout) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={balooFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <TooltipProvider>
              <SmoothScrollProvider>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <Toaster />
              </SmoothScrollProvider>
            </TooltipProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
