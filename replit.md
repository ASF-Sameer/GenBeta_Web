# GenZ Website

## Overview
A Next.js 16 website for "Generation Z" - 11th Edition 2026. This is a merged codebase combining the best elements from both the 10th Edition (Vite + React) and 11th Edition (Next.js) projects. The site is a modern, visually rich application built with React 19, featuring animations with Framer Motion and GSAP, 3D elements with Three.js, and UI components from Radix UI with Tailwind CSS styling.

## Project Structure
- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Landing page with LandingPage component
  - `reframe/page.tsx` - Reframe program page with full sections
  - `workshop/[slug]/page.tsx` - Dynamic workshop pages (CMS-driven)
- `components/` - Reusable React components
  - `landing-page.tsx` - Main landing page with hero, pillars, team, gallery
  - `hero.tsx` - Hero section (accepts title/subtitle props for CMS)
  - `navbar.tsx` - Navigation bar (always visible text links)
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
  - `sanity.ts` - Sanity CMS client and query functions
- `sanity-schemas/` - Sanity schema definitions (copy to your Sanity Studio)
- `public/` - Static assets (images, logos, icons)
- `docs/` - Project documentation (PRD, visual design recommendations)

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **UI**: React 19, Radix UI, Tailwind CSS v4
- **Animations**: Framer Motion, GSAP, Lenis (smooth scrolling)
- **3D**: Three.js, @react-three/fiber, @react-three/drei
- **CMS**: Sanity.io (headless CMS)
- **Form handling**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics

## Sanity CMS Integration
The website is connected to Sanity CMS for content management.

### Environment Variables
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: nbpw4115
- `NEXT_PUBLIC_SANITY_DATASET`: production

### Content Types (Schemas)
1. **Program** - Main programs like Gen Z 2026 overview
2. **Previous Edition** - Historical Gen Z editions (2016-2024)
3. **Workshop** - Individual workshops (like Reframe)
4. **Gallery Image** - Photo gallery images
5. **Team Member** - Team member profiles

### Schema Files Location
Copy files from `sanity-schemas/` folder to your Sanity Studio's `schemaTypes/` folder:
- `program.ts` - Program schema
- `previousEdition.ts` - Previous editions schema
- `workshop.ts` - Workshop schema (full page with all sections)
- `galleryImage.ts` - Gallery images schema
- `teamMember.ts` - Team members schema
- `index.ts` - Schema registry

### Sanity Queries (lib/sanity.ts)
- `getPrograms()` - Fetch all programs
- `getProgram(slug)` - Fetch single program
- `getPreviousEditions()` - Fetch historical editions
- `getGenZ2026()` - Fetch current year content
- `getGalleryImages()` - Fetch gallery images
- `getWorkshops()` - Fetch all workshops
- `getWorkshop(slug)` - Fetch single workshop with all sections
- `getTeamMembers()` - Fetch team members

## Pages
1. **Landing Page** (`/`) - Gen Z program overview with 3D cube navigation
2. **Reframe Page** (`/reframe`) - Full workshop page with:
   - Hero section
   - Workshop overview
   - Book carousel
   - Agenda timeline
   - Facilitators section
   - Registration form
3. **Dynamic Workshop Pages** (`/workshop/[slug]`) - CMS-driven workshop pages

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
- 2026-02-03: Sanity CMS Integration
  - Added Sanity client and image URL packages
  - Created `lib/sanity.ts` with queries for all content types
  - Created schema definitions in `sanity-schemas/` folder:
    - Program, Previous Edition, Workshop, Gallery Image, Team Member
  - Added dynamic workshop route at `/workshop/[slug]`
  - Hero component now accepts title/subtitle props for CMS content
  - Environment variables configured for Sanity project

- 2026-02-03: Corporate Navigation Improvements
  - Removed hamburger menu - all links now visible on all screen sizes
  - Full gradient background on navbar (navy-to-blue)
  - Uppercase navigation links with letter-spacing
  - Register button has gradient accent treatment
  - Responsive text sizing and spacing

- 2026-01-29: Previous Programs section and brand refinements
  - **Previous Gen Z Programs**: New section displaying all 9 editions (2016-2024)
    - Shows year, program title, and "What Made Us Different" descriptions
    - Responsive grid: 3-column desktop, 2-column tablet, 1-column mobile
    - Glassmorphism cards with gradient text styling
  - **Logo Removal**: Replaced all logo images with "Generation Z" gradient text
    - Navigation bar uses gradient text instead of logo
    - genz-landing.tsx updated to use text-only branding
  - **Auto-Shuffle Gallery**: Gallery carousel now:
    - Shuffles images randomly on page load
    - Auto-advances every 4 seconds
    - Loops continuously through all images
  - **Page Transitions**: Smooth fade/slide animations between pages using Framer Motion

- 2026-01-29: Enhanced UX with book effect and improved layouts
  - **3D Book Effect**: Program cards now feature book cover "poking out" with:
    - Negative margin positioning (book extends outside card)
    - Drop shadow and slight rotation for 3D depth
    - Scale and rotate animations on hover
    - Responsive sizing for mobile/tablet/desktop
  - **5-Pillar Grid**: Optimized layout with no empty space:
    - Desktop: 3 cards on top row, 2 centered on bottom row
    - Tablet: 2-column grid with proper spacing
    - Mobile: Single column stack
  - **Reframe Page Integration**: Seamless blending with main site:
    - Continuous gradient wrapper matching landing page
    - Removed individual section backgrounds for unified flow
    - All sections now share the same gradient backdrop
  - **WCAG 2.1 Compliance**: Accessibility features:
    - Minimum 44x44px touch targets
    - Focus states with ring indicators
    - ARIA labels on all interactive elements
    - Semantic HTML structure
