"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function GenZLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0057B8] via-[#00B5AD] to-[#0057B8] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#C3D534]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#F7E73F]/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        
        {/* Zain Pattern */}
        <div className="absolute -right-10 sm:-right-20 -top-10 sm:-top-20 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] opacity-20">
          <Image
            src="/images/zain-pattern-bubbles.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div
              className={cn(
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <Image
                src="/images/genz-logo.png"
                alt="Gen Z Program"
                width={120}
                height={120}
                className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-6 sm:mb-8 object-contain"
                priority
              />
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Generation Z
            </h1>

            <p
              className={cn(
                "text-xl sm:text-2xl lg:text-3xl font-bold text-[#C3D534] mb-4 sm:mb-6 transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              11th Edition | 2026
            </p>

            <p
              className={cn(
                "text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 transition-all duration-700 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Empowering the next generation of leaders at Zain through hands-on experience in leadership, innovation, and continuous learning.
            </p>
          </div>

          {/* Program Card */}
          <div
            className={cn(
              "transition-all duration-700 delay-[400ms]",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="glass-card bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-[#C3D534] to-[#00B5AD] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                      REFRAME
                    </h2>
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#C3D534]/20 border border-[#C3D534]/40 text-[#C3D534] text-xs sm:text-sm font-semibold">
                      ACTIVE NOW
                    </span>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-4 sm:mb-6 leading-relaxed">
                    A learning series empowering colleagues to rethink, reset, and drive meaningful change. Starting with Dan Heath's transformative book "Reset."
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-[#C3D534] to-[#00B5AD] text-[#1E1A5F] font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg hover:shadow-xl hover:shadow-[#C3D534]/30 transition-all duration-300 hover:-translate-y-1"
                    >
                      <Link href="/reframe" className="inline-flex items-center gap-2">
                        Explore Reframe
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto glass-button border-white/30 text-white bg-transparent hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg font-semibold"
                    >
                      <Link href="/reframe#register">Register Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div
            className={cn(
              "mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="glass-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#C3D534] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Community Learning</h3>
              <p className="text-xs sm:text-sm text-white/70">
                Connect with colleagues passionate about growth and innovation
              </p>
            </div>

            <div className="glass-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-[#F7E73F] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Innovation Focus</h3>
              <p className="text-xs sm:text-sm text-white/70">
                Drive meaningful change through structured learning experiences
              </p>
            </div>

            <div className="glass-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
              <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-[#00B5AD] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Expert Content</h3>
              <p className="text-xs sm:text-sm text-white/70">
                Learn from industry-leading books and transformative ideas
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div
            className={cn(
              "mt-12 sm:mt-16 text-center transition-all duration-700 delay-600",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <p className="text-sm sm:text-base text-white/70">
              Questions about the Gen Z Program?{" "}
              <a
                href="mailto:generationz@zain.com"
                className="text-[#C3D534] hover:text-[#F7E73F] underline transition-colors"
              >
                generationz@zain.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
