"use client"

const eventInfo = [
  { label: "Tuesday, February 10th, 2025" },
  { label: "2:00 PM - 3:30 PM (Kuwait)" },
  { label: "ZINC - Innovation Campus" },
  { label: "Facilitated by Gen Z Team" },
  { label: "Limited spots available" },
]

export function Registration() {
  return (
    <section
      id="register"
      className="py-12 sm:py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8"
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
                <span className="bg-gradient-to-r from-[#00B5AD] to-[#C3D534] bg-clip-text text-transparent font-semibold text-xs sm:text-sm">ZAIN</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Session #1: Reset
              </h3>
            </div>

            <div className="h-px bg-white/20 mb-4 sm:mb-6" role="separator" />

            <ul className="space-y-2 sm:space-y-3" aria-label="Event details">
              {eventInfo.map((item) => (
                <li
                  key={item.label}
                  className="text-white text-sm sm:text-base border-l-2 border-[#C3D534] pl-3"
                >
                  {item.label}
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
                className="text-white text-sm sm:text-base hover:text-[#C3D534] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C3D534] focus:ring-offset-2 focus:ring-offset-[#0057B8] rounded"
              >
                generationz@zain.com
              </a>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Registration
            </h3>

            {/* Mobile: Direct Link Button */}
            <div className="block sm:hidden mb-4">
              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=xeI9eiyCkkyHf9urffDz6r8iSFDpYhBGltmiiOk-wlVURU0xMVdCQ0FVSUowRUFaUkxaTkE5QjhRSi4u"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center bg-gradient-to-r from-[#C3D534] to-[#00B5AD] text-[#1E1A5F] font-semibold py-4 px-6 rounded-xl hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#C3D534] focus:ring-offset-2"
                aria-label="Open registration form (opens in new tab)"
              >
                Open Registration Form
              </a>
              <p className="text-xs text-white/60 text-center mt-3">
                Tap the button above to register on Microsoft Forms
              </p>
            </div>

            {/* Desktop: Microsoft Form Embed */}
            <div className="hidden sm:block bg-white/10 rounded-lg sm:rounded-xl border border-white/20 overflow-hidden">
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
                className="text-sm text-white/60 hover:text-[#C3D534] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C3D534] rounded"
                aria-label="Having trouble? Register on external form (opens in new tab)"
              >
                Having trouble? Register here
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
  )
}
