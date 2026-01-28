import { GenZHeader } from "@/components/genz/header"
import { HeroSection } from "@/components/genz/hero-section"
import { AboutSection } from "@/components/genz/about-section"
import { ProgramsSection } from "@/components/genz/programs-section"
import { GenZFooter } from "@/components/genz/footer"

export default function Home() {
  return (
    <>
      <GenZHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
      </main>
      <GenZFooter />
    </>
  )
}
