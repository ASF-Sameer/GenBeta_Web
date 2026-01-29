"use client"

import { useState, useEffect, Suspense } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Lightbulb, 
  Users, 
  Target, 
  Award,
  BookOpen,
  Briefcase,
  Mail,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ParticleField = dynamic(
  () => import("@/components/particle-field").then((mod) => mod.ParticleField),
  { ssr: false }
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

const programPillars = [
  {
    icon: Lightbulb,
    title: "Digital Innovation",
    description: "An intensive full-stack workshop providing exposure to modern development practices and a ship-fast mindset. This toolkit has been applied to build digital products and event-launch microsites."
  },
  {
    icon: Users,
    title: "Customer Centricity",
    description: "User-driven solutions designed across digital channels. Feedback, analytics, and rapid iteration are used to reduce friction and deliver intuitive, personal, and dependable experiences at scale."
  },
  {
    icon: Briefcase,
    title: "Agile Delivery",
    description: "All projects are executed using Agile methodologies, ensuring rapid iteration, continuous improvement, and delivering value incrementally while maintaining quality standards."
  },
  {
    icon: Award,
    title: "Leadership Development",
    description: "Developing critical leadership capabilities through executive mentorship, strategic thinking workshops, and real-world project ownership that prepares future leaders."
  }
]

const programTargets = [
  {
    icon: Users,
    title: "Senior Leadership Collaboration",
    description: "Direct collaboration with senior leaders and digital factory squads on strategic initiatives"
  },
  {
    icon: Briefcase,
    title: "Real Product Development",
    description: "Hands-on work with live products and platforms, making meaningful contributions"
  },
  {
    icon: BookOpen,
    title: "Intensive Training",
    description: "Participation in high-impact workshops including Agile, Lean Startup, and UI/UX Design"
  },
  {
    icon: Award,
    title: "Executive Mentorship",
    description: "Receive direct mentorship from executive team to support growth and career development"
  }
]

const teamMembers = [
  {
    name: "Team Member 1",
    role: "UX/UI Designer",
    education: "Bachelor of Business Management",
    email: "member1@zain.com",
    image: "/images/team/member-1_1.jpg"
  },
  {
    name: "Team Member 2",
    role: "Developer",
    education: "Bachelor of Software Engineering",
    email: "member2@zain.com",
    image: "/images/team/member-1_2.jpg"
  },
  {
    name: "Team Member 3",
    role: "Product Owner",
    education: "Bachelor of Engineering",
    email: "member3@zain.com",
    image: "/images/team/member-1_3.jpg"
  },
  {
    name: "Team Member 4",
    role: "Digital Performance Apprentice",
    education: "Bachelor of International Relations",
    email: "member4@zain.com",
    image: "/images/team/member-1_4.jpg"
  },
  {
    name: "Team Member 5",
    role: "Scrum Master",
    education: "Bachelor of Computer Science",
    email: "member5@zain.com",
    image: "/images/team/member-1_5.jpg"
  },
  {
    name: "Team Member 6",
    role: "Project Manager",
    education: "Master of Business Administration",
    email: "member6@zain.com",
    image: "/images/team/member-1_6.jpg"
  }
]

const galleryImages = [
  "/images/gallery/gallery-1_1.jpg",
  "/images/gallery/gallery-1_2.jpg",
  "/images/gallery/gallery-1_3.jpg",
  "/images/gallery/gallery-1_4.jpg",
  "/images/gallery/gallery-1_5.jpg",
  "/images/gallery/gallery-1_6.jpg"
]

function PillarCard({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>; title: string; description: string }) {
  return (
    <motion.article
      variants={itemVariants}
      className="bg-[#3B5998] rounded-2xl p-8 text-white h-full"
      role="article"
      aria-labelledby={`pillar-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center" aria-hidden="true">
          <Icon className="w-8 h-8 text-white" aria-hidden={true} />
        </div>
        <h3 
          id={`pillar-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="text-xl font-bold text-[#F6EB69]"
        >
          {title}
        </h3>
        <p className="text-white/90 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.article>
  )
}

function TargetCard({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>; title: string; description: string }) {
  return (
    <motion.article
      variants={itemVariants}
      className="bg-[#3B5998] rounded-2xl p-6 text-white"
      role="article"
      aria-labelledby={`target-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center" aria-hidden="true">
          <Icon className="w-7 h-7 text-white" aria-hidden={true} />
        </div>
        <h3 
          id={`target-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="text-lg font-bold text-[#F6EB69]"
        >
          {title}
        </h3>
        <p className="text-white/90 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.article>
  )
}

function TeamMemberCard({ name, role, education, email, image }: { name: string; role: string; education: string; email: string; image: string }) {
  return (
    <motion.article
      variants={itemVariants}
      className="bg-white rounded-2xl p-6 shadow-lg text-center"
      role="article"
      aria-labelledby={`team-${name.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#00B5AD]">
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-1">
          <h3 
            id={`team-${name.replace(/\s+/g, '-').toLowerCase()}`}
            className="text-xl font-bold text-[#1E1A5F]"
          >
            {name}
          </h3>
          <p className="text-[#00B5AD] font-semibold">{role}</p>
          <p className="text-gray-600 text-sm">{education}</p>
        </div>
        <a 
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-[#3B5998] hover:text-[#1E1A5F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 rounded-lg px-2 py-1"
          aria-label={`Send email to ${name}`}
        >
          <Mail className="w-4 h-4" aria-hidden="true" />
          <span className="text-sm">{email}</span>
        </a>
      </div>
    </motion.article>
  )
}

function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.max(0, galleryImages.length - itemsPerView)

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex gap-4 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] aspect-[4/3] relative rounded-xl overflow-hidden"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD]"
        aria-label="Previous gallery images"
      >
        <ChevronLeft className="w-6 h-6 text-[#1E1A5F]" aria-hidden="true" />
      </button>
      
      <button
        onClick={goToNext}
        disabled={currentIndex >= maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD]"
        aria-label="Next gallery images"
      >
        <ChevronRight className="w-6 h-6 text-[#1E1A5F]" aria-hidden="true" />
      </button>
      
      <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Gallery navigation">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2",
              index === currentIndex ? "bg-[#3B5998]" : "bg-gray-300 hover:bg-gray-400"
            )}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to gallery page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function LandingPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section - Block Gradient */}
      <section 
        className="relative min-h-screen bg-gradient-to-b from-[#1C2951] via-[#1E1A5F] to-[#2A4365]"
        aria-labelledby="hero-heading"
      >
        {isClient && (
          <Suspense fallback={null}>
            <ParticleField count={60} color="#00B5AD" className="opacity-40" />
          </Suspense>
        )}
        
        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12" role="navigation" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#00B5AD] rounded-lg" aria-label="Gen Z Home">
            <Image
              src="/images/genz-logo.svg"
              alt="Gen Z Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white hover:text-[#00B5AD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] rounded px-2 py-1">Home</a>
            <a href="#team" className="text-white hover:text-[#00B5AD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] rounded px-2 py-1">Meet the Team</a>
            <a href="#pillars" className="text-white hover:text-[#00B5AD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] rounded px-2 py-1">Explore our Work</a>
            <a href="#gallery" className="text-white hover:text-[#00B5AD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] rounded px-2 py-1">Our Experiences</a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.p variants={itemVariants} className="text-white/80 text-lg">
                Welcome to
              </motion.p>
              <motion.h1 
                id="hero-heading"
                variants={itemVariants} 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-[#F6EB69]">The 11th Edition of</span>
                <br />
                <span className="text-[#F6EB69] italic">Generation Z</span>
                <br />
                <span className="text-white">by Zain</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-white/80 text-lg max-w-lg leading-relaxed">
                Over the past several months, we, as Generation Z graduates at Zain Group, have gained invaluable hands-on experience across diverse areas including leadership, innovation, digital delivery, UI/UX design, and agile methodologies.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link href="/reframe">
                  <Button 
                    size="lg" 
                    className="bg-[#00B5AD] hover:bg-[#009690] text-white px-8 py-6 text-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1E1A5F]"
                  >
                    Explore Reframe Program
                    <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/team/group-photo.jpg"
                  alt="Generation Z 11th Edition Team - Group photo of the 2026 cohort"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00B5AD]/30 rounded-full blur-xl" aria-hidden="true" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#F6EB69]/20 rounded-full blur-xl" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - White Background */}
      <section 
        id="about" 
        className="py-20 bg-white"
        aria-labelledby="about-heading"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              id="about-heading"
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-bold text-[#1E1A5F] mb-8"
            >
              About the Gen Z Program
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-700 text-lg leading-relaxed">
              Since 2016, Zain has continuously supported youth development and shaped future leaders, an effort that gave rise to the Generation Z program. It is a development program aimed at identifying and assessing young graduates who innately possess leadership skills. This year marks the 11th anniversary of the program, and as part of Zain&apos;s wider 4WARD strategy, the program positions 6 high-potential young talents at the center of digital transformation efforts, developing critical capabilities in product innovation, agile delivery, leadership, and customer experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Program Pillars - Smooth Gradient Background */}
      <section 
        id="pillars" 
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        aria-labelledby="pillars-heading"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              id="pillars-heading"
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-bold text-[#1E1A5F] mb-12 text-center"
            >
              11th Edition Program Pillars
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {programPillars.map((pillar) => (
                <PillarCard key={pillar.title} {...pillar} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Targets */}
      <section 
        id="targets" 
        className="py-20 bg-white"
        aria-labelledby="targets-heading"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              id="targets-heading"
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-bold text-[#1E1A5F] mb-12 text-center"
            >
              11th Edition Program Targets
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {programTargets.map((target) => (
                <TargetCard key={target.title} {...target} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        id="team" 
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        aria-labelledby="team-heading"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              id="team-heading"
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-bold text-[#1E1A5F] mb-4 text-center"
            >
              Gen Z 2026
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Meet the talented individuals driving innovation and leadership in the 11th Edition
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        id="gallery" 
        className="py-20 bg-white"
        aria-labelledby="gallery-heading"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              id="gallery-heading"
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-bold text-[#3B5998] mb-12"
            >
              Gallery
            </motion.h2>
            <motion.div variants={itemVariants}>
              <GalleryCarousel />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1A5F] py-16" role="contentinfo">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-2xl font-bold text-white">Connect with us</h2>
            <div className="flex gap-6">
              <a 
                href="https://www.linkedin.com/company/zaborns" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Visit Gen Z LinkedIn page (opens in new tab)"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/zaborns" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Visit Gen Z Twitter page (opens in new tab)"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/zaborns" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Visit Gen Z Instagram page (opens in new tab)"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
            
            <div className="flex flex-col items-center space-y-4 pt-8 border-t border-white/20 w-full max-w-md">
              <a 
                href="https://www.zain.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-[#00B5AD] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-3 py-2"
                aria-label="Visit Zain Group main website (opens in new tab)"
              >
                <span>Visit Zain Group</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <p className="text-white/60 text-sm">
                Copyright 2026 Zain. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
