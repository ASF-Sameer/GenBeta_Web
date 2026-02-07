"use client"

import { createContext, useContext, useEffect, useRef, ReactNode } from "react"

interface SmoothScrollContextType {
  lenis: any | null
  scrollToTop: () => void
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null, scrollToTop: () => {} })

export const useSmoothScroll = () => useContext(SmoothScrollContext)

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<any>(null)

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default
      
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
      })

      if (typeof window !== "undefined") {
        ;(window as any).__lenis = lenisRef.current
      }

      function raf(time: number) {
        lenisRef.current?.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      lenisRef.current?.destroy()
      if (typeof window !== "undefined") {
        ;(window as any).__lenis = null
      }
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollToTop }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
