"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { TransitionLink } from "@/components/transition-link"

const navLinks = [
  { href: "#workshop-overview", label: "Overview" },
  { href: "#books", label: "Books" },
  { href: "#agenda", label: "Agenda" },
  { href: "#team", label: "Team" },
  { href: "#register", label: "Register" },
]

const whiteSections = ["workshop-overview", "books", "agenda", "team"]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isWhiteSection, setIsWhiteSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      let inWhiteSection = false
      for (const sectionId of whiteSections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 80 && rect.bottom > 80) {
            inWhiteSection = true
            break
          }
        }
      }
      setIsWhiteSection(inWhiteSection)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isWhiteSection
          ? "bg-white shadow-lg"
          : "bg-gradient-to-r from-[#1C2951] via-[#1E1A5F] to-[#0057B8] shadow-lg"
      )}
    >
      <nav
        className="w-full px-2 sm:px-4 lg:px-6"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16 max-w-7xl mx-auto">
          {/* Logo - Back to Gen Z */}
          <TransitionLink
            href="/"
            className={cn(
              "flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00B5AD] shrink-0",
              isWhiteSection 
                ? "bg-[#1E1A5F] hover:bg-[#1E1A5F]/90" 
                : "bg-white/15 hover:bg-white/25 backdrop-blur-sm"
            )}
            ariaLabel="Back to Generation Z Program"
          >
            <ArrowLeft className={cn("w-3 h-3 sm:w-4 sm:h-4", "text-white")} aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent whitespace-nowrap">Gen Z</span>
          </TransitionLink>

          {/* Navigation Links - Always Visible, Fills Space */}
          <div className="flex items-center justify-end flex-1 gap-0.5 sm:gap-1 lg:gap-2 ml-2 sm:ml-4" role="list">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs lg:text-sm font-semibold transition-all duration-200 rounded whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#00B5AD] uppercase tracking-wide",
                  isWhiteSection 
                    ? "text-[#1E1A5F] hover:bg-[#1E1A5F]/10 hover:text-[#00B5AD]" 
                    : "text-white/90 hover:text-white hover:bg-white/10",
                  index === navLinks.length - 1 && !isWhiteSection && "bg-gradient-to-r from-[#00B5AD] to-[#C3D534] text-white hover:opacity-90 rounded-full",
                  index === navLinks.length - 1 && isWhiteSection && "bg-gradient-to-r from-[#1E1A5F] to-[#0057B8] text-white hover:opacity-90 rounded-full"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
