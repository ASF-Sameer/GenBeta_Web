"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Menu, X } from "lucide-react"
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
  const [isWhiteSection, setIsWhiteSection] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
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
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isWhiteSection
            ? "bg-white shadow-lg"
            : "bg-gradient-to-r from-[#1C2951] via-[#1E1A5F] to-[#0057B8] shadow-lg"
        )}
      >
        <nav className="w-full px-3 sm:px-4 lg:px-6" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16 max-w-7xl mx-auto">
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
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 text-white" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent whitespace-nowrap">Gen Z</span>
            </TransitionLink>

            <button
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-full transition-all",
                isWhiteSection
                  ? "bg-[#1E1A5F]/10 hover:bg-[#1E1A5F]/20 text-[#1E1A5F]"
                  : "bg-white/10 hover:bg-white/20 text-white"
              )}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center" onClick={() => setMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          <div className="relative z-10 w-[85vw] max-w-sm" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-b from-[#1E1A5F] to-[#0057B8]/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl shadow-black/40">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-4 px-2">Navigation</p>
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-medium text-white hover:bg-white/10 hover:text-[#00B5AD] active:bg-white/15 transition-all"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#C3D534] to-[#00B5AD] shrink-0" />
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-white/10 px-2">
                <p className="text-xs text-white/30 text-center">Reframe at Zain</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
