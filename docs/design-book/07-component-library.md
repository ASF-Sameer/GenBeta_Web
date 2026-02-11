# 07 — Component Library

**Gen Z 11th Edition 2026 — Design Book**
*Last updated: February 11, 2026*

---

## Overview

This document serves as the definitive reference for every component in the Gen Z 11th Edition website. Components are organized by function — from page-level containers down to individual UI primitives. Each entry documents file location, props, visual behavior, accessibility features, and animation details.

The component architecture follows a layered approach:

1. **Layout Components** — structural wrappers that persist across pages
2. **Page Components** — full-page compositions assembled from feature components
3. **Feature Components** — self-contained sections with specific functionality
4. **Visual Effects Components** — decorative and immersive 3D/animation layers
5. **CMS Components** — providers and wrappers for content management integration
6. **UI Primitives** — low-level building blocks (buttons, cards, inputs)
7. **Custom Hooks** — shared stateful logic

---

## 1. Layout Components

### Navbar

| Detail | Value |
|--------|-------|
| **File** | `components/navbar.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

None. The Navbar is self-contained with hardcoded navigation links: Overview, Books, Agenda, Team, Register.

#### Visual Behavior

- **Fixed positioning** at the top of the viewport (`z-50`).
- **Adaptive color scheme**: the navbar detects scroll position and switches between a navy gradient background (`from-[#1C2951] via-[#1E1A5F] to-[#0057B8]`) when over dark sections and a white background with shadow when over light sections (workshop-overview, books, agenda, team).
- **Back button**: a rounded pill linking to the landing page via `TransitionLink`, displaying "Gen Z" in gradient text with an arrow icon.
- **Mobile menu**: a hamburger/close toggle button opens a full-screen overlay dialog with a glassmorphism card containing navigation links with gradient dot indicators.

#### Accessibility

- `role="navigation"` with `aria-label="Main navigation"` on the `<nav>` element.
- Mobile menu uses `role="dialog"`, `aria-label="Site navigation menu"`, and `aria-modal="true"`.
- Menu toggle has `aria-label` ("Open menu" / "Close menu") and `aria-expanded` state.
- All interactive elements have visible `focus:ring-2 focus:ring-[#00B5AD]` focus indicators.
- Clicking the backdrop closes the menu.

#### Animations

- Background color transitions smoothly (`transition-all duration-300`).
- No motion-reduced alternatives needed — transitions are CSS-only and non-disruptive.

---

### Footer

| Detail | Value |
|--------|-------|
| **File** | `components/footer.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

None. Content is hardcoded with social links (LinkedIn, YouTube, Instagram, X/Twitter), quick navigation links, and workshop event details.

#### Visual Behavior

- Wrapped in `AuroraBackground` with `variant="hero"` for gradient continuity.
- **Three-column grid** layout (stacks on mobile):
  - **Brand column**: description text, social media icon buttons (glassmorphism circles), and a "Share on LinkedIn" pill button.
  - **Quick Links column**: navigation links with lime arrow indicators and hover slide effect.
  - **Event Details column**: date, time, location, and email with Lucide icons.
- **Bottom bar**: copyright notice and "Part of the Gen Z 2026 Program" tagline, separated by a `border-t border-white/10` divider.

#### Accessibility

- `role="contentinfo"` with `aria-label="Site footer"` on the `<footer>` element.
- Footer navigation wrapped in `<nav aria-label="Footer navigation">`.
- All external links have `target="_blank"` with `rel="noopener noreferrer"` and descriptive `aria-label` attributes including "(opens in new tab)".
- Social icons use `aria-hidden="true"` on SVGs with `aria-label` on parent anchors.
- Focus rings on all interactive elements.

#### Animations

- CSS-only hover transitions (`hover:pl-2`, `hover:text-white`). No JavaScript animations.

---

### SmoothScrollProvider

| Detail | Value |
|--------|-------|
| **File** | `components/smooth-scroll-provider.tsx` |
| **Type** | Client Component (`"use client"`) — Context Provider |

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Child components to wrap |

#### Context API

Exposes `useSmoothScroll()` hook returning:
- `lenis` — the Lenis instance (or `null`)
- `scrollToTop()` — instantly scrolls to top, resetting both Lenis and native scroll

#### Visual Behavior

- Dynamically imports [Lenis](https://github.com/darkroomengineering/lenis) for buttery-smooth scroll physics.
- Configuration: `duration: 1.2`, custom easing (`1.001 - 2^(-10t)`), vertical orientation, `smoothWheel: true`, `touchMultiplier: 2`.
- Attaches the Lenis instance to `window.__lenis` for debugging.

#### Accessibility

- **Respects `prefers-reduced-motion: reduce`**: if the user has reduced motion enabled, Lenis is never initialized and the browser's native scroll behavior is preserved.
- Cleanup on unmount destroys the Lenis instance and clears the global reference.

#### Animations

- Lenis provides continuous scroll interpolation via `requestAnimationFrame`. All scroll-linked animations inherit this smoothing automatically.

---

## 2. Page Components

### LandingPage

| Detail | Value |
|--------|-------|
| **File** | `components/landing-page.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props (`LandingPageProps`)

| Prop | Type | Default Fallback | Description |
|------|------|-------------------|-------------|
| `sanityTeamMembers` | `TeamMember[]` | 6 hardcoded team members | Team grid data |
| `sanityPillars` | `Pillar[]` | 5 program pillars (AI, Resilience, Creative Thinking, Leadership, Systems Thinking) | Program pillar cards |
| `sanityPrograms` | `Program[]` | 1 program (Reframe) | Our Programs section |
| `sanityPreviousEditions` | `PreviousEdition[]` | 10 editions (2016–2025) | Previous Gen Z editions carousel |
| `sanityGalleryImages` | `string[]` | 12 gallery images | Photo gallery carousel |
| `sanityFooter` | `FooterData` | Default social/copyright data | Footer content |
| `sanityHero` | `HeroSection` | Empty (uses component defaults) | Hero section text |
| `sanityAbout` | `AboutSection` | Empty (uses component defaults) | About section content |
| `sectionTitles` | `SectionTitles` | Component defaults | Section heading overrides |

#### Visual Behavior

The landing page is a single continuous scroll composed of these sections:
1. **Hero** — full-screen with animated text entrance, gradient title, CTA buttons
2. **About** — program description with Gen Z logo
3. **Program Pillars** — 5 glassmorphism cards in a responsive grid with gradient overlays and glow shadows
4. **Our Programs** — program cards with book cover images and "Learn More" CTA
5. **Meet the Team** — 6 member cards with circular avatar photos, email, and LinkedIn links
6. **Previous Editions** — horizontal carousel of 10 editions (2016–2025) with chevron navigation and touch/swipe support
7. **Gallery** — auto-rotating image carousel (4-second interval) with responsive items-per-view (1/2/3), touch gestures, and mobile dot indicators

Each section uses `motion.div` with `whileInView` viewport detection for scroll-triggered entrance.

#### Sub-components (internal)

- `PillarCard` — glassmorphism card with gradient overlay, optional `TransitionLink` wrapping
- `ProgramCard` — horizontal card with image + text, `TransitionLink` navigation
- `TeamMemberCard` — circular avatar, name, role, email, LinkedIn
- `GalleryCarousel` — image carousel with auto-advance, prev/next buttons, touch support, dot indicators

#### Accessibility

- All sections use `aria-labelledby` linking to heading IDs.
- Cards use `role="article"` with `aria-labelledby`.
- Images have descriptive `alt` text (e.g., "Portrait of {name}").
- Navigation carousels have `aria-label` on prev/next buttons and dot indicators.
- External links include `rel="noopener noreferrer"` and "(opens in new tab)" in `aria-label`.
- Focus rings (`focus:ring-2 focus:ring-[#00B5AD]`) on all interactive elements.

#### Animations

- **Container stagger**: children appear sequentially with `staggerChildren: 0.06`, `delayChildren: 0.05`.
- **Item entrance**: `opacity: 0 → 1`, `y: 15 → 0` over 350ms with custom easing `[0.25, 0.46, 0.45, 0.94]`.
- **Hover effects**: pillar cards scale to `1.02` on hover.
- **Reduced motion**: all Framer Motion variants replaced with static `{ opacity: 1, y: 0 }` when `useReducedMotion()` returns true.

---

### InteractiveWorkshopPage

| Detail | Value |
|--------|-------|
| **File** | `components/interactive-workshop-page.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `workshop` | `WorkshopData` | Full workshop configuration from Sanity CMS |

The `WorkshopData` interface includes:
- `heroSection` — badge, title, subtitle, background image URL
- `aboutSection` — title, Portable Text description, highlights, image
- `benefitsSection` — title, subtitle, benefit cards with icons
- `attendeesSection` — title, subtitle, attendee type cards with icons
- `timingSection` — title, detail cards (icon, label, value)
- `readingJourneySection` — title, subtitle, array of `Book` objects
- `sessionFlowSection` — badge, title, subtitle, session timeline
- `facilitatorsSection` — title, subtitle, facilitator profiles
- `reserveSpotSection` — title, subtitle, CTA text
- `registrationSection` — title, subtitle, form embed URL, form height

#### Visual Behavior

- **Two-state view** using `AnimatePresence`: the page toggles between the workshop content and a book detail view.
- **Book selection flow**: clicking a `SelectableBookCard` triggers a slide transition (`x: -100 → 0` for entering, `x: 0 → 100` for exiting) and scrolls to top.
- **Auto-select**: the primary book (`isPrimary: true`) is automatically selected on initial load.
- **Icon mapping**: a `getIcon()` utility maps string names (`clock`, `mappin`, `users`, etc.) to Lucide icon components.

#### Internal Sections

- `HeroSection` — full-bleed hero with optional background image, badge pill, gradient title
- `AboutSection` — two-column grid with Portable Text and optional image
- `BenefitsSection` — 3-column grid of icon + text cards
- `AttendeesSection` — 3-column grid with blue gradient icons
- `TimingSection` — 4-column detail cards
- `ReadingJourneySection` — book card grid with selection state; shows "Books will be announced soon!" empty state when no books exist
- `SessionFlowSection` — timeline of session events
- `FacilitatorsSection` — facilitator profile grid
- `ReserveSpotSection` — CTA section
- `RegistrationSection` — form embed

#### Accessibility

- Sections use `aria-labelledby` with heading IDs.
- `AnimatePresence` transitions respect `prefersReducedMotion` (animations disabled when true).
- Highlight items include `<span className="sr-only">Included: </span>` for screen readers.

#### Animations

- **Page transitions**: slide left/right with opacity fade (300ms).
- **Section entrance**: staggered `whileInView` with `viewport={{ once: true, margin: "-100px" }}`.
- **Item entrance**: `opacity: 0 → 1`, `y: 20 → 0` over 500ms.
- **Reduced motion**: all variants replaced with static values.

---

## 3. Feature Components

### Hero

| Detail | Value |
|--------|-------|
| **File** | `components/hero.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"REFRAME"` | Hero title (displayed uppercase) |
| `subtitle` | `string` | Default description text | Subtitle paragraph |

#### Visual Behavior

- Wrapped in `AuroraBackground` with `variant="hero"`, creating a full-screen animated gradient backdrop.
- Title displays in two lines: the main title in lime-to-yellow gradient, "AT ZAIN" in turquoise-to-lime gradient.
- CTA button with turquoise-to-blue gradient, rounded-full, links to `#register`.
- Scroll indicator appears after 2 seconds with a bouncing chevron.

#### Accessibility

- `<span className="sr-only">Reframe at Zain - Gen Z Program</span>` provides the full title for screen readers.
- Decorative text elements use `aria-hidden="true"`.
- Scroll indicator is `aria-hidden="true"`.
- CTA button has focus ring with offset for dark background.
- Section has `aria-label="Hero section"`.

#### Animations

- CSS `transition-all duration-700` with staggered delays (100ms, 300ms, 400ms) for title, description, and CTA.
- `isVisible` state triggers entrance animations on mount.
- Scroll indicator uses `animate-bounce` CSS animation.

---

### BookCarousel

| Detail | Value |
|--------|-------|
| **File** | `components/book-carousel.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

None. Contains hardcoded book data (Reset as current, two "Coming Soon" entries).

#### Visual Behavior

- Horizontal card carousel with glassmorphism book cards.
- Each card shows cover image (or gradient fallback), title, author, date, description, and a status badge ("NOW READING", "UP NEXT", "COMING SOON").
- Chevron navigation buttons with disabled states at boundaries.
- Touch/swipe support via `onTouchStart`, `onTouchMove`, `onTouchEnd` handlers (50px threshold).

#### Accessibility

- Navigation buttons have `aria-label` ("Previous book", "Next book").
- Status badges use color-coded backgrounds for visual distinction.
- Focus rings on all interactive elements.

#### Animations

- CSS `transition-transform duration-500 ease-out` for slide movement.

---

### AgendaTimeline

| Detail | Value |
|--------|-------|
| **File** | `components/agenda-timeline.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

None. Contains hardcoded agenda items with time, title, description, and color coding.

#### Visual Behavior

- Vertical timeline with colored left borders (`border-l-4`) and accent dots.
- Each item has a time stamp, title, and description.
- Items animate in sequentially using Intersection Observer.
- Color progression: lime → turquoise → sky blue → purple → pink → yellow.

#### Accessibility

- Section uses `aria-labelledby` with heading ID.
- Timeline items use semantic HTML structure.

#### Animations

- Intersection Observer triggers per-item entrance animations.
- Items slide in from the left with opacity fade.

---

### Facilitators

| Detail | Value |
|--------|-------|
| **File** | `components/facilitators.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

None. Contains hardcoded facilitator data (6 team members with images, emails, LinkedIn URLs).

#### Visual Behavior

- Responsive grid of facilitator cards (1 column on mobile, 2 on tablet, 3 on desktop).
- Each card features a circular avatar with a gradient border ring, name, and contact links.
- Gradient border colors rotate through the brand palette for visual variety.

#### Accessibility

- Email links have descriptive `aria-label` attributes.
- LinkedIn links include "(opens in new tab)" in `aria-label`.
- Focus rings on all interactive elements.

#### Animations

- CSS hover transitions on cards and links.

---

### Registration

| Detail | Value |
|--------|-------|
| **File** | `components/registration.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

None. Contains hardcoded event info and Microsoft Forms embed URL.

#### Visual Behavior

- Two-column layout: event summary (left) and registration form (right).
- **Mobile**: shows a direct link button to open the MS Forms page externally.
- **Desktop**: embeds the MS Forms iframe (`height: 520px`, `minHeight: 480px`) with a fallback "Having trouble? Register here" link below.
- Event summary shows date, time, location, facilitator, and availability in a glass card with lime left-border accents.

#### Accessibility

- Section uses `aria-labelledby="register-heading"`.
- Event details list uses `aria-label="Event details"`.
- External links include `aria-label` with "(opens in new tab)".
- Form iframe has `title="Reframe Registration Form"`.
- Focus rings on all interactive elements.
- Terms text at the bottom informs users about attendance expectations.

#### Animations

None — static component for reliability.

---

### WorkshopOverview

| Detail | Value |
|--------|-------|
| **File** | `components/workshop-overview.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

None. Contains hardcoded benefits, attendee types, and workshop details.

#### Visual Behavior

- Multi-section layout covering workshop benefits (4 cards), target attendees (3 cards), and logistical details (4 items).
- Cards use glassmorphism styling with gradient accents.

#### Accessibility

- Section headings provide structure.
- Cards use semantic HTML.

#### Animations

- CSS hover transitions on cards.

---

### SelectableBookCard

| Detail | Value |
|--------|-------|
| **File** | `components/selectable-book-card.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `book` | `Book` | Book data object |
| `onSelect` | `(book: Book) => void` | Selection callback |
| `isSelected` | `boolean` | Whether this card is currently selected |

#### Visual Behavior

- Clickable card that functions as a toggle button.
- **Cover image**: shows book cover or a gradient placeholder with `BookOpen` icon if undecided.
- **Selected state**: lime border with ring glow, checkmark badge in top-right corner.
- **Featured badge**: `isPrimary` books show a yellow "Featured" pill badge (top-left) when not selected.
- **Hover overlay**: "Tap to explore" text fades in over the cover image.
- **Undecided books**: show "Coming soon..." italic text instead of author name.

#### Accessibility

- Uses `<motion.button>` (not a div) — fully keyboard-accessible.
- `aria-pressed` reflects selection state.
- `aria-label` includes book title, author (if present), and "(selected)" when active.
- Focus ring with turquoise color and dark offset.

#### Animations

- **Hover**: scales to `1.02` and lifts `y: -5`.
- **Tap**: scales to `0.98`.
- **Cover image**: `group-hover:scale-105` zoom transition (300ms).
- **Reduced motion**: hover/tap animations disabled.

---

### BookDetailSection

| Detail | Value |
|--------|-------|
| **File** | `components/book-detail-section.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `book` | `Book` | Full book data including popup content, files, and links |
| `onBack` | `() => void` | Callback to return to the reading journey |
| `workshopTitle` | `string` | Workshop name (default: `"Reframe"`) |

#### Visual Behavior

- **Undecided state**: shows a centered placeholder with `BookOpen` icon, book title, placeholder message (or "Stay tuned!"), and a "Check back soon" note.
- **Decided state**: two-column layout (sidebar + main content):
  - **Sidebar** (sticky): book cover image (3:4 aspect ratio), title, author in lime, short description.
  - **Main content**: headline in gradient text, Portable Text description, duration/format pills, workshop details card, key takeaways with checkmark icons, downloadable resource cards with gradient download icons, and related link buttons.
- Back button at top and bottom with arrow icon and hover translation.

#### Accessibility

- Back button has focus ring with offset.
- Download links are styled as full-width interactive cards.
- External links use `target="_blank"` with `rel="noopener noreferrer"`.
- All interactive elements have focus rings.

#### Animations

- **Staggered entrance**: container uses `staggerChildren: 0.1`, items animate `opacity: 0 → 1`, `y: 20 → 0` over 500ms.
- **Back button**: arrow translates left on hover (`group-hover:-translate-x-1`).
- **Reduced motion**: all variants replaced with static values.

---

## 4. Visual Effects Components

### AuroraBackground

| Detail | Value |
|--------|-------|
| **File** | `components/aurora-background.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"hero" \| "coral" \| "lime" \| "azure" \| "midnight"` | `"hero"` | Color scheme |
| `className` | `string` | `""` | Additional CSS classes |
| `children` | `ReactNode` | — | Content to render on top |

#### Visual Behavior

- **Base gradient**: vertical `bg-gradient-to-b` with variant-specific colors. The `hero` variant uses `#1E1A5F → #0057B8 → #00B5AD`.
- **Particle dots** (hero only): 40 randomly positioned `1px` white dots with staggered `animate-pulse` CSS animations.
- **Animated bubbles** (hero only): 7 circular elements of varying sizes (80px–500px) with `border border-white/10` or `bg-white/5`, using custom CSS animations (`animate-bubble-float`, `animate-bubble-float-alt`, `animate-bubble-drift`). Smaller bubbles hidden on mobile.
- **Zain pattern**: SVG bubble pattern overlaid in top-right and bottom-left corners with reduced opacity (30% and 15%).
- **Mouse-following glow** (hero, desktop only): a 300px blurred circle that tracks cursor position with 1-second ease-out transition.
- **Grain texture**: subtle SVG noise overlay at 2% opacity.

#### Accessibility

- All decorative layers use `aria-hidden="true"`.
- Pattern images use `alt=""`.
- Mouse-following glow hidden on mobile (`hidden lg:block`).

#### Animations

- Particle dots: CSS `animate-pulse` with random delays (0–3s) and durations (2–4s).
- Bubbles: custom CSS keyframe animations for floating and drifting.
- Mouse glow: `transition-all duration-1000 ease-out`.

---

### FloatingCube

| Detail | Value |
|--------|-------|
| **File** | `components/floating-cube.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | — | Navigation target on click |
| `color` | `string` | `"#C3D534"` | Cube material color |
| `emissiveColor` | `string` | `"#C3D534"` | Emissive glow color |

#### Visual Behavior

- Uses `@react-three/fiber` Canvas with `@react-three/drei` Float wrapper.
- Renders a `1.4 × 1.4 × 1.4` box geometry with `MeshStandardMaterial` and emissive glow.
- Wrapped in `<Float>` for gentle bobbing motion (`speed: 1.8`, `rotationIntensity: 0.4`, `floatIntensity: 0.9`).
- Continuous rotation on X and Y axes via `useFrame`.
- Clickable — navigates to `href` using Next.js router.
- Cursor changes to pointer on hover.

#### Accessibility

- 3D canvas is decorative; not keyboard-navigable.
- Wrapped in `<Suspense>` with fallback for loading states.

#### Animations

- Continuous rotation: X axis at `delta * 0.5`, Y axis at `delta * 0.4` per frame.
- Float: gentle sine-wave bobbing via `@react-three/drei` Float component.

---

### ParticleField

| Detail | Value |
|--------|-------|
| **File** | `components/particle-field.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | `100` | Number of particles |
| `color` | `string` | `"#ffffff"` | Particle color |

#### Visual Behavior

- Uses `@react-three/fiber` Canvas to render a `THREE.Points` cloud.
- Particles are randomly distributed in a 20 × 20 × 10 unit volume.
- Point size: `0.03` with `sizeAttenuation`, opacity `0.4`.
- Gentle rotation: Y axis tracks elapsed time (`* 0.02`), X axis oscillates via sine wave (`* 0.05`).

#### Accessibility

- Purely decorative — no interactive elements.

#### Animations

- Continuous gentle rotation driven by `useFrame` clock.
- Positions computed once via `useMemo` for performance.

---

## 5. CMS Components

### CMSThemeProvider

| Detail | Value |
|--------|-------|
| **File** | `components/cms-theme-provider.tsx` |
| **Type** | Client Component (`"use client"`) — Context Provider |

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `theme` | `ThemeSettings \| null` | CMS theme configuration |
| `children` | `ReactNode` | Child components |

#### Theme Settings Structure

```typescript
interface ThemeSettings {
  colors?: {
    primary?: string      // default: "#C3D534" (lime)
    secondary?: string    // default: "#F7E73F" (yellow)
    accent?: string       // default: "#00B5AD" (turquoise)
    navyDark?: string     // default: "#1E1A5F"
    navyLight?: string    // default: "#1C2951"
    blue?: string         // default: "#0057B8"
  }
  fonts?: {
    headingFont?: string  // default: "zain"
    bodyFont?: string     // default: "zain"
  }
  gradients?: {
    heroGradientStart?: string   // default: "#1E1A5F"
    heroGradientEnd?: string     // default: "#0057B8"
    cardGradientStart?: string   // default: "#1C2951"
    cardGradientEnd?: string     // default: "#0057B8"
  }
}
```

#### Visual Behavior

- Merges CMS-provided theme with defaults (CMS values override defaults).
- Sets CSS custom properties on `document.documentElement`:
  - `--color-primary`, `--color-secondary`, `--color-accent`
  - `--color-navy-dark`, `--color-navy-light`, `--color-blue`
  - `--font-heading`, `--font-body` (mapped to CSS `font-family` values)
  - `--gradient-hero-start`, `--gradient-hero-end`, `--gradient-card-start`, `--gradient-card-end`
- Supports 10 font families: Zain, Inter, Poppins, Montserrat, Playfair, Space Grotesk, Open Sans, Lato, Source Sans, Roboto.

#### Exported Hooks

- `useCMSTheme()` — returns the full merged `ThemeSettings`
- `useCMSThemeColors()` — returns merged color values
- `useCMSThemeGradients()` — returns merged gradient values

---

### TransitionLink

| Detail | Value |
|--------|-------|
| **File** | `components/transition-link.tsx` |
| **Type** | Client Component (`"use client"`) |

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `href` | `string` | Navigation target |
| `children` | `ReactNode` | Link content |
| `className` | `string` | CSS classes |
| `ariaLabel` | `string` | Accessible label |
| `onClick` | `() => void` | Additional click handler |

#### Visual Behavior

- Renders a standard `<a>` tag.
- For internal routes (not starting with `http`, `mailto:`, or `#`): prevents default navigation and uses the `PageTransitionProvider` context to trigger a page transition animation before navigating.
- For external URLs, hash links, and mailto links: falls through to default browser behavior.
- During transitions, `pointerEvents` is set to `"none"` to prevent double-clicks.

#### Accessibility

- Passes `aria-label` to the underlying anchor.
- Functions as a standard link for keyboard and assistive technology users.

---

## 6. UI Primitives

### Button (`components/ui/button.tsx`)

The primary button primitive built with `class-variance-authority` (CVA) for variant management.

#### Variants

- **default**: primary gradient styling
- **destructive**: red/danger styling
- **outline**: bordered, transparent background
- **secondary**: secondary color styling
- **ghost**: transparent with hover background
- **link**: text-only with underline

#### Sizes

- `default`, `sm`, `lg`, `icon`

#### Features

- Supports `asChild` prop via Radix `Slot` for rendering as child element.
- Integrates with Tailwind CSS via `cn()` utility.
- All variants include focus ring styles.

---

## 7. Custom Hooks

### useIsMobile

| Detail | Value |
|--------|-------|
| **File** | `hooks/use-mobile.ts` |
| **Export** | `useIsMobile()` |

#### Return Value

`boolean` — `true` when viewport width is below 768px.

#### Behavior

- Uses `window.matchMedia` with a `(max-width: 767px)` query.
- Listens for `change` events on the media query for real-time updates.
- Initial state is `undefined` (falsy) until the first client-side measurement.
- Returns `!!isMobile` to coerce to boolean.

---

### useToast

| Detail | Value |
|--------|-------|
| **File** | `hooks/use-toast.ts` |
| **Export** | `useToast()`, `toast()` |

#### Return Value

- `toasts` — array of active toast notifications
- `toast()` — function to create a new toast
- `dismiss()` — function to dismiss a specific or all toasts

#### Behavior

- Reducer-based state management with actions: `ADD_TOAST`, `UPDATE_TOAST`, `DISMISS_TOAST`, `REMOVE_TOAST`.
- Toast limit: 1 (only one toast visible at a time).
- Auto-generated unique IDs.
- Integrates with `@/components/ui/toast` for rendering.
- Inspired by `react-hot-toast` library patterns.

---

## Component Dependency Map

```
LandingPage
├── TransitionLink
├── Button
├── PillarCard → TransitionLink
├── ProgramCard → TransitionLink
├── TeamMemberCard
└── GalleryCarousel

InteractiveWorkshopPage
├── SelectableBookCard
├── BookDetailSection
│   └── Button
├── Button
└── PortableText

Hero
├── AuroraBackground
├── Button
└── ChevronDown (Lucide)

Footer
└── AuroraBackground

App Layout
├── CMSThemeProvider
├── SmoothScrollProvider
├── PageTransitionProvider
├── Navbar
│   └── TransitionLink
└── Footer
```

---

## Naming Conventions

| Pattern | Example | Usage |
|---------|---------|-------|
| PascalCase | `LandingPage` | Component names |
| camelCase | `useIsMobile` | Hooks and utilities |
| kebab-case | `landing-page.tsx` | File names |
| UPPER_SNAKE | `MOBILE_BREAKPOINT` | Constants |

---

*This document is part of the Gen Z 11th Edition Design Book. For related documents, see the [Design Book Reference Guide](./08-stakeholder-guide.md#4-design-book-reference-guide).*
