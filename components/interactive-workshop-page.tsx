"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { 
  Clock, 
  MapPin, 
  Users, 
  Calendar,
  Lightbulb,
  Target,
  Zap,
  BookOpen,
  ArrowRight
} from "lucide-react"
import { SelectableBookCard } from "@/components/selectable-book-card"
import { BookDetailSection } from "@/components/book-detail-section"
import { Button } from "@/components/ui/button"

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

interface Book {
  _id: string
  title: string
  author?: string
  coverImageUrl?: string
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
}

interface Facilitator {
  name: string
  role?: string
  bio?: string
  imageUrl?: string
  email?: string
  linkedin?: string
  specialties?: string[]
}

interface WorkshopData {
  title: string
  shortDescription?: string
  heroSection?: {
    badge?: string
    title?: string
    subtitle?: string
    backgroundImageUrl?: string
  }
  aboutSection?: {
    title?: string
    description?: unknown[]
    highlights?: string[]
    imageUrl?: string
  }
  benefitsSection?: {
    title?: string
    subtitle?: string
    benefits?: Array<{
      icon?: string
      title?: string
      description?: string
    }>
  }
  attendeesSection?: {
    title?: string
    subtitle?: string
    attendeeTypes?: Array<{
      icon?: string
      title?: string
      description?: string
    }>
  }
  timingSection?: {
    title?: string
    details?: Array<{
      icon?: string
      label?: string
      value?: string
    }>
  }
  readingJourneySection?: {
    title?: string
    subtitle?: string
    books?: Book[]
  }
  sessionFlowSection?: {
    badge?: string
    title?: string
    subtitle?: string
    sessions?: Array<{
      time?: string
      title?: string
      description?: string
      duration?: string
      icon?: string
    }>
  }
  facilitatorsSection?: {
    title?: string
    subtitle?: string
    facilitators?: Facilitator[]
  }
  reserveSpotSection?: {
    title?: string
    subtitle?: string
    ctaText?: string
    spotsText?: string
  }
  registrationSection?: {
    title?: string
    subtitle?: string
    formEmbedUrl?: string
    formHeight?: number
    alternativeText?: string
  }
}

interface InteractiveWorkshopPageProps {
  workshop: WorkshopData
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  clock: Clock,
  mappin: MapPin,
  users: Users,
  calendar: Calendar,
  lightbulb: Lightbulb,
  target: Target,
  zap: Zap,
  book: BookOpen,
}

function getIcon(iconName?: string) {
  if (!iconName) return Lightbulb
  return iconMap[iconName.toLowerCase()] || Lightbulb
}

export function InteractiveWorkshopPage({ workshop }: InteractiveWorkshopPageProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  const handleBookSelect = (book: Book) => {
    setSelectedBook(book)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToWorkshop = () => {
    setSelectedBook(null)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {selectedBook ? (
          <motion.div
            key="book-detail"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <BookDetailSection 
              book={selectedBook} 
              onBack={handleBackToWorkshop}
              workshopTitle={workshop.title}
            />
          </motion.div>
        ) : (
          <motion.div
            key="workshop-content"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <HeroSection 
              badge={workshop.heroSection?.badge}
              title={workshop.heroSection?.title || workshop.title}
              subtitle={workshop.heroSection?.subtitle || workshop.shortDescription}
              backgroundImage={workshop.heroSection?.backgroundImageUrl}
            />
            
            {workshop.aboutSection && (
              <AboutSection data={workshop.aboutSection} />
            )}
            
            {workshop.benefitsSection && (
              <BenefitsSection data={workshop.benefitsSection} />
            )}
            
            {workshop.attendeesSection && (
              <AttendeesSection data={workshop.attendeesSection} />
            )}
            
            {workshop.timingSection && (
              <TimingSection data={workshop.timingSection} />
            )}
            
            {workshop.readingJourneySection && workshop.readingJourneySection.books && workshop.readingJourneySection.books.length > 0 && (
              <ReadingJourneySection 
                data={workshop.readingJourneySection} 
                onBookSelect={handleBookSelect}
                selectedBookId={selectedBook?._id}
              />
            )}
            
            {workshop.sessionFlowSection && (
              <SessionFlowSection data={workshop.sessionFlowSection} />
            )}
            
            {workshop.facilitatorsSection && workshop.facilitatorsSection.facilitators && workshop.facilitatorsSection.facilitators.length > 0 && (
              <FacilitatorsSection data={workshop.facilitatorsSection} />
            )}
            
            {workshop.reserveSpotSection && (
              <ReserveSpotSection data={workshop.reserveSpotSection} />
            )}
            
            {workshop.registrationSection && (
              <RegistrationSection data={workshop.registrationSection} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function HeroSection({ badge, title, subtitle, backgroundImage }: {
  badge?: string
  title?: string
  subtitle?: string
  backgroundImage?: string
}) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C2951]/80 via-[#1E1A5F]/90 to-[#1E1A5F]" />
        </div>
      )}
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-[#C3D534] to-[#00B5AD] text-[#1E1A5F] font-semibold rounded-full text-sm">
              {badge}
            </span>
          </motion.div>
        )}
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}

function AboutSection({ data }: { data: NonNullable<WorkshopData['aboutSection']> }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            {data.title && (
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
              >
                {data.title}
              </motion.h2>
            )}
            
            {data.description && (
              <motion.div variants={itemVariants} className="prose prose-invert prose-lg max-w-none mb-8">
                <PortableText value={data.description} />
              </motion.div>
            )}
            
            {data.highlights && data.highlights.length > 0 && (
              <motion.ul variants={itemVariants} className="space-y-3">
                {data.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#C3D534] mt-1">✓</span>
                    <span className="text-white/80">{highlight}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
          
          {data.imageUrl && (
            <motion.div
              variants={itemVariants}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <Image
                src={data.imageUrl}
                alt={data.title || "About section"}
                fill
                className="object-cover"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function BenefitsSection({ data }: { data: NonNullable<WorkshopData['benefitsSection']> }) {
  if (!data.benefits || data.benefits.length === 0) return null
  
  return (
    <section className="py-16 lg:py-24 bg-[#1E1A5F]/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {data.title && (
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              {data.title}
            </motion.h2>
          )}
          
          {data.subtitle && (
            <motion.p variants={itemVariants} className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              {data.subtitle}
            </motion.p>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((benefit, idx) => {
              const Icon = getIcon(benefit.icon)
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-[#1E1A5F]/80 backdrop-blur-md border border-white/20 rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C3D534] to-[#00B5AD] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#1E1A5F]" />
                  </div>
                  {benefit.title && (
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  )}
                  {benefit.description && (
                    <p className="text-white/70">{benefit.description}</p>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AttendeesSection({ data }: { data: NonNullable<WorkshopData['attendeesSection']> }) {
  if (!data.attendeeTypes || data.attendeeTypes.length === 0) return null
  
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {data.title && (
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              {data.title}
            </motion.h2>
          )}
          
          {data.subtitle && (
            <motion.p variants={itemVariants} className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              {data.subtitle}
            </motion.p>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.attendeeTypes.map((attendee, idx) => {
              const Icon = getIcon(attendee.icon)
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-[#1E1A5F]/80 backdrop-blur-md border border-white/20 rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B5AD] to-[#0057B8] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {attendee.title && (
                    <h3 className="text-xl font-bold text-white mb-2">{attendee.title}</h3>
                  )}
                  {attendee.description && (
                    <p className="text-white/70">{attendee.description}</p>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TimingSection({ data }: { data: NonNullable<WorkshopData['timingSection']> }) {
  if (!data.details || data.details.length === 0) return null
  
  return (
    <section className="py-16 lg:py-24 bg-[#1E1A5F]/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {data.title && (
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              {data.title}
            </motion.h2>
          )}
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.details.map((detail, idx) => {
              const Icon = getIcon(detail.icon)
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-[#1E1A5F]/80 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center"
                >
                  <Icon className="w-8 h-8 text-[#C3D534] mx-auto mb-2" />
                  {detail.label && (
                    <p className="text-white/60 text-sm mb-1">{detail.label}</p>
                  )}
                  {detail.value && (
                    <p className="text-white font-semibold">{detail.value}</p>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ReadingJourneySection({ data, onBookSelect, selectedBookId }: { 
  data: NonNullable<WorkshopData['readingJourneySection']>
  onBookSelect: (book: Book) => void
  selectedBookId?: string
}) {
  if (!data.books || data.books.length === 0) return null
  
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {data.title && (
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              {data.title}
            </motion.h2>
          )}
          
          {data.subtitle && (
            <motion.p variants={itemVariants} className="text-white/70 text-center mb-4 max-w-2xl mx-auto">
              {data.subtitle}
            </motion.p>
          )}
          
          <motion.p variants={itemVariants} className="text-[#C3D534] text-center mb-12 text-sm">
            Click on a book to explore its details and workshop content
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.books.map((book) => (
              <motion.div key={book._id} variants={itemVariants}>
                <SelectableBookCard 
                  book={book}
                  onSelect={onBookSelect}
                  isSelected={selectedBookId === book._id}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SessionFlowSection({ data }: { data: NonNullable<WorkshopData['sessionFlowSection']> }) {
  if (!data.sessions || data.sessions.length === 0) return null
  
  return (
    <section className="py-16 lg:py-24 bg-[#1E1A5F]/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {data.badge && (
            <motion.div variants={itemVariants} className="text-center mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#C3D534] to-[#00B5AD] text-[#1E1A5F] font-semibold rounded-full text-sm">
                {data.badge}
              </span>
            </motion.div>
          )}
          
          {data.title && (
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              {data.title}
            </motion.h2>
          )}
          
          {data.subtitle && (
            <motion.p variants={itemVariants} className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              {data.subtitle}
            </motion.p>
          )}
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C3D534] via-[#00B5AD] to-[#0057B8]" />
            
            <div className="space-y-6">
              {data.sessions.map((session, idx) => {
                const Icon = getIcon(session.icon)
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="relative pl-20"
                  >
                    <div className="absolute left-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#C3D534] to-[#00B5AD] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#1E1A5F]" />
                    </div>
                    
                    <div className="bg-[#1E1A5F]/80 backdrop-blur-md border border-white/20 rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-2">
                        {session.time && (
                          <span className="text-[#C3D534] font-mono text-sm">{session.time}</span>
                        )}
                        {session.duration && (
                          <span className="text-white/50 text-sm">({session.duration})</span>
                        )}
                      </div>
                      {session.title && (
                        <h3 className="text-lg font-bold text-white mb-2">{session.title}</h3>
                      )}
                      {session.description && (
                        <p className="text-white/70">{session.description}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FacilitatorsSection({ data }: { data: NonNullable<WorkshopData['facilitatorsSection']> }) {
  if (!data.facilitators || data.facilitators.length === 0) return null
  
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {data.title && (
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              {data.title}
            </motion.h2>
          )}
          
          {data.subtitle && (
            <motion.p variants={itemVariants} className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              {data.subtitle}
            </motion.p>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.facilitators.map((facilitator, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#1E1A5F]/80 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center"
              >
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#00B5AD] mb-4">
                  {facilitator.imageUrl ? (
                    <Image
                      src={facilitator.imageUrl}
                      alt={facilitator.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#C3D534] to-[#00B5AD] flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">{facilitator.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{facilitator.name}</h3>
                {facilitator.role && (
                  <p className="text-[#C3D534] font-medium mb-3">{facilitator.role}</p>
                )}
                {facilitator.bio && (
                  <p className="text-white/70 text-sm mb-4">{facilitator.bio}</p>
                )}
                
                {facilitator.specialties && facilitator.specialties.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {facilitator.specialties.map((specialty, sIdx) => (
                      <span key={sIdx} className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80">
                        {specialty}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex justify-center gap-3">
                  {facilitator.email && (
                    <a
                      href={`mailto:${facilitator.email}`}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      Email
                    </a>
                  )}
                  {facilitator.linkedin && (
                    <a
                      href={facilitator.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00B5AD] hover:text-[#C3D534] transition-colors text-sm"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ReserveSpotSection({ data }: { data: NonNullable<WorkshopData['reserveSpotSection']> }) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-[#C3D534]/20 to-[#00B5AD]/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-2xl mx-auto"
        >
          {data.title && (
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              {data.title}
            </motion.h2>
          )}
          
          {data.subtitle && (
            <motion.p variants={itemVariants} className="text-white/70 mb-6">
              {data.subtitle}
            </motion.p>
          )}
          
          {data.spotsText && (
            <motion.p variants={itemVariants} className="text-[#C3D534] font-semibold mb-6">
              {data.spotsText}
            </motion.p>
          )}
          
          <motion.div variants={itemVariants}>
            <a href="#registration">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#C3D534] to-[#00B5AD] hover:from-[#00B5AD] hover:to-[#C3D534] text-[#1E1A5F] font-bold px-8 py-6 text-lg"
              >
                {data.ctaText || "Register Now"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function RegistrationSection({ data }: { data: NonNullable<WorkshopData['registrationSection']> }) {
  return (
    <section id="registration" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {data.title && (
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
            >
              {data.title}
            </motion.h2>
          )}
          
          {data.subtitle && (
            <motion.p variants={itemVariants} className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              {data.subtitle}
            </motion.p>
          )}
          
          <motion.div 
            variants={itemVariants}
            className="max-w-4xl mx-auto bg-[#1E1A5F]/80 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden"
          >
            {data.formEmbedUrl ? (
              <iframe
                src={data.formEmbedUrl}
                width="100%"
                height={data.formHeight || 800}
                frameBorder="0"
                allowFullScreen
                className="w-full"
                title="Registration Form"
              />
            ) : (
              <div className="p-12 text-center">
                <p className="text-white/70">
                  {data.alternativeText || "Registration form will be available soon."}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
