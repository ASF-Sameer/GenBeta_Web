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
          ? "bg-white shadow-md"
          : isScrolled
            ? "bg-[#1E1A5F]/90 backdrop-blur-xl border-b border-white/10"
            : "bg-[#1E1A5F]/80 backdrop-blur-sm"
      )}
    >
      <nav
        className="container mx-auto px-3 sm:px-4 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo - Back to Gen Z */}
          <TransitionLink
            href="/"
            className={cn(
              "flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] shrink-0",
              isWhiteSection ? "bg-gray-100 hover:bg-gray-200" : "bg-white/10 hover:bg-white/20"
            )}
            ariaLabel="Back to Generation Z Program"
          >
            <ArrowLeft className={cn("w-3 h-3 sm:w-4 sm:h-4", isWhiteSection ? "text-[#1E1A5F]" : "text-white")} aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent whitespace-nowrap">Gen Z</span>
          </TransitionLink>

          {/* Navigation Links - Always Visible */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-4 overflow-x-auto scrollbar-hide" role="list">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors rounded-full whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#00B5AD]",
                  isWhiteSection 
                    ? "text-[#1E1A5F] hover:bg-[#1E1A5F]/10 hover:text-[#00B5AD]" 
                    : "text-white hover:bg-white/10 hover:text-[#00B5AD]"
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
