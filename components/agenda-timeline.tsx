"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { AuroraBackground } from "./aurora-background"

interface AgendaItem {
  time: string
  title: string
  description: string
  accentColor: string
  borderColor: string
}

const agendaItems: AgendaItem[] = [
  {
    time: "2:00 - 2:10",
    title: "Welcome & Icebreaker",
    description:
      "Getting to know each other and setting intentions for our reset journey",
    accentColor: "bg-[#C3D534]",
    borderColor: "border-l-[#C3D534]",
  },
  {
    time: "2:10 - 2:25",
    title: "Key Concepts from \"Reset\"",
    description:
      "Exploring Dan Heath's core frameworks for navigating moments of change",
    accentColor: "bg-[#00B5AD]",
    borderColor: "border-l-[#00B5AD]",
  },
  {
    time: "2:25 - 2:45",
    title: "Interactive Discussion",
    description:
      "Small group conversations applying reset principles to real scenarios",
    accentColor: "bg-[#00B2E3]",
    borderColor: "border-l-[#00B2E3]",
  },
  {
    time: "2:45 - 3:05",
    title: "Personal Reflection",
    description:
      "Individual activity to identify your own stuck points and design your reset plan",
    accentColor: "bg-[#9B4F96]",
    borderColor: "border-l-[#9B4F96]",
  },
  {
    time: "3:05 - 3:20",
    title: "Group Sharing",
    description:
      "Sharing key takeaways and learning from each other's unique perspectives",
    accentColor: "bg-[#F4A6C9]",
    borderColor: "border-l-[#F4A6C9]",
  },
  {
    time: "3:20 - 3:30",
    title: "Closing & Next Steps",
    description:
      "Wrapping up with action commitments and a preview of the next session",
    accentColor: "bg-[#0057B8]",
    borderColor: "border-l-[#0057B8]",
  },
]

export function AgendaTimeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex((ref) => ref === entry.target)
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            )
          }
        })
      },
      { threshold: 0.3, rootMargin: "-50px" }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <AuroraBackground variant="hero" className="py-20 lg:py-32">
      <section
        id="agenda"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        aria-labelledby="agenda-heading"
      >
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          <h2
            id="agenda-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[#C3D534]"
          >
            Session Flow
          </h2>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl mx-auto mb-4 sm:mb-6">
            90 minutes of interactive learning, reflection, and connection
          </p>
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-white">
            February 10, 2025 | 2:00 PM - 3:30 PM
          </span>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative" role="list" aria-label="Session agenda timeline">
          {/* Central Timeline Line */}
          <div
            className="absolute left-3 sm:left-4 lg:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-[#C3D534] via-[#00B5AD] to-[#0057B8] transform lg:-translate-x-1/2"
            aria-hidden="true"
          />

          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-12">
            {agendaItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                role="listitem"
                className={cn(
                  "relative flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 transition-all duration-700",
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                {/* Timeline Node */}
                <div
                  className={cn(
                    "absolute left-3 sm:left-4 lg:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full transform -translate-x-1/2 z-10 transition-all duration-500",
                    item.accentColor,
                    visibleItems.includes(index) && "animate-pulse-glow"
                  )}
                  aria-hidden="true"
                />

                {/* Card */}
                <div
                  className={cn(
                    "ml-10 sm:ml-12 lg:ml-0 lg:w-[calc(50%-2rem)] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4",
                    item.borderColor,
                    index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                  )}
                >
                  <time className="text-xs sm:text-sm font-mono text-white/60 mb-1 sm:mb-2 block" dateTime={`2025-02-10T${item.time.split(" - ")[0].replace(":", "")}:00`}>
                    {item.time} PM
                  </time>
                  <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-base text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 sm:mt-12 px-2">
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-white/70">
            Agenda subject to adjustments | Light refreshments provided
          </span>
        </div>
      </section>
    </AuroraBackground>
  )
}
