"use client"

import Image from "next/image"
import {
  Target,
  Lightbulb,
  RefreshCw,
  Users,
  Flame,
  Briefcase,
  TrendingUp,
  Calendar,
  Clock,
  MapPin,
  UsersRound,
} from "lucide-react"
import { cn } from "@/lib/utils"

const benefits = [
  {
    icon: Target,
    title: "Master Reset Frameworks",
    description:
      "Learn Dan Heath's proven strategies for navigating moments of change and uncertainty",
    gradientClass: "from-[#C3D534] to-[#00B5AD]",
  },
  {
    icon: Lightbulb,
    title: "Identify Stuck Points",
    description:
      "Recognize the patterns and mental models that hold us back at work and in life",
    gradientClass: "from-[#00B5AD] to-[#00B2E3]",
  },
  {
    icon: RefreshCw,
    title: "Design Your Reset",
    description:
      "Create actionable, personalized plans for professional and personal transformation",
    gradientClass: "from-[#9B4F96] to-[#F4A6C9]",
  },
  {
    icon: Users,
    title: "Build Momentum Together",
    description:
      "Connect with colleagues who share your commitment to growth and improvement",
    gradientClass: "from-[#0057B8] to-[#00B5AD]",
  },
]

const attendees = [
  {
    icon: Flame,
    title: "Change-Makers",
    description:
      "Anyone feeling stuck in their current role and ready for a fresh perspective",
    gradientClass: "from-[#D4006A] to-[#F4A6C9]",
  },
  {
    icon: Briefcase,
    title: "Team Leaders",
    description:
      "Managers looking to inspire their teams and guide them through transitions",
    gradientClass: "from-[#0057B8] to-[#00B2E3]",
  },
  {
    icon: TrendingUp,
    title: "Growth Enthusiasts",
    description:
      "Colleagues passionate about continuous learning and self-improvement",
    gradientClass: "from-[#C3D534] to-[#00B5AD]",
  },
]

const workshopDetails = [
  { icon: Calendar, label: "Monday, Feb 10" },
  { icon: Clock, label: "2:00 - 3:30 PM" },
  { icon: MapPin, label: "ZINC" },
  { icon: UsersRound, label: "Gen Z Team" },
]

export function WorkshopOverview() {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-background relative"
      aria-labelledby="about-heading"
    >
      {/* Subtle accent gradient in corner */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#00B2E3]/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          <h2
            id="about-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 flex flex-wrap items-center justify-center gap-1 sm:gap-2"
          >
            <span>About</span>
            <span className="gradient-text">Reframe at</span>
            <Image
              src="/images/ZN_LGO_PRM_ENG_WHITE_CMYK.png"
              alt="Zain"
              width={160}
              height={56}
              className="h-7 sm:h-10 lg:h-14 w-auto invert dark:invert-0 inline-block relative top-[6px] sm:top-[9px]"
            />
          </h2>
          <p className="text-sm sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Empowering meaningful change through structured learning experiences
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Left Column - Benefits */}
          <div className="glass-card p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              What You&apos;ll Gain
            </h3>
            <ul className="space-y-3 sm:space-y-4" aria-label="Benefits of attending">
              {benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-colors group"
                >
                  <div
                    className={cn(
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform",
                      benefit.gradientClass
                    )}
                    aria-hidden="true"
                  >
                    <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      {benefit.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/70">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Attendees */}
          <div className="glass-card p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Who Should Attend
            </h3>
            <ul className="space-y-3 sm:space-y-4" aria-label="Ideal attendees">
              {attendees.map((attendee) => (
                <li
                  key={attendee.title}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-colors group"
                >
                  <div
                    className={cn(
                      "w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform",
                      attendee.gradientClass
                    )}
                    aria-hidden="true"
                  >
                    <attendee.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      {attendee.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/70">
                      {attendee.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Workshop Details Banner */}
        <div className="glass-card p-4 sm:p-6 lg:p-8 relative overflow-hidden">
          {/* Gradient border effect */}
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00B5AD] to-[#0057B8] opacity-20"
            aria-hidden="true"
          />
          <ul className="relative z-10 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-6 lg:gap-12 list-none" aria-label="Event details">
            {workshopDetails.map((detail, index) => (
              <li
                key={detail.label}
                className="flex items-center gap-2 sm:gap-3 text-foreground"
              >
                <detail.icon className="w-4 h-4 sm:w-5 sm:h-5 text-turquoise flex-shrink-0" aria-hidden="true" />
                <span className="font-medium text-xs sm:text-sm lg:text-base">{detail.label}</span>
                {index < workshopDetails.length - 1 && (
                  <span className="hidden lg:block text-foreground/20 ml-6" aria-hidden="true">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
