"use client"

import React, { createContext, useContext, useMemo } from "react"

export interface ThemeColors {
  primary?: string
  secondary?: string
  accent?: string
  navyDark?: string
  navyLight?: string
  blue?: string
}

export interface ThemeFonts {
  headingFont?: string
  bodyFont?: string
}

export interface ThemeGradients {
  heroGradientStart?: string
  heroGradientEnd?: string
  cardGradientStart?: string
  cardGradientEnd?: string
}

export interface ThemeSettings {
  colors?: ThemeColors
  fonts?: ThemeFonts
  gradients?: ThemeGradients
}

const defaultColors = {
  primary: "#C3D534",
  secondary: "#F7E73F",
  accent: "#00B5AD",
  navyDark: "#1E1A5F",
  navyLight: "#1C2951",
  blue: "#0057B8",
}

const defaultFonts = {
  headingFont: "zain",
  bodyFont: "zain",
}

const defaultGradients = {
  heroGradientStart: "#1E1A5F",
  heroGradientEnd: "#0057B8",
  cardGradientStart: "#1C2951",
  cardGradientEnd: "#0057B8",
}

const defaultTheme: ThemeSettings = {
  colors: defaultColors,
  fonts: defaultFonts,
  gradients: defaultGradients,
}

const CMSThemeContext = createContext<ThemeSettings>(defaultTheme)

export function useCMSTheme() {
  return useContext(CMSThemeContext)
}

const fontFamilyMap: Record<string, string> = {
  zain: "var(--font-zain), sans-serif",
  inter: "var(--font-inter), sans-serif",
  poppins: "var(--font-poppins), sans-serif",
  montserrat: "var(--font-montserrat), sans-serif",
  playfair: "var(--font-playfair), serif",
  "space-grotesk": "var(--font-space-grotesk), sans-serif",
  "open-sans": "var(--font-open-sans), sans-serif",
  lato: "var(--font-lato), sans-serif",
  "source-sans": "var(--font-source-sans), sans-serif",
  roboto: "var(--font-roboto), sans-serif",
}

interface CMSThemeProviderProps {
  theme?: ThemeSettings | null
  children: React.ReactNode
}

export function CMSThemeProvider({ theme, children }: CMSThemeProviderProps) {
  const mergedTheme = useMemo((): ThemeSettings => {
    if (!theme) return defaultTheme
    return {
      colors: { ...defaultColors, ...theme.colors },
      fonts: { ...defaultFonts, ...theme.fonts },
      gradients: { ...defaultGradients, ...theme.gradients },
    }
  }, [theme])

  React.useEffect(() => {
    const colors = mergedTheme.colors || defaultColors
    const fonts = mergedTheme.fonts || defaultFonts
    const gradients = mergedTheme.gradients || defaultGradients

    const headingFont = fonts.headingFont || "zain"
    const bodyFont = fonts.bodyFont || "zain"

    const root = document.documentElement
    root.style.setProperty("--color-primary", colors.primary || defaultColors.primary)
    root.style.setProperty("--color-secondary", colors.secondary || defaultColors.secondary)
    root.style.setProperty("--color-accent", colors.accent || defaultColors.accent)
    root.style.setProperty("--color-navy-dark", colors.navyDark || defaultColors.navyDark)
    root.style.setProperty("--color-navy-light", colors.navyLight || defaultColors.navyLight)
    root.style.setProperty("--color-blue", colors.blue || defaultColors.blue)
    root.style.setProperty("--font-heading", fontFamilyMap[headingFont] || fontFamilyMap.zain)
    root.style.setProperty("--font-body", fontFamilyMap[bodyFont] || fontFamilyMap.zain)
    root.style.setProperty("--gradient-hero-start", gradients.heroGradientStart || defaultGradients.heroGradientStart)
    root.style.setProperty("--gradient-hero-end", gradients.heroGradientEnd || defaultGradients.heroGradientEnd)
    root.style.setProperty("--gradient-card-start", gradients.cardGradientStart || defaultGradients.cardGradientStart)
    root.style.setProperty("--gradient-card-end", gradients.cardGradientEnd || defaultGradients.cardGradientEnd)
  }, [mergedTheme])

  return (
    <CMSThemeContext.Provider value={mergedTheme}>
      {children}
    </CMSThemeContext.Provider>
  )
}

export function useCMSThemeColors() {
  const theme = useCMSTheme()
  return { ...defaultColors, ...theme.colors }
}

export function useCMSThemeGradients() {
  const theme = useCMSTheme()
  return { ...defaultGradients, ...theme.gradients }
}
