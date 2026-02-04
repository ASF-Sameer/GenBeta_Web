import React from "react"
import type { Metadata, Viewport } from "next"
import { Zain, JetBrains_Mono, Inter, Poppins, Montserrat, Playfair_Display, Space_Grotesk, Open_Sans, Lato, Source_Sans_3, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "@/components/providers"
import { getThemeSettings } from "@/lib/sanity"
import "./globals.css"

const zain = Zain({
  subsets: ["latin", "arabic"],
  weight: ["200", "300", "400", "700", "800", "900"],
  variable: "--font-zain",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Gen Z 2026 Program | Zain Group - 11th Edition",
  description:
    "The 11th Edition of Generation Z by Zain. Empowering the next generation of leaders through hands-on experience in leadership, innovation, and continuous learning. Featuring REFRAME, our flagship learning series.",
  keywords: [
    "Gen Z",
    "Generation Z",
    "Zain Group",
    "Leadership",
    "Innovation",
    "Professional Development",
    "Reframe",
    "Learning Series",
  ],
  authors: [{ name: "Generation Z Team" }],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00B5AD" },
    { media: "(prefers-color-scheme: dark)", color: "#1E1A5F" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const themeData = await getThemeSettings()
  const cmsTheme = themeData?.theme || null

  const fontVariables = [
    zain.variable,
    jetbrainsMono.variable,
    inter.variable,
    poppins.variable,
    montserrat.variable,
    playfair.variable,
    spaceGrotesk.variable,
    openSans.variable,
    lato.variable,
    sourceSans.variable,
    roboto.variable,
  ].join(" ")

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontVariables} font-zain antialiased`}
      >
        <Providers cmsTheme={cmsTheme}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-turquoise focus:text-white focus:rounded-lg"
          >
            Skip to main content
          </a>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
