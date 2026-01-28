"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Calendar, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Book {
  id: number
  title: string
  author: string
  date: string
  description: string
  status: "current" | "upcoming" | "future"
  coverGradient: string
  coverImage?: string
  badgeColor: string
  badgeText: string
}

const books: Book[] = [
  {
    id: 1,
    title: "Reset",
    author: "Dan Heath",
    date: "February 10, 2025",
    description:
      "How to find your way when you feel stuck. Learn frameworks for making successful changes.",
    status: "current",
    coverGradient: "from-[#F7E73F] to-[#C3D534]",
    coverImage: "/images/reset-book-cover.png",
    badgeColor: "bg-[#C3D534] text-black",
    badgeText: "NOW READING",
  },
  {
    id: 2,
    title: "Coming Soon",
    author: "To Be Announced",
    date: "Date TBD",
    description:
      "The next chapter in our Reframe journey. Stay tuned for the reveal.",
    status: "upcoming",
    coverGradient: "from-[#00B2E3] to-[#9B4F96]",
    badgeColor: "bg-[#00B5AD] text-white",
    badgeText: "UP NEXT",
  },
  {
    id: 3,
    title: "Coming Soon",
    author: "To Be Announced",
    date: "Date TBD",
    description:
      "More transformative reads await. This series is just getting started.",
    status: "future",
    coverGradient: "from-[#0057B8] to-[#1E1A5F]",
    badgeColor: "bg-[#9B4F96] text-white",
    badgeText: "FUTURE",
  },
]

export function BookCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % books.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section
      id="books"
      className="py-12 sm:py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#1E1A5F] via-[#0057B8] to-[#00B5AD]"
      aria-label="Book carousel section"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#C3D534] mb-3 sm:mb-4">
            The Reading Journey
          </h2>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Each session in the Reframe series is powered by a transformative
            book. Here&apos;s what&apos;s on our shelf.
          </p>
          <div className="mt-3 sm:mt-4 h-1 w-16 sm:w-24 mx-auto bg-gradient-to-r from-[#C3D534] to-[#00B5AD] rounded-full" aria-hidden="true" />
        </div>

        {/* Carousel Container */}
        <div
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-10"
          role="region"
          aria-roledescription="carousel"
          aria-label="Book selections"
        >
          {/* Screen reader announcement for slide changes */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            Showing {books[currentIndex].title} by {books[currentIndex].author}, slide {currentIndex + 1} of {books.length}
          </div>
          
          <div className="relative overflow-hidden">
            {/* Cards */}
            <div
              className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))`,
              }}
            >
              {books.map((book, index) => (
                <div
                  key={book.id}
                  className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] flex-shrink-0"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${books.length}: ${book.title} by ${book.author}`}
                  aria-hidden={index !== currentIndex}
                >
                  <BookCard book={book} isActive={index === currentIndex} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="ghost"
              size="icon"
              className="glass-button rounded-full w-10 h-10 sm:w-12 sm:h-12"
              onClick={prevSlide}
              aria-label="Previous book"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>

            {/* Dot Indicators */}
            <div className="flex gap-2" role="tablist" aria-label="Carousel navigation">
              {books.map((_, index) => (
                <button
                  key={`dot-${books[index].id}`}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-gradient-to-r from-turquoise to-blue w-6 sm:w-8"
                      : "bg-foreground/20 hover:bg-foreground/40"
                  )}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="glass-button rounded-full w-10 h-10 sm:w-12 sm:h-12"
              onClick={nextSlide}
              aria-label="Next book"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </div>

        {/* Banner */}
        <div className="mt-4 sm:mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-4 lg:p-6 relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C3D534] via-[#00B5AD] to-[#0057B8] -z-10 animate-pulse-glow opacity-20" aria-hidden="true" />
          <p className="text-center text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed">
            Our first and flagship program in the Gen Z 2026 series. Join now to be part of a
            growing community of colleagues committed to continuous learning.
          </p>
        </div>
      </div>
    </section>
  )
}

function BookCard({ book, isActive }: { book: Book; isActive: boolean }) {
  return (
    <article
      className={cn(
        "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 h-full flex flex-col transition-all duration-300",
        isActive && book.status === "current" && "ring-2 ring-[#C3D534] glow-lime"
      )}
      aria-label={`${book.title} by ${book.author}`}
    >
      {/* Book Cover */}
      <div
        className={cn(
          "aspect-[3/4] max-h-48 sm:max-h-64 lg:max-h-none rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 sm:mb-6 relative overflow-hidden",
          book.coverGradient
        )}
        aria-hidden="true"
      >
        {book.status === "current" && book.coverImage ? (
          <Image
            src={book.coverImage || "/placeholder.svg"}
            alt=""
            fill
            className="object-contain p-1 sm:p-2"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        ) : book.status === "current" ? (
          <div className="text-center p-3 sm:p-4">
            <span className="text-2xl sm:text-3xl font-black text-white drop-shadow-lg">
              {book.title}
            </span>
            <span className="block text-xs sm:text-sm text-white/80 mt-1 sm:mt-2">
              {book.author}
            </span>
          </div>
        ) : (
          <div className="text-center">
            <HelpCircle
              className={cn(
                "w-12 h-12 sm:w-16 sm:h-16 text-white/80",
                book.status === "upcoming" && "animate-pulse"
              )}
            />
          </div>
        )}
      </div>

      {/* Status Badge */}
      <span
        className={cn(
          "inline-block self-start px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider mb-3 sm:mb-4",
          book.badgeColor
        )}
        aria-label={`Status: ${book.badgeText}`}
      >
        <span aria-hidden="true">{book.status === "current" && "●"} {book.status === "upcoming" && "◎"}{" "}
        {book.status === "future" && "○"}</span> {book.badgeText}
      </span>

      {/* Book Info */}
      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{book.title}</h3>
      <p className="text-xs sm:text-sm text-white/60 mb-3 sm:mb-4">by {book.author}</p>

      {/* Date */}
      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/60 mb-3 sm:mb-4">
        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
        <time dateTime={book.status === "current" ? "2025-02-10" : undefined}>{book.date}</time>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-white/70 mb-4 sm:mb-6 flex-grow leading-relaxed">
        {book.description}
      </p>

      {/* CTA Button */}
      {book.status === "current" ? (
        <Button
          asChild
          className="w-full bg-gradient-to-r from-turquoise to-blue text-white font-semibold rounded-full text-sm sm:text-base py-2 sm:py-2.5 focus:ring-2 focus:ring-turquoise focus:ring-offset-2"
        >
          <a href="#register">Join This Session</a>
        </Button>
      ) : (
        <Button
          variant="outline"
          className="w-full glass-button rounded-full font-semibold bg-transparent text-sm sm:text-base py-2 sm:py-2.5 focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2"
          aria-label={`Get notified when ${book.title} is available`}
        >
          Get Notified
        </Button>
      )}
    </article>
  )
}
