"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { PageTransitionProvider } from "@/components/page-transition-provider"
import { CMSThemeProvider, ThemeSettings } from "@/components/cms-theme-provider"

interface ProvidersProps {
  children: ReactNode
  cmsTheme?: ThemeSettings | null
}

export function Providers({ children, cmsTheme }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange={false}
    >
      <CMSThemeProvider theme={cmsTheme}>
        <PageTransitionProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </PageTransitionProvider>
      </CMSThemeProvider>
    </ThemeProvider>
  )
}
