"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BookOpen } from "lucide-react"

interface Book {
  _id: string
  title: string
  author?: string
  coverImageUrl?: string
  shortDescription?: string
  isPrimary?: boolean
  isDecided: boolean
  placeholderMessage?: string
}

interface SelectableBookCardProps {
  book: Book
  onSelect: (book: Book) => void
  isSelected?: boolean
}

export function SelectableBookCard({ book, onSelect, isSelected }: SelectableBookCardProps) {
  const showPlaceholder = !book.isDecided

  return (
    <motion.button
      onClick={() => onSelect(book)}
      className={`group relative bg-[#1E1A5F]/60 backdrop-blur-sm border rounded-2xl p-3 sm:p-4 text-left transition-all duration-300 w-full ${
        isSelected 
          ? "border-[#C3D534] ring-2 ring-[#C3D534]/50" 
          : "border-white/20 hover:border-[#C3D534]/50"
      }`}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative aspect-[3/4] max-h-48 sm:max-h-64 rounded-xl overflow-hidden mb-3 sm:mb-4">
        {book.coverImageUrl && !showPlaceholder ? (
          <Image
            src={book.coverImageUrl}
            alt={book.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#C3D534]/30 to-[#00B5AD]/30 flex items-center justify-center">
            <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-white/50" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3 sm:pb-4">
          <span className="text-white text-xs sm:text-sm font-medium">Tap to explore</span>
        </div>
        {isSelected && (
          <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-[#C3D534] rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E1A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
        {book.isPrimary && !isSelected && (
          <div className="absolute top-2 left-2 px-2 py-0.5 sm:py-1 bg-[#F7E73F] rounded-full flex items-center justify-center">
            <span className="text-[9px] sm:text-[10px] font-bold text-[#1E1A5F] uppercase tracking-wide">Featured</span>
          </div>
        )}
      </div>
      <h3 className="text-base sm:text-lg font-bold text-white mb-1 line-clamp-2">{book.title}</h3>
      {book.author && !showPlaceholder && (
        <p className="text-[#C3D534] text-sm">{book.author}</p>
      )}
      {showPlaceholder && (
        <p className="text-white/50 text-sm italic">Coming soon...</p>
      )}
    </motion.button>
  )
}
