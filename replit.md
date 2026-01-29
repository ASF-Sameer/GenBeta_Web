# GenZ Website

## Overview
A Next.js 16 website for "Generation Z" - 11th Edition 2026. This is a merged codebase combining the best elements from both the 10th Edition (Vite + React) and 11th Edition (Next.js) projects. The site is a modern, visually rich application built with React 19, featuring animations with Framer Motion and GSAP, 3D elements with Three.js, and UI components from Radix UI with Tailwind CSS styling.

## Project Structure
- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Landing page with LandingPage component
  - `reframe/page.tsx` - Reframe program page with full sections
- `components/` - Reusable React components
  - `landing-page.tsx` - Main landing page with hero, pillars, team, gallery
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
- 2026-01-29: Continuous gradient landing page with program images
  - Landing page now uses ONE continuous gradient background (no section breaks)
  - Programs section includes book cover images
  - "Learn More" link now scrolls to top of target page
  - Reading Journey (book-carousel) uses header gradient color scheme (navy-blue)
  - Facilitators section uses header gradient color scheme (blue-navy)
  - Gradient styling: from-[#1C2951] via-[#1E1A5F] to-[#0057B8]

- 2026-01-29: Text-based accessible design with unified gradient backgrounds
  - Removed all icons from pillar cards, team cards, workshop overview, agenda timeline, and registration sections
  - Converted to text-based design with colored left-border accents for visual hierarchy
  - Added "Our Programs" section on landing page featuring Reframe program
  - Unified gradient backgrounds across all sections (removed all white sections)
  - Systems Thinking pillar now uses turquoise-lime gradient for better visibility
  - Simplified Reframe hero to single CTA button
  - Team cards now show text-only LinkedIn links and email addresses
  - Workshop benefits and attendees use border-left styling instead of icon badges
  - Agenda timeline uses small colored dots instead of icon circles
  - Registration form uses text-based event details with border accents

- 2026-01-29: Updated design with 10th edition visual elements and new program theme
  - New Program Theme Pillars (5 pillars):
    - AI & Big Data (LLMs, Analytics, AI Ethics, Technological Literacy)
    - Resilience, Flexibility & Agility (Neuroplasticity, Purpose, Mental Toughness)
    - Creative Thinking (Problem-solving, Inclusion, Wellbeing, Collaboration)
    - Leadership & Social Influence (Negotiation, Communication, Lifelong Learning)
    - Systems Thinking (Lean Six Sigma, Big Picture, Systems Mapping)
  - 10th Edition Visual Design Applied:
    - Gradient text styling (lime-yellow-turquoise: #C3D534, #F7E73F, #00B5AD)
    - Animated gradient orbs in background
    - Glassmorphism pillar cards with glow effects (no icons)
    - Gradient CTA buttons with hover transitions
  - Real Event Gallery: 12 photos from actual Gen Z program events
  - Converted HEIC images to JPG for web compatibility

- 2026-01-29: New landing page implementation with full Gen Z 11th Edition design
  - Created new LandingPage component with complete sections:
    - Hero section with team photo and block gradient background
    - About section with program overview (gradient background)
    - Program Pillars (5 cards with glassmorphism, text-only design)
    - Our Programs section with Reframe card
    - Team profiles (6 members with photos, roles, email, LinkedIn)
    - Photo gallery with responsive carousel (1/2/3 items per view)
    - Footer with social links and Zain Group website connection
  - Applied official Zain font from Google Fonts
  - WCAG compliant: semantic HTML, ARIA labels, focus states, skip-to-content link
  - Text-based design without icons for better accessibility
  - Design system: unified gradient backgrounds throughout
  - Color palette: Navy (#1C2951), Purple (#1E1A5F), Blue (#3B5998), Gold (#F6EB69), Turquoise (#00B5AD)
  
- 2026-01-28: Initial Replit setup and 10th/11th edition merge review
  - Configured Next.js to run on port 5000 with host 0.0.0.0
  - Removed macOS-specific dependency (@next/swc-darwin-arm64)
  - Added allowedDevOrigins for Replit proxy compatibility
  - Fixed TypeScript types for Framer Motion ease properties
  - Verified smooth scrolling, animations, and 3D elements are working
