"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { TransitionLink } from "@/components/transition-link"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#books", label: "Books" },
  { href: "#agenda", label: "Agenda" },
  { href: "#team", label: "Team" },
  { href: "#register", label: "Register" },
]

const whiteSections = ["about", "books", "agenda", "team"]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isWhiteSection, setIsWhiteSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Check if we're in a white section
      let inWhiteSection = false
      for (const sectionId of whiteSections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          // Check if section top is near the top of viewport (within navbar height)
          if (rect.top <= 80 && rect.bottom > 80) {
            inWhiteSection = true
            break
          }
        }
      }
      setIsWhiteSection(inWhiteSection)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isWhiteSection
            ? "bg-white shadow-md"
            : isScrolled
              ? "bg-white/70 dark:bg-black/50 backdrop-blur-xl border-b border-white/20"
              : "bg-transparent"
        )}
      >
        <nav
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo section with back to Gen Z link */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Back to Gen Z */}
              <TransitionLink
                href="/"
                className={cn(
                  "flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-turquoise",
                  isWhiteSection ? "bg-gray-100 hover:bg-gray-200" : "bg-white/10 hover:bg-white/20"
                )}
                ariaLabel="Back to Generation Z Program"
              >
                <ArrowLeft className={cn("w-3 h-3 sm:w-4 sm:h-4", isWhiteSection ? "text-[#1E1A5F]" : "text-white")} aria-hidden="true" />
                <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent">Generation Z</span>
              </TransitionLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" role="list">
              {navLinks.slice(0, -1).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors group rounded focus:outline-none focus:ring-2 focus:ring-turquoise focus:ring-offset-2",
                    isWhiteSection ? "text-[#1E1A5F] hover:text-[#00B5AD]" : "text-white hover:text-[#00B5AD]"
                  )}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-turquoise transition-all duration-300 group-hover:w-3/4" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Button
                asChild
                className="bg-gradient-to-r from-turquoise to-blue text-white font-semibold px-6 rounded-full hover:shadow-lg hover:shadow-turquoise/25 transition-all duration-300 hover:-translate-y-0.5 focus:ring-2 focus:ring-turquoise focus:ring-offset-2"
              >
                <a href="#register">Register</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className={cn("glass-button rounded-full", isWhiteSection ? "text-[#1E1A5F]" : "text-white")}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="absolute inset-x-4 top-20 glass-card p-6 animate-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-lg font-medium text-foreground hover:bg-white/10 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-turquoise"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-turquoise to-blue text-white font-semibold py-3 rounded-full"
                >
                  <a
                    href="#register"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Register Now
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
