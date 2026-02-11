# 08 — Stakeholder Guide

**Gen Z 11th Edition 2026 — Executive Summary & Stakeholder Reference**
*Last updated: February 11, 2026*

---

## 1. Executive Summary

The **Gen Z 11th Edition** website is the digital platform for Zain Group's flagship youth leadership development program — now in its 11th year (2026). The website serves three core purposes:

1. **Showcase the program** — present Gen Z's mission, pillars, team, and 10 years of history (2016–2025)
2. **Drive registrations** — guide participants to sign up for interactive workshops like "Reframe"
3. **Present achievements** — highlight program impact through galleries, past editions, and team profiles

### Who is this for?

| Audience | What they get |
|----------|--------------|
| **Zain employees** | Discover Gen Z, register for workshops, explore books and sessions |
| **Program managers** | Update content, manage registrations, track program milestones |
| **Leadership & executives** | Review program presence, brand alignment, and legacy |
| **Future applicants** | Learn about the program and see what past participants accomplished |

The website is fully operational, deployed on Replit with autoscaling, and all content is manageable through a visual dashboard — no developer involvement needed for day-to-day updates.

---

## 2. Brand Compliance Summary

The website has been designed in full alignment with Zain Group's brand guidelines.

| Brand Element | Implementation |
|---------------|---------------|
| **Zain Turquoise** (#00B5AD) | Primary interactive color — buttons, links, focus indicators, accents |
| **Lime** (#C3D534) | Energy accent — headlines, badges, gradient highlights |
| **Yellow** (#F7E73F) | Secondary accent — gradient transitions, featured badges |
| **Navy** (#1E1A5F, #1C2951) | Background color — establishes professional authority |
| **Zain Blue** (#0057B8) | Supporting color — gradient midpoints, secondary elements |
| **Zain Typeface** | Default font for all headings and body text |

### Sub-brand flexibility

Gen Z maintains its own visual identity within the Zain umbrella — using the full Zain color palette with a youthful, premium dark-theme presentation. The gradient combinations (lime-to-turquoise, navy-to-blue) create a distinctive look while remaining unmistakably Zain.

### Full customization via CMS

The branding team can adjust **all colors, fonts, and gradients** through the content management dashboard at any time — no code changes required. This includes:

- All six brand colors (primary, secondary, accent, navy dark, navy light, blue)
- Heading and body font selection (10 font families available)
- Hero and card gradient start/end colors

---

## 3. Content Management

All website content is managed through a **Sanity CMS dashboard** — a visual editing interface accessible via web browser.

### How it works

1. Log into the Sanity Studio dashboard
2. Navigate to the content type you want to edit
3. Make your changes using the visual editor
4. Click publish
5. Changes appear on the live website within **60 seconds**

**No coding is required.** The editing interface works like a word processor.

### What you can edit

| Content Area | What you can change |
|-------------|-------------------|
| **Hero Section** | Welcome text, title, program name, description, call-to-action button text and link |
| **About Section** | Title, subtitle, description |
| **Program Pillars** | Pillar titles, descriptions, colors, icons, and links |
| **Team Members** | Names, roles, photos, email addresses, LinkedIn profiles |
| **Gallery** | Add, remove, or reorder photos |
| **Workshop Pages** | All workshop content — hero, about, benefits, attendees, timing, books, sessions, facilitators, registration |
| **Book Details** | Title, author, cover image, descriptions, files for download, related links, key takeaways |
| **Registration Forms** | Swap the registration form by changing a URL (supports Microsoft Forms, Google Forms, or any embeddable form) |
| **Previous Editions** | Year, title, description, image, and external link for all 10 past editions |
| **Footer** | Social media links, copyright text, quick links |
| **Colors & Fonts** | All brand colors, font selections, and gradient configurations |

### Default content

Every content area has sensible defaults built into the website. If a CMS field is left empty, the website displays pre-configured content automatically. This means the site always looks complete — even before CMS content is published.

---

## 4. Design Book Reference Guide

The complete design documentation is organized into eight chapters. Each document lives in the `docs/design-book/` folder.

| # | Document | Description |
|---|----------|-------------|
| 01 | **[Brand Identity](./01-brand-identity.md)** | Color palette, typography system, and how the website aligns with Zain Group brand guidelines |
| 02 | **[Visual Design System](./02-visual-design-system.md)** | Glassmorphism effects, gradient specifications, animation standards, and spatial layout rules |
| 03 | **[UX & Interaction Design](./03-ux-interaction-design.md)** | User flows, navigation patterns, accessibility compliance, and responsive behavior |
| 04 | **[Information Architecture](./04-information-architecture.md)** | Site structure, page hierarchy, and the Sanity CMS content model with all schema definitions |
| 05 | **[Technical Architecture](./05-technical-architecture.md)** | Technology stack (Next.js, React, Three.js, Sanity), deployment configuration, and CMS migration details |
| 06 | **[Design Decisions & Research](./06-design-decisions-research.md)** | Rationale behind key design choices, alternatives considered, and why they were rejected |
| 07 | **[Component Library](./07-component-library.md)** | Technical reference for every UI component — props, behavior, accessibility, and animation details |
| 08 | **Stakeholder Guide** *(this document)* | Executive summary and non-technical overview for leadership and branding teams |

---

## 5. Key Design Highlights

- **Dark premium theme** with luminous brand colors — projects innovation and sophistication
- **Glassmorphism UI** — frosted-glass cards and panels create a modern, layered visual depth
- **Full WCAG 2.1 AA accessibility** — keyboard navigation, screen reader support, focus indicators, reduced motion support
- **Smooth scrolling and meaningful animations** — scroll-triggered entrances, page transitions, and hover interactions (all disabled for users who prefer reduced motion)
- **3D interactive elements** — particle field backgrounds and floating cubes powered by Three.js, adding immersive visual interest
- **CMS-driven everything** — every piece of text, every image, every color can be changed through the dashboard without touching code
- **10 previous editions** (2016–2025) — a scrollable timeline showcasing a decade of program legacy and evolution
- **Responsive across all devices** — optimized layouts for mobile phones, tablets, and desktops with touch gesture support
- **Workshop registration flow** — embedded Microsoft Forms with mobile-friendly fallback links
- **Book exploration experience** — interactive card selection with detailed book views, downloadable resources, and related links

---

## 6. Contact & Resources

| Resource | Location |
|----------|----------|
| **Design book** | `docs/design-book/` (all 8 chapters) |
| **CMS dashboard** | Sanity.io Studio |
| **Development server** | `npm run dev` (local) |
| **Production deployment** | Autoscale via Replit |
| **Program email** | generationz@zain.com |
| **Source code** | Root of repository |

### Quick start for content editors

1. Open the Sanity Studio dashboard
2. Select the content type to edit (e.g., "Site Settings", "Team Members", "Workshop")
3. Make changes in the visual editor
4. Click **Publish**
5. Verify changes on the live website (updates within 60 seconds)

### Quick start for developers

```bash
npm run dev        # Start the development server
```

The website runs on Next.js with React, styled with Tailwind CSS, and uses Sanity as the headless CMS. Refer to the [Technical Architecture](./05-technical-architecture.md) document for the full stack overview.

---

*This document is part of the Gen Z 11th Edition Design Book. For the complete technical component reference, see [07 — Component Library](./07-component-library.md).*
