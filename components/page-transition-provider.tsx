"use client"

import { createContext, useContext, useState, useCallback, useRef, useEffect, ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

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
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [contentHidden, setContentHidden] = useState(false)
  const targetPathRef = useRef<string | null>(null)
  const previousPathRef = useRef(pathname)
  const hasNavigatedRef = useRef(false)

  const forceScrollTop = useCallback(() => {
    const lenis = typeof window !== "undefined" ? (window as any).__lenis : null
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  useEffect(() => {
    if (pathname !== previousPathRef.current && isTransitioning) {
      hasNavigatedRef.current = true
      forceScrollTop()
      requestAnimationFrame(() => {
        forceScrollTop()
        requestAnimationFrame(() => {
          setContentHidden(false)
          setTimeout(() => {
            setIsTransitioning(false)
            targetPathRef.current = null
            hasNavigatedRef.current = false
          }, 100)
        })
      })
    }
    previousPathRef.current = pathname
  }, [pathname, isTransitioning, forceScrollTop])

  const navigateTo = useCallback((href: string) => {
    if (isTransitioning) return
    
    targetPathRef.current = href
    hasNavigatedRef.current = false
    setIsTransitioning(true)
    setContentHidden(true)
    
    setTimeout(() => {
      forceScrollTop()
      router.push(href)
      
      setTimeout(() => {
        if (!hasNavigatedRef.current) {
          forceScrollTop()
          setContentHidden(false)
          setTimeout(() => {
            setIsTransitioning(false)
            targetPathRef.current = null
          }, 100)
        }
      }, 3000)
    }, 400)
  }, [router, isTransitioning, forceScrollTop])

  return (
    <TransitionContext.Provider value={{ navigateTo, isTransitioning }}>
      {isTransitioning && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #1C2951 0%, #1E1A5F 50%, #0057B8 100%)"
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div
                className="w-16 h-16 rounded-full border-4 border-transparent animate-spin"
                style={{
                  borderTopColor: "#C3D534",
                  borderRightColor: "#F7E73F",
                  borderBottomColor: "#00B5AD",
                  animationDuration: "1s",
                }}
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#C3D534] via-[#F7E73F] to-[#00B5AD] bg-clip-text text-transparent">
              Generation Z
            </span>
          </div>
        </div>
      )}
      
      <div
        style={{
          opacity: contentHidden ? 0 : 1,
          transition: contentHidden ? "none" : "opacity 0.3s ease",
        }}
      >
        {children}
      </div>
    </TransitionContext.Provider>
  )
}
