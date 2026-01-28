# Gen Z Website - Comprehensive Documentation

**Version:** 1.0.0
**Last Updated:** January 28, 2026
**Live Site:** https://gen-beta-web.vercel.app

---

## Table of Contents

1. [Overview](#1-overview)
2. [Quick Start](#2-quick-start)
3. [Project Structure](#3-project-structure)
4. [Technical Architecture](#4-technical-architecture)
5. [Pages & Routes](#5-pages--routes)
6. [Components](#6-components)
7. [Styling System](#7-styling-system)
8. [Theming](#8-theming)
9. [Animations](#9-animations)
10. [Assets](#10-assets)
11. [Deployment](#11-deployment)
12. [Development Guide](#12-development-guide)
13. [Troubleshooting](#13-troubleshooting)

---

## 1. Overview

### What is the Gen Z Website?

The Generation Z Website is Zain's digital platform for the Gen Z Program - an internal initiative empowering the next generation of leaders through hands-on experience in leadership, innovation, and continuous learning.

### Key Features

- **Landing Page**: Program overview with animated hero section
- **REFRAME Page**: Learning series focused on transformative books
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization
- **Dark/Light Theme**: System preference detection with manual toggle
- **Glassmorphism UI**: Modern glass-effect design language
- **Interactive Animations**: Mouse-tracking gradients, floating particles, hover effects

### Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 16.0.10 |
| Language | TypeScript | 5.x |
| React | React | 19.2.0 |
| Styling | Tailwind CSS | 4.1.9 |
| UI Components | Shadcn/UI | Latest |
| Icons | Lucide React | 0.454.0 |
| Theme | next-themes | 0.4.6 |
| Deployment | Vercel | - |

---

## 2. Quick Start

### Prerequisites

- Node.js 18+ or 20+ (recommended)
- pnpm, npm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ASF-Sameer/GenBeta_Web.git
cd GenBeta_Web

# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev
```

### Available Scripts

```bash
pnpm dev      # Start development server (http://localhost:3000)
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

---

## 3. Project Structure

```
GenBeta_Web/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Landing page (/)
│   ├── globals.css          # Global styles & CSS variables
│   └── reframe/
│       └── page.tsx         # REFRAME program page (/reframe)
│
├── components/               # React components
│   ├── ui/                  # Shadcn/UI components
│   │   ├── button.tsx
│   │   ├── accordion.tsx
│   │   └── ...
│   ├── genz-landing.tsx     # Main landing page component
│   ├── aurora-background.tsx # Animated gradient background
│   ├── floating-cta.tsx     # Floating call-to-action
│   ├── theme-toggle.tsx     # Dark/light mode toggle
│   └── theme-provider.tsx   # Theme context provider
│
├── hooks/                    # Custom React hooks
│   ├── use-mobile.tsx       # Mobile detection hook
│   └── use-toast.ts         # Toast notification hook
│
├── lib/                      # Utility functions
│   └── utils.ts             # cn() class merger utility
│
├── public/                   # Static assets
│   └── images/
│       ├── genz-logo.svg
│       ├── zain-logo-white.svg
│       ├── zain-pattern-bubbles.svg
│       └── reset-book-cover.svg
│
├── docs/                     # Documentation
│   ├── PRD.md               # Product Requirements Document
│   ├── DOCUMENTATION.md     # This file
│   └── VISUAL_DESIGN_RECOMMENDATIONS.md
│
├── CHANGELOG.md             # Version history
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration (if exists)
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

---

## 4. Technical Architecture

### Application Flow

```
User Request
     │
     ▼
┌─────────────────┐
│   Next.js App   │
│    Router       │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌───────┐ ┌─────────┐
│   /   │ │/reframe │
└───┬───┘ └────┬────┘
    │          │
    ▼          ▼
┌─────────────────────┐
│   Layout.tsx        │
│   (Theme Provider)  │
└──────────┬──────────┘
           │
    ┌──────┴──────┐
    ▼             ▼
┌────────┐   ┌──────────┐
│Landing │   │ REFRAME  │
│  Page  │   │   Page   │
└────────┘   └──────────┘
```

### Component Hierarchy

```
RootLayout
├── ThemeProvider
│   └── html
│       └── body
│           └── Page Content
│               ├── GenZLanding (for /)
│               │   ├── Background Gradient
│               │   ├── Floating Particles
│               │   ├── Hero Section
│               │   ├── Program Card
│               │   ├── Feature Cards
│               │   └── Footer
│               │
│               └── ReframePage (for /reframe)
│                   ├── AuroraBackground
│                   ├── Navbar
│                   ├── Hero Section
│                   ├── Book Carousel
│                   ├── Agenda
│                   ├── Facilitators
│                   ├── Registration Form
│                   ├── FAQ Accordion
│                   └── FloatingCTA
```

### Data Flow

The website is currently a static site with:
- **No backend API**: All content is hardcoded in components
- **Form submission**: Uses Microsoft Forms (external embed)
- **Analytics**: Vercel Analytics for traffic tracking

---

## 5. Pages & Routes

### Landing Page (`/`)

**File:** `app/page.tsx` → Uses `components/genz-landing.tsx`

**Sections:**
1. **Hero**: Logo, title "Generation Z", edition badge, description
2. **Stats**: Edition count, alumni count, countries
3. **Program Card**: REFRAME active program with CTA buttons
4. **Feature Cards**: Community Learning, Innovation Focus, Expert Content
5. **Branding**: Zain logo
6. **Contact**: Email link

**Features:**
- Mouse-tracking gradient background
- Staggered fade-in animations
- Floating particle effects
- Interactive hover states

### REFRAME Page (`/reframe`)

**File:** `app/reframe/page.tsx`

**Sections:**
1. **Hero**: Animated title with Aurora background
2. **About**: Program description
3. **Book Showcase**: Current book "Reset" by Dan Heath
4. **Key Insights**: Accordion with book concepts
5. **Discussion Prompts**: Questions for sessions
6. **Agenda/Timeline**: Workshop schedule
7. **Facilitators**: Team members
8. **Registration**: Microsoft Forms embed
9. **FAQ**: Common questions

**Features:**
- Smooth scroll navigation
- Floating CTA button
- Accordion for expandable content

---

## 6. Components

### Core Components

#### `GenZLanding`
Main landing page component with all hero content and animations.

```tsx
import { GenZLanding } from "@/components/genz-landing"

// Usage
<GenZLanding />
```

**Props:** None (self-contained)

#### `AuroraBackground`
Animated gradient background with flowing aurora effect.

```tsx
import { AuroraBackground } from "@/components/aurora-background"

<AuroraBackground>
  {children}
</AuroraBackground>
```

#### `FloatingCTA`
Fixed-position call-to-action button for registration.

```tsx
import { FloatingCTA } from "@/components/floating-cta"

<FloatingCTA />
```

#### `ThemeToggle`
Button to switch between dark and light themes.

```tsx
import { ThemeToggle } from "@/components/theme-toggle"

<ThemeToggle />
```

### UI Components (Shadcn/UI)

Located in `components/ui/`:

- `button.tsx` - Button with variants (default, outline, ghost, etc.)
- `accordion.tsx` - Expandable content sections
- `toast.tsx` - Notification toasts

---

## 7. Styling System

### Tailwind CSS v4

The project uses Tailwind CSS v4 with the `@tailwindcss/postcss` plugin.

**Configuration:** `postcss.config.mjs`
```javascript
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### CSS Variables

Defined in `app/globals.css`:

```css
:root {
  /* Brand Colors */
  --lime: #C3D534;
  --turquoise: #00B5AD;
  --blue: #0057B8;
  --yellow: #FFF06B;
  --purple: #9B4F96;
  --pink: #F4A6C9;

  /* Theme Colors */
  --background: #FFFFFF;
  --foreground: #000000;
  --primary: #00B5AD;
  --accent: #C3D534;
  /* ... more variables */
}

.dark {
  --background: #0a0a0a;
  --foreground: #FFFFFF;
  /* ... dark mode overrides */
}
```

### Utility Classes

#### Glassmorphism

```css
.glass         /* Basic glass effect */
.glass-dark    /* Dark variant */
.glass-card    /* Card with glass effect */
.glass-button  /* Interactive glass button */
```

#### Gradients

```css
.gradient-text         /* Turquoise to Lime text gradient */
.gradient-text-purple  /* Light Blue to Purple gradient */
```

#### Glow Effects

```css
.glow-turquoise  /* Turquoise box shadow */
.glow-lime       /* Lime box shadow */
.glow-purple     /* Purple box shadow */
.glow-blue       /* Blue box shadow */
.glow-pink       /* Pink box shadow */
```

### Class Utility Function

```typescript
// lib/utils.ts
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Usage:
```tsx
<div className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === "primary" && "primary-classes"
)} />
```

---

## 8. Theming

### Theme Provider Setup

```tsx
// app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider"

<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>
```

### Using Theme in Components

```tsx
import { useTheme } from "next-themes"

function MyComponent() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  )
}
```

### Theme-Aware Styling

```tsx
// Using Tailwind's dark: prefix
<div className="bg-white dark:bg-gray-900">
  Content
</div>

// Using CSS variables (automatically switches)
<div className="bg-background text-foreground">
  Content
</div>
```

---

## 9. Animations

### Animation Classes

| Class | Effect | Duration |
|-------|--------|----------|
| `animate-aurora` | Subtle movement | 20s |
| `animate-float` | Up/down floating | 6s |
| `animate-pulse-slow` | Slow opacity pulse | 4s |
| `animate-bubble-float` | Bubble floating | 10s |
| `animate-bubble-float-alt` | Alternate bubble | 12s |
| `animate-bubble-drift` | Drifting movement | 15s |
| `animate-shimmer` | Shimmer effect | 2s |
| `animate-gradient-shift` | Gradient color shift | 8s |

### Usage Example

```tsx
<div className="animate-pulse-slow" style={{ animationDelay: "1s" }}>
  Animated content
</div>
```

### Reduced Motion Support

All animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-aurora,
  .animate-float,
  /* ... all animation classes */ {
    animation: none;
  }
}
```

### Staggered Animations

Using Tailwind's delay utilities:

```tsx
<div className={cn(
  "transition-all duration-700 delay-100",
  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
)}>
  Content fades in with delay
</div>
```

---

## 10. Assets

### Images

All images are in `/public/images/`:

| File | Description | Format |
|------|-------------|--------|
| `genz-logo.svg` | Gen Z program logo | SVG |
| `zain-logo-white.svg` | Zain company logo (white) | SVG |
| `zain-pattern-bubbles.svg` | Decorative bubble pattern | SVG |
| `reset-book-cover.svg` | "Reset" book cover art | SVG |

### Using Images

```tsx
import Image from "next/image"

<Image
  src="/images/genz-logo.svg"
  alt="Gen Z Program"
  width={120}
  height={120}
  priority
/>
```

### Fonts

Loaded via Google Fonts in `app/layout.tsx`:

- **Plus Jakarta Sans**: Primary font (headings, body)
- **JetBrains Mono**: Monospace font (code, technical)

```tsx
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
```

---

## 11. Deployment

### Vercel (Recommended)

The site is deployed on Vercel with automatic deployments on push.

**Live URL:** https://gen-beta-web.vercel.app

### Configuration

`next.config.mjs`:
```javascript
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
}
```

### Environment Variables

Currently no environment variables are required. Future additions:

```env
# Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=

# Feature Flags (optional)
NEXT_PUBLIC_ENABLE_3D=true
```

### Manual Deployment

```bash
# Build the project
pnpm build

# The output is in .next/
# Deploy to any static hosting or Node.js server
```

---

## 12. Development Guide

### Adding a New Page

1. Create folder in `app/`:
   ```
   app/new-page/page.tsx
   ```

2. Create the page component:
   ```tsx
   export default function NewPage() {
     return (
       <main>
         <h1>New Page</h1>
       </main>
     )
   }
   ```

3. Access at `http://localhost:3000/new-page`

### Adding a New Component

1. Create file in `components/`:
   ```tsx
   // components/my-component.tsx
   export function MyComponent() {
     return <div>My Component</div>
   }
   ```

2. Import and use:
   ```tsx
   import { MyComponent } from "@/components/my-component"
   ```

### Adding Shadcn/UI Components

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

### Modifying Theme Colors

Edit `app/globals.css`:

```css
:root {
  --primary: #YOUR_COLOR;
  --accent: #YOUR_ACCENT;
}

.dark {
  --primary: #YOUR_DARK_COLOR;
}
```

### Adding New Animations

1. Define keyframes in `app/globals.css`:
   ```css
   @keyframes my-animation {
     0% { opacity: 0; }
     100% { opacity: 1; }
   }
   ```

2. Add utility class:
   ```css
   .animate-my-animation {
     animation: my-animation 1s ease-in-out;
   }
   ```

3. Don't forget reduced motion:
   ```css
   @media (prefers-reduced-motion: reduce) {
     .animate-my-animation {
       animation: none;
     }
   }
   ```

---

## 13. Troubleshooting

### Common Issues

#### Build Fails with TypeScript Errors

The config ignores TypeScript errors during build. If you want to see them:

```javascript
// next.config.mjs
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false, // Change to false
  },
}
```

#### Images Not Loading

1. Check path starts with `/images/` (relative to `public/`)
2. Verify file exists in `public/images/`
3. Check file extension matches exactly

#### Theme Not Switching

1. Ensure `ThemeProvider` wraps the app
2. Check `attribute="class"` is set
3. Verify dark mode classes are prefixed with `dark:`

#### Animations Not Working

1. Check class name spelling
2. Verify animation is defined in CSS
3. Check for `prefers-reduced-motion` settings

### Getting Help

- **Issues**: https://github.com/ASF-Sameer/GenBeta_Web/issues
- **Contact**: generationz@zain.com

---

## Appendix: Related Documents

- [PRD.md](./PRD.md) - Product Requirements Document
- [VISUAL_DESIGN_RECOMMENDATIONS.md](./VISUAL_DESIGN_RECOMMENDATIONS.md) - Design Guidelines
- [CHANGELOG.md](../CHANGELOG.md) - Version History

---

*Documentation maintained by the Gen Z Development Team*
