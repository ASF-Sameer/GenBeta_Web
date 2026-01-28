"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Lightbulb, TrendingUp, Users, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuroraBackground } from "@/components/aurora-background"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Lightbulb,
    title: "Strategic Thinking",
    description: "Frameworks for navigating change",
    accentClass: "glow-lime",
    gradientClass: "from-[#C3D534] to-[#00B5AD]",
  },
  {
    icon: TrendingUp,
    title: "Personal Growth",
    description: "Tools for continuous improvement",
    accentClass: "glow-turquoise",
    gradientClass: "from-[#00B5AD] to-[#00B2E3]",
  },
  {
    icon: Users,
    title: "Team Momentum",
    description: "Building collective energy",
    accentClass: "glow-purple",
    gradientClass: "from-[#9B4F96] to-[#F4A6C9]",
  },
]

export function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => setShowScrollIndicator(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AuroraBackground variant="hero" className="min-h-screen">
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
        aria-label="Hero section"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <h1
            className={cn(
              "transition-all duration-700 delay-100",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <span className="sr-only">Reframe at Zain - Gen Z Program</span>
            <span className="block text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-2" aria-hidden="true">
              <span className="bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#C3D534] bg-clip-text text-transparent">REFRAME</span>
            </span>
            <span className="flex items-end justify-center gap-2 sm:gap-3 lg:gap-4 text-3xl sm:text-4xl lg:text-6xl font-bold text-white" aria-hidden="true">
              <span>AT</span>
              <Image
                src="/images/ZN_LGO_PRM_ENG_WHITE_CMYK.png"
                alt=""
                width={300}
                height={100}
                className="h-10 sm:h-14 lg:h-20 w-auto object-contain -mb-[11px]"
                priority
              />
            </span>
          </h1>

          {/* Description */}
          <p
            className={cn(
              "mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed px-2 transition-all duration-700 delay-300",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            A learning series empowering colleagues to rethink, reset, and
            drive meaningful change. Starting with Dan Heath&apos;s
            transformative book &quot;Reset.&quot;
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              "mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0 transition-all duration-700 delay-[400ms]",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-turquoise to-blue text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg hover:shadow-xl hover:shadow-turquoise/30 transition-all duration-300 hover:-translate-y-1 focus:ring-2 focus:ring-turquoise focus:ring-offset-2"
            >
              <a href="/reframe#hero">Register Now</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto glass-button px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg font-semibold border-white/30 text-foreground bg-transparent focus:ring-2 focus:ring-turquoise focus:ring-offset-2"
            >
              <a href="/reframe#hero">Explore Reframe</a>
            </Button>
          </div>

          {/* Feature Cards */}
          <ul
            className={cn(
              "mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-0 transition-all duration-700 delay-500 list-none",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
            aria-label="Key benefits of the Reframe series"
          >
            {features.map((feature) => (
              <li
                key={feature.title}
                className={cn(
                  "glass-card p-4 sm:p-6 group hover:-translate-y-2 transition-all duration-300 cursor-default"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform",
                    feature.gradientClass
                  )}
                  aria-hidden="true"
                >
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">
                  {feature.title}
                </h2>
                <p className="text-xs sm:text-sm text-foreground/70">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Scroll Indicator */}
        <div
          className={cn(
            "mt-16 sm:mt-20 lg:mt-24 mb-8 flex flex-col items-center gap-2 transition-all duration-500",
            showScrollIndicator
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          )}
          aria-hidden="true"
        >
          <span className="text-xs text-white/60 tracking-wider uppercase">
            Scroll to explore
          </span>
          <ChevronDown className="w-5 h-5 text-white/60 animate-bounce" />
        </div>
      </section>
    </AuroraBackground>
  )
}
