"use client"

import React from "react"
import Image from "next/image"
import { useEffect, useState } from "react"

interface AuroraBackgroundProps {
  variant?: "hero" | "coral" | "lime" | "azure" | "midnight"
  className?: string
  children?: React.ReactNode
}

export function AuroraBackground({
  variant = "hero",
  className = "",
  children,
}: AuroraBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    if (variant === "hero") {
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [variant])

  // Dark navy (#1E1A5F) to teal (#00B5AD) like the reference
  const gradients = {
    hero: {
      light: "from-[#1E1A5F] via-[#0057B8] to-[#00B5AD]",
      dark: "dark:from-[#1E1A5F] dark:via-[#0057B8] dark:to-[#00B5AD]",
    },
    coral: {
      light: "from-[#FFF06B] via-[#F4A6C9] to-[#FFF06B]",
      dark: "dark:from-[#F4A6C9] dark:via-[#D4006A] dark:to-[#9B4F96]",
    },
    lime: {
      light: "from-[#C3D534] via-[#00B5AD] to-[#C3D534]",
      dark: "dark:from-[#00B5AD] dark:via-[#006B54] dark:to-[#00B5AD]",
    },
    azure: {
      light: "from-[#00B5AD] via-[#0057B8] to-[#00B5AD]",
      dark: "dark:from-[#0057B8] dark:via-[#1E1A5F] dark:to-[#0057B8]",
    },
    midnight: {
      light: "from-[#0057B8] via-[#1E1A5F] to-[#0057B8]",
      dark: "dark:from-[#0057B8] dark:via-[#1E1A5F] dark:to-[#0a0a0a]",
    },
  }

  const selectedGradient = gradients[variant]

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base gradient - vertical from dark navy top to teal bottom */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${selectedGradient.light} ${selectedGradient.dark}`}
      />

      {/* Particle dots scattered across */}
      {variant === "hero" && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Animated bubbles - moving up and down */}
      {variant === "hero" && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Bubble 1 - Extra Large (w-72 * 1.3 = ~w-96) */}
          <div 
            className="absolute w-[180px] sm:w-[280px] lg:w-[374px] h-[180px] sm:h-[280px] lg:h-[374px] rounded-full border border-white/10 animate-bubble-float"
            style={{ right: '8%', top: '10%', animationDelay: '0s' }}
          />
          {/* Bubble 2 - Large (w-56 * 1.3 = ~w-72) */}
          <div 
            className="absolute w-[140px] sm:w-[220px] lg:w-[290px] h-[140px] sm:h-[220px] lg:h-[290px] rounded-full border border-white/15 animate-bubble-float-alt"
            style={{ right: '22%', top: '30%', animationDelay: '-3s' }}
          />
          {/* Bubble 3 - Medium (w-40 * 1.3 = ~w-52) */}
          <div 
            className="absolute w-[100px] sm:w-[160px] lg:w-[208px] h-[100px] sm:h-[160px] lg:h-[208px] rounded-full border border-white/10 animate-bubble-float"
            style={{ right: '3%', top: '50%', animationDelay: '-6s' }}
          />
          {/* Bubble 4 - Large filled (w-48 * 1.3 = ~w-64) */}
          <div 
            className="absolute w-[120px] sm:w-[190px] lg:w-[250px] h-[120px] sm:h-[190px] lg:h-[250px] rounded-full bg-white/5 animate-bubble-drift"
            style={{ right: '15%', top: '20%', animationDelay: '-2s' }}
          />
          {/* Bubble 5 - Medium filled (w-32 * 1.3 = ~w-44) - hidden on mobile */}
          <div 
            className="absolute hidden sm:block w-[130px] lg:w-[166px] h-[130px] lg:h-[166px] rounded-full bg-white/5 animate-bubble-float-alt"
            style={{ right: '32%', top: '45%', animationDelay: '-5s' }}
          />
          {/* Bubble 6 - Extra Large background (w-96 * 1.3 = ~w-[500px]) - hidden on mobile */}
          <div 
            className="absolute hidden sm:block w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full bg-gradient-to-br from-white/5 to-transparent animate-bubble-drift"
            style={{ right: '-8%', top: '0%', animationDelay: '-4s' }}
          />
          {/* Bubble 7 - New small bubble - hidden on mobile */}
          <div 
            className="absolute hidden sm:block w-[80px] lg:w-[120px] h-[80px] lg:h-[120px] rounded-full border border-white/8 animate-bubble-float"
            style={{ right: '40%', top: '15%', animationDelay: '-7s' }}
          />
        </div>
      )}

      {/* Zain Pattern - Top Right Corner */}
      {variant === "hero" && (
        <div className="absolute -right-10 sm:-right-20 -top-10 sm:-top-20 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] opacity-30 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/zain-pattern-bubbles.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      )}

      {/* Secondary Pattern - Bottom Left Corner (subtle) - hidden on mobile */}
      {variant === "hero" && (
        <div className="absolute hidden sm:block -left-16 sm:-left-32 -bottom-16 sm:-bottom-32 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] opacity-15 pointer-events-none rotate-180" aria-hidden="true">
          <Image
            src="/images/zain-pattern-bubbles.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* Mouse-following glow (hero only) */}
      {variant === "hero" && (
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#00B5AD]/30 to-[#0080B8]/20 blur-3xl transition-all duration-1000 ease-out pointer-events-none hidden lg:block"
          style={{
            left: `calc(${mousePosition.x}% - 150px)`,
            top: `calc(${mousePosition.y}% - 150px)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
