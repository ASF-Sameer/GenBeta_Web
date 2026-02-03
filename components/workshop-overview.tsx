"use client"

const benefits = [
  {
    title: "Master Reset Frameworks",
    description:
      "Learn Dan Heath's proven strategies for navigating moments of change and uncertainty",
  },
  {
    title: "Identify Stuck Points",
    description:
      "Recognize the patterns and mental models that hold us back at work and in life",
  },
  {
    title: "Design Your Reset",
    description:
      "Create actionable, personalized plans for professional and personal transformation",
  },
  {
    title: "Build Momentum Together",
    description:
      "Connect with colleagues who share your commitment to growth and improvement",
  },
]

const attendees = [
  {
    title: "Change-Makers",
    description:
      "Anyone feeling stuck in their current role and ready for a fresh perspective",
  },
  {
    title: "Team Leaders",
    description:
      "Managers looking to inspire their teams and guide them through transitions",
  },
  {
    title: "Growth Enthusiasts",
    description:
      "Colleagues passionate about continuous learning and self-improvement",
  },
]

const workshopDetails = [
  { label: "Monday, Feb 10" },
  { label: "2:00 - 3:30 PM" },
  { label: "ZINC" },
  { label: "Gen Z Team" },
]

export function WorkshopOverview() {
  return (
    <section
      id="workshop-overview"
      className="py-12 sm:py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      aria-labelledby="overview-heading"
    >
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          <h2
            id="overview-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
          >
            About <span className="bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent">Reframe</span> at <span className="bg-gradient-to-r from-[#00B5AD] to-[#C3D534] bg-clip-text text-transparent">Zain</span>
          </h2>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl mx-auto">
            Empowering meaningful change through structured learning experiences
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Left Column - Benefits */}
          <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              What You&apos;ll Gain
            </h3>
            <ul className="space-y-3 sm:space-y-4" aria-label="Benefits of attending">
              {benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="p-3 sm:p-4 rounded-xl hover:bg-white/10 transition-colors border-l-4 border-[#C3D534]"
                >
                  <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70">
                    {benefit.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Attendees */}
          <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Who Should Attend
            </h3>
            <ul className="space-y-3 sm:space-y-4" aria-label="Ideal attendees">
              {attendees.map((attendee) => (
                <li
                  key={attendee.title}
                  className="p-3 sm:p-4 rounded-xl hover:bg-white/10 transition-colors border-l-4 border-[#00B5AD]"
                >
                  <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                    {attendee.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70">
                    {attendee.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Workshop Details Banner */}
        <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
          <ul className="relative z-10 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-6 lg:gap-12 list-none" aria-label="Event details">
            {workshopDetails.map((detail, index) => (
              <li
                key={detail.label}
                className="text-white text-center"
              >
                <span className="font-medium text-xs sm:text-sm lg:text-base">{detail.label}</span>
                {index < workshopDetails.length - 1 && (
                  <span className="hidden lg:inline text-white/20 ml-6" aria-hidden="true">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
    </section>
  )
}
