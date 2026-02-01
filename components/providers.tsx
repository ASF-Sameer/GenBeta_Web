"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { PageTransitionProvider } from "@/components/page-transition-provider"

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange={false}
    >
      <PageTransitionProvider>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </PageTransitionProvider>
    </ThemeProvider>
  )
}
