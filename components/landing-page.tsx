"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TransitionLink } from "@/components/transition-link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

const defaultProgramPillars = [
  {
    title: "AI & Big Data",
    description: "LLMs & Agentic AI, Analytics & Reporting, Critical Thinking about Data Quality, Security & AI Ethics, and Technological Literacy",
    gradientClass: "from-[#C3D534] to-[#00B5AD]",
    glowClass: "shadow-[0_0_30px_rgba(195,213,52,0.3)]"
  },
  {
    title: "Resilience, Flexibility & Agility",
    description: "Neuroplasticity, Purpose & Fulfillment, Mental Toughness & Coaching",
    gradientClass: "from-[#00B5AD] to-[#0057B8]",
    glowClass: "shadow-[0_0_30px_rgba(0,181,173,0.3)]"
  },
  {
    title: "Creative Thinking",
    description: "Problem-solving through Inclusion, Wellbeing, and Collaborative Growth",
    gradientClass: "from-[#9B4F96] to-[#F4A6C9]",
    glowClass: "shadow-[0_0_30px_rgba(155,79,150,0.3)]"
  },
  {
    title: "Leadership & Social Influence",
    description: "Effective Negotiation & Communication Skills, Curiosity & Lifelong Learning, Self-awareness & Motivation",
    gradientClass: "from-[#F7E73F] to-[#C3D534]",
    glowClass: "shadow-[0_0_30px_rgba(247,231,63,0.3)]"
  },
  {
    title: "Systems Thinking",
    description: "Lean Six Sigma, Big Picture Thinking, Systems Mapping & Visualization",
    gradientClass: "from-[#00B5AD] to-[#C3D534]",
    glowClass: "shadow-[0_0_30px_rgba(0,181,173,0.3)]"
  }
]

const defaultOurPrograms = [
  {
    title: "Reframe",
    description: "A learning series empowering colleagues to rethink, reset, and drive meaningful change. Starting with Dan Heath's transformative book 'Reset'.",
    link: "/reframe",
    image: "/images/reset-book-3d-opt.webp"
  }
]

const defaultTeamMembers = [
  {
    name: "Abdulmohsen AlZenki",
    role: "Gen Z Graduate",
    email: "Abdulmohsen.AlZenki@zain.com",
    linkedin: "https://www.linkedin.com/in/abdulmohsen-alzenki",
    image: "/images/team/abdulmohsen-alzenki-opt.webp"
  },
  {
    name: "Asail AlHeis",
    role: "Gen Z Graduate",
    email: "Asail.AlHeis@zain.com",
    linkedin: "https://www.linkedin.com/in/asail-alheis",
    image: "/images/team/asail-alheis-opt.webp"
  },
  {
    name: "Ayah AlFadhli",
    role: "Gen Z Graduate",
    email: "Ayah.AlFadhli@zain.com",
    linkedin: "https://www.linkedin.com/in/ayah-alfadhli",
    image: "/images/team/ayah-alfadhli-opt.webp"
  },
  {
    name: "Ahmed AlOnaizi",
    role: "Gen Z Graduate",
    email: "Ahmed.AlOnaizi@zain.com",
    linkedin: "https://www.linkedin.com/in/ahmed-alonaizi",
    image: "/images/team/ahmed-alonaizi-opt.webp"
  },
  {
    name: "Jana AlAbduljader",
    role: "Gen Z Graduate",
    email: "Jana.AlAbduljader@zain.com",
    linkedin: "https://www.linkedin.com/in/jana-alabduljader",
    image: "/images/team/jana-alabduljader-opt.webp"
  },
  {
    name: "Miteb AlOqab",
    role: "Gen Z Graduate",
    email: "Miteb.AlOqab@zain.com",
    linkedin: "https://www.linkedin.com/in/miteb-aloqab",
    image: "/images/team/miteb-aloqab-opt.webp"
  }
]

const defaultGalleryImages = [
  "/images/gallery-new/gallery-1-opt.webp",
  "/images/gallery-new/gallery-2-opt.webp",
  "/images/gallery-new/gallery-3-opt.webp",
  "/images/gallery-new/gallery-4-opt.webp",
  "/images/gallery-new/gallery-5-opt.webp",
  "/images/gallery-new/gallery-6-opt.webp",
  "/images/gallery-new/gallery-7-opt.webp",
  "/images/gallery-new/gallery-8-opt.webp",
  "/images/gallery-new/gallery-9-opt.webp",
  "/images/gallery-new/gallery-10-opt.webp",
  "/images/gallery-new/gallery-11-opt.webp",
  "/images/gallery-new/gallery-12-opt.webp"
]

const defaultPreviousGenZPrograms = [
  {
    year: "2025",
    title: "Gen Z 2025",
    description: "Empowering the next generation with AI & Big Data, Resilience & Agility, Creative Thinking, Leadership, and Systems Thinking for the future of work.",
    image: "/images/genz-2025-opt.webp",
    link: "https://generation-z-kappa.vercel.app/"
  },
  {
    year: "2024",
    title: "Gen Z 2024",
    description: "Focused on supercharging leadership skills and training based on 4 modules: Speak Up and Pitch Up; Strategic Innovation; Green Skills; and Digital World.",
    image: "/images/genz-2024-opt.webp"
  },
  {
    year: "2023",
    title: "Gen Z 2023",
    description: "Focused on cultivating entrepreneurial mindset that supports Zain's 4Sight strategy.",
    image: "/images/genz-2023-opt.webp"
  },
  {
    year: "2022",
    title: "Gen Z 2022",
    description: "Geared towards cultivating internal entrepreneurs, innovators, and new thinkers who already possess a mindset capable of supporting Zain's strategic goals.",
    image: "/images/genz-2022-opt.webp"
  },
  {
    year: "2021",
    title: "Gen Z 2021",
    description: "Focused on developing digital skills for future data analysts. Addressed the topics of big data, artificial intelligence, and sustainable innovation.",
    image: "/images/genz-2021-opt.webp"
  },
  {
    year: "2020",
    title: "Gen Z 2020",
    description: "This cycle incorporated three themes: corporate culture, leadership styles, and future trends.",
    image: "/images/genz-2020-opt.webp"
  },
  {
    year: "2019",
    title: "Gen Z 2019",
    description: "Enhancing corporate culture and teamwork when managing projects were the main focus of this edition.",
    image: "/images/genz-2019-opt.webp"
  },
  {
    year: "2018",
    title: "Gen Z 2018",
    description: "Enhancing digital skills such as coding and agile project management in addition to a focus on self-growth and development.",
    image: "/images/genz-2018-opt.webp"
  },
  {
    year: "2017",
    title: "Gen Z 2017",
    description: "Centered on establishing a business, gaining entrepreneurial skills, and studying innovative trends in the market.",
    image: "/images/genz-2017-opt.webp"
  },
  {
    year: "2016",
    title: "Gen Z 2016",
    description: "Focused on a rotation in different departments throughout Zain Group with an emphasis on conducting research on various digital verticals.",
    image: "/images/genz-2016-opt.webp"
  }
]

const defaultFooter = {
  socialLinks: [
    { platform: "linkedin", url: "https://www.linkedin.com/company/zain/posts/?feedView=all" },
    { platform: "twitter", url: "https://x.com/Zain" },
    { platform: "instagram", url: "https://www.instagram.com/zaingroup/" }
  ],
  zainLinks: [
    { label: "Visit Zain Group", url: "https://www.zain.com" }
  ],
  copyrightText: "Copyright 2026 Zain. All Rights Reserved"
}

function PillarCard({ title, description, gradientClass, glowClass, linkUrl }: { 
  title: string; 
  description: string;
  gradientClass: string;
  glowClass: string;
  linkUrl?: string;
}) {
  const content = (
    <motion.article
      variants={itemVariants}
      className={cn(
        "relative rounded-2xl p-6 text-white h-full overflow-hidden backdrop-blur-md",
        "bg-[#1E1A5F]/80 border border-white/30 hover:bg-[#1E1A5F]/90 transition-all duration-300",
        glowClass
      )}
      role="article"
      aria-labelledby={`pillar-${title.replace(/\s+/g, '-').toLowerCase()}`}
      whileHover={{ scale: 1.02 }}
    >
      <div className={cn("absolute inset-0 opacity-40 bg-gradient-to-br", gradientClass)} aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-start text-left space-y-3">
        <h3 
          id={`pillar-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className={cn("text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent", gradientClass)}
        >
          {title}
        </h3>
        <p className="text-white text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.article>
  )
  
  if (linkUrl) {
    return (
      <TransitionLink href={linkUrl} className="block h-full">
        {content}
      </TransitionLink>
    )
  }
  
  return content
}

function ProgramCard({ title, description, link, image }: { title: string; description: string; link: string; image?: string }) {
  return (
    <TransitionLink href={link} className="block group focus:outline-none focus:ring-2 focus:ring-[#00B5AD] rounded-2xl">
      <motion.article
        variants={itemVariants}
        className="relative bg-[#1E1A5F]/80 backdrop-blur-md border border-white/30 rounded-2xl text-white hover:bg-[#1E1A5F]/90 transition-all duration-300"
        role="article"
        aria-labelledby={`program-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <div className="flex flex-col sm:flex-row items-center gap-8 p-8">
          {image && (
            <div className="relative flex-shrink-0 group-hover:scale-105 transition-transform duration-500 ease-out">
              <div className="relative w-36 h-48 sm:w-44 sm:h-56">
                <Image
                  src={image}
                  alt={`${title} program cover`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 640px) 144px, 176px"
                />
              </div>
            </div>
          )}
          <div className="flex flex-col space-y-4 text-center sm:text-left flex-1">
            <h3 
              id={`program-${title.replace(/\s+/g, '-').toLowerCase()}`}
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              {title}
            </h3>
            <p className="text-white/90 text-base leading-relaxed">
              {description}
            </p>
            <span className="inline-flex items-center gap-2 text-[#C3D534] group-hover:text-[#F7E73F] transition-colors font-semibold w-fit mx-auto sm:mx-0 mt-2">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
          </div>
        </div>
      </motion.article>
    </TransitionLink>
  )
}

function TeamMemberCard({ name, role, email, linkedin, image }: { name: string; role: string; email?: string; linkedin?: string; image?: string }) {
  return (
    <motion.article
      variants={itemVariants}
      className="bg-[#1E1A5F]/80 backdrop-blur-md border border-white/30 rounded-2xl p-4 sm:p-6 text-center"
      role="article"
      aria-labelledby={`team-${name.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="flex flex-col items-center space-y-3 sm:space-y-4">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-3 sm:border-4 border-[#00B5AD]">
          {image ? (
            <Image
              src={image}
              alt={`Portrait of ${name}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 96px, 128px"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#C3D534] to-[#00B5AD] flex items-center justify-center">
              <span className="text-3xl sm:text-4xl font-bold text-white">{name.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="space-y-1">
          <h3 
            id={`team-${name.replace(/\s+/g, '-').toLowerCase()}`}
            className="text-lg sm:text-xl font-bold text-white"
          >
            {name}
          </h3>
          <p className="text-[#C3D534] font-semibold text-sm sm:text-base">{role}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          {email && (
            <a 
              href={`mailto:${email}`}
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 rounded-lg px-2 py-1 text-xs sm:text-sm break-all"
              aria-label={`Send email to ${name}`}
            >
              {email}
            </a>
          )}
          {linkedin && (
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00B5AD] hover:text-[#C3D534] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 rounded-lg px-2 py-1 text-xs sm:text-sm"
              aria-label={`Visit ${name}'s LinkedIn profile (opens in new tab)`}
            >
              LinkedIn Profile
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function GalleryCarousel({ images }: { images?: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [shuffledImages, setShuffledImages] = useState<string[]>([])
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  
  const galleryImages = images && images.length > 0 ? images : defaultGalleryImages
  
  useEffect(() => {
    const shuffled = [...galleryImages].sort(() => Math.random() - 0.5)
    setShuffledImages(shuffled)
  }, [])
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  useEffect(() => {
    if (shuffledImages.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, shuffledImages.length - itemsPerView)
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [shuffledImages.length, itemsPerView])
  
  const maxIndex = Math.max(0, shuffledImages.length - itemsPerView)
  
  const handlePrev = () => setCurrentIndex(prev => Math.max(0, prev - 1))
  const handleNext = () => setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchMove = (e: React.TouchEvent) => { touchEndX.current = e.touches[0].clientX }
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (diff > 50) handleNext()
    else if (diff < -50) handlePrev()
  }
  
  if (shuffledImages.length === 0) return null

  const gapPx = itemsPerView > 1 ? 16 : 0
  const slideWidth = `calc((100% - ${(itemsPerView - 1) * gapPx}px) / ${itemsPerView})`
  const offset = `calc(-${currentIndex} * (${slideWidth} + ${gapPx}px))`
  
  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-2xl touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ 
            transform: `translateX(${offset})`,
            gap: `${gapPx}px`
          }}
        >
          {shuffledImages.map((img, index) => (
            <div 
              key={index}
              className="shrink-0"
              style={{ width: slideWidth }}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={img}
                  alt={`Gen Z Experience ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center disabled:opacity-20 disabled:cursor-not-allowed hover:bg-black/50 active:scale-90 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous gallery images"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" aria-hidden="true" />
      </button>
      <button 
        onClick={handleNext}
        disabled={currentIndex >= maxIndex}
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center disabled:opacity-20 disabled:cursor-not-allowed hover:bg-black/50 active:scale-90 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next gallery images"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" aria-hidden="true" />
      </button>

      <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
        {shuffledImages.slice(0, Math.min(shuffledImages.length, 12)).map((_, index) => (
          <button
            key={`gallery-dot-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-gradient-to-r from-[#C3D534] to-[#00B5AD] w-4"
                : "bg-white/25 w-1.5"
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

interface TeamMember {
  name: string
  role: string
  email?: string
  linkedin?: string
  image?: string
}

interface Pillar {
  title: string
  description: string
  color?: string
  icon?: string
  topics?: string[]
  linkUrl?: string
}

interface Program {
  title: string
  description?: string
  shortDescription?: string
  link?: string
  slug?: { current: string }
  image?: string
}

interface PreviousEdition {
  year: string
  title: string
  description?: string
  whatMadeUsDifferent?: string
  image?: string
  link?: string
}

interface FooterData {
  copyrightText?: string
  tagline?: string
  socialLinks?: { platform: string; url: string; icon?: string }[]
  quickLinks?: { label: string; url: string }[]
  zainLinks?: { label: string; url: string }[]
}

interface HeroSection {
  welcomeText?: string
  title?: string
  programName?: string
  byLine?: string
  description?: string
  ctaText?: string
  ctaLink?: string
}

interface AboutSection {
  title?: string
  subtitle?: string
  description?: string
}

interface SectionTitles {
  pillarsTitle?: string
  pillarsSubtitle?: string
  programsTitle?: string
  programsSubtitle?: string
  teamTitle?: string
  teamSubtitle?: string
  previousTitle?: string
  previousSubtitle?: string
  galleryTitle?: string
}

interface LandingPageProps {
  sanityTeamMembers?: TeamMember[]
  sanityPillars?: Pillar[]
  sanityPrograms?: Program[]
  sanityPreviousEditions?: PreviousEdition[]
  sanityGalleryImages?: string[]
  sanityFooter?: FooterData
  sanityHero?: HeroSection
  sanityAbout?: AboutSection
  sectionTitles?: SectionTitles
}

export function LandingPage({ 
  sanityTeamMembers, 
  sanityPillars,
  sanityPrograms,
  sanityPreviousEditions,
  sanityGalleryImages,
  sanityFooter,
  sanityHero,
  sanityAbout,
  sectionTitles
}: LandingPageProps) {
  const [isClient, setIsClient] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const displayTeamMembers = sanityTeamMembers && sanityTeamMembers.length > 0 ? sanityTeamMembers : defaultTeamMembers
  const displayPillars = sanityPillars && sanityPillars.length > 0 
    ? sanityPillars.map((p, i) => ({
        ...p,
        gradientClass: defaultProgramPillars[i % defaultProgramPillars.length].gradientClass,
        glowClass: defaultProgramPillars[i % defaultProgramPillars.length].glowClass
      }))
    : defaultProgramPillars
  const displayPrograms = sanityPrograms && sanityPrograms.length > 0 
    ? sanityPrograms.map(p => ({
        title: p.title,
        description: p.shortDescription || p.description || "",
        link: p.slug?.current ? `/workshop/${p.slug.current}` : (p.link || "/"),
        image: p.image
      }))
    : defaultOurPrograms
  const displayPreviousEditions = sanityPreviousEditions && sanityPreviousEditions.length > 0 
    ? sanityPreviousEditions.map(e => ({
        year: e.year,
        title: e.title,
        description: e.whatMadeUsDifferent || e.description || "",
        image: e.image || "/images/genz-placeholder.png",
        link: e.link
      }))
    : defaultPreviousGenZPrograms
  const displayFooter = sanityFooter || defaultFooter
  const hero = sanityHero || {}
  const about = sanityAbout || {}
  const sections = sectionTitles || {}

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C2951] via-[#1E1A5F] via-[#0057B8] via-[#1E1A5F] to-[#1C2951]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <section 
          className="relative min-h-screen"
          aria-labelledby="hero-heading"
        >
          <nav className="relative z-10 py-4" role="navigation" aria-label="Main navigation">
            <div className="flex items-center justify-between">
              <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-[#00B5AD] rounded-lg shrink-0" aria-label="Gen Z Home">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent">
                  Generation Z
                </span>
              </Link>
              <div className="hidden md:flex items-center gap-4 lg:gap-8">
                <a href="#about" className="text-sm lg:text-base text-white hover:text-[#00B5AD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] rounded px-2 py-1">Home</a>
                <a href="#team" className="text-sm lg:text-base text-white hover:text-[#00B5AD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] rounded px-2 py-1">Meet the Team</a>
                <a href="#pillars" className="text-sm lg:text-base text-white hover:text-[#00B5AD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] rounded px-2 py-1">Explore our Work</a>
                <a href="#gallery" className="text-sm lg:text-base text-white hover:text-[#00B5AD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] rounded px-2 py-1">Our Experiences</a>
              </div>
            </div>
          </nav>

          <div className="md:hidden fixed top-4 right-4 z-50">
            <button
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1E1A5F]/80 backdrop-blur-xl border border-white/20 text-white shadow-lg shadow-black/20 hover:bg-[#1E1A5F] transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            {mobileMenuOpen && (
              <>
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10" onClick={() => setMobileMenuOpen(false)} />
                <div className="absolute top-14 right-0 w-56">
                  <div className="bg-[#1E1A5F]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-3 space-y-0.5 shadow-xl shadow-black/30">
                    {[
                      { href: "#about", label: "Home" },
                      { href: "#team", label: "Meet the Team" },
                      { href: "#pillars", label: "Explore our Work" },
                      { href: "#gallery", label: "Our Experiences" },
                    ].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/90 hover:bg-white/10 hover:text-[#00B5AD] active:bg-white/15 transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#C3D534] to-[#00B5AD] shrink-0" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="relative z-10 py-8 sm:py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.p variants={itemVariants} className="text-white/80 text-lg">
                {hero.welcomeText || "Welcome to"}
              </motion.p>
              <motion.h1 
                id="hero-heading"
                variants={itemVariants} 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent">{hero.title || "The 11th Edition of"}</span>
                <br />
                <span className="bg-gradient-to-r from-[#F7E73F] via-[#C3D534] to-[#00B5AD] bg-clip-text text-transparent italic">{hero.programName || "Generation Z"}</span>
                <br />
                <span className="text-white">{hero.byLine || "by Zain"}</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-white/80 text-base sm:text-lg max-w-lg leading-relaxed">
                {hero.description || "Over the past several months, we, as Generation Z graduates at Zain Group, have gained invaluable hands-on experience across diverse areas including leadership, innovation, digital delivery, UI/UX design, and agile methodologies."}
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <TransitionLink href={hero.ctaLink || "/reframe"}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#C3D534] to-[#00B5AD] hover:from-[#00B5AD] hover:to-[#C3D534] text-[#1E1A5F] font-bold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1E1A5F] transition-all duration-300 active:scale-95"
                  >
                    {hero.ctaText || "Explore Reframe Program"}
                    <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                  </Button>
                </TransitionLink>
              </motion.div>
            </motion.div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/team/group-photo-opt.webp"
                  alt="Generation Z 11th Edition Team - Official Group Photo"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                  priority
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-[#00B5AD]/30 rounded-full blur-xl" aria-hidden="true" />
              <div className="absolute -bottom-4 -left-4 w-20 sm:w-32 h-20 sm:h-32 bg-[#F6EB69]/20 rounded-full blur-xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section 
        id="about" 
        className="py-12 sm:py-16 lg:py-20"
        aria-labelledby="about-heading"
      >
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
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent mb-8"
          >
            {about.title || "About the Gen Z Program"}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white text-base sm:text-lg leading-relaxed">
            {about.description || "Since 2016, Zain has continuously supported youth development and shaped future leaders, an effort that gave rise to the Generation Z program. It is a development program aimed at identifying and assessing young graduates who innately possess leadership skills. This year marks the 11th anniversary of the program, and as part of Zain's wider 4WARD strategy, the program positions 6 high-potential young talents at the center of digital transformation efforts, developing critical capabilities in product innovation, agile delivery, leadership, and customer experience."}
          </motion.p>
        </motion.div>
      </section>

      <section 
        id="pillars" 
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
        aria-labelledby="pillars-heading"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div 
            className="absolute top-20 right-10 w-48 sm:w-96 h-48 sm:h-96 bg-[#C3D534]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-40 sm:w-80 h-40 sm:h-80 bg-[#F7E73F]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.25, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="hidden sm:block">
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00B5AD]/15 rounded-full blur-3xl"
              animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.2, 0.15] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
        
        <div className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              id="pillars-heading"
              variants={itemVariants} 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              {sections.pillarsTitle || "11th Edition Program Theme"}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/70 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
              {sections.pillarsSubtitle || "Our comprehensive development framework designed to cultivate future-ready leaders"}
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {displayPillars.map((pillar) => (
                <PillarCard key={pillar.title} {...pillar} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section 
        id="programs" 
        className="py-12 sm:py-16 lg:py-20"
        aria-labelledby="programs-heading"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            id="programs-heading"
            variants={itemVariants} 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
          >
            {sections.programsTitle || "Our Programs"}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white/70 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            {sections.programsSubtitle || "Initiatives designed to foster growth, learning, and meaningful impact"}
          </motion.p>
          <div className="max-w-2xl mx-auto space-y-6">
            {displayPrograms.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </motion.div>
      </section>

      <section 
        id="team" 
        className="py-12 sm:py-16 lg:py-20"
        aria-labelledby="team-heading"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            id="team-heading"
            variants={itemVariants} 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
          >
            {sections.teamTitle || "Gen Z 2026"}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white/70 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            {sections.teamSubtitle || "Meet the talented individuals driving innovation and leadership in the 11th Edition"}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {displayTeamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </motion.div>
      </section>

      <section 
        id="previous-programs" 
        className="py-12 sm:py-16 lg:py-20"
        aria-labelledby="previous-programs-heading"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            id="previous-programs-heading"
            variants={itemVariants} 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
          >
            {sections.previousTitle || "The Previous Gen Zs"}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white/70 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            {sections.previousSubtitle || "Discover the legacy of innovation and leadership across all editions"}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {displayPreviousEditions.map((program) => {
              const CardContent = (
                <>
                  <div className={cn(
                    "relative w-full overflow-hidden",
                    program.year === "2025" ? "h-36" : "h-48"
                  )}>
                    <Image
                      src={program.image || "/images/genz-placeholder.png"}
                      alt={`${program.title} team photo`}
                      fill
                      className={cn(
                        "group-hover:scale-105 transition-transform duration-500 object-cover",
                        program.year === "2025" && "object-[center_20%]"
                      )}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A5F] via-transparent to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col space-y-3">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent">
                      {program.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      <span className="text-[#00B5AD] font-medium">What Made Us Different:</span>
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {program.description}
                    </p>
                    {program.link && (
                      <span className="inline-flex items-center gap-2 text-[#C3D534] group-hover:text-[#F7E73F] transition-colors font-semibold text-sm">
                        Visit Website <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </>
              );

              return program.link ? (
                <motion.a
                  key={program.year}
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="bg-[#1E1A5F]/80 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden hover:bg-[#1E1A5F]/90 transition-all duration-300 group block"
                >
                  {CardContent}
                </motion.a>
              ) : (
                <motion.article
                  key={program.year}
                  variants={itemVariants}
                  className="bg-[#1E1A5F]/80 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden hover:bg-[#1E1A5F]/90 transition-all duration-300 group"
                >
                  {CardContent}
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section 
        id="gallery" 
        className="py-12 sm:py-16 lg:py-20"
        aria-labelledby="gallery-heading"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            id="gallery-heading"
            variants={itemVariants} 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
          >
            {sections.galleryTitle || "Gallery"}
          </motion.h2>
          <motion.div variants={itemVariants}>
            <GalleryCarousel images={sanityGalleryImages} />
          </motion.div>
        </motion.div>
      </section>
        
      </div>

      <footer className="bg-[#1E1A5F] py-12 sm:py-16" role="contentinfo">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Connect with us</h2>
            <div className="flex gap-6">
              {(displayFooter.socialLinks || []).map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={`Visit ${social.platform} page (opens in new tab)`}
                >
                  {social.platform === 'linkedin' && (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {social.platform === 'twitter' && (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                  {social.platform === 'instagram' && (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
            
            <div className="flex flex-col items-center space-y-4 pt-8 border-t border-white/20 w-full max-w-md">
              {(displayFooter.zainLinks || []).map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00B5AD] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-3 py-2"
                  aria-label={`${link.label} (opens in new tab)`}
                >
                  {link.label}
                </a>
              ))}
              <p className="text-white/60 text-sm">
                {displayFooter.copyrightText || "Copyright 2026 Zain. All Rights Reserved"}
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
