"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { X, Download, ExternalLink, Clock, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import { PortableText } from "@portabletext/react"

interface BookFile {
  fileName: string
  fileUrl: string
  description?: string
}

interface BookLink {
  label: string
  url: string
  isExternal?: boolean
}

interface PopupContent {
  headline?: string
  description?: unknown[]
  workshopDetails?: string
  keyTakeaways?: string[]
  duration?: string
  format?: string
}

interface Book {
  _id: string
  title: string
  author?: string
  coverImage?: { asset: { _ref: string } }
  shortDescription?: string
  isDecided: boolean
  placeholderMessage?: string
  popupContent?: PopupContent
  files?: BookFile[]
  links?: BookLink[]
}

interface BookPopupModalProps {
  book: Book
  isOpen: boolean
  onClose: () => void
  imageUrl?: string
}

export function BookPopupModal({ book, isOpen, onClose, imageUrl }: BookPopupModalProps) {
  const prefersReducedMotion = useReducedMotion()
  if (!book) return null

  const showPlaceholder = !book.isDecided

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.9, y: 20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.9, y: 20 }}
            transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-[#1E1A5F] to-[#0D0B3E] rounded-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-4 md:p-6 border-b border-white/10">
              <h2 className="text-xl md:text-2xl font-bold text-white">{book.title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#1E1A5F]"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              {showPlaceholder ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-32 h-32 mb-8 rounded-full bg-gradient-to-br from-[#C3D534] to-[#00B5AD] flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Coming Soon</h3>
                  <p className="text-lg text-white/70 max-w-md">
                    {book.placeholderMessage || "Stay tuned! Something exciting is coming..."}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    {imageUrl && (
                      <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
                        <Image
                          src={imageUrl}
                          alt={book.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {book.author && (
                      <p className="text-[#C3D534] font-medium mb-2">By {book.author}</p>
                    )}
                    {book.shortDescription && (
                      <p className="text-white/70 text-sm">{book.shortDescription}</p>
                    )}
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    {book.popupContent?.headline && (
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {book.popupContent.headline}
                      </h3>
                    )}
                    
                    {book.popupContent?.description && (
                      <div className="prose prose-invert prose-sm max-w-none">
                        <PortableText value={book.popupContent.description} />
                      </div>
                    )}
                    
                    {book.popupContent?.workshopDetails && (
                      <div className="bg-white/5 rounded-xl p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Workshop Details</h4>
                        <p className="text-white/70 whitespace-pre-line">{book.popupContent.workshopDetails}</p>
                      </div>
                    )}
                    
                    {book.popupContent?.keyTakeaways && book.popupContent.keyTakeaways.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Takeaways</h4>
                        <ul className="space-y-2">
                          {book.popupContent.keyTakeaways.map((takeaway, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#C3D534] mt-1">•</span>
                              <span className="text-white/80">{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-4">
                      {book.popupContent?.duration && (
                        <div className="flex items-center gap-2 text-white/70">
                          <Clock className="w-5 h-5 text-[#00B5AD]" />
                          <span>{book.popupContent.duration}</span>
                        </div>
                      )}
                      {book.popupContent?.format && (
                        <div className="flex items-center gap-2 text-white/70">
                          <Users className="w-5 h-5 text-[#00B5AD]" />
                          <span>{book.popupContent.format}</span>
                        </div>
                      )}
                    </div>
                    
                    {book.files && book.files.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
                        <div className="space-y-2">
                          {book.files.map((file, idx) => (
                            <a
                              key={idx}
                              href={file.fileUrl}
                              download
                              className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#1E1A5F]"
                            >
                              <Download className="w-5 h-5 text-[#C3D534] group-hover:scale-110 transition-transform" />
                              <div>
                                <p className="text-white font-medium">{file.fileName}</p>
                                {file.description && (
                                  <p className="text-white/60 text-sm">{file.description}</p>
                                )}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {book.links && book.links.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Related Links</h4>
                        <div className="flex flex-wrap gap-3">
                          {book.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target={link.isExternal ? "_blank" : undefined}
                              rel={link.isExternal ? "noopener noreferrer" : undefined}
                              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C3D534] to-[#00B5AD] text-[#1E1A5F] font-medium rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#1E1A5F]"
                            >
                              {link.label}
                              {link.isExternal && <ExternalLink className="w-4 h-4" />}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

interface BookCardProps {
  book: Book
  imageUrl?: string
}

export function BookCard({ book, imageUrl }: BookCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isOpen, setIsOpen] = useState(false)
  const showPlaceholder = !book.isDecided

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="group relative bg-[#1E1A5F]/60 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-left hover:border-[#C3D534]/50 transition-all duration-300 w-full focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#1E1A5F]"
        whileHover={prefersReducedMotion ? undefined : { scale: 1.02, y: -5 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      >
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
          {imageUrl && !showPlaceholder ? (
            <Image
              src={imageUrl}
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
            <span className="text-white text-sm font-medium">Click to learn more</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{book.title}</h3>
        {book.author && !showPlaceholder && (
          <p className="text-[#C3D534] text-sm">{book.author}</p>
        )}
        {showPlaceholder && (
          <p className="text-white/60 text-sm italic">Coming soon...</p>
        )}
      </motion.button>
      
      <BookPopupModal
        book={book}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imageUrl={imageUrl}
      />
    </>
  )
}
