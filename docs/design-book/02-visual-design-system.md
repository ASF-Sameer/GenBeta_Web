# 02 — Visual Design System

**Gen Z 11th Edition • Zain Group • 2026**
**Document Version:** 1.0
**Last Updated:** February 11, 2026

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Glassmorphism Design Tokens](#2-glassmorphism-design-tokens)
3. [Gradient System](#3-gradient-system)
4. [Animation System](#4-animation-system)
5. [Layout Grid & Spacing](#5-layout-grid--spacing)
6. [Responsive Breakpoints](#6-responsive-breakpoints)
7. [Shadow & Elevation System](#7-shadow--elevation-system)
8. [Icon System](#8-icon-system)

---

## 1. Design Philosophy

### Premium Dark Experience

The Gen Z 11th Edition website embraces a **dark-mode-first** design language built on deep navy backgrounds (`#1E1A5F`, `#1C2951`) with luminous brand-color accents. Every surface, gradient, and glow is calibrated to feel authoritative yet youthful — a digital space that communicates Zain's corporate stature while resonating with the digital-native sensibilities of its Gen Z cohort.

#### Why Dark Mode

| Reason | Rationale |
|--------|-----------|
| **Authority & professionalism** | Dark interfaces evoke premium digital products (Bloomberg Terminal, Spotify, Apple TV+). For an internal leadership program, this sets the tone that the content is serious and the platform is world-class. |
| **Brand color impact** | Zain's vibrant palette — Lime `#C3D534`, Turquoise `#00B5AD`, Yellow `#F7E73F` — achieves maximum luminance contrast against dark backgrounds. Colors literally *glow* rather than compete with a white canvas. |
| **Modern digital-native feel** | Gen Z audiences overwhelmingly prefer dark UIs. This choice signals that the program speaks their visual language. |
| **Reduced visual fatigue** | Long reading sessions during workshop prep and book summaries are easier on the eyes with reduced overall brightness. |

#### Glassmorphism as the Primary UI Pattern

All interactive surfaces — cards, modals, navigation, buttons — are rendered as **frosted glass panels** with backdrop blur effects. This creates a sense of depth and layering where content floats above the animated aurora background, establishing clear visual hierarchy without heavy borders or solid fills.

The glass aesthetic serves three design goals:

1. **Depth without distraction** — Translucent panels let the animated background remain visible, creating a living, breathing interface.
2. **Consistent visual language** — Every component shares the same material, making the design system feel cohesive.
3. **Elegant interactivity** — Hover and focus states subtly shift opacity and blur, providing feedback that feels tactile and refined.

#### Motion as a Design Pillar

Animations in this system are not decorative — they are **functional communication tools**. Every motion token serves a specific purpose:

- **Aurora background** (20s cycle): Establishes the living, organic feel of the platform — the site *breathes*.
- **Scroll-triggered reveals** (350ms fade-in): Guide the user's eye to new content as they navigate, creating a sense of discovery.
- **Staggered children** (60ms delay): Communicate grouping — items that animate in sequence are understood as related.
- **Hover lifts** (300ms): Confirm interactivity — elements that rise on hover are clickable.
- **Particle fields & floating cube**: Reinforce the innovation/technology theme through ambient 3D motion.

---

## 2. Glassmorphism Design Tokens

### Glass Card — Base

The foundational glass treatment applied to all card components (pillar cards, program cards, team member cards, gallery containers).

```css
/* Glass Card Base Tokens */
--glass-bg: rgba(255, 255, 255, 0.15);
--glass-blur: blur(12px);
--glass-border: 1px solid rgba(255, 255, 255, 0.2);
--glass-radius: 16px;
--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
```

**Tailwind utility class** (defined in `globals.css`):

```css
.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Dark mode variant */
.dark .glass-card {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Glass — Light Variant

A lighter glass treatment for overlays and navigation panels.

```css
.glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Glass — Dark Variant

Used in dark-only contexts like the navbar and popover menus.

```css
.glass-dark {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Enhanced Glass (v2) — Multi-Layer

The premium glass treatment used for elevated components (featured cards, hero panels, modal dialogs). Combines a diagonal gradient background with saturated blur for richer refraction.

```css
.glass-card-enhanced {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

/* Inner glow pseudo-element for brand-color edge lighting */
.glass-card-enhanced::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(195, 213, 52, 0.2) 0%,
    transparent 50%,
    rgba(0, 181, 173, 0.2) 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

### Glass Button

Interactive glass treatment for primary and secondary action buttons.

```css
/* Glass Button Tokens */
--glass-btn-bg: rgba(255, 255, 255, 0.25);
--glass-btn-hover: rgba(255, 255, 255, 0.35);
--glass-btn-blur: blur(8px);
```

```css
.glass-button {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
```

### Token Summary Table

| Token | Property | Value | Context |
|-------|----------|-------|---------|
| `--glass-bg` | `background` | `rgba(255, 255, 255, 0.15)` | Card base fill |
| `--glass-blur` | `backdrop-filter` | `blur(12px)` | Standard blur depth |
| `--glass-blur-enhanced` | `backdrop-filter` | `blur(20px) saturate(180%)` | Premium blur with saturation |
| `--glass-border` | `border` | `1px solid rgba(255, 255, 255, 0.2)` | Light mode edge |
| `--glass-border-dark` | `border` | `1px solid rgba(255, 255, 255, 0.1)` | Dark mode edge |
| `--glass-radius` | `border-radius` | `16px` | Standard rounding |
| `--glass-shadow` | `box-shadow` | `0 8px 32px rgba(0, 0, 0, 0.1)` | Ambient depth |
| `--glass-btn-bg` | `background` | `rgba(255, 255, 255, 0.25)` | Button rest state |
| `--glass-btn-hover` | `background` | `rgba(255, 255, 255, 0.35)` | Button hover state |
| `--glass-btn-blur` | `backdrop-filter` | `blur(8px)` | Button blur depth |

---

## 3. Gradient System

### 3.1 Background Gradients

#### Hero Gradient

The primary page background gradient, configurable through CMS theme variables.

```css
:root {
  --gradient-hero-start: #1E1A5F;  /* Navy Dark (Sapphire) */
  --gradient-hero-end: #0057B8;    /* Blue */
}

background: linear-gradient(
  to bottom right,
  var(--gradient-hero-start),
  var(--gradient-hero-end)
);
```

#### Card Gradient

Applied to card container backgrounds and section washes.

```css
:root {
  --gradient-card-start: #1C2951;  /* Navy Light */
  --gradient-card-end: #0057B8;    /* Blue */
}

background: linear-gradient(
  to bottom right,
  var(--gradient-card-start),
  var(--gradient-card-end)
);
```

### 3.2 Pillar Card Gradients

Each program pillar uses a unique gradient pair derived from the brand palette. These gradients are applied as both background overlays (at 40% opacity) and gradient text fills on pillar titles.

| Pillar | Gradient Class | Start Color | End Color | CSS |
|--------|---------------|-------------|-----------|-----|
| AI & Big Data | `from-lime-to-turquoise` | Lime `#C3D534` | Turquoise `#00B5AD` | `from-[#C3D534] to-[#00B5AD]` |
| Resilience, Flexibility & Agility | `from-turquoise-to-blue` | Turquoise `#00B5AD` | Blue `#0057B8` | `from-[#00B5AD] to-[#0057B8]` |
| Creative Thinking | `from-purple-to-pink` | Purple `#9B4F96` | Pink `#F4A6C9` | `from-[#9B4F96] to-[#F4A6C9]` |
| Leadership & Social Influence | `from-yellow-to-lime` | Yellow `#F7E73F` | Lime `#C3D534` | `from-[#F7E73F] to-[#C3D534]` |
| Systems Thinking | `from-turquoise-to-lime` | Turquoise `#00B5AD` | Lime `#C3D534` | `from-[#00B5AD] to-[#C3D534]` |

**Usage pattern** (from `landing-page.tsx`):

```tsx
<div className="absolute inset-0 opacity-40 bg-gradient-to-br from-[#C3D534] to-[#00B5AD]" />
<h3 className="bg-gradient-to-r from-[#C3D534] to-[#00B5AD] bg-clip-text text-transparent">
  AI & Big Data
</h3>
```

### 3.3 Text Gradients

Decorative gradient text is used for section headings and program titles.

```css
/* Turquoise → Lime (default) */
.gradient-text {
  background: linear-gradient(to right, #00B5AD, #C3D534);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Light Blue → Purple */
.gradient-text-purple {
  background: linear-gradient(to right, #00B2E3, #9B4F96);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Program title: Lime → Yellow → Turquoise (three-stop) */
background: linear-gradient(to right, #C3D534, #F7E73F, #00B5AD);
```

### 3.4 Aurora Background

The aurora background is a multi-layer animated gradient system that provides the living, organic feel of the site. It uses several overlapping radial gradients positioned at different coordinates, each animated with the `aurora` keyframe (20s cycle).

```css
/* Aurora layers use brand colors at varying opacities */
/* Layer 1: Lime radial */ 
background: radial-gradient(ellipse at 20% 50%, rgba(195, 213, 52, 0.15) 0%, transparent 50%);

/* Layer 2: Turquoise radial */
background: radial-gradient(ellipse at 80% 20%, rgba(0, 181, 173, 0.15) 0%, transparent 50%);

/* Layer 3: Blue radial */
background: radial-gradient(ellipse at 50% 80%, rgba(0, 87, 184, 0.1) 0%, transparent 50%);

/* Each layer animated independently with offset delays */
animation: aurora 20s ease-in-out infinite;
```

### 3.5 Glow Effects

Brand-colored glow effects are applied to pillar cards on hover, providing visual feedback that reinforces each pillar's identity.

| Glow Class | Color | CSS Value |
|------------|-------|-----------|
| `.glow-turquoise` | Turquoise | `box-shadow: 0 0 20px rgba(0, 181, 173, 0.4)` |
| `.glow-lime` | Lime | `box-shadow: 0 0 20px rgba(195, 213, 52, 0.4)` |
| `.glow-purple` | Purple | `box-shadow: 0 0 20px rgba(155, 79, 150, 0.4)` |
| `.glow-blue` | Blue | `box-shadow: 0 0 20px rgba(0, 87, 184, 0.4)` |
| `.glow-pink` | Pink | `box-shadow: 0 0 20px rgba(244, 166, 201, 0.4)` |

Pillar cards use a larger glow radius at 30% opacity:

```css
/* Pillar card glow examples */
shadow-[0_0_30px_rgba(195,213,52,0.3)]   /* Lime pillar */
shadow-[0_0_30px_rgba(0,181,173,0.3)]     /* Turquoise pillar */
shadow-[0_0_30px_rgba(155,79,150,0.3)]    /* Purple pillar */
shadow-[0_0_30px_rgba(247,231,63,0.3)]    /* Yellow pillar */
```

---

## 4. Animation System

### 4.1 CSS Keyframe Animations

All CSS animations are defined in `globals.css` and mapped to utility classes.

| Animation | Class | Duration | Easing | Use Case |
|-----------|-------|----------|--------|----------|
| Aurora | `.animate-aurora` | 20s | ease-in-out | Background gradient movement |
| Float | `.animate-float` | 6s | ease-in-out | Decorative elements, logos |
| Pulse Glow | `.animate-pulse-glow` | 2s | ease-in-out | Active state indicators |
| Bubble Float | `.animate-bubble-float` | 10s | ease-in-out | Background bubble orbs |
| Bubble Float Alt | `.animate-bubble-float-alt` | 12s | ease-in-out | Alternate-direction bubbles |
| Bubble Drift | `.animate-bubble-drift` | 15s | ease-in-out | Multi-axis bubble movement |
| Pulse Slow | `.animate-pulse-slow` | 4s | ease-in-out | Subtle background pulsation |
| Shimmer | `.animate-shimmer` | 2s | linear | Loading skeleton highlight |
| Gradient Shift | `.animate-gradient-shift` | 8s | ease | Background gradient cycling |

#### Keyframe Definitions

```css
@keyframes aurora {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25%      { transform: translate(10px, -10px) rotate(1deg); }
  50%      { transform: translate(-5px, 5px) rotate(-1deg); }
  75%      { transform: translate(-10px, -5px) rotate(0.5deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-20px); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; }
  50%      { opacity: 1; }
}

@keyframes bubble-float {
  0%   { transform: translateY(0); opacity: 0.3; }
  50%  { transform: translateY(-40px); opacity: 0.5; }
  100% { transform: translateY(0); opacity: 0.3; }
}

@keyframes bubble-drift {
  0%   { transform: translate(0, 0); opacity: 0.2; }
  25%  { transform: translate(20px, -30px); opacity: 0.35; }
  50%  { transform: translate(0, -50px); opacity: 0.4; }
  75%  { transform: translate(-20px, -30px); opacity: 0.35; }
  100% { transform: translate(0, 0); opacity: 0.2; }
}

@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
}
```

### 4.2 Framer Motion Variants

The primary JavaScript animation system uses Framer Motion for scroll-triggered reveals and interactive states.

#### Container Variants

Controls staggered reveal of child elements within a section.

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,   // 60ms between each child
      delayChildren: 0.05,     // 50ms initial delay
    },
  },
}
```

#### Item Variants

Applied to individual items within a container for coordinated entry animations.

```tsx
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,          // 350ms total
      ease: [0.25, 0.46, 0.45, 0.94],  // Custom cubic bezier
    },
  },
}
```

#### Scroll-Triggered Entry

All major sections use `whileInView` to trigger animations when they enter the viewport.

```tsx
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={containerVariants}
>
  <motion.div variants={itemVariants}>
    {/* Content */}
  </motion.div>
</motion.section>
```

| Parameter | Value | Purpose |
|-----------|-------|---------|
| `viewport.once` | `true` | Animate only on first scroll into view |
| `viewport.amount` | `0.3` | Trigger when 30% of element is visible |
| `staggerChildren` | `0.06` | 60ms delay between siblings |
| `delayChildren` | `0.05` | 50ms delay before first child |
| `item duration` | `0.35` | 350ms per item animation |
| `item y offset` | `15px` | Subtle upward slide distance |

#### Interactive Hover States

Cards use `whileHover` for scale feedback:

```tsx
<motion.article
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3, ease: "ease" }}
>
```

### 4.3 Reduced Motion Support

All animations respect `prefers-reduced-motion`. CSS animations are disabled via media query, and Framer Motion variants are swapped to static values.

```css
@media (prefers-reduced-motion: reduce) {
  .animate-aurora,
  .animate-float,
  .animate-pulse-glow,
  .animate-bubble-float,
  .animate-bubble-float-alt,
  .animate-bubble-drift,
  .animate-pulse-slow,
  .animate-shimmer,
  .animate-gradient-shift {
    animation: none !important;
  }

  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

```tsx
// Framer Motion reduced-motion fallback
const prefersReducedMotion = useReducedMotion()

const activeContainerVariants = prefersReducedMotion
  ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
  : containerVariants

const activeItemVariants = prefersReducedMotion
  ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
  : itemVariants
```

### 4.4 Lenis Smooth Scrolling

The site uses Lenis for GPU-accelerated smooth scrolling with a custom easing curve.

```tsx
import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
```

| Parameter | Value | Purpose |
|-----------|-------|---------|
| `duration` | `1.2` | Scroll momentum duration in seconds |
| `easing` | Exponential decay | Fast start, smooth deceleration |
| `orientation` | `vertical` | Vertical scroll axis |
| `smoothWheel` | `true` | Smooth mouse wheel scrolling |

### 4.5 GSAP & Three.js

**GSAP** is used for complex timeline-based animations that require precise sequencing beyond Framer Motion's declarative model (e.g., coordinated hero entry sequences, scroll-linked parallax timelines).

**Three.js** powers two ambient 3D elements:

1. **Particle Field** (`components/particle-field.tsx`) — A field of floating points rendered with `THREE.Points` and custom shaders, using brand colors. Particles drift slowly to create depth.
2. **Floating Cube** (`components/floating-cube.tsx`) — A wireframe cube that rotates continuously, providing a geometric focal point in the hero section.

Both 3D elements are conditionally rendered based on device capability (disabled on mobile for performance).

---

## 5. Layout Grid & Spacing

### 5.1 Spacing Scale

The design system uses a **4px base unit** with the following scale:

| Token | Value | Tailwind | Typical Use |
|-------|-------|----------|-------------|
| `xs` | 4px | `p-1` | Icon padding, tight gaps |
| `sm` | 8px | `p-2` / `gap-2` | Inline element spacing |
| `md` | 16px | `p-4` / `gap-4` | Card internal padding |
| `lg` | 24px | `p-6` / `gap-6` | Section internal padding |
| `xl` | 32px | `p-8` / `gap-8` | Card grid gaps |
| `2xl` | 48px | `py-12` | Sub-section spacing |
| `3xl` | 64px | `py-16` | Section vertical padding |
| `4xl` | 96px | `py-24` | Major section separation |

### 5.2 Container

```
Max width: determined by Tailwind's container defaults
Responsive padding:
  - Mobile:  px-4 (16px)
  - Tablet:  px-6 (24px)
  - Desktop: px-8 (32px)
Horizontal centering: mx-auto
```

### 5.3 Card Grid

| Breakpoint | Columns | Gap | Implementation |
|------------|---------|-----|----------------|
| Mobile (`<640px`) | 1 | 16px | `grid-cols-1 gap-4` |
| Small tablet (`640-767px`) | 2 | 16px | `sm:grid-cols-2 gap-4` |
| Tablet (`768-1023px`) | 2 | 24px | `md:grid-cols-2 gap-6` |
| Desktop (`1024-1279px`) | 3 | 24px | `lg:grid-cols-3 gap-6` |
| Large desktop (`1280px+`) | 3-4 | 32px | `xl:grid-cols-4 gap-8` |

Team member grid uses a dedicated 6-column layout on desktop:

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
```

### 5.4 Section Spacing

Major sections (Hero, Pillars, Programs, Team, Gallery, Previous Editions) are separated by `96px` (`py-24` in Tailwind, equivalent to the `4xl` token). Internal sub-sections use `48px` (`py-12`).

### 5.5 Border Radius Tokens

| Token | Value | CSS Variable | Typical Use |
|-------|-------|-------------|-------------|
| `sm` | 4px | `--radius-sm` | Small badges, chips |
| `md` | 8px | `--radius-md` | Buttons, inputs |
| `lg` | 16px | `--radius-lg` / `--radius` | Cards (default `1rem`) |
| `xl` | 24px | `--radius-xl` | Large cards, modals |
| `2xl` | 32px | `--radius-2xl` | Hero panels, featured content |
| `full` | 9999px | `rounded-full` | Avatars, pill buttons, dots |

The base `--radius` CSS variable is set to `1rem` (16px) and all other radius tokens are derived from it:

```css
--radius: 1rem;
--radius-sm: calc(var(--radius) - 4px);   /* 12px */
--radius-md: calc(var(--radius) - 2px);   /* 14px */
--radius-lg: var(--radius);                /* 16px */
--radius-xl: calc(var(--radius) + 4px);    /* 20px */
--radius-2xl: calc(var(--radius) + 8px);   /* 24px */
```

---

## 6. Responsive Breakpoints

### Breakpoint Map

| Breakpoint | Width Range | Description | Key Behaviors |
|------------|-------------|-------------|---------------|
| `xs` | < 480px | Mobile portrait | Single column, stacked cards, full-width hero, touch-friendly gallery |
| `sm` | 480–768px | Mobile landscape / small tablets | 2-column card grids begin, adjusted font sizes |
| `md` | 768–1024px | Tablets | 2-column grids, adjusted spacing, side-by-side layouts |
| `lg` | 1024–1280px | Small desktop | 3-column grids, full navigation visible, particle effects activate |
| `xl` | 1280–1536px | Desktop | Full multi-column layouts, enhanced hover states |
| `2xl` | > 1536px | Large desktop | Maximum content width, largest typography scale |

### Responsive Behavior by Component

| Component | Mobile (xs/sm) | Tablet (md) | Desktop (lg+) |
|-----------|----------------|-------------|----------------|
| **Navigation** | Hamburger menu with slide-out overlay | Hamburger or inline | Full horizontal nav bar |
| **Hero** | Full-width, stacked text + CTA | Side-by-side text/visual | Full layout with 3D elements |
| **Pillar Cards** | 1 column, full width | 2 columns | 3 columns with glow effects |
| **Team Grid** | 1 column (2 on sm) | 2-3 columns | 6 columns (one per member) |
| **Gallery Carousel** | 1 image visible, swipe | 2 images visible | 3 images visible, auto-advance |
| **Previous Editions** | Horizontal scroll | 2-column grid | 3-4 column grid |
| **3D Elements** | Disabled for performance | Conditionally enabled | Fully active (particles + cube) |

### Gallery Carousel Responsive Logic

```tsx
if (window.innerWidth < 640) {
  setItemsPerView(1)    // Mobile: single image
} else if (window.innerWidth < 1024) {
  setItemsPerView(2)    // Tablet: two images
} else {
  setItemsPerView(3)    // Desktop: three images
}
```

---

## 7. Shadow & Elevation System

### Elevation Layers

The shadow system creates a clear visual hierarchy with four elevation levels.

| Level | Name | Use Case | CSS Value |
|-------|------|----------|-----------|
| 0 | Flat | Backgrounds, section fills | No shadow |
| 1 | Card (rest) | Glass cards at rest | `0 8px 32px rgba(0, 0, 0, 0.1)` |
| 2 | Card (hover) | Glass cards on hover/focus | `0 20px 40px rgba(0, 0, 0, 0.15)` |
| 3 | Elevated | Modals, popovers, dropdowns | `0 12px 40px rgba(0, 0, 0, 0.15)` |

### Glow Shadows

Pillar cards and interactive elements use colored glow shadows that extend beyond the card boundary.

```css
/* Standard glow (utility classes) */
.glow-turquoise { box-shadow: 0 0 20px rgba(0, 181, 173, 0.4); }
.glow-lime      { box-shadow: 0 0 20px rgba(195, 213, 52, 0.4); }
.glow-purple    { box-shadow: 0 0 20px rgba(155, 79, 150, 0.4); }
.glow-blue      { box-shadow: 0 0 20px rgba(0, 87, 184, 0.4); }
.glow-pink      { box-shadow: 0 0 20px rgba(244, 166, 201, 0.4); }

/* Pillar card glow (larger radius, lower opacity) */
box-shadow: 0 0 30px rgba(brand-color, 0.3);
```

### Hover Shadow Transition

Cards transition from Level 1 to Level 2 shadow on hover, combined with a brand-color glow border:

```css
.card-interactive {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card-interactive:hover {
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(195, 213, 52, 0.3);
}
```

### Inner Glow

The enhanced glass card uses an inner glow created with a pseudo-element gradient border:

```css
/* Subtle inner glow using brand colors at 20% opacity */
background: linear-gradient(
  135deg,
  rgba(195, 213, 52, 0.2) 0%,     /* Lime at 20% */
  transparent 50%,
  rgba(0, 181, 173, 0.2) 100%     /* Turquoise at 20% */
);
```

### 3D Book Shadow

The book component uses a perspective-based shadow system:

```css
/* Book at rest (rotated) */
box-shadow:
  -8px 8px 20px rgba(0, 0, 0, 0.4),
  -2px 2px 8px rgba(0, 0, 0, 0.3);

/* Book on hover (straight) */
box-shadow:
  0 15px 35px rgba(0, 0, 0, 0.3),
  0 5px 15px rgba(0, 0, 0, 0.2);
```

---

## 8. Icon System

### Library

The project uses **Lucide React** — an open-source icon library providing consistent, clean outline-style icons at 24×24px default size with 2px stroke width.

### Icons in Use

| Icon | Component | Context |
|------|-----------|---------|
| `ArrowRight` | Landing page, program cards | "Learn More" link indicators, CTA arrows |
| `ChevronLeft` | Gallery carousel | Previous slide navigation |
| `ChevronRight` | Gallery carousel | Next slide navigation |
| `Menu` | Navbar | Mobile hamburger menu trigger |
| `X` | Navbar | Mobile menu close button |

### Icon Sizing

| Context | Size | Tailwind Class | Pixel Value |
|---------|------|---------------|-------------|
| Card/section icons | Large | `w-10 h-10` | 40×40px |
| Navigation controls | Medium | `w-6 h-6` | 24×24px |
| Inline/body text | Small | `w-5 h-5` | 20×20px |
| Compact/mobile | Extra small | `w-4 h-4` | 16×16px |

### Icon Colors

| Context | Color | Implementation |
|---------|-------|----------------|
| Primary (default) | White `#FFFFFF` | `text-white` |
| Brand accent | Lime `#C3D534` | `text-[#C3D534]` |
| Interactive hover | Yellow `#F7E73F` | `group-hover:text-[#F7E73F]` |
| Muted | White at 60% | `text-white/60` |
| Disabled | White at 20% | `disabled:opacity-20` |

### Usage Pattern

```tsx
import { ArrowRight, ChevronLeft, ChevronRight, Menu, X } from "lucide-react"

// Navigation icon
<Menu className="w-6 h-6 text-white" />

// CTA arrow with hover animation
<ArrowRight
  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
  aria-hidden="true"
/>

// Carousel controls with responsive sizing
<ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" aria-hidden="true" />
```

All decorative icons include `aria-hidden="true"` to prevent screen reader noise. Interactive icon buttons include descriptive `aria-label` attributes.

---

*This document is part of the Gen Z 11th Edition Design Book. For brand identity guidelines including color palette, typography, and logo usage, see [01 — Brand Identity](./01-brand-identity.md).*
