# 01 — Brand Identity

**Gen Z 11th Edition (2026) — Website Design Book**
**Document Status:** Final | **Last Updated:** February 2026
**Audience:** Internal team, media stakeholders, branding teams at Zain Group

---

## Table of Contents

1. [Zain Group Brand Alignment](#1-zain-group-brand-alignment)
2. [Color Palette](#2-color-palette)
3. [Typography System](#3-typography-system)
4. [Logo Usage](#4-logo-usage)
5. [Brand Voice & Tone](#5-brand-voice--tone)
6. [Photography & Imagery Style](#6-photography--imagery-style)

---

## 1. Zain Group Brand Alignment

### 1.1 About Zain Group

Zain Group is a leading multinational telecommunications company headquartered in Kuwait, serving approximately 49 million customers across the Middle East and North Africa (MENA) region. With a brand value exceeding $3 billion, Zain operates in eight markets and is publicly listed on the Boursa Kuwait.

The name **"Zain"** (زين) translates to **"beauty"** or **"magnificence"** in Arabic — a deliberate choice reflecting the company's aspiration to bring elegance, connection, and innovation to every interaction.

### 1.2 Zain Brand Identity

| Element | Description |
|---------|-------------|
| **Wordmark** | Lowercase **"zaiN"** with a distinctive capital "N", rendered in a custom typeface with rounded angles conveying approachability and modernity |
| **Emblem** | The Zain **swirl motif** — a fluid, organic form that represents infinity, communication, unity, data flows, and network connections |
| **Typeface** | Custom Arabic-Latin typeface with rounded angles, balancing professionalism with warmth |
| **Brand Colors** | Turquoise, lime, blue, and multi-chromatic accents drawn from the MENA region's visual heritage |

### 1.3 Zain Brand Values

The Gen Z website is designed to embody each of Zain's five core brand values:

| Brand Value | How It Manifests on the Gen Z Website |
|-------------|---------------------------------------|
| **Connection** | Interactive team profiles, LinkedIn integration, social sharing bar, community-focused language throughout the site |
| **Movement** | Framer Motion animations, aurora backgrounds, floating particles, scroll-triggered reveals — the site never feels static |
| **Innovation** | Cutting-edge tech stack (Next.js, Tailwind CSS v4, Sanity CMS), glassmorphism design language, AI & Big Data pillar prominence |
| **Accessibility** | WCAG 2.1 AA compliance, `prefers-reduced-motion` support, keyboard navigation, semantic HTML, focus ring system |
| **Modernity** | Dark-mode-first design, glass-card aesthetics, gradient text effects, responsive mobile-first architecture |

### 1.4 Sub-Brand Relationship

The Gen Z program operates as an **internal initiative** under the Zain Group corporate umbrella. This creates a deliberate sub-brand relationship:

```
Zain Group (Parent Brand)
└── Gen Z Program (Sub-Brand / Internal Initiative)
    └── 11th Edition Website (Digital Expression of Sub-Brand)
```

**Key principles of this relationship:**

- **Brand inheritance:** The Gen Z website inherits Zain's core color palette (turquoise, lime, blue) and brand values, ensuring visual coherence with the parent brand
- **Distinct identity:** Gen Z has its own logo, visual language, and voice that skew younger and more energetic than the corporate Zain presence — this is intentional and sanctioned
- **No competing logos:** The Zain corporate logo is intentionally not displayed on the Gen Z website (removed from footer by design decision), allowing the Gen Z identity to stand on its own while remaining clearly part of the Zain ecosystem
- **Shared DNA:** Color palette, typography philosophy, and motion design all trace back to Zain's brand guidelines, even when expressed in a more youthful register

### 1.5 Brand Compliance Strategy

The website maintains brand compliance through the following mechanisms:

1. **CSS Custom Properties:** All brand colors are defined as CSS variables (`--color-accent`, `--color-primary`, etc.) derived from Zain's official palette, ensuring a single source of truth
2. **CMS-Driven Theming:** Through Sanity.io, brand administrators can update colors, fonts, and content without code changes, maintaining governance over the brand expression
3. **Design Token System:** Tailwind CSS v4's theme configuration maps directly to Zain brand tokens, preventing ad-hoc color usage
4. **Gradient Standards:** All gradients flow between approved Zain palette colors (e.g., lime-to-turquoise, navy-to-blue), never introducing off-brand hues

---

## 2. Color Palette

### 2.1 Primary Brand Colors (Derived from Zain)

| Color | Hex | CSS Variable | RGB | Usage |
|-------|-----|-------------|-----|-------|
| **Turquoise** | `#00B5AD` | `--color-accent` | `rgb(0, 181, 173)` | Primary interactive color — CTAs, focus rings, links, active states. Directly maps to Zain's turquoise brand color. Used for team member photo borders and LinkedIn profile links. |
| **Lime** | `#C3D534` | `--color-primary` | `rgb(195, 213, 52)` | Accent highlights, gradient start points, pillar card border glows, team member role labels. Youth-energy color derived from Zain's secondary palette. |
| **Yellow** | `#F7E73F` | `--color-secondary` | `rgb(247, 231, 63)` | Warm accent, hover state transitions (lime → yellow), complementary pairing with lime in gradient text effects. |

### 2.2 Background System

| Color | Hex | CSS Variable | RGB | Usage |
|-------|-----|-------------|-----|-------|
| **Navy Dark / Sapphire** | `#1E1A5F` | `--color-navy-dark` | `rgb(30, 26, 95)` | Primary background for the entire site, hero sections, pillar cards (at 80% opacity). Deep navy conveys professionalism, authority, and premium quality. Also used as `--gradient-hero-start`. |
| **Navy Light** | `#1C2951` | `--color-navy-light` | `rgb(28, 41, 81)` | Card backgrounds, secondary panels, `--gradient-card-start`. Provides subtle depth differentiation from the primary navy. |
| **Blue** | `#0057B8` | `--color-blue` | `rgb(0, 87, 184)` | Gradient endpoints (`--gradient-hero-end`, `--gradient-card-end`), supporting elements. Creates depth when paired with navy backgrounds. |

### 2.3 Extended Palette

| Color | Hex | CSS Variable | RGB | Usage |
|-------|-----|-------------|-----|-------|
| **Light Blue** | `#00B2E3` | `--light-blue` | `rgb(0, 178, 227)` | Informational elements, gradient text pairing with purple (`gradient-text-purple`) |
| **Purple** | `#9B4F96` | `--purple` | `rgb(155, 79, 150)` | Creative Thinking pillar accent, gradient pairing with pink, glow effects (`.glow-purple`) |
| **Pink** | `#F4A6C9` | `--pink` | `rgb(244, 166, 201)` | Soft accent pairing with purple in the Creative Thinking pillar gradient, glow effects (`.glow-pink`) |
| **Emerald** | `#006B54` | `--emerald` | `rgb(0, 107, 84)` | Dark mode accent color, reserved for environmental/sustainability-themed elements |
| **Amethyst** | `#5B4B8A` | `--amethyst` | `rgb(91, 75, 138)` | Dark mode accent color, secondary purple tone for depth |
| **Quartz** | `#D4006A` | `--quartz` | `rgb(212, 0, 106)` | Destructive/error states (`--destructive`), warning indicators, form validation errors |

### 2.4 Gradient Definitions

The website employs carefully composed gradients that flow between approved palette colors:

| Gradient | Colors | CSS | Usage |
|----------|--------|-----|-------|
| **Hero Background** | Navy Dark → Blue | `linear-gradient(#1E1A5F, #0057B8)` | Full-page hero section backdrop |
| **Card Background** | Navy Light → Blue | `linear-gradient(#1C2951, #0057B8)` | Card and panel backgrounds |
| **Primary Text** | Turquoise → Lime | `linear-gradient(to right, #00B5AD, #C3D534)` | `.gradient-text` — gradient headings and emphasis text |
| **Purple Text** | Light Blue → Purple | `linear-gradient(to right, #00B2E3, #9B4F96)` | `.gradient-text-purple` — creative section headings |
| **AI & Big Data Pillar** | Lime → Turquoise | `from-[#C3D534] to-[#00B5AD]` | Pillar card accent gradient |
| **Resilience Pillar** | Turquoise → Blue | `from-[#00B5AD] to-[#0057B8]` | Pillar card accent gradient |
| **Creative Thinking Pillar** | Purple → Pink | `from-[#9B4F96] to-[#F4A6C9]` | Pillar card accent gradient |
| **Leadership Pillar** | Yellow → Lime | `from-[#F7E73F] to-[#C3D534]` | Pillar card accent gradient |
| **Systems Thinking Pillar** | Turquoise → Lime | `from-[#00B5AD] to-[#C3D534]` | Pillar card accent gradient |
| **Program Title** | Lime → Yellow → Turquoise | `from-[#C3D534] via-[#F7E73F] to-[#00B5AD]` | Three-stop gradient for program card titles |

### 2.5 Color Usage Rules

#### Contrast & Accessibility

- **Minimum contrast on navy:** All text rendered on navy backgrounds (`#1E1A5F` or `#1C2951`) must achieve at least **WCAG 2.1 AA compliance** — a 4.5:1 contrast ratio for normal text, 3:1 for large text (18px+ or 14px+ bold)
- **White text opacity:** Body text on dark backgrounds uses `white/60` (`rgba(255, 255, 255, 0.6)`) as the minimum opacity threshold; headings and interactive elements use full white (`#FFFFFF`)
- **Accent color restrictions:** Lime (`#C3D534`) and turquoise (`#00B5AD`) should only appear on dark backgrounds where sufficient contrast is maintained — never as text on white/light backgrounds

#### Glassmorphism Standards

- **Glass card background:** `rgba(255, 255, 255, 0.15)` with `backdrop-filter: blur(12px)`
- **Glass card border:** `1px solid rgba(255, 255, 255, 0.2)` — white at 20% opacity
- **Dark glass variant:** `rgba(0, 0, 0, 0.2)` background with `rgba(255, 255, 255, 0.1)` border
- **Glass button:** `rgba(255, 255, 255, 0.25)` background, increasing to `rgba(255, 255, 255, 0.35)` on hover

#### Glow Effects

Each accent color has a corresponding glow utility class for interactive states:

| Class | Color | Box Shadow |
|-------|-------|------------|
| `.glow-turquoise` | Turquoise | `0 0 20px rgba(0, 181, 173, 0.4)` |
| `.glow-lime` | Lime | `0 0 20px rgba(195, 213, 52, 0.4)` |
| `.glow-purple` | Purple | `0 0 20px rgba(155, 79, 150, 0.4)` |
| `.glow-blue` | Blue | `0 0 20px rgba(0, 87, 184, 0.4)` |
| `.glow-pink` | Pink | `0 0 20px rgba(244, 166, 201, 0.4)` |

#### General Rules

1. **No off-brand colors:** Every color used on the website must trace back to the palette defined in this document. Ad-hoc hex values are not permitted.
2. **Gradient direction:** Gradients should flow between related colors (e.g., navy-to-blue for depth, lime-to-turquoise for energy). Avoid pairing unrelated warm and cool tones.
3. **Dark mode default:** The website's primary expression is dark-mode (navy backgrounds). Light mode is supported but secondary.
4. **Focus rings:** All interactive elements use `--color-accent` (turquoise `#00B5AD`) for focus ring styling via the `--ring` CSS variable.

---

## 3. Typography System

### 3.1 Primary Typeface: Zain

The Gen Z website uses **Zain**, a custom Arabic-Latin typeface, as its primary font for both headings and body text. This typeface was designed for the Zain brand and features rounded angles that mirror the organic curves of the Zain swirl motif.

| Property | Value |
|----------|-------|
| **Font Name** | Zain |
| **Script Support** | Arabic + Latin |
| **CSS Variable (Headings)** | `--font-heading: var(--font-zain), sans-serif` |
| **CSS Variable (Body)** | `--font-body: var(--font-zain), sans-serif` |
| **Fallback Stack** | `'Zain', system-ui, sans-serif` |
| **Monospace** | `'Geist Mono', 'Geist Mono Fallback', monospace` |

### 3.2 CMS-Configurable Alternatives

Through the Sanity CMS, brand administrators can swap the primary typeface to any of the following pre-approved alternatives. This enables edition-specific customization without code changes:

| Font | Category | Best For |
|------|----------|----------|
| **Inter** | Sans-serif | Clean, neutral body text |
| **Poppins** | Sans-serif | Friendly, geometric headings |
| **Montserrat** | Sans-serif | Modern, professional layouts |
| **Playfair Display** | Serif | Editorial, premium headings |
| **Space Grotesk** | Sans-serif | Technical, innovation-focused themes |
| **Open Sans** | Sans-serif | Maximum readability |
| **Lato** | Sans-serif | Warm, approachable body text |
| **Source Sans** | Sans-serif | Neutral, enterprise contexts |
| **Roboto** | Sans-serif | Material Design alignment |

### 3.3 Type Scale

| Element | Desktop Size | Mobile Size | Weight | Usage |
|---------|-------------|-------------|--------|-------|
| **H1** | `5rem` / 80px | `2.5rem` / 40px | 800 (Black) | Hero titles, primary page headings. Used sparingly — one per page. |
| **H2** | `3rem` / 48px | `1.5rem` / 24px | 700 (Bold) | Section headings ("About", "Program Pillars", "Meet the Team", etc.) |
| **H3** | `1.5rem` / 24px | `1.125rem` / 18px | 700 (Bold) | Card titles, pillar names, team member names, subsection headings |
| **Body** | `1rem` / 16px | `0.875rem` / 14px | 400 (Regular) | Paragraph text, descriptions, card body content |
| **Caption** | `0.875rem` / 14px | `0.75rem` / 12px | 500 (Medium) | Labels, metadata, email addresses, supplementary information |

### 3.4 Weight Usage

| Weight | Value | Application |
|--------|-------|-------------|
| **Black** | 800 | Hero titles only — creates maximum visual impact on dark backgrounds |
| **Bold** | 700 | Section headings, card titles, navigation items, CTAs |
| **Medium** | 500 | Captions, labels, secondary emphasis text |
| **Regular** | 400 | Body paragraphs, descriptions, form inputs |

### 3.5 Special Typographic Treatments

| Treatment | CSS | Usage |
|-----------|-----|-------|
| **Gradient text** | `background: linear-gradient(...); -webkit-background-clip: text; -webkit-text-fill-color: transparent;` | Section headings, pillar titles, program names — creates vibrant, on-brand text effects on dark backgrounds |
| **Uppercase navigation** | `text-transform: uppercase; letter-spacing: expanded` | Navbar links use uppercase with expanded letter-spacing for a structured, editorial feel |
| **Text balance** | `text-wrap: balance` | Applied via `.text-balance` utility to prevent orphaned words in headings |

### 3.6 Line Height & Readability

Line heights are optimized for readability on dark backgrounds, where eye strain is a consideration:

- **Headings:** Tight line height (1.1–1.2) for visual density and impact
- **Body text:** Relaxed line height (1.5–1.7) via `leading-relaxed` class for comfortable reading
- **Cards:** Body text within glass cards uses `text-sm leading-relaxed` for optimal density at smaller sizes

---

## 4. Logo Usage

### 4.1 Gen Z Program Logo

The Gen Z program has its own distinct logo, separate from the Zain corporate mark. This logo is the primary brand identifier across the website.

| Property | Value |
|----------|-------|
| **Primary File** | `/public/images/genz-logo.svg` (vector, scalable) |
| **Raster Fallback** | `/public/images/genz-logo.png` |
| **Optimized Web** | `/public/images/genz-logo-opt.webp` |
| **Placement** | Navbar (persistent, always visible during scroll) |

### 4.2 Logo Placement Rules

| Context | Specification |
|---------|---------------|
| **Navbar** | Always visible in the top-left corner. The logo serves as a home link, returning users to the landing page. Remains fixed during page scroll. |
| **Mobile** | Logo remains visible in the mobile header alongside the hamburger menu icon. |
| **Footer** | The Gen Z logo is **not** repeated in the footer to avoid visual redundancy. |

### 4.3 Clear Space Requirements

- **Minimum clear space:** Maintain a clear zone equal to the height of the "Z" character in the logo on all four sides
- **Minimum display size:** The logo should never be rendered smaller than 32px in height to preserve legibility
- **Background requirement:** The logo is designed for dark backgrounds; when placed on lighter surfaces, ensure adequate contrast

### 4.4 Zain Corporate Logo

| Rule | Detail |
|------|--------|
| **Display on website** | The Zain corporate logo is **intentionally not displayed** on the Gen Z website |
| **Rationale** | This was a deliberate design decision to allow the Gen Z program identity to stand independently. The relationship to Zain is communicated through color palette, brand values, footer text ("Copyright 2026 Zain. All Rights Reserved"), and the "by Zain" tagline in the hero section. |
| **Brand assets available** | Zain logo files exist in the repository (`zain-logo-white.png`, `zain-logo-white.svg`) for potential future use or print collateral, but are not rendered in the web experience |

### 4.5 Logo Relationship Hierarchy

```
Zain Group Corporate Identity
│
├── Zain Corporate Logo ("zaiN" wordmark + swirl motif)
│   └── Used on: zain.com, corporate communications, annual reports
│
└── Gen Z Program Identity
    └── Gen Z Logo (genz-logo.svg)
        └── Used on: Gen Z website, program materials, social media
            └── Brand connection communicated via: color palette,
                "by Zain" tagline, copyright text, shared brand values
```

---

## 5. Brand Voice & Tone

### 5.1 Voice Characteristics

The Gen Z website voice sits at the intersection of **professional authority** and **youthful energy**. It speaks to early-career professionals at Zain who are ambitious, digitally native, and eager to grow.

| Characteristic | Description | Example |
|----------------|-------------|---------|
| **Professional** | Confident, competent, credible — this is a Zain corporate initiative | "Empowering the next generation of leaders through hands-on experience in leadership, innovation, and continuous learning." |
| **Youthful** | Energetic, forward-looking, dynamic — without being informal or casual | "Over the past several months, we as Generation Z graduates at Zain Group, have gained..." |
| **Empowering** | Focused on growth, transformation, and personal development | Words like **"transform"**, **"reframe"**, **"reset"**, **"empower"**, **"innovate"** |
| **Inclusive** | Welcoming, collaborative, team-oriented | Team-first language, group photos, shared achievements |
| **Aspirational** | Forward-looking, ambitious, possibility-focused | "Rethink, reset, and drive meaningful change" |

### 5.2 Power Words

The following vocabulary is consistently used across the website to reinforce the brand voice:

| Category | Words |
|----------|-------|
| **Transformation** | Transform, Reframe, Reset, Reimagine, Rethink, Redefine |
| **Growth** | Empower, Develop, Cultivate, Enhance, Supercharge |
| **Innovation** | Innovate, Disrupt, Pioneer, Future-proof, Digital |
| **Action** | Drive, Lead, Build, Create, Deliver |
| **Community** | Collaborate, Connect, Together, Cohort, Generation |

### 5.3 Program Pillars as Voice Anchors

Each of the five program pillars reinforces a facet of the brand voice:

| Pillar | Voice Contribution | Key Language |
|--------|-------------------|--------------|
| **AI & Big Data** | Technical credibility, forward-thinking | "LLMs & Agentic AI, Analytics & Reporting, Critical Thinking about Data Quality, Security & AI Ethics, and Technological Literacy" |
| **Resilience, Flexibility & Agility** | Personal strength, adaptability | "Neuroplasticity, Purpose & Fulfillment, Mental Toughness & Coaching" |
| **Creative Thinking** | Inclusive innovation | "Problem-solving through Inclusion, Wellbeing, and Collaborative Growth" |
| **Leadership & Social Influence** | Authority, interpersonal skills | "Effective Negotiation & Communication Skills, Curiosity & Lifelong Learning, Self-awareness & Motivation" |
| **Systems Thinking** | Strategic perspective | "Lean Six Sigma, Big Picture Thinking, Systems Mapping & Visualization" |

### 5.4 Call-to-Action Language

CTAs use action-oriented, direct language that reflects confidence and momentum:

| CTA Text | Context | Tone |
|----------|---------|------|
| **"Register Now"** | Workshop registration | Urgent, decisive |
| **"Explore"** | Navigation to Reframe program | Invitational, curious |
| **"Learn More"** | Program cards, content expansion | Informative, encouraging |
| **"Visit Zain Group"** | Footer external link | Professional, directional |
| **"LinkedIn Profile"** | Team member social links | Connective, networking |

### 5.5 Tone Guidelines

| Situation | Tone | Example |
|-----------|------|---------|
| **Hero section** | Bold, inspiring, grand | "THE 11TH EDITION OF GENERATION Z" |
| **About section** | Informative, warm, narrative | Program description with mission context |
| **Pillar descriptions** | Specific, educational, structured | Topic lists with technical vocabulary |
| **Team profiles** | Personal, respectful, connective | Name, role, contact — dignified and approachable |
| **Previous editions** | Historical, proud, progressive | Year-by-year narrative showing program evolution |
| **Footer** | Minimal, functional, corporate | Copyright, social links, Zain reference |

---

## 6. Photography & Imagery Style

### 6.1 Image Categories

The website uses five distinct categories of photography, each serving a specific narrative purpose:

#### Team Portraits

| Property | Value |
|----------|-------|
| **Location** | `/public/images/team/` |
| **Format** | Individual headshots — `.png` source + `.webp` optimized |
| **Style** | Professional portraits with consistent framing. Circular crop with turquoise (`#00B5AD`) border ring. |
| **Current roster** | Abdulmohsen AlZenki, Asail AlHeis, Ayah AlFadhli, Ahmed AlOnaizi, Jana AlAbduljader, Miteb AlOqab |
| **Group photo** | `group-photo.jpg` / `group-photo-opt.webp` — full cohort team shot |

#### Previous Edition Cohort Photos

| Property | Value |
|----------|-------|
| **Location** | `/public/images/genz-{year}.png` + optimized `.webp` variants |
| **Range** | 2016 through 2025 — ten years of program history |
| **Style** | Group/cohort photos from each edition, showing program evolution over a decade |
| **Usage** | "Previous Gen Z Programs" carousel section with year labels and edition descriptions |

#### Gallery / Experience Photos

| Property | Value |
|----------|-------|
| **Location** | `/public/images/gallery-new/` (primary), `/public/images/gallery/` (legacy) |
| **Format** | `.jpg` source + `-opt.webp` optimized variants |
| **Content** | Workshop sessions, CEO/CTO meetings, contact center visits, mentoring sessions, disability etiquette workshops, strategic planning meetings, speed mentoring events |
| **Behavior** | Gallery images are **auto-shuffled** on page load and **auto-advance** every 4 seconds in a carousel with touch/swipe support |
| **CMS integration** | Gallery images can be managed through Sanity CMS (`galleryImage` schema) for dynamic content updates |

#### Book Covers (Reframe Reading Journey)

| Property | Value |
|----------|-------|
| **Files** | `reset-book-3d.png` / `reset-book-3d-opt.webp` (3D perspective render), `reset-book-cover.png` / `reset-book-cover.svg` (flat cover) |
| **Current book** | *"Reset"* by Dan Heath |
| **Style** | 3D book rendering with perspective transform (`rotateY(-8deg) rotateX(2deg)`), drop shadow effect, hover animation that flattens to face-on view |
| **Usage** | Reframe program section, Our Programs card |

#### Brand Assets

| File | Usage |
|------|-------|
| `genz-logo.svg` / `.png` / `-opt.webp` | Primary Gen Z program logo — navbar |
| `zain-logo-white.png` / `.svg` | Zain corporate logo (available but not displayed on site) |
| `zain-pattern-bubbles.svg` | Decorative pattern asset for backgrounds |

### 6.2 Photography Style Guide

| Attribute | Guideline |
|-----------|-----------|
| **Setting** | Professional corporate environments — offices, meeting rooms, innovation campuses (ZINC), workshop spaces |
| **Mood** | Warm, collaborative, energetic. Photos should convey teamwork, engagement, and professional growth |
| **Composition** | Group shots preferred over solo portraits (except for team headshots). Natural, candid moments valued alongside posed shots |
| **Lighting** | Warm indoor lighting preferred. Avoid harsh flash or overly stylized post-processing |
| **Diversity** | Photos should reflect the inclusive, multi-national nature of Zain's workforce |
| **Quality** | High resolution source files. All images delivered with optimized WebP variants for web performance |

### 6.3 Image Technical Standards

| Standard | Specification |
|----------|---------------|
| **Source format** | `.jpg` or `.png` at maximum quality |
| **Web format** | Optimized `.webp` variants (filename convention: `{name}-opt.webp`) |
| **Next.js rendering** | All images use `unoptimized` mode for maximum flexibility and CMS compatibility |
| **Responsive sizing** | Images use the `sizes` attribute: `(max-width: 640px) 96px, 128px` for avatars; `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw` for gallery |
| **Aspect ratios** | Gallery images: 4:3. Team avatars: 1:1 (circular crop). Book covers: ~3:4 portrait |
| **Loading strategy** | Critical images (hero, above-fold) loaded eagerly; gallery and below-fold images use lazy loading with fade-in transitions |
| **Alt text** | All images carry descriptive alt text (e.g., "Portrait of Abdulmohsen AlZenki", "Gen Z Experience 1") for accessibility |

### 6.4 CMS Image Management

Gallery and team images are managed through the Sanity CMS, enabling the Gen Z program team to update visual content without developer intervention:

| Schema | Content Type | Fields |
|--------|-------------|--------|
| `galleryImage` | Gallery photo | Image, alt text, caption, order |
| `teamMember` | Team portrait | Name, role, photo, email, LinkedIn URL |
| `previousEdition` | Historical cohort | Year, title, description, cohort photo, link |
| `siteSettings` | Global configuration | Theme colors, fonts, hero content, section titles |

---

*This document is part of the Gen Z 11th Edition Website Design Book. For questions or brand clarifications, contact the Gen Z program team at Zain Group.*
