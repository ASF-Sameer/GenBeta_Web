"use client"

import { ReactNode, MouseEvent } from "react"
import { usePageTransition } from "./page-transition-provider"

interface TransitionLinkProps {
  href: string
  children: ReactNode
  className?: string
  ariaLabel?: string
  onClick?: () => void
}

export function TransitionLink({ 
  href, 
  children, 
  className = "", 
  ariaLabel,
  onClick 
}: TransitionLinkProps) {
  const { navigateTo, isTransitioning } = usePageTransition()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) {
      return
    }
    
    e.preventDefault()
    if (onClick) onClick()
    navigateTo(href)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
      style={{ pointerEvents: isTransitioning ? "none" : "auto" }}
    >
      {children}
    </a>
  )
}
