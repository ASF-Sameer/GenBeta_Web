"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Lightbulb, Sparkles, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function GenZLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0057B8] via-[#00B5AD] to-[#0057B8] relative overflow-hidden animate-gradient-shift">
      {/* Interactive Background Gradient */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(195, 213, 52, 0.4) 0%, transparent 50%)`,
        }}
        aria-hidden="true"
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient Orbs */}
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#C3D534]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-[#F7E73F]/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 lg:w-[500px] h-64 sm:h-96 lg:h-[500px] bg-[#00B5AD]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-bubble-float" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#C3D534]/60 rounded-full animate-bubble-float-alt" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#F7E73F]/50 rounded-full animate-bubble-drift" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-white/30 rounded-full animate-bubble-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-[#00B5AD]/50 rounded-full animate-bubble-float-alt" style={{ animationDelay: "2s" }} />

        {/* Zain Pattern */}
        <div className="absolute -right-10 sm:-right-20 -top-10 sm:-top-20 w-[200px] sm:w-[350px] lg:w-[500px] h-[200px] sm:h-[350px] lg:h-[500px] opacity-20">
          <Image
            src="/images/zain-pattern-bubbles.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Bottom Left Pattern */}
        <div className="absolute -left-10 sm:-left-20 -bottom-10 sm:-bottom-20 w-[150px] sm:w-[250px] lg:w-[400px] h-[150px] sm:h-[250px] lg:h-[400px] opacity-10 rotate-180">
          <Image
            src="/images/zain-pattern-bubbles.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-10 sm:mb-14 lg:mb-20">
            <div
              className={cn(
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              )}
            >
              <div className="relative inline-block">
                <Image
                  src="/images/genz-logo.svg"
                  alt="Gen Z Program"
                  width={140}
                  height={140}
                  className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 lg:mb-8 object-contain drop-shadow-2xl"
                  priority
                />
                {/* Glow ring around logo */}
                <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-r from-[#C3D534] to-[#00B5AD] opacity-20 blur-xl animate-pulse-slow" />
              </div>
            </div>

            <h1
              className={cn(
                "text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-3 sm:mb-4 lg:mb-6 transition-all duration-700 delay-100 ease-out tracking-tight",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <span className="inline-block hover:scale-105 transition-transform duration-300">Generation</span>{" "}
              <span className="inline-block gradient-text bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] hover:scale-105 transition-transform duration-300">Z</span>
            </h1>

            <div
              className={cn(
                "flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6 transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#C3D534]">
                11th Edition
              </span>
              <span className="hidden sm:inline text-white/50">|</span>
              <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-white/90">
                2026
              </span>
              <span className="px-3 py-1 rounded-full bg-[#C3D534]/20 border border-[#C3D534]/40 text-[#C3D534] text-xs sm:text-sm font-semibold animate-pulse">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                NEW
              </span>
            </div>

            <p
              className={cn(
                "text-sm sm:text-base lg:text-xl text-white/90 max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-2 transition-all duration-700 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Empowering the next generation of leaders at Zain through hands-on experience in leadership, innovation, and continuous learning.
            </p>

            {/* Quick Stats */}
            <div
              className={cn(
                "flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 transition-all duration-700 delay-[350ms]",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C3D534]">11</div>
                <div className="text-xs sm:text-sm text-white/70">Editions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F7E73F]">500+</div>
                <div className="text-xs sm:text-sm text-white/70">Alumni</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00B5AD]">8</div>
                <div className="text-xs sm:text-sm text-white/70">Countries</div>
              </div>
            </div>
          </div>

          {/* Program Card */}
          <div
            className={cn(
              "transition-all duration-700 delay-[400ms]",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="glass-card bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 hover:bg-white/15 hover:border-white/30 transition-all duration-500 group relative overflow-hidden">
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>

              <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-5 sm:gap-6 lg:gap-8">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-18 sm:h-18 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#C3D534] to-[#00B5AD] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-[#C3D534]/30">
                  <BookOpen className="w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3 lg:mb-4">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white">
                      REFRAME
                    </h2>
                    <span className="px-2 sm:px-3 lg:px-4 py-0.5 sm:py-1 lg:py-1.5 rounded-full bg-[#C3D534]/20 border border-[#C3D534]/40 text-[#C3D534] text-[10px] sm:text-xs lg:text-sm font-semibold whitespace-nowrap">
                      <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 inline mr-0.5 sm:mr-1" />
                      ACTIVE NOW
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-lg text-white/80 mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                    A learning series empowering colleagues to rethink, reset, and drive meaningful change. Starting with Dan Heath's transformative book "Reset."
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 lg:gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-[#C3D534] to-[#00B5AD] text-[#1E1A5F] font-semibold px-5 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-full text-sm sm:text-base lg:text-lg hover:shadow-xl hover:shadow-[#C3D534]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                    >
                      <Link href="/reframe" className="inline-flex items-center justify-center gap-2">
                        Explore Reframe
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto glass-button border-white/30 text-white bg-transparent hover:bg-white/10 px-5 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-full text-sm sm:text-base lg:text-lg font-semibold"
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
              "mt-10 sm:mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8 transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="glass-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative inline-block">
                <Users className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#C3D534] mx-auto mb-2.5 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-[#C3D534]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1.5 sm:mb-2">Community Learning</h3>
              <p className="text-[11px] sm:text-xs lg:text-sm text-white/70 leading-relaxed">
                Connect with colleagues passionate about growth and innovation
              </p>
            </div>

            <div className="glass-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative inline-block">
                <Lightbulb className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#F7E73F] mx-auto mb-2.5 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-[#F7E73F]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1.5 sm:mb-2">Innovation Focus</h3>
              <p className="text-[11px] sm:text-xs lg:text-sm text-white/70 leading-relaxed">
                Drive meaningful change through structured learning experiences
              </p>
            </div>

            <div className="glass-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center sm:col-span-2 lg:col-span-1 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative inline-block">
                <Target className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#00B5AD] mx-auto mb-2.5 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-[#00B5AD]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1.5 sm:mb-2">Expert Content</h3>
              <p className="text-[11px] sm:text-xs lg:text-sm text-white/70 leading-relaxed">
                Learn from industry-leading books and transformative ideas
              </p>
            </div>
          </div>

          {/* Zain Branding */}
          <div
            className={cn(
              "mt-12 sm:mt-16 lg:mt-20 flex flex-col items-center transition-all duration-700 delay-600",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-xs sm:text-sm text-white/50 mb-3 sm:mb-4">Powered by</p>
            <Image
              src="/images/zain-logo-white.svg"
              alt="Zain"
              width={120}
              height={40}
              className="w-20 sm:w-24 lg:w-28 h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Contact Section */}
          <div
            className={cn(
              "mt-8 sm:mt-10 lg:mt-12 text-center transition-all duration-700 delay-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-xs sm:text-sm lg:text-base text-white/70">
              Questions about the Gen Z Program?{" "}
              <a
                href="mailto:generationz@zain.com"
                className="text-[#C3D534] hover:text-[#F7E73F] underline underline-offset-2 transition-colors duration-300"
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
