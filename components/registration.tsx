"use client"

import { CheckCircle2, ExternalLink, FileText, Calendar } from "lucide-react"

const workshopSummary = [
  { label: "Session #1: Reset — Completed" },
  { label: "February 2025 — ZINC Innovation Campus" },
  { label: "Facilitated by Gen Z Team" },
  { label: "Next session dates — To Be Announced" },
]

const feedbackFormUrl = "https://forms.office.com/Pages/ResponsePage.aspx?id=xeI9eiyCkkyHf9urffDz6r8iSFDpYhBGltmiiOk-wlVUOU41U0Q5NjkzUkFMTU5aSEZLSFNFSDZLSC4u"
const feedbackFormEmbedUrl = `${feedbackFormUrl}&embed=true`

const resourceCards = [
  {
    title: "Reset Toolkit",
    description: "From our Reset workshop by Dan Heath. Your complete guide to applying the frameworks, exercises, and reflection prompts covered in the session.",
    url: "https://qr-codes.io/JSgFT6",
    Icon: FileText,
  },
  {
    title: "Burst Planner",
    description: "From our Reset workshop by Dan Heath. A guided planner to identify what feels stuck, find the real bottleneck, spot bright spots, and design a 30–90 minute BURST action to unlock progress.",
    url: "https://qr-codes.io/KMRMfC",
    Icon: Calendar,
  },
]

export function Registration() {
  return (
    <section
      id="register"
      className="py-12 sm:py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8"
      aria-labelledby="register-heading"
    >
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle2 className="w-7 h-7 text-[#C3D534]" />
            <span className="text-[#C3D534] font-semibold text-sm sm:text-base tracking-wider uppercase">Workshop Completed</span>
          </div>
          <h2
            id="register-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
          >
            Share Your Experience
          </h2>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl mx-auto">
            The first chapter of REFRAME is written. Help us shape what comes next — your feedback fuels the journey forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-fit">
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white/60 text-xs sm:text-sm tracking-wider uppercase">Reframe at</span>
                <span className="bg-gradient-to-r from-[#00B5AD] to-[#C3D534] bg-clip-text text-transparent font-semibold text-xs sm:text-sm">ZAIN</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Session #1: Reset
              </h3>
              <p className="text-white/50 text-sm mt-1">This session has concluded</p>
            </div>

            <div className="h-px bg-white/20 mb-4 sm:mb-6" role="separator" />

            <ul className="space-y-2 sm:space-y-3" aria-label="Workshop summary">
              {workshopSummary.map((item) => (
                <li
                  key={item.label}
                  className="text-white text-sm sm:text-base border-l-2 border-[#C3D534] pl-3"
                >
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="h-px bg-white/20 my-4 sm:my-6" role="separator" />

            <div className="bg-[#1E1A5F]/60 rounded-xl p-4">
              <p className="text-[#C3D534] text-sm font-semibold mb-1">What&apos;s Next?</p>
              <p className="text-white/70 text-sm">
                The next REFRAME session is being designed. Stay tuned — details will be announced soon. The best stories are the ones still being written.
              </p>
            </div>

            <div className="h-px bg-white/20 my-4 sm:my-6" role="separator" />

            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-2">
                Questions? Reach out:
              </p>
              <a
                href="mailto:generationz@zain.com"
                className="text-white text-sm sm:text-base hover:text-[#C3D534] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#1E1A5F] rounded"
              >
                generationz@zain.com
              </a>
            </div>
          </div>

          <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Post-Workshop Feedback
            </h3>

            <div className="block sm:hidden mb-4">
              <a
                href={feedbackFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center bg-gradient-to-r from-[#C3D534] to-[#00B5AD] text-[#1E1A5F] font-semibold py-4 px-6 rounded-xl hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#1E1A5F]"
                aria-label="Open feedback form (opens in new tab)"
              >
                Open Feedback Form
              </a>
              <p className="text-xs text-white/60 text-center mt-3">
                Tap the button above to share your feedback on Microsoft Forms
              </p>
            </div>

            <div className="hidden sm:block bg-white/10 rounded-lg sm:rounded-xl border border-white/20 overflow-hidden">
              <iframe
                src={feedbackFormEmbedUrl}
                width="100%"
                height="520"
                frameBorder="0"
                style={{ border: "none", maxWidth: "100%", minHeight: "480px" }}
                allowFullScreen
                title="Reframe Post-Workshop Feedback Form"
              />
            </div>

            <div className="hidden sm:block mt-4 text-center">
              <a
                href={feedbackFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-[#C3D534] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#1E1A5F] rounded"
                aria-label="Having trouble? Share feedback on external form (opens in new tab)"
              >
                Having trouble? Share feedback here
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent">
            REFRAME Resources
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {resourceCards.map((card) => (
              <a
                key={card.title}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-dark rounded-xl sm:rounded-2xl p-6 lg:p-8 border border-white/20 hover:border-[#C3D534]/50 transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#1E1A5F]"
                aria-label={`${card.title} — ${card.description} (opens in new tab)`}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C3D534] to-[#00B5AD] flex items-center justify-center mb-5" aria-hidden="true">
                  <card.Icon className="w-7 h-7 text-[#1E1A5F]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#C3D534] transition-colors">
                  {card.title}
                </h4>
                <p className="text-white/80 text-sm mb-4">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#C3D534] text-sm font-semibold" aria-hidden="true">
                  Open Resource
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center px-2">
          <span className="inline-block glass-card bg-white/10 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-white/70 rounded-xl sm:rounded-full">
            Thank you for being part of REFRAME Session #1. Your insights will shape the sessions ahead.
          </span>
        </div>
    </section>
  )
}
