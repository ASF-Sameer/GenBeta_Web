import { LandingPage } from "@/components/landing-page"
import { PageTransition } from "@/components/page-transition"
import { getTeamMembers, urlFor } from "@/lib/sanity"

export const revalidate = 60

export default async function Home() {
  let sanityTeamMembers = []
  
  try {
    const teamData = await getTeamMembers()
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
  } catch (error) {
    console.error("Error fetching team members from Sanity:", error)
  }

  return (
    <main id="main-content">
      <PageTransition>
        <LandingPage sanityTeamMembers={sanityTeamMembers} />
      </PageTransition>
    </main>
  )
}
