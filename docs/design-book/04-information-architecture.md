# 04 — Information Architecture

**Gen Z 11th Edition (2026) — Website Design Book**
**Document Status:** Final | **Last Updated:** February 2026
**Audience:** Internal team, media stakeholders, branding teams at Zain Group

---

## Table of Contents

1. [Site Map](#1-site-map)
2. [Content Hierarchy](#2-content-hierarchy)
3. [CMS Content Model](#3-cms-content-model)
4. [Data Flow Architecture](#4-data-flow-architecture)
5. [Content Relationships](#5-content-relationships)
6. [URL Strategy](#6-url-strategy)
7. [SEO & Metadata Strategy](#7-seo--metadata-strategy)

---

## 1. Site Map

The Gen Z 11th Edition website follows a hub-and-spoke architecture. The landing page serves as the central hub, providing a comprehensive overview of the program, while individual workshop pages branch off as dedicated deep-dive experiences.

### 1.1 Complete Site Structure

```
gen-z-11th-edition/
│
├── /                                  Landing Page (Gen Z Hub)
│   ├── #hero                          Hero Section
│   │   ├── Welcome Text               "Welcome to"
│   │   ├── Title                      "The 11th Edition of"
│   │   ├── Program Name               "Generation Z"
│   │   ├── By Line                    "by Zain"
│   │   ├── Description                Program overview paragraph
│   │   ├── CTA Button                 Links to /reframe (configurable)
│   │   └── Hero Image                 Group photo / program visual
│   │
│   ├── #about                         About Program
│   │   ├── Section Title              "About Generation Z"
│   │   ├── Subtitle
│   │   └── Description                Program history and mission
│   │
│   ├── #pillars                       Program Pillars / Themes
│   │   ├── Section Title              "11th Edition Program Theme"
│   │   ├── Subtitle
│   │   └── Pillar Cards (5)
│   │       ├── AI & Big Data
│   │       ├── Resilience, Flexibility & Agility
│   │       ├── Creative Thinking
│   │       ├── Leadership & Social Influence
│   │       └── Systems Thinking
│   │
│   ├── #programs                      Our Programs
│   │   ├── Section Title              "Our Programs"
│   │   ├── Subtitle
│   │   └── Workshop Cards             Dynamically loaded from CMS
│   │
│   ├── #team                          Meet the Team
│   │   ├── Section Title              "Meet the Team"
│   │   ├── Subtitle
│   │   └── Team Member Cards          Photo, name, role, social links
│   │
│   ├── #previous                      Previous Gen Zs
│   │   ├── Section Title              "Previous Gen Z Programs"
│   │   ├── Subtitle
│   │   └── Edition Cards (2016–2025)  Year, title, description, image
│   │
│   ├── #gallery                       Photo Gallery
│   │   ├── Section Title              "Our Experiences"
│   │   └── Image Carousel             Auto-shuffle from CMS images
│   │
│   └── Footer
│       ├── Copyright Text
│       ├── Tagline
│       ├── Social Links               LinkedIn, Twitter, Instagram, etc.
│       ├── Quick Links
│       └── Zain Official Links
│
├── /reframe                           Reframe Workshop Page
│   │                                  (CMS-driven with hardcoded fallback)
│   ├── Hero Section                   Badge, title, subtitle, bg image
│   ├── About Section                  Title, rich text, highlights, image
│   ├── What You'll Gain               Benefits list with icons
│   ├── Who Should Attend              Attendee types with icons
│   ├── Timing & Details               Event logistics
│   ├── Reading Journey                Book carousel (referenced books)
│   ├── Session Flow                   Timeline / agenda
│   ├── Facilitators                   Profiles with photos and bios
│   ├── Reserve Your Spot              CTA section
│   └── Registration                   Embedded form (Microsoft Forms)
│
└── /workshop/[slug]                   Dynamic Workshop Pages
    │                                  (Fully CMS-driven)
    ├── Hero Section                   Badge, title, subtitle, bg image
    ├── About Section                  Title, rich text, highlights, image
    ├── What You'll Gain               Benefits list with icons
    ├── Who Should Attend              Attendee types with icons
    ├── Timing & Details               Event logistics
    ├── Reading Journey                Book carousel (referenced books)
    ├── Session Flow                   Timeline / agenda
    ├── Facilitators                   Profiles with photos and bios
    ├── Reserve Your Spot              CTA section
    └── Registration                   Embedded form URL
```

### 1.2 Navigation Map

| Navigation Item | Destination | Type |
|-----------------|-------------|------|
| Gen Z Logo | `/` | Logo link |
| Section Nav Links | `/#hero`, `/#about`, `/#pillars`, etc. | Anchor scroll |
| Workshop Cards | `/reframe` or `/workshop/[slug]` | Page navigation |
| CTA Button (Hero) | `/reframe` (configurable via CMS) | Primary CTA |
| Social Links | External URLs | New tab |
| Zain Official Links | External URLs | New tab |

All navigation links are configurable through the CMS via the `navLinks[]` array in Site Settings, allowing the team to add, remove, or reorder navigation items without code changes.

---

## 2. Content Hierarchy

The information architecture follows a three-level depth model, designed to minimize cognitive load while providing comprehensive program information.

### 2.1 Hierarchy Levels

```
Level 1 ─── Landing Page (/)
             │  The program hub — overview of everything
             │  Users land here and explore sections via scroll
             │
Level 2 ─── Workshop Pages (/reframe, /workshop/[slug])
             │  Deep-dive into individual programs
             │  Self-contained experience with all workshop details
             │
Level 3 ─── Book Detail Views (modal/popup within workshop)
                Contextual detail within the Reading Journey section
                Accessed via book card interactions
```

### 2.2 Cross-Cutting Elements

These elements appear consistently across all pages:

| Element | Scope | Source |
|---------|-------|--------|
| **Navbar** | All pages | Site Settings → `navLinks[]` |
| **Footer** | All pages | Site Settings → `footer` |
| **Theme** | All pages | Site Settings → `theme` (colors, fonts, gradients) |
| **Page Transitions** | All pages | Client-side animation wrapper |
| **Floating CTA** | Workshop pages | Scroll-triggered call-to-action |

### 2.3 Content Priority Matrix

| Content | Priority | Update Frequency | Source |
|---------|----------|------------------|--------|
| Hero Section | Critical | Seasonal | CMS (Site Settings) |
| Program Pillars | High | Annual | CMS (Site Settings) |
| Workshop Pages | High | Per-program launch | CMS (Workshop) |
| Team Members | High | Annual intake | CMS (Team Member) |
| Book Details | Medium | Per-workshop | CMS (Book) |
| Previous Editions | Low | Annual | CMS (Previous Edition) |
| Gallery Images | Medium | Ongoing | CMS (Gallery Image) |
| Footer / Nav | Low | Rarely | CMS (Site Settings) |

---

## 3. CMS Content Model

The website is powered by **Sanity.io** as the headless CMS, with **7 document types** that model all site content. The schema design prioritizes editorial flexibility while maintaining structural consistency.

### 3.1 Site Settings (`siteSettings`)

**Purpose:** Singleton document that controls global site configuration, theming, and all landing page section content.

**Editor Groups:** General, Theme & Design, Content Sections, Navigation & Footer

| Field | Type | Description |
|-------|------|-------------|
| `siteTitle` | `string` | Global site title (default: "Generation Z") |

**Theme Object:**

| Field Path | Type | Description |
|------------|------|-------------|
| `theme.colors.primary` | `string` | Primary accent — Lime (#C3D534) |
| `theme.colors.secondary` | `string` | Secondary accent — Yellow (#F7E73F) |
| `theme.colors.accent` | `string` | Highlight/CTA — Turquoise (#00B5AD) |
| `theme.colors.navyDark` | `string` | Dark background (#1E1A5F) |
| `theme.colors.navyLight` | `string` | Lighter navy for gradients (#1C2951) |
| `theme.colors.blue` | `string` | Secondary blue (#0057B8) |
| `theme.fonts.headingFont` | `string` | Heading font selection (Zain, Inter, Poppins, Montserrat, Playfair, Space Grotesk) |
| `theme.fonts.bodyFont` | `string` | Body font selection (Zain, Inter, Open Sans, Lato, Source Sans, Roboto) |
| `theme.gradients.heroGradientStart` | `string` | Hero gradient start color |
| `theme.gradients.heroGradientEnd` | `string` | Hero gradient end color |
| `theme.gradients.cardGradientStart` | `string` | Card gradient start color |
| `theme.gradients.cardGradientEnd` | `string` | Card gradient end color |

**Hero Section Object:**

| Field Path | Type | Description |
|------------|------|-------------|
| `heroSection.welcomeText` | `string` | Welcome line (default: "Welcome to") |
| `heroSection.title` | `string` | Title line (default: "The 11th Edition of") |
| `heroSection.programName` | `string` | Program name (default: "Generation Z") |
| `heroSection.byLine` | `string` | Attribution (default: "by Zain") |
| `heroSection.description` | `text` | Hero description paragraph |
| `heroSection.ctaText` | `string` | CTA button label |
| `heroSection.ctaLink` | `string` | CTA button destination |
| `heroSection.heroImage` | `image` | Hero visual (with hotspot) |

**About Section Object:**

| Field Path | Type | Description |
|------------|------|-------------|
| `aboutSection.title` | `string` | Section heading |
| `aboutSection.subtitle` | `text` | Subheading |
| `aboutSection.description` | `text` | Program description |
| `aboutSection.highlights` | `string[]` | Key highlight points |

**Pillars Array (embedded):**

| Field | Type | Description |
|-------|------|-------------|
| `pillars[].title` | `string` | Pillar name |
| `pillars[].description` | `text` | Pillar description |
| `pillars[].icon` | `string` | Icon identifier (e.g., "brain", "chart") |
| `pillars[].color` | `string` | Accent color hex code |
| `pillars[].topics` | `string[]` | Related topics |
| `pillars[].bookCover` | `image` | Associated book cover |
| `pillars[].linkUrl` | `string` | Pillar link destination |

**Section Title Objects** (pillarsSection, programsSection, previousEditionsSection, gallerySection, teamSection):

Each contains `title` (string) and `subtitle` (text) for their respective landing page sections.

**Footer Object:**

| Field Path | Type | Description |
|------------|------|-------------|
| `footer.copyrightText` | `string` | Copyright notice |
| `footer.tagline` | `string` | Site tagline |
| `footer.socialLinks[]` | `object[]` | Social platforms (platform, url, icon) |
| `footer.quickLinks[]` | `object[]` | Quick navigation links (label, url) |
| `footer.zainLinks[]` | `object[]` | Zain corporate links (label, url) |

**Navigation:**

| Field | Type | Description |
|-------|------|-------------|
| `navLinks[]` | `object[]` | Nav items (label, url, isButton flag) |

---

### 3.2 Workshop (`workshop`)

**Purpose:** Individual program/workshop pages with comprehensive section-based content. Each workshop is a self-contained page experience.

**Editor Groups:** Basic Info, Hero Section, About Section, Benefits & Attendees, Reading Journey, Session Flow, Facilitators, Registration

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | Yes | Workshop name |
| `slug` | `slug` | Yes | URL-safe identifier (auto-generated from title) |
| `shortDescription` | `text` | No | Card-level summary |
| `image` | `image` | No | Workshop card/thumbnail image |
| `featured` | `boolean` | No | Feature flag for prominence |
| `order` | `number` | No | Display sort order |

**Hero Section (`heroSection`):**

| Field | Type | Description |
|-------|------|-------------|
| `badge` | `string` | Badge text (e.g., "Our first and flagship program...") |
| `title` | `string` | Hero headline |
| `subtitle` | `text` | Hero subheadline |
| `backgroundImage` | `image` | Full-bleed background visual |

**About Section (`aboutSection`):**

| Field | Type | Description |
|-------|------|-------------|
| `title` | `string` | Section heading (e.g., "About Reframe at Zain") |
| `description` | `block[]` | Rich text content (Portable Text) |
| `highlights` | `string[]` | Key takeaway points |
| `image` | `image` | Accompanying visual |

**Benefits Section (`benefitsSection`):**

| Field | Type | Description |
|-------|------|-------------|
| `title` | `string` | Section heading (e.g., "What You'll Gain") |
| `subtitle` | `text` | Section subheading |
| `benefits[]` | `object[]` | Benefit items (icon, title, description) |

**Attendees Section (`attendeesSection`):**

| Field | Type | Description |
|-------|------|-------------|
| `title` | `string` | Section heading (e.g., "Who Should Attend") |
| `subtitle` | `text` | Section subheading |
| `attendeeTypes[]` | `object[]` | Attendee categories (icon, title, description) |

**Timing Section (`timingSection`):**

| Field | Type | Description |
|-------|------|-------------|
| `title` | `string` | Section heading |
| `details[]` | `object[]` | Event details (icon, label, value) |

**Reading Journey Section (`readingJourneySection`):**

| Field | Type | Description |
|-------|------|-------------|
| `title` | `string` | Section heading (e.g., "The Reading Journey") |
| `subtitle` | `text` | Section subheading |
| `books[]` | `reference[]` | References to Book documents |

**Session Flow Section (`sessionFlowSection`):**

| Field | Type | Description |
|-------|------|-------------|
| `badge` | `string` | Top badge text |
| `title` | `string` | Section heading (e.g., "Session Flow") |
| `subtitle` | `text` | Section subheading |
| `sessions[]` | `object[]` | Agenda items (time, title, description, duration, icon) |

**Facilitators Section (`facilitatorsSection`):**

| Field | Type | Description |
|-------|------|-------------|
| `title` | `string` | Section heading (e.g., "Your Facilitators") |
| `subtitle` | `text` | Section subheading |
| `facilitators[]` | `object[]` | Facilitator profiles (name, role, bio, image, email, linkedin, specialties[]) |

**Reserve Spot Section (`reserveSpotSection`):**

| Field | Type | Description |
|-------|------|-------------|
| `title` | `string` | CTA heading |
| `subtitle` | `text` | CTA subheading |
| `ctaText` | `string` | Button label |
| `spotsText` | `string` | Availability text (e.g., "Only 30 spots available") |

**Registration Section (`registrationSection`):**

| Field | Type | Description |
|-------|------|-------------|
| `title` | `string` | Section heading |
| `subtitle` | `text` | Section subheading |
| `formEmbedUrl` | `url` | External form embed URL (Microsoft Forms) |
| `formHeight` | `number` | Iframe height in pixels (default: 800) |
| `alternativeText` | `text` | Fallback text if form cannot load |

---

### 3.3 Book (`book`)

**Purpose:** Books featured in workshop Reading Journey sections. Supports decided and undecided states for progressive content reveal.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | Yes | Book title |
| `author` | `string` | No | Author name |
| `coverImage` | `image` | No | Book cover visual (with hotspot) |
| `shortDescription` | `text` | No | Brief card-level description |
| `isPrimary` | `boolean` | No | Auto-selected book on page load (one per workshop) |
| `isDecided` | `boolean` | No | Toggle: show details vs. placeholder message |
| `placeholderMessage` | `text` | No | Teaser message when undecided |
| `order` | `number` | No | Display sort order |

**Popup Content (`popupContent`):**

| Field | Type | Description |
|-------|------|-------------|
| `headline` | `string` | Modal headline |
| `description` | `block[]` | Rich text description (Portable Text) |
| `workshopDetails` | `text` | Workshop-specific context |
| `keyTakeaways` | `string[]` | Bullet-point takeaways |
| `duration` | `string` | Session duration |
| `format` | `string` | Session format |

**Attached Files (`files[]`):**

| Field | Type | Description |
|-------|------|-------------|
| `fileName` | `string` | Display name |
| `file` | `file` | Uploadable file asset |
| `description` | `string` | File description |

**Related Links (`links[]`):**

| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` | Link display text |
| `url` | `url` | Link destination |
| `isExternal` | `boolean` | Opens in new tab flag |

---

### 3.4 Program (`program`)

**Purpose:** Main program entries displayed in the "Our Programs" section on the landing page.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | Yes | Program name |
| `slug` | `slug` | Yes | URL-safe identifier |
| `shortDescription` | `text` | No | Brief summary for cards |
| `description` | `block[]` | No | Full rich text description |
| `image` | `image` | No | Program thumbnail |
| `featured` | `boolean` | No | Feature flag |
| `order` | `number` | No | Display sort order |

---

### 3.5 Previous Edition (`previousEdition`)

**Purpose:** Historical Gen Z program editions (2016–2025) showcased in the "Previous Gen Zs" timeline.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `year` | `number` | Yes | Edition year (2016–2030 range) |
| `title` | `string` | Yes | Edition title |
| `description` | `text` | No | Edition summary |
| `whatMadeUsDifferent` | `text` | No | Differentiator narrative |
| `image` | `image` | No | Edition representative image |

**Default Ordering:** Year descending (newest first).

---

### 3.6 Gallery Image (`galleryImage`)

**Purpose:** Photo gallery items displayed in the landing page carousel with auto-shuffle behavior.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | No | Image caption |
| `image` | `image` | Yes | Gallery photo (with hotspot) |
| `alt` | `string` | No | Accessibility alt text |
| `category` | `string` | No | Category filter: Event, Team, Workshop, General |
| `order` | `number` | No | Display sort order |

---

### 3.7 Team Member (`teamMember`)

**Purpose:** Gen Z cohort member profiles displayed in the "Meet the Team" section.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `string` | Yes | Full name |
| `role` | `string` | No | Position/title |
| `image` | `image` | No | Portrait photo (with hotspot) |
| `email` | `string` | No | Contact email |
| `linkedin` | `url` | No | LinkedIn profile URL |
| `bio` | `text` | No | Short biography |
| `order` | `number` | No | Display sort order |

---

## 4. Data Flow Architecture

### 4.1 Content Delivery Pipeline

```
┌──────────────┐     ┌──────────────┐     ┌──────────────────────┐     ┌──────────────────┐
│              │     │              │     │                      │     │                  │
│  Sanity.io   │────▶│  Sanity CDN  │────▶│  Next.js Server      │────▶│  React Client    │
│  Studio      │     │  (useCdn:    │     │  Components          │     │  Components      │
│              │     │   true)      │     │  (fetch at build /   │     │  (hydrated UI)   │
│  Content     │     │              │     │   revalidation)      │     │                  │
│  Editors     │     │  Edge Cache  │     │                      │     │  Browser         │
│              │     │              │     │  API: GROQ Queries   │     │                  │
└──────────────┘     └──────────────┘     └──────────────────────┘     └──────────────────┘
```

### 4.2 Key Technical Details

| Aspect | Implementation |
|--------|---------------|
| **CMS Client** | `@sanity/client` with project ID `nbpw4115`, dataset `production` |
| **API Version** | `2024-01-01` |
| **CDN** | Enabled (`useCdn: true`) for fast edge-cached reads |
| **Revalidation** | 60-second ISR (Incremental Static Regeneration) via `export const revalidate = 60` |
| **Query Language** | GROQ (Graph-Relational Object Queries) |
| **Image Delivery** | `@sanity/image-url` builder for on-the-fly transforms (resize, crop, format) |
| **File Delivery** | Direct Sanity CDN links (`cdn.sanity.io/files/...`) for downloadable assets |
| **Rich Text** | `@portabletext/react` for rendering Sanity block content |

### 4.3 Data Fetching Strategy

| Page | Fetch Pattern | Data Sources |
|------|--------------|--------------|
| Landing Page (`/`) | Parallel `Promise.all` | `getSiteSettings()`, `getTeamMembers()`, `getWorkshops()`, `getPreviousEditions()`, `getGalleryImages()` |
| Reframe Page (`/reframe`) | Single query with fallback | `getWorkshop("reframe")` — falls back to hardcoded components if CMS data unavailable |
| Workshop Pages (`/workshop/[slug]`) | Single query | `getWorkshop(slug)` with dereferenced book references |

### 4.4 Image Transform Pipeline

```
Sanity Image Asset
       │
       ▼
Image URL Builder (urlFor)
       │
       ├── Team Photos:     .width(400).height(400)    → Square crop
       ├── Workshop Cards:   .width(400).height(500)    → Portrait ratio
       ├── Edition Cards:    .width(600).height(400)    → Landscape ratio
       ├── Gallery Images:   .width(800).height(600)    → Gallery ratio
       ├── Book Covers:      .width(400).height(600)    → Tall portrait
       ├── Hero Backgrounds: .width(1920).height(1080)  → Full HD
       └── About Images:     .width(800).height(600)    → Standard
       │
       ▼
Sanity CDN (optimized delivery)
```

### 4.5 File Download Pipeline

```
Sanity File Asset Reference
  e.g., "file-abc123-pdf"
       │
       ▼
fileUrl() parser
  splits ref: [_, id, extension]
       │
       ▼
CDN URL construction
  https://cdn.sanity.io/files/{projectId}/{dataset}/{id}.{extension}
       │
       ▼
Direct browser download
```

---

## 5. Content Relationships

### 5.1 Entity Relationship Diagram

```
┌─────────────────┐
│  Site Settings   │ (Singleton)
│  ─────────────── │
│  siteTitle       │
│  theme           │
│  heroSection     │
│  aboutSection    │
│  pillars[] ◄─────┼──── Embedded array (not a reference)
│  footer          │
│  navLinks[]      │
└────────┬─────────┘
         │ provides section titles for
         ▼
┌─────────────────┐       ┌─────────────────┐
│  Landing Page    │──────▶│  Workshop        │ (via listing query)
│  (/)             │       │  ─────────────── │
│                  │       │  title, slug     │
│  Displays:       │       │  heroSection     │
│  - Workshops     │       │  aboutSection    │
│  - Team Members  │       │  benefitsSection │
│  - Prev Editions │       │  readingJourney  │
│  - Gallery       │       │    └── books[] ──┼──── Reference ────┐
└──────────────────┘       │  sessionFlow     │                   │
                           │  facilitators    │                   ▼
                           │  registration    │         ┌─────────────────┐
                           └──────────────────┘         │  Book            │
                                                        │  ─────────────── │
┌─────────────────┐                                     │  title, author   │
│  Team Member     │                                    │  coverImage      │
│  ─────────────── │                                    │  isPrimary       │
│  name, role      │                                    │  isDecided       │
│  image, email    │                                    │  popupContent    │
│  linkedin, bio   │                                    │  files[]         │
└──────────────────┘                                    │  links[]         │
                                                        └─────────────────┘
┌─────────────────┐       ┌─────────────────┐
│  Previous Edition│       │  Gallery Image   │
│  ─────────────── │       │  ─────────────── │
│  year, title     │       │  title, image    │
│  description     │       │  alt, category   │
│  image           │       │  order           │
└──────────────────┘       └─────────────────┘

┌─────────────────┐
│  Program         │
│  ─────────────── │
│  title, slug     │
│  description     │
│  image, featured │
└──────────────────┘
```

### 5.2 Relationship Types

| Relationship | Type | Direction | Description |
|-------------|------|-----------|-------------|
| Site Settings → Pillars | **Embedded** | One-to-many | Pillars are stored as an inline array within Site Settings |
| Workshop → Books | **Reference** | Many-to-many | Books are separate documents referenced by workshops via `books[]->` |
| Landing Page → Workshops | **Query** | One-to-many | Landing page fetches all workshops via `*[_type == "workshop"]` |
| Landing Page → Team Members | **Query** | One-to-many | Landing page fetches all team members via `*[_type == "teamMember"]` |
| Landing Page → Previous Editions | **Query** | One-to-many | Fetched and sorted by year descending |
| Landing Page → Gallery Images | **Query** | One-to-many | Fetched and sorted by display order |
| Workshop → Facilitators | **Embedded** | One-to-many | Facilitators are inline objects within the workshop |
| Book → Files | **Embedded** | One-to-many | Files are inline objects with Sanity file assets |

### 5.3 Content Reuse

Books are the primary reusable content entity. A single Book document can be referenced by multiple workshops, enabling:
- Shared book details across program pages
- Centralized updates to book metadata, files, and links
- Consistent reading journey content without duplication

---

## 6. URL Strategy

### 6.1 URL Architecture

| Pattern | Example | Description |
|---------|---------|-------------|
| `/` | `gen-z.zain.com/` | Landing page hub |
| `/reframe` | `gen-z.zain.com/reframe` | Dedicated Reframe workshop (hardcoded route with CMS fallback) |
| `/workshop/[slug]` | `gen-z.zain.com/workshop/design-thinking` | Dynamic workshop pages (fully CMS-driven) |
| `/#section` | `gen-z.zain.com/#pillars` | Anchor links to landing page sections |

### 6.2 URL Design Principles

| Principle | Implementation |
|-----------|----------------|
| **Clean URLs** | No file extensions, no query parameters for content |
| **Semantic Slugs** | Human-readable, auto-generated from content titles |
| **Hierarchical** | Workshop pages nested under `/workshop/` prefix |
| **Anchor Navigation** | Hash-based section links on the single-page landing |
| **No Pagination** | Content volume is small enough for single-page sections |
| **Deterministic** | Same slug always resolves to the same content |

### 6.3 Routing Implementation

| Route | Next.js File | Rendering |
|-------|-------------|-----------|
| `/` | `app/page.tsx` | Server Component with ISR (60s) |
| `/reframe` | `app/reframe/page.tsx` | Server Component with ISR (60s) |
| `/workshop/[slug]` | `app/workshop/[slug]/page.tsx` | Dynamic Server Component with ISR (60s) |

---

## 7. SEO & Metadata Strategy

### 7.1 Rendering Approach

All pages use **server-side rendering** (SSR) via Next.js App Router Server Components, ensuring:
- Full HTML content is available to search engine crawlers on first request
- No client-side JavaScript is required to render meaningful content
- Social media preview cards display correctly with server-rendered meta tags
- Fast Time to First Byte (TTFB) via CDN-cached CMS data

### 7.2 Metadata Configuration

| Page | Title Pattern | Description Source |
|------|--------------|-------------------|
| Landing Page | Site title from CMS | About section description |
| Reframe | "REFRAME \| Gen Z 2026 Program - Zain Group" | Hardcoded with relevant keywords |
| Workshop Pages | Dynamic from `workshop.title` | `workshop.shortDescription` |

**Keywords** (Reframe example): Reframe, Reset, Dan Heath, Gen Z, Zain, Leadership, Learning Series, Professional Development, Workshop

### 7.3 Image Optimization

| Technique | Implementation |
|-----------|----------------|
| **On-the-fly Transforms** | Sanity image URL builder for responsive sizing |
| **Format Optimization** | Sanity CDN handles WebP/AVIF negotiation |
| **Hotspot Cropping** | Sanity hotspot metadata ensures important image areas are preserved |
| **Lazy Loading** | Browser-native lazy loading for below-the-fold images |
| **Responsive Sizes** | Different image dimensions per context (400px cards, 1920px heroes) |

### 7.4 Semantic HTML Structure

```
<html>
  <body>
    <nav>                          Navbar with aria-labels
      <a> Logo </a>
      <ul> Navigation links </ul>
    </nav>
    <main id="main-content">       Primary content landmark
      <section id="hero">          H1: Program title
        <h1>...</h1>
      </section>
      <section id="about">         H2: About heading
        <h2>...</h2>
      </section>
      <section id="pillars">       H2: Pillars heading
        <h2>...</h2>
        <h3> Pillar titles </h3>
      </section>
      <section id="programs">      H2: Programs heading
        ...
      </section>
      <section id="team">          H2: Team heading
        ...
      </section>
      <section id="previous">      H2: Previous editions
        ...
      </section>
      <section id="gallery">       H2: Gallery heading
        ...
      </section>
    </main>
    <footer>                       Footer landmark
      ...
    </footer>
  </body>
</html>
```

### 7.5 Heading Hierarchy

| Level | Usage | Count per Page |
|-------|-------|---------------|
| `<h1>` | Page title (program name in hero) | 1 |
| `<h2>` | Section headings (About, Pillars, Programs, etc.) | 6–10 |
| `<h3>` | Subsection headings (pillar names, card titles) | Variable |
| `<h4>` | Detail headings within cards/modals | As needed |

### 7.6 Performance Considerations

| Factor | Approach |
|--------|----------|
| **ISR Revalidation** | 60-second window balances freshness with CDN cache efficiency |
| **Parallel Data Fetching** | `Promise.all` for landing page prevents waterfall requests |
| **CDN-First** | `useCdn: true` serves cached GROQ responses from edge |
| **Code Splitting** | Next.js App Router automatic route-level splitting |
| **Client Hydration** | Interactive components (carousels, modals) hydrate after initial server render |

---

*This document is part of the Gen Z 11th Edition Website Design Book. For related specifications, see:*
- *[01 — Brand Identity](./01-brand-identity.md)*
- *[02 — Visual Design System](./02-visual-design-system.md)*
- *[03 — UX & Interaction Design](./03-ux-interaction-design.md)*
