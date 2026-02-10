"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuroraBackground } from "@/components/aurora-background"
import { cn } from "@/lib/utils"

interface HeroProps {
  title?: string
  subtitle?: string
}

export function Hero({ title = "REFRAME", subtitle }: HeroProps) {
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
              <span className="bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#C3D534] bg-clip-text text-transparent">{title.toUpperCase()}</span>
            </span>
            <span className="flex items-center justify-center gap-2 sm:gap-3 text-3xl sm:text-4xl lg:text-6xl font-bold text-white" aria-hidden="true">
              <span>AT</span>
              <span className="bg-gradient-to-r from-[#00B5AD] to-[#C3D534] bg-clip-text text-transparent">ZAIN</span>
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
            {subtitle || "A learning series empowering colleagues to rethink, reset, and drive meaningful change. Starting with Dan Heath's transformative book \"Reset.\""}
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
              className="w-full sm:w-auto bg-gradient-to-r from-turquoise to-blue text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg hover:shadow-xl hover:shadow-turquoise/30 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#1E1A5F]"
            >
              <a href="#register">Register Now</a>
            </Button>
          </div>
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
