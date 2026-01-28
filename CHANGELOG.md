# Changelog

All notable changes to the Gen Z Website project are documented in this file.

## [1.0.0] - 2026-01-28

### Project Initialization

#### Merged Codebases
- Combined **Gen Z 10th Edition** (Vite + React 19) with **Gen Z 11th Edition** (Next.js 16)
- Selected Next.js 16 as the primary framework for better SSR, SEO, and deployment capabilities
- Preserved design elements and color palette from both editions

#### Technology Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **UI Components**: Shadcn/UI + Radix UI primitives
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode support
- **Deployment**: Vercel

### New Features

#### Landing Page (`/`)
- Interactive gradient background that responds to mouse movement
- Animated floating particles and gradient orbs
- Staggered fade-in animations on page load
- Quick stats section (11 Editions, 500+ Alumni, 8 Countries)
- Program card with shimmer hover effect
- Feature cards with glow effects on hover
- Zain branding footer with logo
- Fully responsive design (mobile, tablet, desktop)

#### REFRAME Program Page (`/reframe`)
- Comprehensive program overview
- Book showcase for "Reset" by Dan Heath
- Key insights accordion
- Discussion prompts section
- Registration form with validation
- FAQ section
- Floating CTA for registration

### Design System

#### Brand Colors
```css
/* Light Mode Accents */
--lime: #C3D534
--light-blue: #00B2E3
--yellow: #FFF06B
--turquoise: #00B5AD
--purple: #9B4F96
--pink: #F4A6C9
--blue: #0057B8

/* Dark Mode Accents */
--emerald: #006B54
--amethyst: #5B4B8A
--quartz: #D4006A
--sapphire: #1E1A5F
```

#### Glassmorphism Effects
- `.glass` - Basic glass effect with blur
- `.glass-dark` - Dark variant for dark mode
- `.glass-card` - Glass card with rounded corners and shadow
- `.glass-button` - Interactive glass button with hover states

#### Animations
- `animate-aurora` - Subtle background movement
- `animate-float` - Floating up and down
- `animate-pulse-slow` - Slow opacity pulsing
- `animate-bubble-float` - Bubble floating animation
- `animate-bubble-float-alt` - Alternate bubble animation
- `animate-bubble-drift` - Drifting bubble animation
- `animate-shimmer` - Shimmer effect for cards
- `animate-gradient-shift` - Gradient color shifting

### Assets

#### SVG Images Created
- `/public/images/genz-logo.svg` - Gen Z program logo
- `/public/images/zain-logo-white.svg` - Zain company logo (white)
- `/public/images/zain-pattern-bubbles.svg` - Decorative bubble pattern
- `/public/images/reset-book-cover.svg` - Dan Heath's "Reset" book cover

### Components

#### New Components
- `GenZLanding` - Main landing page component
- `ReframePage` - REFRAME program page
- `FloatingCTA` - Floating call-to-action button
- `ThemeToggle` - Dark/light mode toggle
- `AuroraBackground` - Animated gradient background

#### UI Components (Shadcn/UI)
- Button
- Accordion
- Form components
- Toast notifications

### Bug Fixes

#### Deployment Issues Resolved
1. **404 Error**: Fixed by merging code to correct branch
2. **pnpm-lock.yaml**: Removed corrupted lock file
3. **Image Paths**: Fixed references from `.png` to `.svg`
4. **Font Error**: Replaced unavailable `Geist_Mono` with `JetBrains_Mono`
5. **Component Casing**: Fixed `FloatingCta` → `FloatingCTA` mismatch

### Documentation

#### Files Created
- `docs/PRD.md` - Product Requirements Document with Mermaid diagrams
- `docs/VISUAL_DESIGN_RECOMMENDATIONS.md` - Visual design guidelines
- `CHANGELOG.md` - This file

### Configuration

#### Next.js Configuration
```javascript
// next.config.mjs
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
```

#### Fonts
- **Primary**: Plus Jakarta Sans (via Google Fonts)
- **Monospace**: JetBrains Mono (via Google Fonts)

---

## Contributing

When adding changes, please update this changelog following the format above.

### Commit Convention
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Test additions or changes
- `chore:` - Maintenance tasks

---

## Links

- **Live Site**: https://gen-beta-web.vercel.app
- **Repository**: https://github.com/ASF-Sameer/GenBeta_Web
