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
import { PageTransition } from "@/components/page-transition"
import { getWorkshop, urlFor } from "@/lib/sanity"
import { WorkshopPageContent } from "@/components/workshop-page-content"

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

export const revalidate = 60

export default async function ReframePage() {
  let workshop = null
  let useCmsData = false
  
  try {
    workshop = await getWorkshop("reframe")
    if (workshop) {
      useCmsData = true
      workshop = {
        ...workshop,
        heroSection: workshop.heroSection ? {
          ...workshop.heroSection,
          backgroundImageUrl: workshop.heroSection.backgroundImage 
            ? urlFor(workshop.heroSection.backgroundImage).width(1920).height(1080).url() 
            : undefined
        } : undefined,
        aboutSection: workshop.aboutSection ? {
          ...workshop.aboutSection,
          imageUrl: workshop.aboutSection.image 
            ? urlFor(workshop.aboutSection.image).width(800).height(600).url() 
            : undefined
        } : undefined,
        readingJourneySection: workshop.readingJourneySection ? {
          ...workshop.readingJourneySection,
          books: workshop.readingJourneySection.books?.map((book: {
            _id: string
            title: string
            author?: string
            coverImage?: { asset: { _ref: string } }
            shortDescription?: string
            isDecided: boolean
            placeholderMessage?: string
            popupContent?: {
              headline?: string
              description?: unknown[]
              workshopDetails?: string
              keyTakeaways?: string[]
              duration?: string
              format?: string
            }
            files?: Array<{ fileName: string; fileUrl: string; description?: string }>
            links?: Array<{ label: string; url: string; isExternal?: boolean }>
          }) => ({
            ...book,
            coverImageUrl: book.coverImage 
              ? urlFor(book.coverImage).width(400).height(600).url() 
              : undefined
          })) || []
        } : undefined,
        facilitatorsSection: workshop.facilitatorsSection ? {
          ...workshop.facilitatorsSection,
          facilitators: workshop.facilitatorsSection.facilitators?.map((facilitator: {
            name: string
            role?: string
            bio?: string
            image?: { asset: { _ref: string } }
            email?: string
            linkedin?: string
            specialties?: string[]
          }) => ({
            ...facilitator,
            imageUrl: facilitator.image 
              ? urlFor(facilitator.image).width(400).height(400).url() 
              : undefined
          })) || []
        } : undefined
      }
    }
  } catch (error) {
    console.error("Error fetching Reframe workshop from Sanity:", error)
  }

  if (useCmsData && workshop) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1C2951] via-[#1E1A5F] via-[#0057B8] via-[#1E1A5F] to-[#1C2951]">
        <Navbar />
        <main id="main-content">
          <PageTransition>
            <WorkshopPageContent workshop={workshop} />
          </PageTransition>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C2951] via-[#1E1A5F] via-[#0057B8] via-[#1E1A5F] to-[#1C2951]">
      <Navbar />
      <main id="main-content">
        <PageTransition>
          <Hero />
          <WorkshopOverview />
          <BookCarousel />
          <AgendaTimeline />
          <Facilitators />
          <Registration />
        </PageTransition>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
