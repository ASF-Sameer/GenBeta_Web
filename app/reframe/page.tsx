import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WorkshopOverview } from "@/components/workshop-overview"
import { BookCarousel } from "@/components/book-carousel"
import { AgendaTimeline } from "@/components/agenda-timeline"
import { Facilitators } from "@/components/facilitators"
import { Registration } from "@/components/registration"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"

export const metadata: Metadata = {
  title: "REFRAME | Gen Z 2026 Program - Zain Group",
  description:
    "A learning series empowering colleagues to rethink, reset, and drive meaningful change. Starting with Dan Heath's transformative book 'Reset'. Join the REFRAME series at Zain.",
  keywords: [
    "Reframe",
    "Reset",
    "Dan Heath",
    "Gen Z",
    "Zain",
    "Leadership",
    "Learning Series",
    "Professional Development",
    "Workshop",
  ],
}

export default function ReframePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <WorkshopOverview />
        <BookCarousel />
        <AgendaTimeline />
        <Facilitators />
        <Registration />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
