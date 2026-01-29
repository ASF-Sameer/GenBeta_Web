import { LandingPage } from "@/components/landing-page"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  return (
    <main id="main-content">
      <PageTransition>
        <LandingPage />
      </PageTransition>
    </main>
  )
}
