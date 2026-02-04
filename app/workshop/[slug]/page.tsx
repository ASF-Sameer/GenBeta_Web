import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { getWorkshop, getWorkshops, urlFor } from "@/lib/sanity"
import { notFound } from "next/navigation"
import { WorkshopPageContent } from "@/components/workshop-page-content"

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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let workshop = null
  try {
    workshop = await getWorkshop(slug)
  } catch {
    return { title: "Workshop - Gen Z 2026" }
  }
  
  return {
    title: workshop ? `${workshop.title} | Gen Z 2026 Program - Zain Group` : "Workshop - Gen Z 2026",
    description: workshop?.shortDescription || "A Gen Z 2026 workshop program at Zain Group"
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

  const processedWorkshop = {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C2951] via-[#1E1A5F] via-[#0057B8] via-[#1E1A5F] to-[#1C2951]">
      <Navbar />
      <main id="main-content">
        <PageTransition>
          <WorkshopPageContent workshop={processedWorkshop} />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
