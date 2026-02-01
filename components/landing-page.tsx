"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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

const ourPrograms = [
  {
    title: "Reframe",
    description: "A learning series empowering colleagues to rethink, reset, and drive meaningful change. Starting with Dan Heath's transformative book 'Reset'.",
    link: "/reframe",
    image: "/images/reset-book-cover.png"
  }
]

const teamMembers = [
  {
    name: "Abdulmohsen AlZenki",
    role: "Gen Z Graduate",
    email: "Abdulmohsen.AlZenki@zain.com",
    linkedin: "https://www.linkedin.com/in/abdulmohsen-alzenki",
    image: "/images/team/abdulmohsen-alzenki.png"
  },
  {
    name: "Asail AlHeis",
    role: "Gen Z Graduate",
    email: "Asail.AlHeis@zain.com",
    linkedin: "https://www.linkedin.com/in/asail-alheis",
    image: "/images/team/asail-alheis.png"
  },
  {
    name: "Ayah AlFadhli",
    role: "Gen Z Graduate",
    email: "Ayah.AlFadhli@zain.com",
    linkedin: "https://www.linkedin.com/in/ayah-alfadhli",
    image: "/images/team/ayah-alfadhli.png"
  },
  {
    name: "Ahmed AlOnaizi",
    role: "Gen Z Graduate",
    email: "Ahmed.AlOnaizi@zain.com",
    linkedin: "https://www.linkedin.com/in/ahmed-alonaizi",
    image: "/images/team/ahmed-alonaizi.png"
  },
  {
    name: "Jana AlAbduljader",
    role: "Gen Z Graduate",
    email: "Jana.AlAbduljader@zain.com",
    linkedin: "https://www.linkedin.com/in/jana-alabduljader",
    image: "/images/team/jana-alabduljader.png"
  },
  {
    name: "Miteb AlOqab",
    role: "Gen Z Graduate",
    email: "Miteb.AlOqab@zain.com",
    linkedin: "https://www.linkedin.com/in/miteb-aloqab",
    image: "/images/team/miteb-aloqab.png"
  }
]

const galleryImages = [
  "/images/gallery-new/gallery-1.jpg",
  "/images/gallery-new/gallery-2.jpg",
  "/images/gallery-new/gallery-3.jpg",
  "/images/gallery-new/gallery-4.jpg",
  "/images/gallery-new/gallery-5.jpg",
  "/images/gallery-new/gallery-6.jpg",
  "/images/gallery-new/gallery-7.jpg",
  "/images/gallery-new/gallery-8.jpg",
  "/images/gallery-new/gallery-9.jpg",
  "/images/gallery-new/gallery-10.jpg",
  "/images/gallery-new/gallery-11.jpg",
  "/images/gallery-new/gallery-12.jpg"
]

const previousGenZPrograms = [
  {
    year: "2025",
    title: "Gen Z 2025",
    description: "Empowering the next generation with AI & Big Data, Resilience & Agility, Creative Thinking, Leadership, and Systems Thinking for the future of work.",
    image: "/images/genz-2025.png"
  },
  {
    year: "2024",
    title: "Gen Z 2024",
    description: "Focused on supercharging leadership skills and training based on 4 modules: Speak Up and Pitch Up; Strategic Innovation; Green Skills; and Digital World.",
    image: "/images/genz-2024.png"
  },
  {
    year: "2023",
    title: "Gen Z 2023",
    description: "Focused on cultivating entrepreneurial mindset that supports Zain's 4Sight strategy.",
    image: "/images/genz-2023.png"
  },
  {
    year: "2022",
    title: "Gen Z 2022",
    description: "Geared towards cultivating internal entrepreneurs, innovators, and new thinkers who already possess a mindset capable of supporting Zain's strategic goals.",
    image: "/images/genz-2022.png"
  },
  {
    year: "2021",
    title: "Gen Z 2021",
    description: "Focused on developing digital skills for future data analysts. Addressed the topics of big data, artificial intelligence, and sustainable innovation.",
    image: "/images/genz-2021.png"
  },
  {
    year: "2020",
    title: "Gen Z 2020",
    description: "This cycle incorporated three themes: corporate culture, leadership styles, and future trends.",
    image: "/images/genz-2020.png"
  },
  {
    year: "2019",
    title: "Gen Z 2019",
    description: "Enhancing corporate culture and teamwork when managing projects were the main focus of this edition.",
    image: "/images/genz-2019.png"
  },
  {
    year: "2018",
    title: "Gen Z 2018",
    description: "Enhancing digital skills such as coding and agile project management in addition to a focus on self-growth and development.",
    image: "/images/genz-2018.png"
  },
  {
    year: "2017",
    title: "Gen Z 2017",
    description: "Centered on establishing a business, gaining entrepreneurial skills, and studying innovative trends in the market.",
    image: "/images/genz-2017.png"
  },
  {
    year: "2016",
    title: "Gen Z 2016",
    description: "Focused on a rotation in different departments throughout Zain Group with an emphasis on conducting research on various digital verticals.",
    image: "/images/genz-2016.png"
  }
]

function PillarCard({ title, description, gradientClass, glowClass }: { 
  title: string; 
  description: string;
  gradientClass: string;
  glowClass: string;
}) {
  return (
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
}

function ProgramCard({ title, description, link, image }: { title: string; description: string; link: string; image?: string }) {
  return (
    <Link href={link} scroll={true} className="block group focus:outline-none focus:ring-2 focus:ring-[#00B5AD] rounded-2xl">
      <motion.article
        variants={itemVariants}
        className="relative bg-[#1E1A5F]/80 backdrop-blur-md border border-white/30 rounded-2xl text-white hover:bg-[#1E1A5F]/90 transition-all duration-300 overflow-visible"
        role="article"
        aria-labelledby={`program-${title.replace(/\s+/g, '-').toLowerCase()}`}
        whileHover={{ scale: 1.02 }}
      >
        {/* Book Cover - Overlapping/Poking Out Effect */}
        {image && (
          <div className="absolute -top-8 -left-4 sm:-top-10 sm:-left-6 z-20 pointer-events-none">
            <motion.div 
              className="relative w-28 h-40 sm:w-32 sm:h-44 md:w-36 md:h-52 transform -rotate-6 group-hover:-rotate-3 group-hover:scale-105 transition-all duration-300"
              style={{ transformOrigin: 'bottom right' }}
            >
              {/* Book shadow */}
              <div className="absolute inset-0 rounded-lg bg-black/40 blur-lg translate-x-2 translate-y-2" aria-hidden="true" />
              {/* Book spine - Yellow to match book cover */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-[#d4c800] via-[#e6d900] to-[#f7e73f] rounded-l-md z-10" aria-hidden="true" />
              {/* Book cover */}
              <div className="absolute inset-0 rounded-r-lg rounded-l-sm overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src={image}
                  alt={`${title} program cover`}
                  fill
                  className="object-cover"
                />
                {/* Glossy reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Page edges - bottom */}
              <div className="absolute bottom-0 left-2 right-0 h-2 bg-gradient-to-t from-gray-200 to-white rounded-b-sm" aria-hidden="true" />
            </motion.div>
          </div>
        )}
        
        {/* Content */}
        <div className="flex flex-col space-y-4 p-6 sm:p-8 pl-28 sm:pl-32 md:pl-36 min-h-[180px]">
          <h3 
            id={`program-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
          >
            {title}
          </h3>
          <p className="text-white text-sm sm:text-base leading-relaxed">
            {description}
          </p>
          <span className="inline-flex items-center gap-2 text-[#C3D534] group-hover:text-[#F7E73F] transition-colors font-semibold w-fit">
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </span>
        </div>
      </motion.article>
    </Link>
  )
}

function TeamMemberCard({ name, role, email, linkedin, image }: { name: string; role: string; email: string; linkedin: string; image: string }) {
  return (
    <motion.article
      variants={itemVariants}
      className="bg-[#1E1A5F]/80 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
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
            className="text-xl font-bold text-white"
          >
            {name}
          </h3>
          <p className="text-[#C3D534] font-semibold">{role}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <a 
            href={`mailto:${email}`}
            className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 rounded-lg px-2 py-1 text-sm"
            aria-label={`Send email to ${name}`}
          >
            {email}
          </a>
          <a 
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00B5AD] hover:text-[#C3D534] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 rounded-lg px-2 py-1 text-sm"
            aria-label={`Visit ${name}'s LinkedIn profile (opens in new tab)`}
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </motion.article>
  )
}

function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [shuffledImages, setShuffledImages] = useState<string[]>([])
  
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
  
  const maxIndex = Math.max(0, shuffledImages.length - itemsPerView)
  
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [maxIndex, currentIndex])
  
  useEffect(() => {
    if (shuffledImages.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [maxIndex, shuffledImages.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }
  
  const getItemWidth = () => {
    if (itemsPerView === 1) return "w-full"
    if (itemsPerView === 2) return "w-[calc(50%-0.5rem)]"
    return "w-[calc(33.333%-0.67rem)]"
  }

  return (
    <div className="relative px-4 md:px-0">
      <div className="overflow-hidden">
        <div 
          className="flex gap-4 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {shuffledImages.map((image, index) => (
            <div 
              key={image} 
              className={cn("flex-shrink-0 aspect-[4/3] relative rounded-xl overflow-hidden", getItemWidth())}
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
        className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD]"
        aria-label="Previous gallery images"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#1E1A5F]" aria-hidden="true" />
      </button>
      
      <button
        onClick={goToNext}
        disabled={currentIndex >= maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD]"
        aria-label="Next gallery images"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#1E1A5F]" aria-hidden="true" />
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
    <div className="min-h-screen bg-gradient-to-b from-[#1C2951] via-[#1E1A5F] via-[#0057B8] via-[#1E1A5F] to-[#1C2951]">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen"
        aria-labelledby="hero-heading"
      >
        
        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12" role="navigation" aria-label="Main navigation">
          <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-[#00B5AD] rounded-lg" aria-label="Gen Z Home">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent">
              Generation Z
            </span>
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
                <span className="bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent">The 11th Edition of</span>
                <br />
                <span className="bg-gradient-to-r from-[#F7E73F] via-[#C3D534] to-[#00B5AD] bg-clip-text text-transparent italic">Generation Z</span>
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
                    className="bg-gradient-to-r from-[#C3D534] to-[#00B5AD] hover:from-[#00B5AD] hover:to-[#C3D534] text-[#1E1A5F] font-bold px-8 py-6 text-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1E1A5F] transition-all duration-300"
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
                  alt="Generation Z 11th Edition Team - Official Group Photo"
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

      {/* About Section */}
      <section 
        id="about" 
        className="py-20"
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
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent mb-8"
            >
              About the Gen Z Program
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white text-lg leading-relaxed">
              Since 2016, Zain has continuously supported youth development and shaped future leaders, an effort that gave rise to the Generation Z program. It is a development program aimed at identifying and assessing young graduates who innately possess leadership skills. This year marks the 11th anniversary of the program, and as part of Zain&apos;s wider 4WARD strategy, the program positions 6 high-potential young talents at the center of digital transformation efforts, developing critical capabilities in product innovation, agile delivery, leadership, and customer experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Program Pillars - with Animated Orbs */}
      <section 
        id="pillars" 
        className="relative py-20 overflow-hidden"
        aria-labelledby="pillars-heading"
      >
        {/* Animated Gradient Orbs - 10th Edition Style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div 
            className="absolute top-20 right-10 w-96 h-96 bg-[#C3D534]/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-80 h-80 bg-[#F7E73F]/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.25, 0.2],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00B5AD]/15 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.2, 0.15],
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              id="pillars-heading"
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              11th Edition Program Theme
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              Our comprehensive development framework designed to cultivate future-ready leaders
            </motion.p>
            {/* 5-Pillar Grid: All 5 in responsive grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {programPillars.map((pillar) => (
                <PillarCard key={pillar.title} {...pillar} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section 
        id="programs" 
        className="py-20"
        aria-labelledby="programs-heading"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              id="programs-heading"
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              Our Programs
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              Initiatives designed to foster growth, learning, and meaningful impact
            </motion.p>
            <div className="max-w-2xl mx-auto">
              {ourPrograms.map((program) => (
                <ProgramCard key={program.title} {...program} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        id="team" 
        className="py-20"
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
              className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              Gen Z 2026
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
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

      {/* Previous Gen Z Programs Section */}
      <section 
        id="previous-programs" 
        className="py-20"
        aria-labelledby="previous-programs-heading"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              id="previous-programs-heading"
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              The Previous Gen Zs
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              Discover the legacy of innovation and leadership across all editions
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {previousGenZPrograms.map((program) => (
                <motion.article
                  key={program.year}
                  variants={itemVariants}
                  className="bg-[#1E1A5F]/80 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden hover:bg-[#1E1A5F]/90 transition-all duration-300 group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={program.image}
                      alt={`${program.title} team photo`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A5F] via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[#F7E73F] text-lg font-bold">{program.year}</span>
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
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        id="gallery" 
        className="py-20"
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
              className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
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
                className="text-white hover:text-[#00B5AD] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-3 py-2"
                aria-label="Visit Zain Group main website (opens in new tab)"
              >
                Visit Zain Group
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
