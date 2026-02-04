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
      className={`group relative bg-[#1E1A5F]/60 backdrop-blur-sm border rounded-2xl p-4 text-left transition-all duration-300 w-full ${
        isSelected 
          ? "border-[#C3D534] ring-2 ring-[#C3D534]/50" 
          : "border-white/20 hover:border-[#C3D534]/50"
      }`}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
        {book.coverImageUrl && !showPlaceholder ? (
          <Image
            src={book.coverImageUrl}
            alt={book.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#C3D534]/30 to-[#00B5AD]/30 flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-white/50" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <span className="text-white text-sm font-medium">Click to explore</span>
        </div>
        {isSelected && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-[#C3D534] rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-[#1E1A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{book.title}</h3>
      {book.author && !showPlaceholder && (
        <p className="text-[#C3D534] text-sm">{book.author}</p>
      )}
      {showPlaceholder && (
        <p className="text-white/50 text-sm italic">Coming soon...</p>
      )}
    </motion.button>
  )
}
