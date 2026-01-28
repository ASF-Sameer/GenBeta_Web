"use client"

import { useState, useEffect } from "react"
import { Linkedin, Link2, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function SocialShareBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy link:", err)
    }
  }

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent("Reframe at Zain - Learning Series")
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`,
      "_blank",
      "width=600,height=400"
    )
  }

  return (
    <div
      className={cn(
        "fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2 transition-all duration-500",
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-full"
      )}
      role="complementary"
      aria-label="Share options"
    >
      <div className="glass-card p-2 flex flex-col gap-2">
        {/* LinkedIn Share */}
        <button
          onClick={handleLinkedInShare}
          className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-foreground hover:glow-turquoise transition-all group relative"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
          <span className="absolute left-full ml-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Share on LinkedIn
          </span>
        </button>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-foreground hover:glow-turquoise transition-all group relative"
          aria-label={copied ? "Link copied!" : "Copy link"}
        >
          {copied ? (
            <Check className="w-5 h-5 text-[#C3D534]" />
          ) : (
            <Link2 className="w-5 h-5" />
          )}
          <span className="absolute left-full ml-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {copied ? "Copied!" : "Copy link"}
          </span>
        </button>
      </div>
    </div>
  )
}
