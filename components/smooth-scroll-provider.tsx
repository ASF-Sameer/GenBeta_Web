"use client"

import { createContext, useContext, useEffect, useRef, ReactNode } from "react"

interface SmoothScrollContextType {
  lenis: any | null
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null })

export const useSmoothScroll = () => useContext(SmoothScrollContext)

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    // Dynamic import for Lenis to avoid SSR issues
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default
      
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
      })

      function raf(time: number) {
        lenisRef.current?.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
