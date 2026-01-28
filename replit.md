# GenZ Website

## Overview
A Next.js 16 website for "Generation Z" - 11th Edition 2026. This is a merged codebase combining the best elements from both the 10th Edition (Vite + React) and 11th Edition (Next.js) projects. The site is a modern, visually rich application built with React 19, featuring animations with Framer Motion and GSAP, 3D elements with Three.js, and UI components from Radix UI with Tailwind CSS styling.

## Project Structure
- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Landing page with GenZLanding component
  - `reframe/page.tsx` - Reframe program page with full sections
- `components/` - Reusable React components
  - `genz-landing.tsx` - Main landing page component
  - `hero.tsx` - Hero section for Reframe page
  - `navbar.tsx` - Navigation bar
  - `footer.tsx` - Footer component
  - `aurora-background.tsx` - Animated gradient background
  - `floating-cube.tsx` - 3D interactive cube (Three.js)
  - `particle-field.tsx` - 3D particle background (Three.js)
  - `smooth-scroll-provider.tsx` - Lenis smooth scrolling
  - `book-carousel.tsx` - Book display carousel
  - `agenda-timeline.tsx` - Event agenda timeline
  - `facilitators.tsx` - Team facilitators section
  - `registration.tsx` - Registration form (MS Forms embed)
  - `workshop-overview.tsx` - Workshop details
  - `ui/` - Radix UI/Shadcn components
- `hooks/` - Custom React hooks
- `lib/` - Utility functions
- `public/` - Static assets (images, logos, icons)
- `docs/` - Project documentation (PRD, visual design recommendations)

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **UI**: React 19, Radix UI, Tailwind CSS v4
- **Animations**: Framer Motion, GSAP, Lenis (smooth scrolling)
- **3D**: Three.js, @react-three/fiber, @react-three/drei
- **Form handling**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics

## Pages
1. **Landing Page** (`/`) - Gen Z program overview with 3D cube navigation
2. **Reframe Page** (`/reframe`) - Full workshop page with:
   - Hero section
   - Workshop overview
   - Book carousel
   - Agenda timeline
   - Facilitators section
   - Registration form

## Features from 10th Edition (Integrated)
- Smooth scrolling with Lenis
- 3D particle backgrounds
- Framer Motion scroll animations
- GSAP-powered effects
- Glassmorphism UI styling
- Brand color palette (lime, turquoise, purple, sapphire, etc.)

## Running the Project
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`
- Production: `npm run start`

## Configuration
- Next.js configured for Replit's proxy environment (allowedDevOrigins)
- Images set to unoptimized mode for flexibility
- TypeScript build errors ignored for faster iteration

## Deployment
- Configured for autoscale deployment
- Build command: `npm run build`
- Start command: `npm run start`

## Recent Changes
- 2026-01-28: Initial Replit setup and 10th/11th edition merge review
  - Configured Next.js to run on port 5000 with host 0.0.0.0
  - Removed macOS-specific dependency (@next/swc-darwin-arm64)
  - Added allowedDevOrigins for Replit proxy compatibility
  - Fixed TypeScript types for Framer Motion ease properties
  - Verified smooth scrolling, animations, and 3D elements are working
