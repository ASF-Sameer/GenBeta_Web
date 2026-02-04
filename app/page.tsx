import { LandingPage } from "@/components/landing-page"
import { PageTransition } from "@/components/page-transition"
import { 
  getTeamMembers, 
  getSiteSettings, 
  getWorkshops, 
  getPreviousEditions, 
  getGalleryImages,
  urlFor 
} from "@/lib/sanity"

export const revalidate = 60

export default async function Home() {
  let sanityTeamMembers: Array<{
    name: string
    role: string
    email?: string
    linkedin?: string
    image?: string
  }> = []
  let sanityPillars: Array<{
    title: string
    description: string
    color?: string
    icon?: string
    topics?: string[]
    linkUrl?: string
  }> = []
  let sanityPrograms: Array<{
    title: string
    shortDescription?: string
    description?: string
    slug?: { current: string }
    image?: string
  }> = []
  let sanityPreviousEditions: Array<{
    year: string
    title: string
    description?: string
    whatMadeUsDifferent?: string
    image?: string
    link?: string
  }> = []
  let sanityGalleryImages: string[] = []
  let sanityFooter: {
    copyrightText?: string
    tagline?: string
    socialLinks?: Array<{ platform: string; url: string; icon?: string }>
    quickLinks?: Array<{ label: string; url: string }>
    zainLinks?: Array<{ label: string; url: string }>
  } | undefined
  let sanityHero: {
    welcomeText?: string
    title?: string
    programName?: string
    byLine?: string
    description?: string
    ctaText?: string
    ctaLink?: string
  } | undefined
  let sanityAbout: {
    title?: string
    subtitle?: string
    description?: string
  } | undefined
  let sectionTitles: {
    pillarsTitle?: string
    pillarsSubtitle?: string
    programsTitle?: string
    programsSubtitle?: string
    teamTitle?: string
    teamSubtitle?: string
    previousTitle?: string
    previousSubtitle?: string
    galleryTitle?: string
  } | undefined

  try {
    const [teamData, siteSettings, workshopsData, previousEditionsData, galleryData] = await Promise.all([
      getTeamMembers(),
      getSiteSettings(),
      getWorkshops(),
      getPreviousEditions(),
      getGalleryImages()
    ])

    if (teamData && teamData.length > 0) {
      sanityTeamMembers = teamData.map((member: {
        name: string
        role?: string
        email?: string
        linkedin?: string
        image?: { asset: { _ref: string } }
      }) => ({
        name: member.name,
        role: member.role || "Gen Z Graduate",
        email: member.email,
        linkedin: member.linkedin,
        image: member.image ? urlFor(member.image).width(400).height(400).url() : undefined
      }))
    }

    if (siteSettings) {
      if (siteSettings.pillars && siteSettings.pillars.length > 0) {
        sanityPillars = siteSettings.pillars.map((pillar: {
          title: string
          description: string
          color?: string
          icon?: string
          topics?: string[]
          bookCover?: { asset: { _ref: string } }
          linkUrl?: string
        }) => ({
          title: pillar.title,
          description: pillar.description,
          color: pillar.color,
          icon: pillar.icon,
          topics: pillar.topics,
          linkUrl: pillar.linkUrl
        }))
      }

      if (siteSettings.heroSection) {
        sanityHero = {
          welcomeText: siteSettings.heroSection.welcomeText,
          title: siteSettings.heroSection.title,
          programName: siteSettings.heroSection.programName,
          byLine: siteSettings.heroSection.byLine,
          description: siteSettings.heroSection.description,
          ctaText: siteSettings.heroSection.ctaText,
          ctaLink: siteSettings.heroSection.ctaLink
        }
      }

      if (siteSettings.aboutSection) {
        sanityAbout = {
          title: siteSettings.aboutSection.title,
          subtitle: siteSettings.aboutSection.subtitle,
          description: siteSettings.aboutSection.description
        }
      }

      if (siteSettings.footer) {
        sanityFooter = {
          copyrightText: siteSettings.footer.copyrightText,
          tagline: siteSettings.footer.tagline,
          socialLinks: siteSettings.footer.socialLinks,
          quickLinks: siteSettings.footer.quickLinks,
          zainLinks: siteSettings.footer.zainLinks
        }
      }

      sectionTitles = {
        pillarsTitle: siteSettings.pillarsSection?.title,
        pillarsSubtitle: siteSettings.pillarsSection?.subtitle,
        programsTitle: siteSettings.programsSection?.title,
        programsSubtitle: siteSettings.programsSection?.subtitle,
        teamTitle: siteSettings.teamSection?.title,
        teamSubtitle: siteSettings.teamSection?.subtitle,
        previousTitle: siteSettings.previousEditionsSection?.title,
        previousSubtitle: siteSettings.previousEditionsSection?.subtitle,
        galleryTitle: siteSettings.gallerySection?.title
      }
    }

    if (workshopsData && workshopsData.length > 0) {
      sanityPrograms = workshopsData.map((workshop: {
        title: string
        shortDescription?: string
        slug?: { current: string }
        image?: { asset: { _ref: string } }
      }) => ({
        title: workshop.title,
        shortDescription: workshop.shortDescription,
        slug: workshop.slug,
        image: workshop.image ? urlFor(workshop.image).width(400).height(500).url() : undefined
      }))
    }

    if (previousEditionsData && previousEditionsData.length > 0) {
      sanityPreviousEditions = previousEditionsData.map((edition: {
        year: string
        title: string
        description?: string
        whatMadeUsDifferent?: string
        image?: { asset: { _ref: string } }
        link?: string
      }) => ({
        year: edition.year,
        title: edition.title,
        description: edition.description,
        whatMadeUsDifferent: edition.whatMadeUsDifferent,
        image: edition.image ? urlFor(edition.image).width(600).height(400).url() : undefined,
        link: edition.link
      }))
    }

    if (galleryData && galleryData.length > 0) {
      sanityGalleryImages = galleryData.map((img: { image?: { asset: { _ref: string } } }) => 
        img.image ? urlFor(img.image).width(800).height(600).url() : ""
      ).filter((url: string) => url !== "")
    }

  } catch (error) {
    console.error("Error fetching data from Sanity:", error)
  }

  return (
    <main id="main-content">
      <PageTransition>
        <LandingPage 
          sanityTeamMembers={sanityTeamMembers.length > 0 ? sanityTeamMembers : undefined}
          sanityPillars={sanityPillars.length > 0 ? sanityPillars : undefined}
          sanityPrograms={sanityPrograms.length > 0 ? sanityPrograms : undefined}
          sanityPreviousEditions={sanityPreviousEditions.length > 0 ? sanityPreviousEditions : undefined}
          sanityGalleryImages={sanityGalleryImages.length > 0 ? sanityGalleryImages : undefined}
          sanityFooter={sanityFooter}
          sanityHero={sanityHero}
          sanityAbout={sanityAbout}
          sectionTitles={sectionTitles}
        />
      </PageTransition>
    </main>
  )
}
