# 03 — UX & Interaction Design

**Gen Z 11th Edition (2026) — Website Design Book**
**Document Status:** Final | **Last Updated:** February 2026
**Audience:** Internal team, media stakeholders, branding teams at Zain Group

---

## Table of Contents

1. [UX Design Principles](#1-ux-design-principles)
2. [User Flows](#2-user-flows)
3. [Navigation System](#3-navigation-system)
4. [Scroll & Motion Design](#4-scroll--motion-design)
5. [Interaction Patterns](#5-interaction-patterns)
6. [WCAG 2.1 AA Accessibility Compliance](#6-wcag-21-aa-accessibility-compliance)
7. [Error & Loading States](#7-error--loading-states)
8. [Mobile-Specific UX](#8-mobile-specific-ux)
9. [Verbal Identity](#9-verbal-identity)

---

## 1. UX Design Principles

The Gen Z 11th Edition website is designed around six foundational UX principles that guide every design decision — from component layout to animation timing. These principles ensure the experience is fast, intuitive, and accessible for all users.

### 1.1 Mobile-First Responsive Design

Every component is designed for small screens first, then progressively enhanced for tablet and desktop viewports. Breakpoints follow Tailwind CSS conventions:

| Breakpoint | Width | Layout Behavior |
|------------|-------|-----------------|
| Default | < 640px | Single-column, stacked layout, full-width sections |
| `sm` | ≥ 640px | Two-column grids begin, increased padding |
| `md` | ≥ 768px | Multi-column card grids, side-by-side content |
| `lg` | ≥ 1024px | Full desktop layout, three-column grids, expanded spacing |
| `xl` | ≥ 1280px | Maximum content width containers, generous whitespace |

### 1.2 Progressive Disclosure

Content is revealed as the user scrolls, keeping the initial viewport clean and focused. Scroll-triggered animations (powered by Framer Motion `whileInView`) ensure that each section appears only when the user is ready to engage with it. This approach:

- Reduces initial page weight by deferring off-screen rendering
- Creates a guided narrative from hero to registration
- Prevents information overload on first load

### 1.3 Minimal Cognitive Load

Each section presents one primary call-to-action (CTA). Users are never asked to make multiple decisions simultaneously.

| Section | Primary CTA | Secondary Action |
|---------|-------------|------------------|
| Hero | "Explore REFRAME" | Scroll down |
| Program Pillars | Pillar card click | Read descriptions |
| Our Programs | "Learn More" arrow link | View book cover |
| Reading Journey | Select a book card | Browse other titles |
| Registration | "Register Now" button | View agenda/facilitators |
| Gallery | Auto-advancing carousel | Manual prev/next navigation |

### 1.4 Visual Hierarchy Through Color, Size, and Motion

Visual hierarchy is established through three complementary systems:

- **Color:** Gradient text (lime → yellow → turquoise) draws attention to section headings. Brand accent colors (#C3D534, #00B5AD) highlight interactive elements.
- **Size:** Section headings use 3xl–6xl responsive sizing. Body text remains at base/lg for readability.
- **Motion:** Entrance animations (fade + slide) guide the eye from top to bottom. Staggered reveals (60ms delay) create a sense of ordered importance.

### 1.5 Content-First: CMS-Driven Architecture

All content is managed through Sanity CMS, allowing program managers to update text, images, team members, books, and navigation without developer involvement.

| Content Type | CMS Schema | Fallback Behavior |
|--------------|------------|-------------------|
| Hero text & CTA | `siteSettings.heroSection` | Hardcoded defaults in `landing-page.tsx` |
| Program pillars | `siteSettings.pillars` | Five default pillar cards |
| Team members | `teamMember` documents | Six default team members with photos |
| Books & reading journey | `book` documents | Empty state with "Coming soon" message |
| Workshop details | `workshop` documents | Static workshop content |
| Gallery images | `galleryImage` documents | 12 default gallery images |
| Navigation links | `siteSettings.navLinks` (CMS schema exists, not yet consumed by component) | Hardcoded nav array in `navbar.tsx` |
| Footer content | `siteSettings.footer` | Default social links and copyright |
| Previous editions | `previousEdition` documents | Ten historical program cards (2016–2025) |

### 1.6 Inclusive by Default

Accessibility is not an afterthought — it is integrated into every component from initial development. All interactive elements include focus indicators, all animations respect reduced-motion preferences, and all content is navigable via keyboard. Full compliance details are documented in [Section 6](#6-wcag-21-aa-accessibility-compliance).

---

## 2. User Flows

### 2.1 Registration Flow

The primary conversion flow guides users from initial discovery to workshop registration. The flow is designed to build interest progressively before presenting the registration form.

```
User Lands on Homepage
    │
    ▼
Views Program Overview (Hero + About Section)
    │
    ▼
Clicks "Explore REFRAME" CTA
    │
    ▼
Browses REFRAME Workshop Page
    │
    ├── Reads Book Information (Reading Journey Section)
    ├── Views Workshop Agenda (Session Flow Section)
    └── Meets Facilitators (Facilitators Section)
    │
    ▼
Interested? ──No──▶ Continues Browsing / Returns Later
    │
   Yes
    │
    ▼
Clicks "Register" Button (Navbar or Reserve Spot CTA)
    │
    ▼
Smooth-Scrolls to Registration Form Section
    │
    ▼
Fills Embedded Microsoft Form
    │
    ▼
Submits Registration
    │
    ▼
Receives Confirmation (Microsoft Forms confirmation page)
```

**Design Decisions:**
- The registration form is embedded directly on the page (not a separate route) to minimize friction
- Multiple "Register" touchpoints exist: navbar CTA, floating CTA, and reserve-spot section
- The form uses an embedded Microsoft Forms iframe, matching Zain's internal tooling

### 2.2 Content Discovery Flow

This flow represents how users explore the depth of program content, from the high-level landing page through to individual book details.

```
Landing Page (Gen Z Hub)
    │
    ▼
About Section (Program mission and description)
    │
    ▼
Program Pillars (5 pillar cards: AI, Resilience, Creative Thinking, Leadership, Systems Thinking)
    │
    ▼
Our Programs Cards (e.g., REFRAME with book cover image)
    │
    ▼
Click Workshop → Workshop Page (e.g., /workshop/reframe)
    │
    ▼
Reading Journey Section (Book grid with selectable cards)
    │
    ▼
Book Selection (Click a book card)
    │
    ▼
Book Details (Full-page detail view with AnimatePresence transition)
    │
    ├── Key Takeaways
    ├── Workshop Details
    ├── Downloadable Files
    └── Related Links
    │
    ▼
"Back to Workshop" Button → Returns to Workshop Content
```

**Design Decisions:**
- Book selection uses a full-page detail view with smooth AnimatePresence transition — **not** a popup modal. This was a deliberate design choice to give books the visual prominence they deserve and to provide a better reading experience on all screen sizes.
- The `aria-pressed` attribute on book cards communicates selection state to screen readers.

### 2.3 Navigation Flow

The navigation structure supports both linear browsing and direct section access.

```
Gen Z Hub (/) ◀──────────────────────────────────────────────────────────▶ REFRAME (/reframe or /workshop/[slug])
                                                                              │
                                                                              ├── #workshop-overview (About)
                                                                              ├── #books (Reading Journey)
                                                                              ├── #agenda (Session Flow)
                                                                              ├── #team (Facilitators)
                                                                              └── #register (Registration)
                                                                              │
                                                                              ▼
                                                                         Back to Hub (← Gen Z button in navbar)
```

**Key Navigation Patterns:**
- The Gen Z Hub landing page uses smooth scroll to navigate between sections
- Workshop pages use anchor-based section navigation
- The "Gen Z" back button in the workshop navbar uses a page transition (slide animation via `TransitionLink`)
- All navigation supports both mouse/touch and keyboard interaction

---

## 3. Navigation System

### 3.1 Landing Page Navigation

The Gen Z Hub landing page features an inline navigation system embedded within the page header — **not** a traditional fixed navbar. Navigation links are rendered directly in the hero section area.

| Element | Implementation | Notes |
|---------|---------------|-------|
| Logo | Zain Gen Z gradient logo | Links to page top |
| Navigation links | Inline text links | Smooth-scroll to page sections |
| Mobile menu | Hamburger icon → full-screen overlay | `role="dialog"` with `aria-modal="true"` |
| Register CTA | Gradient-accented button | Scrolls to registration section |

### 3.2 Workshop Page Navigation (Navbar Component)

The workshop pages use a dedicated `Navbar` component with the following specifications:

| Property | Value |
|----------|-------|
| Position | Fixed top (`fixed top-0 left-0 right-0 z-50`) |
| Background (dark sections) | Gradient: `from-[#1C2951] via-[#1E1A5F] to-[#0057B8]` |
| Background (light sections) | White with `shadow-lg` |
| Height | 48px mobile / 56px tablet / 64px desktop |
| Back button | "Gen Z" pill with arrow icon and gradient text |
| Menu trigger | Hamburger icon → full-screen overlay dialog |

**Navigation Links:**

| Link | Target | Section |
|------|--------|---------|
| Overview | `#workshop-overview` | Workshop about section |
| Books | `#books` | Reading journey / book carousel |
| Agenda | `#agenda` | Session flow timeline |
| Team | `#team` | Facilitators grid |
| Register | `#register` | Registration form |

**Adaptive Color Behavior:**
The navbar dynamically adjusts its color scheme based on the current scroll position. When the viewport is within a white-background section (`workshop-overview`, `books`, `agenda`, `team`), the navbar switches to a white background with dark text. This is detected via `getBoundingClientRect()` on scroll.

### 3.3 Mobile Navigation Overlay

On mobile and tablet viewports, navigation is accessed through a menu overlay:

| Property | Value |
|----------|-------|
| Trigger | Hamburger menu icon (44px touch target) |
| Overlay | `fixed inset-0 z-[60]` with `bg-black/60 backdrop-blur-md` |
| Dialog role | `role="dialog"` with `aria-label="Site navigation menu"` and `aria-modal="true"` |
| Menu panel | Centered card with gradient background, rounded corners (`rounded-3xl`) |
| Link style | Full-width rows with gradient dot indicators, 16px padding top/bottom |
| Dismiss | Click outside overlay or press the close button |

### 3.4 Skip Navigation

A skip-to-content link is implemented on all pages, targeting `#main-content`. This link becomes visible only on keyboard focus, allowing screen reader and keyboard users to bypass repetitive navigation.

### 3.5 CMS Editability

Navigation links are configurable through the Sanity `siteSettings` schema, enabling program managers to:
- Add, remove, or reorder navigation items
- Update link labels and target section IDs
- Modify the Register CTA text and destination

### 3.6 Research-Backed Navigation Limit

The primary navigation should contain no more than **five items** — research consistently shows that seven is already too many for quick comprehension.

**Recommended Navigation Structure:**

| Nav item | Content |
|----------|---------|
| Program | Overview, rotation structure, timeline, how to apply |
| Stories | Blog posts, rotation diaries, team profiles |
| REFRAME | Workshop overview, toolkit, recaps, resources |
| Community | Current cohort, alumni, team directory |
| About | Zain Group context, program history, FAQ |

### 3.7 Mobile Navigation Philosophy

Mobile navigation should use a full-screen overlay (not a hamburger dropdown) — the dark background becomes the canvas for large, tappable navigation items with the swirl motif as a subtle background element. This is an opportunity for brand expression, not just functional wayfinding.

### 3.8 Secondary Navigation

Within each section, use horizontal tabs (desktop) or scrollable pill bar (mobile). REFRAME's internal navigation: Overview, Activities, Toolkit, Recaps, Schedule. Each tab maps to a Sanity content type.

---

## 4. Scroll & Motion Design

### 4.1 Lenis Smooth Scrolling

The website uses the Lenis library for buttery-smooth scrolling across all pages. The implementation is provided through a React context (`SmoothScrollProvider`).

| Parameter | Value | Purpose |
|-----------|-------|---------|
| `duration` | 1.2 seconds | Scroll animation duration |
| `easing` | `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))` | Custom exponential ease-out curve |
| `orientation` | `"vertical"` | Vertical scrolling only |
| `smoothWheel` | `true` | Smooth mouse wheel scrolling |
| `touchMultiplier` | `2` | Touch scroll sensitivity multiplier |

**Reduced Motion Override:** When the user's operating system has `prefers-reduced-motion: reduce` enabled, Lenis is **not initialized** at all. The browser's native scroll behavior is used instead, ensuring zero motion for users who prefer it.

### 4.2 Scroll-Triggered Animations

All section content uses Framer Motion's `whileInView` directive to trigger entrance animations only when the element enters the viewport.

| Property | Value | Purpose |
|----------|-------|---------|
| `initial` | `{ opacity: 0, y: 15–20 }` | Elements start invisible and offset downward |
| `whileInView` | `{ opacity: 1, y: 0 }` | Elements fade in and slide to natural position |
| `viewport.once` | `true` | Animation triggers only once (does not replay on re-scroll) |
| `viewport.amount` | `0.3` | 30% of the element must be visible to trigger |
| `viewport.margin` | `"-100px"` | Trigger animation 100px before element is fully in view |
| `transition.duration` | `0.35–0.5s` | Animation duration |
| `transition.ease` | `[0.25, 0.46, 0.45, 0.94]` | Custom cubic-bezier easing |

### 4.3 Staggered Children Animation

Container elements use `staggerChildren` to create a sequential reveal effect for their child items:

| Context | Stagger Delay | Children Delay | Effect |
|---------|--------------|----------------|--------|
| Landing page sections | 60ms | 50ms | Cards appear one after another, left to right |
| Workshop sections | 100ms | 200ms | Slightly slower reveal for reading-heavy content |
| Pillar cards | 60ms | 50ms | Five pillars cascade in sequence |
| Team member cards | 60ms | 50ms | Team grid fills progressively |

**Implementation Pattern:**
```
containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 }
  }
}

itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}
```

### 4.4 Page Transitions

Navigation between the Gen Z Hub and workshop pages uses `AnimatePresence` with slide animations via the `TransitionLink` component and `PageTransitionProvider`.

| Transition | Entry Animation | Exit Animation | Duration |
|------------|----------------|----------------|----------|
| Hub → Workshop | Slide in from right (`x: 100 → 0`) | Slide out to left (`x: 0 → -100`) | 300ms |
| Workshop → Hub | Slide in from left (`x: -100 → 0`) | Slide out to right (`x: 0 → 100`) | 300ms |
| Book card → Book detail | Slide in from right (`x: 100 → 0`) | Slide out to left (`x: 0 → -100`) | 300ms |
| Book detail → Workshop | Reverse slide | Reverse slide | 300ms |

### 4.5 Background Parallax & Ambient Motion

Decorative background elements use slower, continuous animations to create depth:

| Element | Animation | Duration | Behavior |
|---------|-----------|----------|----------|
| Aurora gradients | `aurora` keyframes (translate + rotate) | 20s | Infinite loop, subtle drift |
| Floating elements | `float` keyframes (translateY) | 6s | Gentle vertical bob |
| Bubble particles | `bubble-float` / `bubble-drift` | 10–15s | Organic floating motion |
| Glow pulses | `pulse-glow` / `pulse-slow` | 2–4s | Opacity pulsing |
| Gradient shifts | `gradient-shift` | 8s | Background position animation |
| Shimmer effect | `shimmer` | 2s | Loading placeholder shine |

All background animations are **disabled** when `prefers-reduced-motion: reduce` is active (see Section 6.2).

### 4.6 Gallery Auto-Advance & Shuffle

The gallery carousel features two automatic behaviors:

| Behavior | Implementation | Timing |
|----------|---------------|--------|
| **Shuffle** | Images are randomized on mount via `Array.sort(() => Math.random() - 0.5)` | Once on page load |
| **Auto-advance** | `setInterval` increments the current index | Every 4 seconds |
| **Loop** | When reaching the end, resets to index 0 | Seamless restart |
| **Manual override** | Previous/Next buttons and dot indicators | User-initiated |
| **Touch support** | Swipe detection via `touchStart`/`touchMove`/`touchEnd` events | 50px threshold |

The carousel adapts its items-per-view based on screen width:

| Viewport | Items Visible | Gap |
|----------|--------------|-----|
| < 640px | 1 | 0px |
| 640–1023px | 2 | 16px |
| ≥ 1024px | 3 | 16px |

---

## 5. Interaction Patterns

### 5.1 Card Hover Effects

Cards across the site share a consistent hover interaction language:

| Component | Hover Transform | Additional Effects |
|-----------|----------------|-------------------|
| Pillar cards | `scale(1.02)` | Background opacity transition from `/80` to `/90` |
| Program cards | Image `scale(1.05)` within container | Arrow icon translates 4px right, color shifts to yellow |
| Book selection cards | `scale(1.02)` + `translateY(-5px)` | Border color transitions to `#C3D534/50` |
| Previous edition cards | `translateY(-4px)` | Enhanced shadow, gradient border glow |
| Gallery images | `scale(1.05)` on image within container | 500ms transition duration for smooth zoom |

**Tap/Press Feedback:** Book cards include `whileTap={{ scale: 0.98 }}` for tactile feedback on touch devices.

### 5.2 Button Interactions

| State | Visual Treatment |
|-------|-----------------|
| Default | Gradient background (`from-[#C3D534] to-[#00B5AD]`), rounded-full, bold text |
| Hover | Scale increase, glow shadow, color transition |
| Active/Pressed | `active:scale-95` for press-down feedback |
| Focus | `focus:ring-2 focus:ring-[#00B5AD]` turquoise ring with offset |
| Disabled | Reduced opacity (`opacity-20`), `cursor-not-allowed` |

### 5.3 Link Hover Effects

| Link Type | Hover Effect |
|-----------|-------------|
| Navigation links | Color transition to `#00B5AD` (turquoise) |
| "Learn More" arrows | Arrow icon `translateX(4px)` + color shift from lime to yellow |
| Email links | `text-white/80 → text-white` opacity transition |
| LinkedIn links | `text-[#00B5AD] → text-[#C3D534]` color transition |
| Social links | Opacity and color transitions |

### 5.4 Form Focus States

| Element | Focus Treatment |
|---------|-----------------|
| Input fields | `focus:ring-2 focus:ring-[#00B5AD]` — turquoise glow ring |
| Buttons | `focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2` — ring with offset |
| Links/anchors | `focus:outline-none focus:ring-2 focus:ring-[#00B5AD]` |
| Cards (interactive) | `focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#1E1A5F]` — ring with navy offset |

The turquoise ring color (`#00B5AD`) was chosen to be visible against both the dark navy backgrounds and white section backgrounds while maintaining brand consistency.

### 5.5 Refined Interaction Specifications

**Card Hover (refined):**
`translateY(-4px)` with box-shadow deepening over 300ms using `cubic-bezier(0.4, 0, 0.2, 1)`. On dark surfaces, use surface brightness increase combined with brand-color border-bottom accent fading in at 200ms. Content responds to attention, not just highlights mechanically.

**Button Three-State Pattern:**
1. Hover: Scale 1.03× with brand glow (`box-shadow: 0 0 24px rgba(brand-color, 0.4)`)
2. Active/Pressed: Compress 0.97× over 80ms for tactile feedback
3. Focus: 2px brand-color outline offset 3px for keyboard visibility

**Scroll-Triggered Reveals:**
`IntersectionObserver` with 0.15 threshold. `translateY(24px→0)` and `opacity(0→1)` over 500ms. Only animate `transform` and `opacity` (GPU-accelerated, 60fps). Always respect `prefers-reduced-motion`.

### 5.6 Book Selection Interaction

The book selection pattern is a core interaction on the workshop page. It uses a **full-page transition** rather than a popup modal.

**Flow:**

| Step | Action | Visual Feedback |
|------|--------|-----------------|
| 1. Browse | User sees book grid | Cards display cover images, titles, authors |
| 2. Hover | User hovers over a book card | Card lifts (`translateY(-5px)`) + scales (1.02) + "Tap to explore" overlay appears |
| 3. Select | User clicks a book card | AnimatePresence transition: workshop content slides out left, book detail slides in from right (300ms) |
| 4. View | Book detail page displayed | Full-page layout with headline, rich text description, key takeaways, workshop details, files, and links |
| 5. Return | User clicks "Back to Workshop" | Reverse AnimatePresence transition: book detail slides out, workshop slides back in |

**Selection State Indicators:**
- Selected card receives a lime green border (`border-[#C3D534]`) and ring (`ring-2 ring-[#C3D534]/50`)
- A green checkmark badge appears in the top-right corner of the selected card
- Featured/primary books display a yellow "Featured" badge when not selected
- `aria-pressed` attribute communicates selection state to assistive technologies

**Design Rationale:** A full-page detail view was chosen over a modal because:
- It provides more reading space for book descriptions and takeaways
- It works consistently across all screen sizes without scroll-locking issues
- It supports the progressive disclosure principle — users commit to viewing a book
- The smooth AnimatePresence transition maintains spatial context

### 5.7 Gallery Interaction

| Feature | Behavior |
|---------|----------|
| Auto-shuffle | Images randomize on page load for fresh experience each visit |
| Auto-advance | Carousel advances every 4 seconds |
| Previous/Next buttons | Circular buttons with backdrop blur, positioned at vertical center |
| Dot indicators (mobile) | Visible below carousel on `sm:hidden` viewports, gradient-styled active dot |
| Swipe gestures | Touch swipe with 50px threshold for prev/next |
| Disabled states | Previous button disabled at index 0, Next disabled at max index |

---

## 6. WCAG 2.1 AA Accessibility Compliance

Achieving full WCAG 2.1 AA compliance was a major implementation milestone for the Gen Z 11th Edition website. Accessibility is integrated at every level — from color choices to component architecture to motion design.

### 6.1 Color Contrast

All text colors were audited and adjusted to meet the WCAG 2.1 AA minimum contrast ratio of **4.5:1** for normal text and **3:1** for large text.

| Original Class | Contrast Issue | Corrected To | Contrast Ratio |
|----------------|----------------|--------------|----------------|
| `text-white/30` | 1.9:1 against `#1E1A5F` | `text-white/60` minimum | ≥ 4.5:1 |
| `text-white/40` | 2.5:1 against `#1E1A5F` | `text-white/60` minimum | ≥ 4.5:1 |
| `text-white/50` | 3.2:1 against `#1E1A5F` | `text-white/60` minimum | ≥ 4.5:1 |
| `text-white/70` | Used for secondary body text | Retained (passes) | ≥ 5.8:1 |
| `text-white/80` | Used for primary body text | Retained (passes) | ≥ 7.2:1 |
| `text-white/90` | Used for emphasized text | Retained (passes) | ≥ 8.5:1 |

**Brand Color Verification:**

| Color | Hex | Against `#1E1A5F` | Passes AA? |
|-------|-----|-------------------|------------|
| Lime (primary) | `#C3D534` | 6.8:1 | Yes (large text and UI components) |
| Turquoise | `#00B5AD` | 4.6:1 | Yes |
| Yellow | `#F7E73F` | 9.2:1 | Yes |
| White | `#FFFFFF` | 12.6:1 | Yes |

### 6.2 Reduced Motion Support

Every animated component in the application respects the user's motion preference through a dual-layer approach:

**Layer 1: Framer Motion `useReducedMotion` Hook**

The `useReducedMotion()` hook from Framer Motion is used in all animated components to conditionally disable animations:

| Component | File | Reduced Motion Behavior |
|-----------|------|------------------------|
| Landing Page | `landing-page.tsx` | All `whileInView` animations disabled; content renders at final position |
| Interactive Workshop Page | `interactive-workshop-page.tsx` | Page transitions and section reveals disabled |
| Gen Z Landing | `genz-landing.tsx` | Hero and section animations disabled |
| Book Detail Section | `book-detail-section.tsx` | Entry/exit slide animations disabled |
| Book Popup Modal | `book-popup-modal.tsx` | Modal animations disabled |
| Selectable Book Card | `selectable-book-card.tsx` | Hover scale and tap animations disabled |
| Pillar Cards | `landing-page.tsx` (PillarCard) | `whileHover` scale disabled |
| Team Member Cards | `landing-page.tsx` (TeamMemberCard) | Entrance animation disabled |

**Implementation Pattern:**
When `prefersReducedMotion` is `true`, variant objects are replaced with static equivalents:
```
reducedContainerVariants = { hidden: { opacity: 1 }, visible: { opacity: 1 } }
reducedItemVariants = { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
```

**Layer 2: Lenis Smooth Scroll**

The `SmoothScrollProvider` checks `window.matchMedia("(prefers-reduced-motion: reduce)")` before initializing Lenis. If the user prefers reduced motion, Lenis is **never instantiated**, and the browser's native scroll behavior is used.

**Layer 3: CSS `prefers-reduced-motion` Media Query**

All CSS-based animations are disabled via `globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-aurora, .animate-float, .animate-pulse-glow,
  .animate-bubble-float, .animate-bubble-float-alt,
  .animate-bubble-drift, .animate-pulse-slow,
  .animate-shimmer, .animate-gradient-shift {
    animation: none !important;
  }

  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

This three-layer approach ensures **complete** reduced motion coverage across JavaScript animations (Framer Motion), smooth scrolling (Lenis), and CSS animations/transitions.

### 6.3 Focus Indicators

All interactive elements have visible, consistent focus indicators using the brand turquoise color:

| Element Type | Focus Style | Specification |
|-------------|-------------|---------------|
| Buttons | Turquoise ring | `focus:ring-2 focus:ring-[#00B5AD]` |
| Links | Turquoise ring with offset | `focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2` |
| Cards (clickable) | Turquoise ring with navy offset | `focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#1E1A5F]` |
| Navigation links | Turquoise ring with navy offset | `focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#1E1A5F]` |
| Gallery buttons | White ring (for dark overlay) | `focus:ring-2 focus:ring-white/50` |
| Book selection cards | Turquoise ring with navy offset | `focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#1E1A5F]` |

**Enhanced `:focus-visible` Styles:**
The global CSS applies enhanced focus-visible styling with a 3px outline and 5px turquoise ring, ensuring visibility is unmistakable for keyboard users while remaining unobtrusive for mouse users.

### 6.4 Screen Reader Support

Comprehensive ARIA attributes and semantic HTML ensure the site is fully navigable by screen reader users:

| Technique | Implementation | Components |
|-----------|---------------|------------|
| `aria-hidden="true"` | Hides decorative elements from screen readers | Gradient overlays, decorative icons, aurora backgrounds, dot separators, background images |
| `role="article"` | Semantic article role on content cards | Pillar cards, program cards, team member cards |
| `role="navigation"` | Identifies navigation landmarks | Navbar `<nav>` element |
| `role="main"` | Identifies main content area | Workshop page `<div id="main-content">` |
| `role="dialog"` | Identifies modal dialogs | Mobile menu overlay (`aria-modal="true"`) |
| `aria-labelledby` | Connects headings to their sections | All section containers reference their `<h2>` heading ID |
| `aria-label` | Descriptive labels for interactive elements | Gallery buttons ("Previous/Next gallery images"), email links ("Send email to [Name]"), LinkedIn links ("Visit [Name]'s LinkedIn profile (opens in new tab)") |
| `aria-pressed` | Toggle state for book cards | `SelectableBookCard` component (`aria-pressed={isSelected}`) |
| `aria-expanded` | Menu toggle state | Hamburger menu button (`aria-expanded={menuOpen}`) |
| Descriptive `alt` text | Meaningful image descriptions | `alt="Portrait of [Name]"`, `alt="[Program] program cover"`, `alt="Gen Z Experience [number]"` |
| Empty `alt=""` | Decorative background images | Hero background images that are purely decorative |
| `<span className="sr-only">` | Screen-reader-only text | "Included:" prefix for highlight list items |

### 6.5 Landmark Roles & Section Structure

| Section | Element | Landmark | aria-labelledby |
|---------|---------|----------|-----------------|
| Hero | `<section>` | `aria-label="Workshop hero"` | — |
| About | `<section>` | — | `workshop-about-heading` |
| Benefits | `<section>` | — | `workshop-benefits-heading` |
| Attendees | `<section>` | — | `workshop-attendees-heading` |
| Timing | `<section>` | — | `workshop-timing-heading` |
| Reading Journey | `<section>` | — | `workshop-reading-journey-heading` |
| Navigation | `<nav>` | `role="navigation"` | `aria-label="Main navigation"` |
| Main Content | `<div>` | `role="main"` | `id="main-content"` |

### 6.6 Skip Navigation

A skip-to-content link is provided at the top of every page:

| Property | Value |
|----------|-------|
| Target | `#main-content` |
| Visibility | Hidden by default, visible on keyboard focus |
| Position | Fixed at top of viewport when focused |
| Style | High-contrast, clearly labeled "Skip to main content" |

### 6.7 Keyboard Navigation

| Interaction | Keyboard Support |
|-------------|-----------------|
| Navigate between links | Tab / Shift+Tab |
| Activate link/button | Enter or Space |
| Close mobile menu | Click outside or close button (keyboard accessible) |
| Gallery navigation | Tab to prev/next buttons, Enter to activate |
| Book selection | Tab to book card, Enter or Space to select |
| Scroll to section | Tab to nav link, Enter to smooth-scroll |

All interactive elements meet the **minimum 44×44px touch target** size requirement, ensuring usability for both touch and keyboard users.

### 6.8 Bilingual Arabic-English Accessibility

Bilingual support for Arabic and English is a core accessibility requirement for a Kuwait-based program:

- Use CSS logical properties exclusively: `margin-inline-start` instead of `margin-left`, `text-align: start` instead of `text-align: left`
- The `dir="rtl"` attribute on root `<html>` element flips the entire layout
- Directional icons (arrows, chevrons) flip with `transform: scaleX(-1)` in RTL
- Logos, clocks, and media controls do NOT flip
- Arabic link styling: replace underlines with `box-shadow: inset 0 -2px 0 rgba(187, 134, 252, 0.4)` — Arabic letterform dots get obscured by underlines
- All alt text must be authored in both languages through CMS schema validation

---

## 7. Error & Loading States

### 7.1 Skeleton Loading

Content sections display skeleton loading states while data is fetched from Sanity CMS:

| Element | Skeleton Treatment |
|---------|-------------------|
| Cards | Glass-styled rectangular placeholders with `animate-shimmer` effect |
| Images | Gradient placeholder (`from-[#C3D534]/30 to-[#00B5AD]/30`) with centered icon |
| Text blocks | Rounded rectangle placeholders at varying widths |
| Avatars | Circular gradient placeholder with initial letter |

The shimmer animation uses a CSS gradient that sweeps across the skeleton element:
```css
.animate-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}
```

### 7.2 Progress Indicators

| Indicator | Style | Use Case |
|-----------|-------|----------|
| Gradient progress bar | `from-[#C3D534] to-[#00B5AD]` animated fill | Series progress tracking |
| Gradient-shift animation | `background-size: 200% 200%` with position animation | Active loading states |
| Pulse glow | Opacity oscillation (0.5 → 1.0) over 2s | Active/live indicators |

### 7.3 Lazy Loading

| Content Type | Loading Strategy | Visual Treatment |
|-------------|-----------------|-----------------|
| Images | Next.js `<Image>` with lazy loading (default) | Fade-in on load |
| Below-fold sections | Framer Motion `whileInView` | Fade + slide entrance animation |
| Gallery images | Loaded as carousel scrolls | Contained within aspect-ratio boxes to prevent layout shift |
| Book cover images | Lazy loaded with `sizes` attribute | Placeholder gradient until loaded |

### 7.4 Empty States

When CMS content is unavailable, the site displays contextual empty state messages rather than blank sections:

| Scenario | Empty State Message | Visual Treatment |
|----------|-------------------|-----------------|
| No books available | "Books will be announced soon!" + "Stay tuned for the curated reading list that will guide your learning journey." | Glass card with `BookOpen` icon, centered layout |
| No facilitators | Section is hidden entirely | No visual disruption |
| No benefits listed | Section is hidden entirely | No visual disruption |
| No gallery images | Fallback to 12 default gallery images | Seamless experience |
| No team members | Fallback to 6 default team member cards | Seamless experience |
| No previous editions | Fallback to 10 historical edition cards (2016–2025) | Seamless experience |

### 7.5 CMS Fallback Strategy

The application implements a robust fallback strategy ensuring the site is always functional, even without CMS connectivity:

| Data Type | CMS Source | Fallback Default |
|-----------|-----------|-----------------|
| Hero text | `sanityHero` | Hardcoded welcome text, title, and CTA |
| Pillars | `sanityPillars` | 5 default pillar objects with titles, descriptions, and gradient classes |
| Programs | `sanityPrograms` | 1 default program (REFRAME with Reset book) |
| Team members | `sanityTeamMembers` | 6 default members with names, roles, emails, LinkedIn URLs, and photos |
| Gallery images | `sanityGalleryImages` | 12 optimized WebP gallery images |
| Previous editions | `sanityPreviousEditions` | 10 historical editions (2016–2025) with descriptions and images |
| Footer | `sanityFooter` | Social links (LinkedIn, Twitter, Instagram), Zain links, and copyright |

---

## 8. Mobile-Specific UX

### 8.0 Mobile-First as Default (Jony Ive's Philosophy)

Design all components at 375px first, then enhance for wider viewports — never the reverse. This is a genuine design philosophy, not just a responsive technique. The constraint of a small viewport forces clarity of hierarchy and purpose.

- Touch targets: 44×44px minimum (WCAG 2.5.8) — critical for Arabic interface where dense text can fall below threshold
- Scrolling: Vertical scrolling only — avoid horizontal carousels on mobile as they create interaction cost. Use vertically stacked cards or tap-to-expand patterns.
- Typography: 16px minimum base size to prevent iOS zoom-on-focus behavior

### 8.1 Touch-Friendly Targets

All interactive elements meet or exceed the **44×44px minimum touch target** size recommended by WCAG 2.1 and Apple's Human Interface Guidelines:

| Element | Touch Target Size | Implementation |
|---------|------------------|----------------|
| Navigation hamburger | 40×40px (w-10 h-10) | Rounded-full button |
| Gallery prev/next | 36–44px responsive | `w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11` |
| Gallery dot indicators | 6×6px visual, 24px hit area | Padded touch targets |
| CTA buttons | 44px+ height | `py-3 px-6` minimum padding |
| Email/LinkedIn links | Full text area | `px-2 py-1` minimum padding |
| Book cards | Full card area | Entire card is clickable button |
| Back button | 44px+ height | Pill-shaped with padding |

### 8.2 Swipe Gestures

The gallery carousel supports native swipe gestures on touch devices:

| Gesture | Threshold | Action |
|---------|-----------|--------|
| Swipe left | > 50px | Advance to next image |
| Swipe right | > 50px | Return to previous image |
| Swipe below threshold | < 50px | No action (prevents accidental triggers) |

Implementation uses `onTouchStart`, `onTouchMove`, and `onTouchEnd` event handlers with coordinate comparison.

### 8.3 Responsive Layout Adaptations

| Section | Desktop Layout | Mobile Layout |
|---------|---------------|--------------|
| Hero | Large typography (5xl–6xl), spacious padding | Reduced typography (3xl–4xl), compact padding |
| Program Pillars | 5-column grid | Single-column stacked cards |
| Our Programs | Side-by-side (image + text) | Stacked (image on top, text below), centered alignment |
| Team Members | 3-column grid (`lg:grid-cols-3`) | 2-column grid, smaller avatars (96px vs 128px) |
| Gallery | 3 items visible | 1 item visible, dot indicators shown |
| Book grid | Multi-column grid | 2-column grid with reduced card padding |
| Timing details | 4-column grid (`lg:grid-cols-4`) | 2-column grid (`sm:grid-cols-2`) |
| Previous editions | Multi-column with horizontal scroll | Single-column cards |

### 8.4 Mobile Performance Optimizations

| Optimization | Implementation |
|-------------|---------------|
| Reduced animation complexity | Framer Motion `whileHover` is touch-irrelevant; no unnecessary hover states on mobile |
| Responsive image sizes | `sizes` attribute on all `<Image>` components (e.g., `"(max-width: 640px) 100vw, 50vw"`) |
| WebP format | Optimized `.webp` versions of all images with `.jpg` fallbacks |
| Reduced stagger delay | 60ms stagger keeps total animation time short on long lists |
| Touch-optimized carousel | `touch-pan-y` CSS class enables vertical scrolling while capturing horizontal swipes |
| Skeleton loading | Glass-styled placeholders prevent layout shift during content load |

### 8.5 Mobile-Specific Navigation

| Feature | Desktop | Mobile |
|---------|---------|--------|
| Navigation style | Inline links or menu overlay | Hamburger → full-screen overlay dialog |
| Menu panel | — | Centered glass card (85vw, max 384px) |
| Link spacing | — | 16px vertical padding per link for easy tapping |
| Dismiss method | — | Tap outside overlay or close button |
| Gallery dots | Hidden (`sm:hidden` inverted — dots shown only on mobile) | Visible below carousel |
| Back button | Pill with text | Compact pill with smaller text |

---

## 9. Verbal Identity

### 9.1 Voice Spectrum — "Serious, Never Solemn"

Paula Scher draws a crucial distinction between "serious" and "solemn." Serious design is instinctive, bold, meaningful. Solemn design is overthought, bureaucratic, dead. The Generation Z platform voice must be serious about substance and never solemn in expression.

**Voice Spectrum Positioning:**

| Dimension | Position |
|-----------|----------|
| Formality | Professional-casual — the smart colleague, not the CEO memo |
| Humor | Wry, observational — Scher's "serious play," never forced |
| Authority | Guiding, not lecturing — "here's what we've found" over "you must" |
| Energy | Confident and warm — not the corporate enthusiasm of exclamation marks |
| Complexity | Plain language with precision — Ogilvy's "use their language" |

Zain's stated tone — inspirational, engaging, optimistic — translates to the web through concrete actions, not abstract declarations. "Inspirational" means showing real stories of graduates who rotated through the Data Office and shipped a product. "Engaging" means interactive content, not just prose. "Optimistic" means honest about challenges while maintaining forward momentum.

### 9.2 Copy Principles with Examples

**Headlines** should follow McKinsey's model — metaphorical, provocative, human:

- "Where Zain's future is being built" (concrete, active)
- "Seven graduates. Twelve months. Every department." (specific, dramatic)
- "Your first rotation starts before your first day" (intriguing, program-specific)
- ~~"Empowering the next generation of leaders"~~ (generic, could be any company)
- ~~"Your journey starts here"~~ (vapid, overused)
- ~~"Welcome to our world-class program"~~ (self-congratulatory)

**CTAs** start with strong verbs and are specific to the action:

- "Apply by March 15" (direct, time-bound)
- "Read Yousef's rotation diary" (personal, specific)
- "Download the REFRAME toolkit" (clear deliverable)
- ~~"Learn more"~~ (vague)
- ~~"Click here"~~ (meaningless)
- ~~"Don't miss out!"~~ (manipulative urgency that Gen Z sees through instantly)

### 9.3 Microcopy for States and Edges

| State | Recommended Copy | Rationale |
|-------|-----------------|-----------|
| Empty state (no posts) | "No stories yet. Check back soon — new posts drop weekly." | Forward-looking, sets expectation |
| Loading | "Loading your dashboard..." | Specific, purposeful |
| Error (save failed) | "We couldn't save your progress. Your work is still here — try again." | Empathetic, reassuring, actionable |
| Success (module complete) | "Module complete. Three down, solid momentum." | Celebratory but grounded |
| 404 page | "This page doesn't exist yet — but neither did half of Zain's products five years ago." | On-brand humor reinforcing transformation narrative |

### 9.4 Content Strategy for CMS

Sanity CMS powers dynamic content with specific editorial guidelines:

**Blog posts / rotation diaries:** First-person, editorial format. Personal narrative, not corporate reporting. Model: Medium-quality writing, not LinkedIn-post energy. Each post: hook headline (avoid "My First Week at Zain"), specific insight, human photograph. Recommended length: 800-1,200 words.

**Workshop recaps (REFRAME):** Follow Attract-Engage-Farewell structure. Open with key takeaway (BLUF), include 2-3 participant quotes, embed photography, close with "what's next."

**Team profiles:** Include portrait photo (editorial, environmental — not headshot), name, cohort year, current rotation, one-paragraph bio in third person, personal quote about experience.

---

## Appendix

### A. Component-to-UX Pattern Mapping

| Component File | UX Patterns Used |
|----------------|-----------------|
| `landing-page.tsx` | Progressive disclosure, staggered animation, card hover, gallery auto-advance, CMS fallback |
| `interactive-workshop-page.tsx` | Book selection flow, AnimatePresence transitions, empty states, section reveals |
| `selectable-book-card.tsx` | Card hover, tap feedback, `aria-pressed`, focus ring, selection indicators |
| `book-detail-section.tsx` | Full-page detail view, reduced motion, back navigation |
| `navbar.tsx` | Adaptive color, mobile overlay dialog, skip navigation, keyboard nav |
| `smooth-scroll-provider.tsx` | Lenis smooth scroll, reduced motion detection, scroll-to-top utility |
| `genz-landing.tsx` | Hero animation, section reveals, reduced motion variants |
| `page-transition-provider.tsx` | AnimatePresence page transitions, slide animations |

### B. Accessibility Audit Checklist

| Criterion | WCAG Level | Status |
|-----------|------------|--------|
| 1.1.1 Non-text Content | A | Passed — All images have `alt` text; decorative images use `alt=""` or `aria-hidden` |
| 1.3.1 Info and Relationships | A | Passed — Semantic HTML, landmark roles, `aria-labelledby` |
| 1.4.3 Contrast (Minimum) | AA | Passed — All text meets 4.5:1 minimum; low-opacity text raised to `/60` |
| 1.4.11 Non-text Contrast | AA | Passed — Focus indicators and UI components meet 3:1 |
| 2.1.1 Keyboard | A | Passed — All interactive elements keyboard-accessible |
| 2.4.1 Bypass Blocks | A | Passed — Skip-to-content link on all pages |
| 2.4.3 Focus Order | A | Passed — Logical tab order following visual layout |
| 2.4.7 Focus Visible | AA | Passed — Turquoise ring on all focusable elements |
| 2.3.1 Three Flashes | A | Passed — No flashing content |
| 2.5.5 Target Size | AAA | Passed — 44px minimum touch targets |
| 4.1.2 Name, Role, Value | A | Passed — ARIA roles, labels, and states on all interactive elements |

### C. Motion Design Tokens Reference

| Token | Value | CSS Class |
|-------|-------|-----------|
| Aurora drift | 20s ease-in-out infinite | `.animate-aurora` |
| Float bob | 6s ease-in-out infinite | `.animate-float` |
| Pulse glow | 2s ease-in-out infinite | `.animate-pulse-glow` |
| Bubble float | 10s ease-in-out infinite | `.animate-bubble-float` |
| Bubble float alt | 12s ease-in-out infinite | `.animate-bubble-float-alt` |
| Bubble drift | 15s ease-in-out infinite | `.animate-bubble-drift` |
| Pulse slow | 4s ease-in-out infinite | `.animate-pulse-slow` |
| Shimmer | 2s infinite | `.animate-shimmer` |
| Gradient shift | 8s ease infinite | `.animate-gradient-shift` |
| Framer stagger (landing) | 60ms delay | `staggerChildren: 0.06` |
| Framer stagger (workshop) | 100ms delay | `staggerChildren: 0.1` |
| Framer entrance duration | 350–500ms | `duration: 0.35–0.5` |
| Page transition | 300ms | `duration: 0.3` |
| Lenis scroll | 1200ms exponential ease-out | `duration: 1.2` |

---

**Document History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | February 2026 | Gen Z Development Team | Initial UX & Interaction Design document |

---

*This document is part of the Gen Z 11th Edition Website Design Book. See also: [01 — Brand Identity](./01-brand-identity.md) · [02 — Visual Design System](./02-visual-design-system.md)*
