# 05 — Technical Architecture

**Gen Z 11th Edition (2026) — Website Design Book**
**Document Status:** Final | **Last Updated:** February 2026
**Audience:** Internal team, media stakeholders, branding teams at Zain Group

---

## Table of Contents

1. [Technology Stack Overview](#1-technology-stack-overview)
2. [Application Architecture](#2-application-architecture)
3. [Sanity CMS Migration](#3-sanity-cms-migration)
4. [CMS Query Architecture](#4-cms-query-architecture)
5. [Build & Deployment](#5-build--deployment)
6. [Performance Considerations](#6-performance-considerations)
7. [Security & Environment](#7-security--environment)

---

## 1. Technology Stack Overview

The Gen Z 11th Edition website is built on a modern, production-grade stack selected for performance, developer experience, and long-term maintainability.

### 1.1 Complete Technology Table

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | Next.js | 16.0.10 | App Router, server-side rendering, static generation |
| **Language** | TypeScript | 5.x | Static type safety across the entire codebase |
| **UI Library** | React | 19.2.0 | Component-based UI architecture |
| **Styling** | Tailwind CSS | v4.1.9 | Utility-first CSS framework |
| **UI Components** | Radix UI / Shadcn | Latest | Accessible, unstyled primitive components |
| **Animation** | Framer Motion | 12.29.2 | Declarative layout and gesture animations |
| **Animation** | GSAP | 3.14.2 | Complex timeline-based scroll animations |
| **Scrolling** | Lenis | 1.3.17 | Smooth, momentum-based page scrolling |
| **3D Graphics** | Three.js | 0.182.0 | Particle fields, floating cube, 3D visuals |
| **3D React** | @react-three/fiber + drei | 9.5.0 / 10.7.7 | React-declarative Three.js integration |
| **CMS** | Sanity.io (@sanity/client) | 7.14.1 | Headless content management system |
| **Rich Text** | @portabletext/react | 6.0.2 | Render Sanity Portable Text block content |
| **Forms** | React Hook Form + Zod | 7.60.0 / 3.25.76 | Form state management and schema validation |
| **Icons** | Lucide React | 0.454.0 | Consistent, tree-shakeable icon system |
| **Analytics** | Vercel Analytics (compatible with Replit hosting) | 1.3.1 | Privacy-friendly usage and performance tracking |
| **Theming** | next-themes | 0.4.6 | Dark/light mode with system preference detection |
| **Carousel** | Embla Carousel | 8.5.1 | Accessible, performant content carousels |
| **Utilities** | tailwind-merge + clsx | 3.3.1 / 2.1.1 | Conditional class name composition |

### 1.2 Technology Selection Rationale

**Next.js 16 with App Router** was chosen over the 10th Edition's Vite + React setup for several strategic reasons:

- **Server Components** eliminate client-side data fetching waterfalls, improving perceived performance
- **File-based routing** simplifies navigation architecture as the site grows to support multiple programs
- **Built-in image optimization** and font loading reduce manual performance tuning
- **Incremental Static Regeneration (ISR)** enables near-real-time CMS content updates without full rebuilds

**Tailwind CSS v4** replaces v3 with native CSS cascade layers, improved performance, and zero-config PostCSS integration.

**Sanity.io** was selected as the CMS for its real-time editing experience, flexible schema system, and CDN-backed content delivery — enabling non-technical team members to update all site content without developer intervention.

---

## 2. Application Architecture

### 2.1 Architecture Overview

The application follows a layered architecture that separates concerns across data fetching, presentation, and interactivity:

```
┌─────────────────────────────────────────────────────────┐
│                      Browser                            │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Next.js App Router                   │  │
│  │  ┌─────────────┐    ┌──────────────────────────┐  │  │
│  │  │   Server    │    │      Client Components   │  │  │
│  │  │ Components  │    │  ("use client" directive) │  │  │
│  │  │             │    │                          │  │  │
│  │  │ • Data fetch│    │ • Animations (Framer)    │  │  │
│  │  │ • SSR HTML  │    │ • 3D scenes (Three.js)   │  │  │
│  │  │ • CMS query │    │ • Theme toggle           │  │  │
│  │  └──────┬──────┘    │ • Scroll (Lenis)         │  │  │
│  │         │           │ • Form handling           │  │  │
│  │         ▼           └──────────────────────────┘  │  │
│  │  ┌─────────────┐                                  │  │
│  │  │ Sanity CDN  │                                  │  │
│  │  │ (Content)   │                                  │  │
│  │  └─────────────┘                                  │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### 2.2 Component Rendering Strategy

| Component Type | Rendering | Use Case |
|---------------|-----------|----------|
| **Server Components** | SSR / ISR | Page shells, data fetching from Sanity, SEO-critical content |
| **Client Components** | CSR (hydrated) | Animations, user interactions, theme switching, 3D scenes |
| **Static Assets** | Pre-built | Images, fonts, SVGs served from `/public` |

**Key principle:** Data is fetched on the server, then passed as props to interactive client components. This eliminates loading spinners and ensures content is visible on first paint.

### 2.3 Component Hierarchy

```
RootLayout (Server)
├── Providers (Client)
│   ├── ThemeProvider (dark/light mode)
│   ├── CMSThemeProvider (CMS-driven CSS variables)
│   └── SmoothScrollProvider (Lenis)
│
├── Home Page "/" (Server)
│   └── LandingPage (Client)
│       ├── Navbar
│       ├── Hero + ParticleField + FloatingCube
│       ├── About Section
│       ├── Pillars (program cards)
│       ├── Programs (workshops grid)
│       ├── Previous Editions timeline
│       ├── Gallery
│       ├── Team Members
│       └── Footer
│
└── Workshop Page "/workshop/[slug]" (Server)
    └── WorkshopPageContent (Client)
        ├── Hero Section
        ├── About Section
        ├── Benefits
        ├── Attendees
        ├── Timing Details
        ├── Reading Journey (Book Carousel)
        ├── Session Flow (Agenda Timeline)
        ├── Facilitators
        ├── Reserve Spot CTA
        └── Registration (embedded form)
```

### 2.4 Project File Structure

```
app/                          Pages and layouts (Next.js App Router)
├── layout.tsx               Root layout: fonts, theme, providers, analytics
├── page.tsx                 Landing page: fetches all CMS data server-side
├── globals.css              Global styles, CSS variables, custom animations
├── reframe/page.tsx         Legacy Reframe route
└── workshop/[slug]/page.tsx Dynamic workshop pages

components/                   Reusable React components
├── ui/                      Radix/Shadcn primitive components (button, dialog, etc.)
├── landing-page.tsx         Main landing page composition
├── hero.tsx                 Animated hero with particle field
├── navbar.tsx               Responsive navigation bar
├── book-carousel.tsx        Interactive book showcase
├── agenda-timeline.tsx      Session schedule visualization
├── facilitators.tsx         Team/facilitator grid
├── registration.tsx         Embedded form section
├── footer.tsx               Site footer with links
├── cms-theme-provider.tsx   Applies CMS theme as CSS variables
├── smooth-scroll-provider.tsx Lenis smooth scroll wrapper
├── particle-field.tsx       Three.js particle animation
├── floating-cube.tsx        Three.js 3D cube element
├── page-transition.tsx      Route transition animations
└── providers.tsx            Composed provider tree

hooks/                        Custom React hooks
├── use-mobile.ts            Responsive breakpoint detection
└── use-toast.ts             Toast notification management

lib/                          Utility modules
├── sanity.ts                Sanity client, image builder, all GROQ queries
└── utils.ts                 cn() class name utility (clsx + tailwind-merge)

public/                       Static assets (served at root)
├── images/                  All imagery (team photos, gallery, logos)
│   ├── gallery/             10th Edition gallery photos
│   ├── gallery-new/         11th Edition gallery photos (.jpg + .webp)
│   └── team/                Team member headshots
└── *.svg, *.png             Logos, favicons, placeholders

studio/                       Sanity Studio project
├── schemaTypes/             Primary schema definitions (7 types)
├── sanity.config.ts         Studio configuration
└── import-data.ndjson       Seed data for initial CMS population

sanity-schemas/               Schema copy for deployment environments
docs/                         Project documentation and design book
```

### 2.5 Routing Architecture

| Route | Page | Data Source | Rendering |
|-------|------|-------------|-----------|
| `/` | Landing Page | `getSiteSettings()`, `getTeamMembers()`, `getWorkshops()`, `getPreviousEditions()`, `getGalleryImages()` | ISR (60s revalidation) |
| `/workshop/[slug]` | Dynamic Workshop | `getWorkshop(slug)` | ISR (60s revalidation) |
| `/reframe` | Legacy Reframe | `getWorkshop('reframe')` | ISR (60s revalidation) |

All routes use `export const revalidate = 60` to ensure content updates propagate within one minute of CMS changes.

---

## 3. Sanity CMS Migration

### 3.1 Migration Overview

The website underwent a structured migration from fully hardcoded content to a headless CMS architecture. This migration was executed in four phases, each building on the last while maintaining zero downtime.

### 3.2 Phase 1 — Initial CMS Setup (Completed)

**Objective:** Establish the Sanity client connection and project infrastructure.

| Task | Detail |
|------|--------|
| Package installation | `@sanity/client` (v7.14.1) and `@sanity/image-url` (v2.0.3) |
| Client configuration | `lib/sanity.ts` — project ID: `nbpw4115`, dataset: `production` |
| API version | `2024-01-01` (stable, dated API) |
| CDN enabled | `useCdn: true` for edge-cached content delivery |
| Environment variables | `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` |

### 3.3 Phase 2 — Content Schema Creation (Completed)

**Objective:** Define structured content models for every editable element on the site.

Seven schema types were created to cover the full content surface:

| Schema Type | Description | Key Fields |
|------------|-------------|------------|
| `siteSettings` | Global site configuration (singleton) | Theme colors, fonts, gradients, hero content, footer, navigation |
| `workshop` | Individual workshop/program pages | Hero, about, benefits, attendees, timing, books, sessions, facilitators, registration |
| `book` | Book entries for reading journeys | Title, author, cover image, popup content, downloadable files, links |
| `program` | High-level program listings | Title, slug, description, image, featured flag |
| `previousEdition` | Historical Gen Z editions (2016–2025) | Year, title, description, differentiator text, image |
| `galleryImage` | Photo gallery entries | Title, image, alt text, category, display order |
| `teamMember` | Team member profiles | Name, role, photo, email, LinkedIn, bio |

**Schema file locations:**
- **Primary source:** `studio/schemaTypes/` (used by Sanity Studio)
- **Deployment copy:** `sanity-schemas/` (used by production builds)

**Rich text:** Content fields that require formatting use Sanity's Portable Text format, rendered on the frontend via `@portabletext/react`.

### 3.4 Phase 3 — Component Integration (Completed)

**Objective:** Connect all frontend components to CMS data while preserving reliability.

**Data fetching pattern:**
```
Server Component (page.tsx)
    │
    ├── Fetches data from Sanity (server-side, no client JS)
    ├── Applies fallback defaults if CMS returns null
    └── Passes resolved data as props to Client Components
```

**Graceful degradation strategy:** Every CMS-driven field has a hardcoded fallback value. If the Sanity API is unreachable or a field is empty, the component renders its default content seamlessly. This ensures:

- **Zero downtime** — CMS outages do not break the website
- **Safe content editing** — Deleting a field in the CMS reverts to the default, not a blank page
- **Incremental migration** — Content can be moved to the CMS one field at a time

**Revalidation:** All pages use `revalidate = 60` (60-second ISR), meaning content changes in Sanity appear on the live site within one minute without a manual redeploy.

**Dynamic form embedding:** The `registrationSection.formEmbedUrl` field in the workshop schema allows content editors to swap registration forms (Microsoft Forms, Google Forms, Typeform, etc.) without any code changes.

### 3.5 Phase 4 — CMS-Editable Theme (Completed)

**Objective:** Enable non-technical stakeholders to modify the site's visual identity directly from the CMS.

The `siteSettings` schema includes a `theme` object with three sub-groups:

| Theme Group | Editable Properties |
|-------------|-------------------|
| **Colors** | Primary, secondary, accent, navy-dark, navy-light, blue |
| **Fonts** | Heading font family, body font family |
| **Gradients** | Hero gradient (start/end), card gradient (start/end) |

**How it works:**

1. The `CMSThemeProvider` component (client-side) reads theme data passed from the server
2. It injects CSS custom properties (`--cms-primary`, `--cms-heading-font`, etc.) onto the document root
3. All styled components reference these CSS variables, so changes propagate instantly
4. All Google Fonts are pre-loaded in `layout.tsx` — the CMS selects which font to activate

**Available CMS-selectable fonts:** Zain, Inter, Poppins, Montserrat, Playfair Display, Space Grotesk, Open Sans, Lato, Source Sans 3, Roboto.

### 3.6 Migration Strategy Summary

```
┌──────────────────────────────────────────────────────┐
│                  Content Flow                        │
│                                                      │
│  Sanity Studio ──► Sanity API ──► CDN ──► Website   │
│  (Editors)         (GROQ)        (Edge)   (SSR)     │
│                                                      │
│                  Fallback Flow                        │
│                                                      │
│  Sanity API unavailable ──► Hardcoded defaults ──►  │
│                              Website renders         │
│                              with static content     │
└──────────────────────────────────────────────────────┘
```

---

## 4. CMS Query Architecture

All Sanity queries are centralized in `lib/sanity.ts` using GROQ (Graph-Relational Object Queries). This section documents every query function, its purpose, and its return shape.

### 4.1 Query Function Reference

| Function | Purpose | Parameters | Key Returned Fields |
|----------|---------|------------|-------------------|
| `getSiteSettings()` | Global site configuration | None | Theme, hero, about, pillars, footer, nav links, section titles |
| `getThemeSettings()` | Theme-only subset (used by layout) | None | Colors, fonts, gradients |
| `getPrograms()` | All program listings | None | Title, slug, description, image, featured, order |
| `getProgram(slug)` | Single program detail | `slug: string` | Full program with hero, sections |
| `getPreviousEditions()` | Historical editions (descending by year) | None | Year, title, description, differentiator, image |
| `getGalleryImages()` | Photo gallery (ascending by order) | None | Title, image, alt, category, order |
| `getWorkshops()` | All workshop summaries | None | Title, slug, description, image, featured, order |
| `getWorkshop(slug)` | Full workshop page content | `slug: string` | All sections: hero, about, benefits, attendees, timing, books (with references), sessions, facilitators, registration |
| `getBooks()` | All book summaries | None | Title, author, cover, description, decided status, order |
| `getBook(id)` | Single book with popup content | `id: string` | Full book: popup content, downloadable files, external links |
| `getTeamMembers()` | Team member profiles (ascending by order) | None | Name, role, image, email, LinkedIn, bio, order |

### 4.2 Query Patterns

**Parallel fetching:** The landing page fetches all data sources simultaneously using `Promise.all()`:

```
Promise.all([
    getTeamMembers(),
    getSiteSettings(),
    getWorkshops(),
    getPreviousEditions(),
    getGalleryImages()
])
```

**Reference resolution:** The workshop query uses Sanity's `->` dereference operator to resolve book references inline, eliminating additional round trips:

```
readingJourneySection {
    books[]-> {
        _id, title, author, coverImage, ...
        files[] {
            fileName,
            "fileUrl": file.asset->url
        }
    }
}
```

**Image URL building:** The `urlFor()` helper wraps Sanity's image URL builder, enabling on-the-fly image transformations:

```
urlFor(member.image).width(400).height(400).url()
```

### 4.3 Content Type Relationships

```
siteSettings (singleton)
├── pillars[] (inline array)
├── navLinks[] (inline array)
├── footer.socialLinks[] (inline array)
└── theme (inline object)

workshop
├── heroSection (inline object)
├── aboutSection (inline object)
├── benefitsSection.benefits[] (inline array)
├── attendeesSection.attendeeTypes[] (inline array)
├── timingSection.details[] (inline array)
├── readingJourneySection.books[] ──► book (reference)
├── sessionFlowSection.sessions[] (inline array)
├── facilitatorsSection.facilitators[] (inline array)
└── registrationSection (inline object)

book
├── popupContent (inline object)
├── files[] (inline array with asset references)
└── links[] (inline array)
```

---

## 5. Build & Deployment

### 5.1 Development Environment

| Setting | Value |
|---------|-------|
| Dev command | `npm run dev` |
| Dev server | `next dev -H 0.0.0.0 -p 5000` |
| Hot reload | Enabled (Next.js Fast Refresh) |
| Allowed dev origins | `*.replit.dev`, `*.repl.co`, `127.0.0.1`, `localhost` |

The development server binds to `0.0.0.0:5000` to be accessible within the Replit proxy environment. The `allowedDevOrigins` configuration in `next.config.mjs` ensures the development preview works correctly within Replit's iframe-based editor.

### 5.2 Build Configuration

```javascript
// next.config.mjs
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,    // Faster iteration during active development
  },
  images: {
    unoptimized: true,          // Flexibility for mixed image sources (local + CMS)
  },
  allowedDevOrigins: ['*.replit.dev', '*.repl.co', '127.0.0.1', 'localhost'],
}
```

| Decision | Rationale |
|----------|-----------|
| **TypeScript errors ignored** | Enables rapid prototyping without blocking deployments on non-critical type mismatches; types are enforced in the editor via LSP |
| **Unoptimized images** | Sanity CDN handles image optimization; local images use pre-optimized WebP variants |

### 5.3 Build & Run Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with hot reload on port 5000 |
| `npm run build` | Production build (generates `.next/` output) |
| `npm run start` | Start production server on port 5000 |
| `npm run lint` | Run ESLint checks |

### 5.4 Deployment Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────┐
│   Replit IDE     │     │   Build Process   │     │  Production │
│                  │────►│                   │────►│   Server    │
│  Development     │     │  next build       │     │  next start │
│  (port 5000)     │     │  TypeScript → JS  │     │  (port 5000)│
└─────────────────┘     │  CSS → optimized  │     └──────┬──────┘
                        │  Assets → hashed  │            │
                        └──────────────────┘            ▼
                                                 ┌─────────────┐
                                                 │  Autoscale  │
                                                 │  (Stateless)│
                                                 │  Runs on    │
                                                 │  demand     │
                                                 └─────────────┘
```

**Deployment target:** Autoscale — the application is stateless and spins up on demand. All persistent state lives in Sanity CMS, making the deployment infinitely horizontally scalable.

---

## 6. Performance Considerations

### 6.1 Content Delivery

| Strategy | Implementation | Impact |
|----------|---------------|--------|
| **Sanity CDN** | `useCdn: true` in client config | Content served from edge locations globally |
| **ISR revalidation** | `revalidate = 60` on all pages | Fresh content within 60 seconds, cached otherwise |
| **Parallel data fetching** | `Promise.all()` for landing page queries | Eliminates sequential request waterfalls |
| **Image CDN** | Sanity's image pipeline with `urlFor()` | On-the-fly resizing, format conversion |

### 6.2 Asset Optimization

| Asset Type | Strategy |
|-----------|----------|
| **Gallery images** | Dual format: original `.jpg` + pre-generated `.webp` (suffix `-opt`) |
| **Team photos** | Served at 400×400 via Sanity image transforms |
| **Gallery photos** | Served at 800×600 via Sanity image transforms |
| **Fonts** | Google Fonts loaded via `next/font` with `display: swap` for zero-FOIT |
| **Icons** | Lucide React with tree-shaking (only used icons are bundled) |

### 6.3 Animation Performance

| Technique | Implementation |
|-----------|---------------|
| **Reduced motion** | `prefers-reduced-motion` media query disables all CSS animations |
| **Three.js particle count** | Controlled particle density prevents GPU overload on mobile |
| **Lazy 3D rendering** | Three.js canvas components load only when visible in viewport |
| **CSS transforms** | Animations use `transform` and `opacity` (GPU-composited properties) |
| **Lenis throttling** | Smooth scroll uses `requestAnimationFrame` with no forced layouts |

### 6.4 Bundle Optimization

- **Server Components by default:** Only components with `"use client"` ship JavaScript to the browser
- **Dynamic imports:** Heavy libraries (Three.js, GSAP) loaded on demand
- **Tree-shaking:** Radix UI, Lucide icons, and utility libraries are fully tree-shakeable
- **Code splitting:** Next.js automatically splits code per route

---

## 7. Security & Environment

### 7.1 Environment Variables

| Variable | Sensitivity | Purpose |
|----------|-------------|---------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Public (read-only) | Identifies the Sanity project (`nbpw4115`) |
| `NEXT_PUBLIC_SANITY_DATASET` | Public (read-only) | Selects the content dataset (`production`) |

These variables are intentionally public (`NEXT_PUBLIC_` prefix) because they only grant read access to published content via Sanity's CDN. No write tokens, API secrets, or authentication credentials are used in the frontend application.

### 7.2 Security Architecture

```
┌──────────────────────────────────────────────────┐
│                  Security Layers                  │
│                                                   │
│  Browser (Client)                                 │
│  ├── No API keys or secrets                       │
│  ├── No direct CMS write access                   │
│  ├── Content fetched via server components (SSR)   │
│  └── Forms handled by external services            │
│                                                   │
│  Server (Next.js SSR)                              │
│  ├── Sanity queries executed server-side            │
│  ├── Public read-only project ID (no token needed)  │
│  ├── CDN-cached responses (no origin abuse)         │
│  └── No database connections or write operations    │
│                                                   │
│  Sanity CMS                                        │
│  ├── CORS configured for allowed origins            │
│  ├── Published content only (no drafts exposed)     │
│  ├── Write access requires authenticated Studio     │
│  └── CDN layer absorbs traffic spikes               │
└──────────────────────────────────────────────────┘
```

### 7.3 Security Principles

| Principle | Implementation |
|-----------|---------------|
| **No secrets in client code** | All `NEXT_PUBLIC_` variables are read-only identifiers, not keys |
| **Server-side data fetching** | CMS queries execute in Node.js, not in the browser |
| **No write access from frontend** | Sanity write operations require authenticated Studio access |
| **External form handling** | Registration data flows to Microsoft Forms / Google Forms, not through our server |
| **CDN protection** | Sanity CDN rate-limits and caches, preventing origin abuse |
| **No user authentication** | The site is publicly accessible with no login system to attack |

### 7.4 CORS & Network Configuration

- Sanity CDN handles CORS headers for content API requests
- Development server configured with `allowedDevOrigins` for Replit proxy compatibility
- No custom API routes or server endpoints are exposed
- All third-party integrations (analytics, forms) use their own security models

---

*This document is part of the Gen Z 11th Edition Website Design Book. For related sections, see:*

- *[01 — Brand Identity](./01-brand-identity.md)*
- *[02 — Visual Design System](./02-visual-design-system.md)*
- *[03 — UX & Interaction Design](./03-ux-interaction-design.md)*
- *[04 — Information Architecture](./04-information-architecture.md)*
