"use client"

import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

import { cn } from "@/lib/utils"

interface Facilitator {
  id: number
  name: string
  email: string
  linkedIn: string
  image: string
  gradientClass: string
}

const facilitators: Facilitator[] = [
  {
    id: 1,
    name: "Abdulmohsen AlZenki",
    email: "Abdulmohsen.AlZenki@zain.com",
    linkedIn: "https://www.linkedin.com/in/abdulmohsen-alzenki",
    image: "/images/team/abdulmohsen-alzenki.png",
    gradientClass: "from-[#C3D534] to-[#00B5AD]",
  },
  {
    id: 2,
    name: "Asail AlHeis",
    email: "Asail.AlHeis@zain.com",
    linkedIn: "https://www.linkedin.com/in/asail-alheis",
    image: "/images/team/asail-alheis.png",
    gradientClass: "from-[#00B5AD] to-[#0057B8]",
  },
  {
    id: 3,
    name: "Ayah AlFadhli",
    email: "Ayah.AlFadhli@zain.com",
    linkedIn: "https://www.linkedin.com/in/ayah-alfadhli",
    image: "/images/team/ayah-alfadhli.png",
    gradientClass: "from-[#0057B8] to-[#9B4F96]",
  },
  {
    id: 4,
    name: "Ahmed AlOnaizi",
    email: "Ahmed.AlOnaizi@zain.com",
    linkedIn: "https://www.linkedin.com/in/ahmed-alonaizi",
    image: "/images/team/ahmed-alonaizi.png",
    gradientClass: "from-[#9B4F96] to-[#F4A6C9]",
  },
  {
    id: 5,
    name: "Jana AlAbduljader",
    email: "Jana.AlAbduljader@zain.com",
    linkedIn: "https://www.linkedin.com/in/jana-alabduljader",
    image: "/images/team/jana-alabduljader.png",
    gradientClass: "from-[#F4A6C9] to-[#FFF06B]",
  },
  {
    id: 6,
    name: "Miteb AlOqab",
    email: "Miteb.AlOqab@zain.com",
    linkedIn: "https://www.linkedin.com/in/miteb-aloqab",
    image: "/images/team/miteb-aloqab.png",
    gradientClass: "from-[#FFF06B] to-[#C3D534]",
  },
]

export function Facilitators() {
  return (
    <section
      id="team"
      className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#0057B8] via-[#1E1A5F] to-[#1C2951]"
      aria-labelledby="team-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          <h2
            id="team-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
          >
            Your <span className="bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent">Facilitators</span>
          </h2>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl mx-auto">
            The Generation Z team at <span className="bg-gradient-to-r from-[#00B5AD] to-[#C3D534] bg-clip-text text-transparent font-semibold">Zain</span> - driving innovation and growth
          </p>
        </div>

        {/* Intro Text */}
        <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="text-center text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed">
            We are participants in <span className="bg-gradient-to-r from-[#00B5AD] to-[#C3D534] bg-clip-text text-transparent font-semibold">Zain</span> Gen Z 2026 Program, passionate about creating spaces for learning, meaningful conversations, and collective growth. This series is our way of giving back to our family.
          </p>
        </div>

        {/* Facilitator Grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 list-none" aria-label="Meet the facilitators">
          {facilitators.map((facilitator, index) => (
            <li
              key={facilitator.id}
              className="glass-dark rounded-xl sm:rounded-2xl p-3 sm:p-6 lg:p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Avatar with Photo */}
              <div
                className={cn(
                  "w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full p-1 bg-gradient-to-br mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300",
                  facilitator.gradientClass
                )}
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={facilitator.image}
                    alt={`Portrait of ${facilitator.name}`}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-sm sm:text-xl font-bold text-white mb-0.5 sm:mb-1">
                {facilitator.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mb-2 sm:mb-4">
                Gen Z 2026 Program
              </p>

              {/* Contact Links */}
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                <a
                  href={`mailto:${facilitator.email}`}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-turquoise focus:ring-offset-2 rounded"
                  aria-label={`Send email to ${facilitator.name}`}
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                  <span className="hidden sm:inline">{facilitator.email}</span>
                  <span className="sm:hidden">Email</span>
                </a>
                <a
                  href={facilitator.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-turquoise focus:ring-offset-2"
                  aria-label={`Visit ${facilitator.name}'s LinkedIn profile (opens in new tab)`}
                >
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
