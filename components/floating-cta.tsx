"use client"

import { useState, useEffect } from "react"
import { X, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if already dismissed in this session
    const dismissed = sessionStorage.getItem("floating-cta-dismissed")
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    let scrollTimeout: NodeJS.Timeout
    let delayTimeout: NodeJS.Timeout

    const handleScroll = () => {
      if (window.scrollY > 500 && !isDismissed) {
        // Add a 3-second delay after scroll threshold is met
        delayTimeout = setTimeout(() => {
          setIsVisible(true)
        }, 3000)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
      clearTimeout(delayTimeout)
    }
  }, [isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    sessionStorage.setItem("floating-cta-dismissed", "true")
  }

  if (isDismissed || !isVisible) return null

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 hidden lg:block",
        "animate-in slide-in-from-right-full duration-500"
      )}
      role="complementary"
      aria-label="Registration reminder"
    >
      <div className="glass-card p-6 max-w-xs relative">
        {/* Glowing border animation */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C3D534] via-[#00B5AD] to-[#0057B8] opacity-30 animate-pulse-glow -z-10 blur-sm" />

        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 text-foreground/60 hover:text-foreground transition-colors rounded focus:outline-none focus:ring-2 focus:ring-turquoise"
          aria-label="Dismiss registration reminder"
          type="button"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Content */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-turquoise to-blue flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-foreground">
              Don&apos;t miss out!
            </h4>
            <p className="text-sm text-foreground/70 mt-1">
              The first Reframe session is just around the corner.
            </p>
          </div>
        </div>

        <Button
          asChild
          className="w-full bg-gradient-to-r from-turquoise to-blue text-white font-semibold rounded-full focus:ring-2 focus:ring-turquoise focus:ring-offset-2"
        >
          <a href="#register">Register Now <span aria-hidden="true">→</span></a>
        </Button>
      </div>
    </div>
  )
}
