import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { WorkshopOverview } from "@/components/workshop-overview"
import { BookCarousel } from "@/components/book-carousel"
import { AgendaTimeline } from "@/components/agenda-timeline"
import { Facilitators } from "@/components/facilitators"
import { Registration } from "@/components/registration"
import { getWorkshop, getWorkshops } from "@/lib/sanity"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  try {
    const workshops = await getWorkshops()
    return workshops?.map((workshop: { slug: { current: string } }) => ({
      slug: workshop.slug.current,
    })) || []
  } catch {
    return []
  }
}

export default async function WorkshopPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  let workshop = null
  try {
    workshop = await getWorkshop(slug)
  } catch (error) {
    console.error('Error fetching workshop:', error)
  }

  if (!workshop) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1C2951] via-[#1E1A5F] to-[#0057B8]">
      <Navbar />
      <main>
        <Hero 
          title={workshop.heroTitle || workshop.title}
          subtitle={workshop.heroSubtitle}
        />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E1A5F]/50 to-[#1C2951] pointer-events-none" />
          <WorkshopOverview data={workshop.overview} />
          {workshop.books && workshop.books.length > 0 && (
            <BookCarousel books={workshop.books} />
          )}
          {workshop.agenda && workshop.agenda.length > 0 && (
            <AgendaTimeline agenda={workshop.agenda} />
          )}
          {workshop.team && workshop.team.length > 0 && (
            <Facilitators team={workshop.team} />
          )}
          <Registration url={workshop.registrationUrl} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
