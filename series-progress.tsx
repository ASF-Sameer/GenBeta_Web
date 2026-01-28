"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function SeriesProgress() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href="#books"
      className={cn(
        "fixed top-24 right-6 z-40 hidden lg:block transition-all duration-500",
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-full"
      )}
      aria-label="Session 1 of 3 - Go to books section"
    >
      <div className="glass-card px-4 py-3 hover:glow-turquoise transition-all">
        <p className="text-xs font-medium text-foreground/70 mb-1">
          Session 1 of 3
        </p>
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-turquoise to-lime" />
          <span className="w-3 h-3 rounded-full bg-foreground/20" />
          <span className="w-3 h-3 rounded-full bg-foreground/20" />
        </div>
      </div>
    </a>
  )
}
