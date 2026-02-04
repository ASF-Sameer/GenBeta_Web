# GenZ Website

## Overview
A Next.js 16 website for "Generation Z" - 11th Edition 2026. This is a merged codebase combining the best elements from both the 10th Edition (Vite + React) and 11th Edition (Next.js) projects. The site is a modern, visually rich application built with React 19, featuring animations with Framer Motion and GSAP, 3D elements with Three.js, and UI components from Radix UI with Tailwind CSS styling.

**All website content is fully CMS-editable via Sanity.io** - including hero sections, program pillars, about sections, programs list, previous editions, gallery images, team members, workshop pages, and footer links.

## Project Structure
- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Landing page (fetches all CMS data and passes to LandingPage component)
  - `reframe/page.tsx` - Reframe program page (CMS-driven with fallback to hardcoded)
  - `workshop/[slug]/page.tsx` - Dynamic workshop pages (fully CMS-driven)
- `components/` - Reusable React components
  - `landing-page.tsx` - Main landing page with CMS-editable hero, pillars, team, gallery
  - `interactive-workshop-page.tsx` - Full CMS-driven workshop page with interactive book selection
  - `book-detail-section.tsx` - Full-page book detail view (replaces popup modal)
  - `selectable-book-card.tsx` - Clickable book card with selection state and "Featured" badge
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
  - `sanity.ts` - Sanity CMS client and query functions (including getSiteSettings, getBooks, etc.)
- `studio/schemaTypes/` - Sanity schema definitions (primary source)
- `sanity-schemas/` - Sanity schema definitions (copy for Sanity Studio deployment)
- `public/` - Static assets (images, logos, icons)
- `docs/` - Project documentation (PRD, visual design recommendations)

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **UI**: React 19, Radix UI, Tailwind CSS v4
- **Animations**: Framer Motion, GSAP, Lenis (smooth scrolling)
- **3D**: Three.js, @react-three/fiber, @react-three/drei
- **CMS**: Sanity.io (headless CMS) - fully integrated
- **Rich Text**: @portabletext/react for rendering Sanity block content
- **Form handling**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics

## Sanity CMS Integration
The website is connected to Sanity CMS for content management. **ALL text content is editable via CMS.**

### Environment Variables
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: nbpw4115
- `NEXT_PUBLIC_SANITY_DATASET`: production

### Content Types (Schemas)
1. **Site Settings** - Global site configuration (hero, about, pillars, footer links, nav links)
2. **Program** - Main programs like Gen Z 2026 overview
3. **Previous Edition** - Historical Gen Z editions (2016-2024)
4. **Workshop** - Individual workshops with all sections (hero, about, benefits, attendees, timing, reading journey, session flow, facilitators, registration)
5. **Book** - Books for reading journey with popup content, files, and links
6. **Gallery Image** - Photo gallery images
7. **Team Member** - Team member profiles

### Schema Files Location
Copy files from `studio/schemaTypes/` folder to your Sanity Studio's `schemaTypes/` folder:
- `siteSettings.ts` - Global site settings (hero, about, pillars, footer)
- `program.ts` - Program schema
- `previousEdition.ts` - Previous editions schema
- `workshop.ts` - Workshop schema (comprehensive with all sections)
- `book.ts` - Book schema with popup content, files, links, placeholder messages
- `galleryImage.ts` - Gallery images schema
- `teamMember.ts` - Team members schema
- `index.ts` - Schema registry

### Sanity Queries (lib/sanity.ts)
- `getSiteSettings()` - Fetch global site settings (hero, about, pillars, footer)
- `getPrograms()` - Fetch all programs
- `getProgram(slug)` - Fetch single program
- `getPreviousEditions()` - Fetch historical editions
- `getGalleryImages()` - Fetch gallery images
- `getWorkshops()` - Fetch all workshops (for programs list)
- `getWorkshop(slug)` - Fetch single workshop with all sections
- `getBooks()` - Fetch all books
- `getBook(id)` - Fetch single book with popup content
- `getTeamMembers()` - Fetch team members

## CMS-Editable Content

### Landing Page (/)
All sections are CMS-editable with fallback to hardcoded defaults:
- **Hero Section**: Welcome text, title, program name, by line, description, CTA button text/link, hero image
- **About Section**: Title, subtitle, description
- **Program Pillars/Themes**: Title, description, icon, color, topics, link URL
- **Our Programs**: List of workshops from CMS
- **Team Members**: Name, role, email, LinkedIn, photo
- **Previous Gen Zs**: Year, title, description, image, external link
- **Gallery**: Images from CMS with auto-shuffle and auto-advance
- **Footer**: Copyright text, social links, Zain official links

### Workshop Pages (/workshop/[slug] or /reframe)
Fully CMS-driven with all sections:
- **Hero Section**: Badge text, title, subtitle, background image
- **About Section**: Title, rich text description, highlights, image
- **What You'll Gain**: Title, subtitle, benefits (icon, title, description)
- **Who Should Attend**: Title, subtitle, attendee types (icon, title, description)
- **Timing & Details**: Event details (icon, label, value)
- **Reading Journey**: Title, subtitle, books (references to Book documents)
- **Session Flow**: Badge, title, subtitle, sessions (time, title, description, duration, icon)
- **Facilitators**: Title, subtitle, facilitators (name, role, bio, image, email, LinkedIn, specialties)
- **Reserve Your Spot**: Title, subtitle, CTA text, spots text
- **Registration**: Title, subtitle, form embed URL (MS Forms), form height, alternative text

### Book Popup Modal
When clicking on a book card:
- If book is "decided": Shows full details with popup content (headline, description, workshop details, key takeaways, duration, format), attached files (with download), related links
- If book is "undecided": Shows placeholder message (e.g., "Stay tuned! Something exciting is coming...")

### Dynamic Form Embedding
Change the `formEmbedUrl` field in the CMS to swap embedded registration forms (Microsoft Forms, Google Forms, etc.)

## Pages
1. **Landing Page** (`/`) - Gen Z program overview with all CMS-editable sections
2. **Reframe Page** (`/reframe`) - Full workshop page with CMS content (falls back to hardcoded)
3. **Dynamic Workshop Pages** (`/workshop/[slug]`) - Fully CMS-driven workshop pages

## Features
- Smooth scrolling with Lenis
- 3D particle backgrounds
- Framer Motion scroll animations
- GSAP-powered effects
- Glassmorphism UI styling
- Brand color palette (lime #C3D534, yellow #F7E73F, turquoise #00B5AD)
- Animated gradient orbs
- Book popup modals with files/links
- Dynamic form embedding
- Placeholder content for undecided books

## Running the Project
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`
- Production: `npm run start`

## Configuration
- Next.js configured for Replit's proxy environment (allowedDevOrigins)
- Images set to unoptimized mode for flexibility
- TypeScript build errors ignored for faster iteration
- Revalidation set to 60 seconds for CMS content

## Deployment
- Configured for autoscale deployment
- Build command: `npm run build`
- Start command: `npm run start`

## Recent Changes
- 2026-02-04: CMS-Editable Theme (Fonts & Colors)
  - Added `theme` settings to siteSettings schema with:
    - **Colors**: Primary (lime), Secondary (yellow), Accent (turquoise), Navy Dark, Navy Light, Blue
    - **Fonts**: Heading font and body font selection (Zain, Inter, Poppins, Montserrat, Playfair, Space Grotesk, Open Sans, Lato, Source Sans, Roboto)
    - **Gradients**: Hero gradient, card gradient start/end colors
  - Created `CMSThemeProvider` component that applies CSS variables from CMS
  - Updated layout.tsx to load all Google Fonts and fetch theme settings server-side
  - Updated globals.css to use CSS custom properties for colors
  - Theme changes in Sanity CMS automatically apply to the entire website

- 2026-02-04: Interactive Book Selection & Primary Book Feature
  - Replaced popup modals with full-page book detail view using smooth page transitions
  - Added `isPrimary` field to book schema - mark a book as the default to show when entering a workshop
  - Primary books are auto-selected when users navigate to a workshop page
  - Books marked as primary show a "Featured" badge in the reading journey section
  - Added empty state messaging when no books/CMS content is available
  - Created `InteractiveWorkshopPage`, `BookDetailSection`, and `SelectableBookCard` components
  - Book selection uses AnimatePresence for smooth slide animations between views

- 2026-02-04: Full CMS Integration for All Content
  - Created `siteSettings` schema for global site configuration
  - Created comprehensive `book` schema with popup content, files, links, and placeholder messages
  - Enhanced `workshop` schema with all sections (hero badge, about, benefits, attendees, timing, reading journey, session flow, facilitators, reserve spot, registration)
  - Updated `landing-page.tsx` to accept all CMS data (pillars, programs, previous editions, gallery, footer, hero, about)
  - Updated `app/page.tsx` to fetch all data from Sanity and pass to LandingPage
  - Updated `app/reframe/page.tsx` to use CMS data with fallback to hardcoded
  - Added `@portabletext/react` for rendering rich text content
  - All section titles and subtitles now editable via CMS
  - Dynamic registration form embedding via CMS field

- 2026-02-03: Sanity CMS Integration
  - Added Sanity client and image URL packages
  - Created `lib/sanity.ts` with queries for all content types
  - Created schema definitions in `sanity-schemas/` folder
  - Added dynamic workshop route at `/workshop/[slug]`
  - Hero component now accepts title/subtitle props for CMS content
  - Environment variables configured for Sanity project

- 2026-02-03: Corporate Navigation Improvements
  - Removed hamburger menu - all links now visible on all screen sizes
  - Full gradient background on navbar (navy-to-blue)
  - Uppercase navigation links with letter-spacing
  - Register button has gradient accent treatment
  - Responsive text sizing and spacing
