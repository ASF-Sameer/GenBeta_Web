"use client"

import Image from "next/image"
import { Linkedin, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface Facilitator {
  id: number
  name: string
  linkedIn: string
  gradientClass: string
}

const facilitators: Facilitator[] = [
  {
    id: 1,
    name: "Ayah Al-Manea",
    linkedIn: "https://www.linkedin.com/in/ayah-al-manea-12130b1b1/",
    gradientClass: "from-[#C3D534] to-[#00B5AD]",
  },
  {
    id: 2,
    name: "Ahmed Alonaizi",
    linkedIn: "https://www.linkedin.com/in/ahmed-alonaizi-509585302/",
    gradientClass: "from-[#00B5AD] to-[#0057B8]",
  },
  {
    id: 3,
    name: "Abdulmohsen Alzenki",
    linkedIn: "https://www.linkedin.com/in/abdulmohsenalzenki/",
    gradientClass: "from-[#0057B8] to-[#9B4F96]",
  },
  {
    id: 4,
    name: "Asail Alheis",
    linkedIn: "https://www.linkedin.com/in/asail-alheis-11161b321/",
    gradientClass: "from-[#9B4F96] to-[#F4A6C9]",
  },
  {
    id: 5,
    name: "Miteb Aloqab",
    linkedIn: "https://www.linkedin.com/in/miteb-aloqab-a04a7b323/",
    gradientClass: "from-[#F4A6C9] to-[#FFF06B]",
  },
  {
    id: 6,
    name: "Jana Alabduljader",
    linkedIn: "https://www.linkedin.com/in/jana-alabduljader-34a89a31b/",
    gradientClass: "from-[#FFF06B] to-[#C3D534]",
  },
]

export function Facilitators() {
  return (
    <section
      id="team"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
      aria-labelledby="team-heading"
    >
      {/* Accent gradient in corner */}
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#9B4F96]/5 via-[#5B4B8A]/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          <h2
            id="team-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4"
          >
            Your <span className="gradient-text-purple">Facilitators</span>
          </h2>
          <p className="text-sm sm:text-lg text-foreground/70 max-w-2xl mx-auto flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
            <span>The Generation Z team at</span>
            <Image
              src="/images/zain-logo-white.png"
              alt="Zain"
              width={80}
              height={28}
              className="h-5 sm:h-6 w-auto invert dark:invert-0 inline-block relative top-[3px]"
            />
            <span>- driving innovation and growth</span>
          </p>
        </div>

        {/* Intro Text */}
        <div className="glass-card p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="text-center text-xs sm:text-sm lg:text-base text-foreground/80 leading-relaxed flex flex-wrap items-center justify-center gap-1">
            <span>We are participants in</span>
            <Image
              src="/images/zain-logo-white.png"
              alt="Zain"
              width={60}
              height={20}
              className="h-4 sm:h-5 w-auto invert dark:invert-0 inline-block mx-1 relative top-[3px]"
            />
            <span>Gen Z 2026 Program, passionate about creating spaces for learning, meaningful conversations, and collective growth. This series is our way of giving back to our family.</span>
          </p>
        </div>

        {/* Facilitator Grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 list-none" aria-label="Meet the facilitators">
          {facilitators.map((facilitator, index) => (
            <li
              key={facilitator.id}
              className="glass-card p-3 sm:p-6 lg:p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Avatar */}
              <div
                className={cn(
                  "w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300",
                  facilitator.gradientClass
                )}
                aria-hidden="true"
              >
                <User className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white/80" />
              </div>

              {/* Name */}
              <h3 className="text-sm sm:text-xl font-bold text-foreground mb-0.5 sm:mb-1">
                {facilitator.name}
              </h3>
              <p className="text-xs sm:text-sm text-foreground/60 mb-2 sm:mb-4">
                Gen Z 2026 Program
              </p>

              {/* LinkedIn Link */}
              <a
                href={facilitator.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 glass-button px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-foreground hover:glow-turquoise transition-all focus:outline-none focus:ring-2 focus:ring-turquoise focus:ring-offset-2"
                aria-label={`Visit ${facilitator.name}'s LinkedIn profile (opens in new tab)`}
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
