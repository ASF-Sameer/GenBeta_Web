# Product Requirements Document (PRD)
## Generation Z Website - Combined 10th & 11th Edition

**Version:** 1.0
**Date:** January 28, 2026
**Author:** Zain Gen Z Team
**Status:** Draft

---

## Table of Contents
1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Goals & Objectives](#3-goals--objectives)
4. [Target Audience](#4-target-audience)
5. [Technical Architecture](#5-technical-architecture)
6. [Feature Requirements](#6-feature-requirements)
7. [Design System](#7-design-system)
8. [User Flows](#8-user-flows)
9. [Visual Design Recommendations](#9-visual-design-recommendations)
10. [Implementation Roadmap](#10-implementation-roadmap)
11. [Success Metrics](#11-success-metrics)

---

## 1. Executive Summary

The Generation Z Website is a digital platform for Zain's internal Gen Z Program, designed to empower the next generation of leaders through hands-on experience in leadership, innovation, and continuous learning. This PRD combines the best elements from both the 10th Edition (built with Vite + React) and the 11th Edition (built with Next.js) to create a unified, modern web experience.

### Key Highlights
- **Program Focus:** REFRAME learning series based on transformative books
- **Current Book:** "Reset" by Dan Heath
- **Event:** Workshop sessions at ZINC Innovation Campus
- **Audience:** Zain employees participating in the Gen Z 2026 Program

---

## 2. Problem Statement

The Gen Z Program needs a cohesive digital presence that:
- Showcases the program's learning initiatives (REFRAME series)
- Enables seamless event registration for workshops
- Provides information about facilitators, agenda, and books
- Works flawlessly across all devices with modern UX standards
- Maintains Zain's brand identity while appealing to younger professionals

---

## 3. Goals & Objectives

### Primary Goals
| Goal | Description | Success Metric |
|------|-------------|----------------|
| **Engagement** | Drive workshop registrations | 80%+ registration rate |
| **Awareness** | Increase program visibility | 1000+ monthly visitors |
| **Experience** | Deliver exceptional UX | <3s load time, 90+ Lighthouse |
| **Accessibility** | WCAG 2.1 AA compliance | 100% accessibility score |

### Secondary Goals
- Establish a consistent design language for future editions
- Create reusable component library
- Enable easy content updates for program managers

---

## 4. Target Audience

### Primary Persona: Zain Employee (Gen Z Program Participant)
- **Age:** 22-35 years
- **Role:** Early to mid-career professionals at Zain
- **Tech Savvy:** High - comfortable with modern web experiences
- **Goals:** Career development, networking, continuous learning
- **Pain Points:** Limited time, needs quick access to information

### Secondary Persona: Program Manager
- **Role:** Gen Z Program coordinator
- **Goals:** Track registrations, manage content
- **Needs:** Easy content management, analytics access

---

## 5. Technical Architecture

### 5.1 High-Level System Architecture

```mermaid
graph TB
    subgraph "Client Layer"
        A[Browser/Mobile] --> B[Next.js Frontend]
    end

    subgraph "Application Layer"
        B --> C[React Components]
        C --> D[Shadcn/UI Library]
        C --> E[Custom Components]
        B --> F[Next.js API Routes]
    end

    subgraph "Styling Layer"
        D --> G[Tailwind CSS v4]
        E --> G
        G --> H[CSS Variables/Theming]
    end

    subgraph "External Services"
        F --> I[Microsoft Forms API]
        B --> J[Vercel Analytics]
        B --> K[Vercel Hosting]
    end

    subgraph "Assets"
        B --> L[Optimized Images]
        B --> M[Custom Fonts]
    end

    style A fill:#00B5AD,color:#fff
    style B fill:#0057B8,color:#fff
    style K fill:#C3D534,color:#000
```

### 5.2 Component Architecture

```mermaid
graph LR
    subgraph "Pages"
        A[Landing Page] --> B[Reframe Page]
    end

    subgraph "Layout Components"
        C[Navbar]
        D[Footer]
        E[Theme Provider]
    end

    subgraph "Feature Components"
        F[Hero Section]
        G[Book Carousel]
        H[Agenda Timeline]
        I[Facilitators Grid]
        J[Registration Form]
        K[Workshop Overview]
    end

    subgraph "UI Components"
        L[Aurora Background]
        M[Glass Cards]
        N[Buttons]
        O[Theme Toggle]
        P[Social Share Bar]
    end

    subgraph "Hooks"
        Q[useMobile]
        R[useToast]
    end

    A --> C
    A --> D
    B --> C
    B --> D
    B --> F
    B --> G
    B --> H
    B --> I
    B --> J

    F --> L
    G --> M
    H --> L
    I --> M
    J --> N
```

### 5.3 Data Flow Architecture

```mermaid
sequenceDiagram
    participant U as User
    participant W as Website
    participant MS as Microsoft Forms
    participant V as Vercel Analytics

    U->>W: Visit Landing Page
    W->>V: Track Page View
    U->>W: Navigate to Reframe
    W->>V: Track Navigation
    U->>W: Click Register
    W->>W: Scroll to Form
    U->>MS: Submit Registration
    MS-->>U: Confirmation
    W->>V: Track Conversion
```

### 5.4 Technology Stack Comparison

| Aspect | 10th Edition | 11th Edition | Recommended (Combined) |
|--------|--------------|--------------|------------------------|
| Framework | Vite + React 19 | Next.js 16 | **Next.js 16** |
| Language | JavaScript/JSX | TypeScript/TSX | **TypeScript** |
| Styling | Tailwind CSS 3 | Tailwind CSS 4 | **Tailwind CSS 4** |
| UI Library | Custom + React Icons | Shadcn/UI + Radix | **Shadcn/UI + Radix** |
| 3D Graphics | Three.js + R3F | None | **Optional Enhancement** |
| Animations | GSAP + Framer Motion | CSS + Framer Motion | **Framer Motion** |
| Scrolling | Lenis + Locomotive | CSS Smooth Scroll | **Lenis** |
| Package Manager | npm | pnpm | **pnpm** |
| Deployment | Vercel | Vercel | **Vercel** |

---

## 6. Feature Requirements

### 6.1 Core Features (P0 - Must Have)

#### Landing Page (Gen Z Hub)
| Feature | Description | Status |
|---------|-------------|--------|
| Hero Section | Animated intro with program branding | 11th Edition |
| Program Cards | Links to active programs (REFRAME) | 11th Edition |
| Info Cards | Community Learning, Innovation, Expert Content | 11th Edition |
| Contact Section | Email link for inquiries | 11th Edition |

#### REFRAME Page
| Feature | Description | Status |
|---------|-------------|--------|
| Hero Section | Animated title with Aurora background | 11th Edition |
| Navigation Bar | Sticky nav with smooth scroll | 11th Edition |
| Book Carousel | Showcase current & upcoming books | 11th Edition |
| Agenda Timeline | Interactive session timeline | 11th Edition |
| Facilitators | Team grid with LinkedIn links | 11th Edition |
| Registration | Embedded Microsoft Forms | 11th Edition |
| Footer | Quick links, social, contact | 11th Edition |

### 6.2 Enhanced Features (P1 - Should Have)

| Feature | Description | Source |
|---------|-------------|--------|
| Dark/Light Theme | System preference + manual toggle | 11th Edition |
| 3D Elements | Three.js for immersive visuals | 10th Edition |
| Confetti Animation | Registration success celebration | 10th Edition |
| Smooth Scrolling | Lenis/Locomotive integration | 10th Edition |
| Series Progress | Visual progress tracker | 11th Edition |
| Floating CTA | Persistent registration button | 11th Edition |

### 6.3 Future Features (P2 - Nice to Have)

| Feature | Description | Priority |
|---------|-------------|----------|
| User Dashboard | Track personal learning journey | Medium |
| Past Events Gallery | Archive of previous sessions | Medium |
| Community Forum | Discussion space for participants | Low |
| Gamification | Badges and achievements | Low |
| Multi-language | Arabic + English support | High |

---

## 7. Design System

### 7.1 Color Palette

```mermaid
graph TD
    subgraph "Primary Brand Colors"
        A["Lime #C3D534"]
        B["Turquoise #00B5AD"]
        C["Blue #0057B8"]
    end

    subgraph "Secondary Colors"
        D["Yellow #FFF06B / #F7E73F"]
        E["Light Blue #00B2E3"]
        F["Purple #9B4F96"]
        G["Pink #F4A6C9"]
    end

    subgraph "Dark Mode Accents"
        H["Sapphire #1E1A5F"]
        I["Emerald #006B54"]
        J["Amethyst #5B4B8A"]
        K["Quartz #D4006A"]
    end

    style A fill:#C3D534,color:#000
    style B fill:#00B5AD,color:#fff
    style C fill:#0057B8,color:#fff
    style D fill:#FFF06B,color:#000
    style E fill:#00B2E3,color:#fff
    style F fill:#9B4F96,color:#fff
    style G fill:#F4A6C9,color:#000
    style H fill:#1E1A5F,color:#fff
    style I fill:#006B54,color:#fff
    style J fill:#5B4B8A,color:#fff
    style K fill:#D4006A,color:#fff
```

### 7.2 Typography

| Element | Font | Weight | Size (Desktop) | Size (Mobile) |
|---------|------|--------|----------------|---------------|
| H1 | Plus Jakarta Sans | 800 (Black) | 5rem / 80px | 2.5rem / 40px |
| H2 | Plus Jakarta Sans | 700 (Bold) | 3rem / 48px | 1.5rem / 24px |
| H3 | Plus Jakarta Sans | 700 (Bold) | 1.5rem / 24px | 1.125rem / 18px |
| Body | Plus Jakarta Sans | 400 (Regular) | 1rem / 16px | 0.875rem / 14px |
| Caption | Plus Jakarta Sans | 500 (Medium) | 0.875rem / 14px | 0.75rem / 12px |
| Mono | Geist Mono | 400 | 0.875rem / 14px | 0.75rem / 12px |

### 7.3 Glassmorphism Design Tokens

```css
/* Glass Card */
--glass-bg: rgba(255, 255, 255, 0.15);
--glass-blur: blur(12px);
--glass-border: 1px solid rgba(255, 255, 255, 0.2);
--glass-radius: 16px;
--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

/* Glass Button */
--glass-btn-bg: rgba(255, 255, 255, 0.25);
--glass-btn-hover: rgba(255, 255, 255, 0.35);
--glass-btn-blur: blur(8px);
```

### 7.4 Animation Tokens

| Animation | Duration | Easing | Use Case |
|-----------|----------|--------|----------|
| Aurora | 20s | ease-in-out | Background movement |
| Float | 6s | ease-in-out | Decorative elements |
| Pulse Glow | 2s | ease-in-out | Active indicators |
| Bubble Float | 10-15s | ease-in-out | Background bubbles |
| Fade In | 700ms | ease-out | Content reveal |
| Hover Lift | 300ms | ease | Card interactions |

---

## 8. User Flows

### 8.1 Registration Flow

```mermaid
flowchart TD
    A[User Lands on Homepage] --> B{Returning User?}
    B -->|Yes| C[Sees Personalized Content]
    B -->|No| D[Views Program Overview]
    D --> E[Clicks Explore Reframe]
    C --> E
    E --> F[Browses REFRAME Page]
    F --> G[Reads Book Information]
    F --> H[Views Agenda]
    F --> I[Meets Facilitators]
    G --> J{Interested?}
    H --> J
    I --> J
    J -->|Yes| K[Clicks Register Button]
    J -->|No| L[Continues Browsing]
    K --> M[Scrolls to Form Section]
    M --> N[Fills Microsoft Form]
    N --> O[Submits Registration]
    O --> P[Receives Confirmation]
    P --> Q[Shares on LinkedIn]
```

### 8.2 Navigation Flow

```mermaid
flowchart LR
    A[Gen Z Hub] --> B[REFRAME]
    B --> C[About Section]
    B --> D[Books Carousel]
    B --> E[Agenda Timeline]
    B --> F[Team Section]
    B --> G[Registration]

    C --> D
    D --> E
    E --> F
    F --> G

    G --> H[Back to Gen Z Hub]
```

---

## 9. Visual Design Recommendations

### 9.1 Enhancements from 10th Edition to Integrate

| Feature | Description | Implementation |
|---------|-------------|----------------|
| **3D Book Covers** | Interactive 3D book visualization using Three.js | Add to Book Carousel section |
| **Particle Background** | Subtle floating particles with brand colors | Aurora Background enhancement |
| **Page Transitions** | Smooth route transitions with Framer Motion | Layout component |
| **Advanced Scroll Animations** | Parallax effects with GSAP/Lenis | All sections |
| **Confetti Celebration** | On successful registration | Registration component |
| **Slick Carousel** | Alternative carousel with touch gestures | Book Carousel |

### 9.2 New Visual Enhancements

#### Micro-interactions
- **Button Hover:** Scale + glow effect with color transition
- **Card Hover:** Lift (translateY) + enhanced shadow
- **Link Hover:** Underline animation from center
- **Form Focus:** Glow ring with brand color
- **Success State:** Confetti + checkmark animation

#### Loading States
- **Skeleton Screens:** Glass-styled placeholder animations
- **Progress Indicators:** Gradient-animated progress bars
- **Lazy Loading:** Fade-in for images and content blocks

#### Scroll Effects
- **Parallax Hero:** Background moves slower than content
- **Reveal Animations:** Elements fade/slide in on scroll
- **Progress Bar:** Reading progress indicator
- **Sticky Elements:** Navbar transparency transition

### 9.3 Accessibility Enhancements

| Area | Current | Recommended |
|------|---------|-------------|
| Focus States | Basic ring | High-contrast, visible ring |
| Color Contrast | Good | Add high-contrast mode |
| Motion | Full animations | Respect `prefers-reduced-motion` |
| Screen Readers | ARIA labels | Enhanced semantic structure |
| Keyboard Nav | Basic | Full keyboard navigation |
| Skip Links | Missing | Add skip to main content |

### 9.4 Mobile-First Improvements

```mermaid
graph TD
    subgraph "Mobile Optimizations"
        A[Touch-Friendly CTAs] --> B["Min 44px touch targets"]
        C[Swipe Gestures] --> D["Carousel swipe support"]
        E[Bottom Sheet Modals] --> F["Mobile-native patterns"]
        G[Sticky Mobile CTA] --> H["Fixed register button"]
        I[Optimized Images] --> J["WebP + lazy loading"]
    end
```

---

## 10. Implementation Roadmap

### Phase 1: Foundation (Week 1-2)
```mermaid
gantt
    title Phase 1: Foundation
    dateFormat  YYYY-MM-DD
    section Setup
    Project Setup & Config     :a1, 2026-01-28, 2d
    Merge Branch Strategy      :a2, after a1, 1d
    Design System Setup        :a3, after a2, 2d
    section Core Components
    Layout Components          :b1, after a3, 2d
    Theme System               :b2, after b1, 1d
    Base UI Components         :b3, after b2, 2d
```

### Phase 2: Feature Development (Week 3-4)
```mermaid
gantt
    title Phase 2: Features
    dateFormat  YYYY-MM-DD
    section Pages
    Landing Page              :c1, 2026-02-07, 3d
    REFRAME Page              :c2, after c1, 4d
    section Components
    Hero Section              :d1, 2026-02-07, 2d
    Book Carousel             :d2, after d1, 2d
    Agenda Timeline           :d3, after d2, 2d
    Facilitators              :d4, after d3, 1d
    Registration              :d5, after d4, 2d
```

### Phase 3: Enhancement & Launch (Week 5-6)
```mermaid
gantt
    title Phase 3: Enhancement & Launch
    dateFormat  YYYY-MM-DD
    section Enhancements
    3D Integration            :e1, 2026-02-21, 3d
    Advanced Animations       :e2, after e1, 2d
    Performance Optimization  :e3, after e2, 2d
    section Launch
    Testing & QA              :f1, 2026-02-28, 2d
    Accessibility Audit       :f2, after f1, 1d
    Production Deployment     :f3, after f2, 1d
```

---

## 11. Success Metrics

### Key Performance Indicators (KPIs)

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Lighthouse Performance** | 90+ | Google Lighthouse |
| **Core Web Vitals LCP** | <2.5s | Vercel Analytics |
| **Core Web Vitals FID** | <100ms | Vercel Analytics |
| **Core Web Vitals CLS** | <0.1 | Vercel Analytics |
| **Registration Conversion** | 25%+ | Form submissions / visits |
| **Bounce Rate** | <40% | Vercel Analytics |
| **Session Duration** | >2min | Vercel Analytics |
| **Mobile Usage** | Track % | Vercel Analytics |

### Monitoring Dashboard

```mermaid
pie title Traffic Distribution Goal
    "Desktop" : 40
    "Mobile" : 50
    "Tablet" : 10
```

---

## Appendix

### A. File Structure (Recommended)

```
GenBeta_Web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Landing)
│   ├── reframe/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── ui/ (Shadcn)
│   ├── aurora-background.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── book-carousel.tsx
│   ├── agenda-timeline.tsx
│   ├── facilitators.tsx
│   ├── registration.tsx
│   ├── footer.tsx
│   └── theme-toggle.tsx
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── public/
│   └── images/
├── docs/
│   └── PRD.md
└── package.json
```

### B. Environment Variables

```env
# Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=

# Feature Flags
NEXT_PUBLIC_ENABLE_3D=true
NEXT_PUBLIC_ENABLE_CONFETTI=true
```

### C. Dependencies (Recommended)

```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.454.0",
    "@radix-ui/react-*": "latest",
    "tailwind-merge": "^3.0.0",
    "class-variance-authority": "^0.7.0",
    "next-themes": "^0.4.0",
    "@vercel/analytics": "^1.3.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "@types/react": "^19.0.0"
  },
  "optionalDependencies": {
    "@react-three/fiber": "^9.0.0",
    "@react-three/drei": "^10.0.0",
    "three": "^0.180.0",
    "gsap": "^3.13.0",
    "lenis": "^1.3.0"
  }
}
```

---

**Document History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-28 | Gen Z Team | Initial PRD combining 10th & 11th editions |

---

*This PRD is a living document and will be updated as requirements evolve.*
