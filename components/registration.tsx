"use client"

import Image from "next/image"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Ticket,
  Mail,
  ExternalLink,
} from "lucide-react"
import { AuroraBackground } from "./aurora-background"

const eventInfo = [
  { icon: Calendar, label: "Monday, February 10th, 2025" },
  { icon: Clock, label: "2:00 PM - 3:30 PM (Kuwait)" },
  { icon: MapPin, label: "ZINC - Innovation Campus" },
  { icon: Users, label: "Facilitated by Gen Z Team" },
  { icon: Ticket, label: "Limited spots available" },
]

const workshopInfo = [
  { icon: Calendar, label: "Monday, February 10th, 2025" },
  { icon: Clock, label: "2:00 PM - 3:30 PM (Kuwait)" },
  { icon: MapPin, label: "ZINC - Innovation Campus" },
  { icon: Users, label: "Facilitated by Gen Z Team" },
  { icon: Ticket, label: "Limited spots available" },
]

export function Registration() {
  return (
    <AuroraBackground variant="azure" className="py-20 lg:py-32">
      <section
        id="register"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        aria-labelledby="register-heading"
      >
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          <h2
            id="register-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
          >
            Reserve Your Spot
          </h2>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl mx-auto">
            Limited spaces available. Secure your seat at the first Reframe
            session.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
          {/* Left Column - Event Summary */}
          <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-fit">
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white/60 text-xs sm:text-sm tracking-wider uppercase">Reframe at</span>
                <Image
                  src="/images/zain-logo-white.svg"
                  alt="Zain"
                  width={60}
                  height={20}
                  className="h-3 sm:h-4 w-auto inline-block"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Session #1: Reset
              </h3>
            </div>

            <div className="h-px bg-white/20 mb-4 sm:mb-6" role="separator" />

            <ul className="space-y-3 sm:space-y-4" aria-label="Event details">
              {eventInfo.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 sm:gap-4 text-white text-sm sm:text-base"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>

            <div className="h-px bg-white/20 my-4 sm:my-6" role="separator" />

            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-2">
                Questions? Reach out:
              </p>
              <a
                href="mailto:generationz@zain.com"
                className="inline-flex items-center gap-2 text-white text-sm sm:text-base hover:text-[#C3D534] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C3D534] focus:ring-offset-2 focus:ring-offset-[#0057B8] rounded"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span className="break-all">generationz@zain.com</span>
              </a>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="glass-card bg-white/20 dark:bg-black/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-turquoise to-blue flex items-center justify-center">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Registration
              </h3>
            </div>

            {/* Mobile: Direct Link Button */}
            <div className="block sm:hidden mb-4">
              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=xeI9eiyCkkyHf9urffDz6r8iSFDpYhBGltmiiOk-wlVURU0xMVdCQ0FVSUowRUFaUkxaTkE5QjhRSi4u"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#C3D534] to-[#00B5AD] text-[#1E1A5F] font-semibold py-4 px-6 rounded-xl hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#C3D534] focus:ring-offset-2"
                aria-label="Open registration form (opens in new tab)"
              >
                <Ticket className="w-5 h-5" aria-hidden="true" />
                <span>Open Registration Form</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <p className="text-xs text-foreground/60 text-center mt-3">
                Tap the button above to register on Microsoft Forms
              </p>
            </div>

            {/* Desktop: Microsoft Form Embed */}
            <div className="hidden sm:block bg-white/10 dark:bg-black/20 rounded-lg sm:rounded-xl border border-white/20 overflow-hidden">
              <iframe
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=xeI9eiyCkkyHf9urffDz6r8iSFDpYhBGltmiiOk-wlVURU0xMVdCQ0FVSUowRUFaUkxaTkE5QjhRSi4u&embed=true"
                width="100%"
                height="520"
                frameBorder="0"
                style={{ border: "none", maxWidth: "100%", minHeight: "480px" }}
                allowFullScreen
                title="Reframe Registration Form"
              />
            </div>

            {/* Desktop Fallback Link */}
            <div className="hidden sm:block mt-4 text-center">
              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=xeI9eiyCkkyHf9urffDz6r8iSFDpYhBGltmiiOk-wlVURU0xMVdCQ0FVSUowRUFaUkxaTkE5QjhRSi4u"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/60 hover:text-turquoise transition-colors inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-turquoise rounded"
                aria-label="Having trouble? Register on external form (opens in new tab)"
              >
                Having trouble? Register here
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Terms Text */}
        <div className="mt-6 sm:mt-8 text-center px-2">
          <span className="inline-block glass-card bg-white/10 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-white/70 rounded-xl sm:rounded-full">
            By registering, you confirm your attendance. Please notify us if
            plans change so we can offer your spot to a waitlisted colleague.
          </span>
        </div>
      </section>
    </AuroraBackground>
  )
}
