"use client"

import { createContext, useContext, useState, useCallback, ReactNode } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

interface TransitionContextType {
  navigateTo: (href: string) => void
  isTransitioning: boolean
}

const TransitionContext = createContext<TransitionContextType | null>(null)

export function usePageTransition() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error("usePageTransition must be used within PageTransitionProvider")
  }
  return context
}

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showContent, setShowContent] = useState(true)

  const forceScrollTop = useCallback(() => {
    const lenis = typeof window !== "undefined" ? (window as any).__lenis : null
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  const navigateTo = useCallback((href: string) => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setShowContent(false)
    
    setTimeout(() => {
      forceScrollTop()
      router.push(href)
      
      requestAnimationFrame(() => {
        forceScrollTop()
      })
      
      setTimeout(() => {
        forceScrollTop()
        setShowContent(true)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 600)
      }, 300)
    }, 500)
  }, [router, isTransitioning, forceScrollTop])

  return (
    <TransitionContext.Provider value={{ navigateTo, isTransitioning }}>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="transition-overlay"
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #1C2951 0%, #1E1A5F 50%, #0057B8 100%)"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full border-4 border-transparent"
                  style={{
                    borderTopColor: "#C3D534",
                    borderRightColor: "#F7E73F",
                    borderBottomColor: "#00B5AD",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full border-4 border-transparent"
                  style={{
                    borderTopColor: "#00B5AD",
                    borderLeftColor: "#F7E73F",
                  }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
              
              <motion.span
                className="text-xl font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                Generation Z
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        animate={{ 
          opacity: showContent ? 1 : 0,
          y: showContent ? 0 : 20
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </TransitionContext.Provider>
  )
}
