"use client"

import Image from "next/image"
import { Calendar, Clock, MapPin, Mail, Linkedin, Youtube, Instagram } from "lucide-react"
import { AuroraBackground } from "./aurora-background"

// X (Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#books", label: "Books" },
  { href: "#agenda", label: "Agenda" },
  { href: "#team", label: "Team" },
  { href: "#register", label: "Register" },
]

const workshopDetails = [
  { icon: Calendar, label: "February 10, 2025" },
  { icon: Clock, label: "2:00 PM - 3:30 PM" },
  { icon: MapPin, label: "ZINC, Kuwait" },
  { icon: Mail, label: "generationz@zain.com", href: "mailto:generationz@zain.com" },
]

export function Footer() {
  return (
    <AuroraBackground variant="hero">
      <footer
        className="py-8 sm:py-12 lg:py-16"
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
            {/* Column 1 - Brand */}
            <div>
              <Image
                src="/images/zain-logo-white.png"
                alt="Zain Logo"
                width={140}
                height={50}
                className="h-8 sm:h-10 w-auto mb-3 sm:mb-4"
              />
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                REFRAME is brought to you by the Gen Z 2026 Program.
              </p>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                Questions? Reach out to{" "}
                <a
                  href="mailto:generationz@zain.com"
                  className="text-turquoise hover:underline break-all"
                >
                  generationz@zain.com
                </a>
              </p>
              {/* Social Media Links */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <a
                  href="https://www.linkedin.com/company/zaborjar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:glow-turquoise transition-all focus:outline-none focus:ring-2 focus:ring-turquoise"
                  aria-label="Zain Group on LinkedIn (opens in new tab)"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.youtube.com/user/ZainGroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:glow-turquoise transition-all focus:outline-none focus:ring-2 focus:ring-turquoise"
                  aria-label="Zain Group on YouTube (opens in new tab)"
                >
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/zaborjar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:glow-turquoise transition-all focus:outline-none focus:ring-2 focus:ring-turquoise"
                  aria-label="Zain Group on Instagram (opens in new tab)"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://x.com/Aborjar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:glow-turquoise transition-all focus:outline-none focus:ring-2 focus:ring-turquoise"
                  aria-label="Zain Group on X (opens in new tab)"
                >
                  <XIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=https://reframe.zain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white hover:bg-white/20 hover:glow-turquoise transition-all"
                aria-label="Share on LinkedIn (opens in new tab)"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                <span>Share on LinkedIn</span>
              </a>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
                Quick Links
              </h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-1.5 sm:space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-white hover:pl-2 transition-all inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-turquoise rounded text-sm sm:text-base"
                      >
                        <span className="text-[#C3D534]" aria-hidden="true">→</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Column 3 - Event Details */}
            <div>
              <h3 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
                Event Details
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {workshopDetails.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-turquoise rounded text-sm sm:text-base"
                      >
                        <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C3D534] flex-shrink-0" aria-hidden="true" />
                        <span className="break-all">{item.label}</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 sm:gap-3 text-white/70 text-sm sm:text-base">
                        <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C3D534] flex-shrink-0" aria-hidden="true" />
                        <span>{item.label}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 sm:pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/50">
              <p>© 2025 All rights reserved.</p>
              <span className="text-white/70">Part of the Gen Z 2026 Program</span>
            </div>
          </div>
        </div>
      </footer>
    </AuroraBackground>
  )
}
