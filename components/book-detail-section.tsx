"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { ArrowLeft, Download, ExternalLink, Clock, Users, BookOpen, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  coverImageUrl?: string
  shortDescription?: string
  isDecided: boolean
  placeholderMessage?: string
  popupContent?: PopupContent
  files?: BookFile[]
  links?: BookLink[]
}

interface BookDetailSectionProps {
  book: Book
  onBack: () => void
  workshopTitle?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function BookDetailSection({ book, onBack, workshopTitle = "Reframe" }: BookDetailSectionProps) {
  const showPlaceholder = !book.isDecided

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      <div className="container mx-auto px-4 py-8">
        <motion.button
          variants={itemVariants}
          onClick={onBack}
          className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to {workshopTitle} Reading Journey</span>
        </motion.button>

        {showPlaceholder ? (
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto text-center py-20"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#C3D534]/30 to-[#00B5AD]/30 flex items-center justify-center">
              <BookOpen className="w-16 h-16 text-white/50" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{book.title}</h2>
            <p className="text-xl text-[#C3D534] mb-8">
              {book.placeholderMessage || "Stay tuned! Something exciting is coming..."}
            </p>
            <p className="text-white/60">
              Check back soon for updates on this part of the reading journey.
            </p>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-2xl">
                  {book.coverImageUrl ? (
                    <Image
                      src={book.coverImageUrl}
                      alt={book.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#C3D534] to-[#00B5AD] flex items-center justify-center">
                      <BookOpen className="w-20 h-20 text-white" />
                    </div>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold text-white mb-2">{book.title}</h1>
                {book.author && (
                  <p className="text-xl text-[#C3D534] mb-4">by {book.author}</p>
                )}
                
                {book.shortDescription && (
                  <p className="text-white/70 leading-relaxed">{book.shortDescription}</p>
                )}
              </div>
            </motion.div>

            <div className="lg:col-span-2 space-y-8">
              {book.popupContent?.headline && (
                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent mb-4">
                    {book.popupContent.headline}
                  </h2>
                </motion.div>
              )}

              {book.popupContent?.description && (
                <motion.div 
                  variants={itemVariants}
                  className="prose prose-invert prose-lg max-w-none"
                >
                  <PortableText value={book.popupContent.description} />
                </motion.div>
              )}

              {(book.popupContent?.duration || book.popupContent?.format) && (
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap gap-4"
                >
                  {book.popupContent?.duration && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#1E1A5F]/80 border border-white/20 rounded-full">
                      <Clock className="w-5 h-5 text-[#C3D534]" />
                      <span className="text-white">{book.popupContent.duration}</span>
                    </div>
                  )}
                  {book.popupContent?.format && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#1E1A5F]/80 border border-white/20 rounded-full">
                      <Users className="w-5 h-5 text-[#00B5AD]" />
                      <span className="text-white">{book.popupContent.format}</span>
                    </div>
                  )}
                </motion.div>
              )}

              {book.popupContent?.workshopDetails && (
                <motion.div 
                  variants={itemVariants}
                  className="bg-[#1E1A5F]/60 border border-white/20 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#C3D534]" />
                    Workshop Details
                  </h3>
                  <p className="text-white/80 leading-relaxed">{book.popupContent.workshopDetails}</p>
                </motion.div>
              )}

              {book.popupContent?.keyTakeaways && book.popupContent.keyTakeaways.length > 0 && (
                <motion.div 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-[#C3D534]/10 to-[#00B5AD]/10 border border-[#C3D534]/30 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4">Key Takeaways</h3>
                  <ul className="space-y-3">
                    {book.popupContent.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#C3D534] mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {book.files && book.files.length > 0 && (
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-bold text-white mb-4">Downloadable Resources</h3>
                  <div className="space-y-3">
                    {book.files.map((file, idx) => (
                      <a
                        key={idx}
                        href={file.fileUrl}
                        download
                        className="flex items-center gap-4 p-4 bg-[#1E1A5F]/60 border border-white/20 rounded-xl hover:border-[#C3D534]/50 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C3D534] to-[#00B5AD] flex items-center justify-center flex-shrink-0">
                          <Download className="w-6 h-6 text-[#1E1A5F]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium group-hover:text-[#C3D534] transition-colors truncate">
                            {file.fileName}
                          </p>
                          {file.description && (
                            <p className="text-white/50 text-sm truncate">{file.description}</p>
                          )}
                        </div>
                        <span className="text-white/50 text-sm">Download</span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}

              {book.links && book.links.length > 0 && (
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-bold text-white mb-4">Related Links</h3>
                  <div className="flex flex-wrap gap-3">
                    {book.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#C3D534] to-[#00B5AD] text-[#1E1A5F] font-semibold rounded-xl hover:opacity-90 transition-opacity"
                      >
                        {link.label}
                        {link.isExternal && <ExternalLink className="w-4 h-4" />}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div variants={itemVariants} className="pt-8">
                <Button
                  onClick={onBack}
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Reading Journey
                </Button>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
