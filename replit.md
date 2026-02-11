# GenZ Website

## Overview
This project is a modern, visually rich Next.js 16 website for the "Generation Z" 11th Edition 2026 event. It integrates the best features from previous editions, focusing on a dynamic user experience with advanced animations and 3D elements. The core purpose is to provide a fully CMS-editable platform for all website content, including program details, workshop pages, and event information. The project aims to be a "silent ambassador" for the brand, embodying a sophisticated digital presence.

## User Preferences
- **Communication style**: Use clear and direct language.
- **Explanation style**: Provide concise explanations without excessive jargon.
- **Workflow**: Prefer iterative development with frequent, small updates.
- **Interaction**: Ask for confirmation before implementing major architectural changes or design overhauls.
- **Code style**: Maintain consistent, readable code.
- **Accessibility**: Ensure all features are designed and implemented with WCAG 2.1 AA accessibility in mind, including reduced motion, proper focus indicators, and screen reader support.
- **Design Book**: Adhere to the "Silent Ambassador" brand strategy and the comprehensive design book specifications, ensuring brand alignment, visual consistency, and a premium user experience.

## System Architecture

### UI/UX Decisions
The website adopts a glassmorphism UI styling with a brand color palette of lime (#C3D534), yellow (#F7E73F), and turquoise (#00B5AD). It features animated gradient orbs and a dark-mode-first design approach. A comprehensive design book, including brand identity, visual design system, UX/interaction design, and information architecture, guides all design decisions. Accessibility (WCAG 2.1 AA) is a core focus, with implementations for color contrast, reduced motion, focus indicators, and screen reader support.

### Technical Implementations
The site is built with Next.js 16 (App Router) and React 19. Animations are handled by Framer Motion and GSAP, with smooth scrolling provided by Lenis. 3D elements utilize Three.js, @react-three/fiber, and @react-three/drei. All content is managed via Sanity.io headless CMS, with rich text rendering via `@portabletext/react`. Forms are managed with React Hook Form and Zod validation, supporting dynamic embedding of external forms (e.g., MS Forms).

### Feature Specifications
- **CMS-driven Content**: All text content, hero sections, program pillars, about sections, programs list, previous editions, gallery images, team members, workshop pages, footer links, and site settings (including theme colors and fonts) are editable via Sanity CMS.
- **Dynamic Workshop Pages**: Fully CMS-driven workshop pages (`/workshop/[slug]`) and a dedicated "Reframe" page (`/reframe`) with comprehensive sections.
- **Interactive Book Selection**: Replaced modal popups with full-page book detail views, featuring primary book highlighting and smooth transitions. Books can have placeholder content if "undecided."
- **Animated Backgrounds**: Includes 3D particle backgrounds and aurora gradient animations.
- **Corporate Navigation**: Navigation is always visible with uppercase links and a gradient "Register" button.
- **Theming**: CMS-editable theme settings for colors and fonts, applied site-wide via CSS variables.

### System Design Choices
- **Next.js App Router**: Leverages server components and modern Next.js features.
- **Sanity.io**: Chosen for its flexible content modeling and developer-friendly API, ensuring full content editability.
- **Optimized Performance**: Smooth scrolling, 3D elements, and animations are implemented with performance in mind, including reduced motion options.
- **Robust Schema**: Detailed Sanity schemas for `Site Settings`, `Program`, `Previous Edition`, `Workshop`, `Book`, `Gallery Image`, and `Team Member` ensure structured and comprehensive content management.

## External Dependencies
- **Sanity.io**: Headless CMS for all website content.
- **Vercel Analytics**: For website analytics.
- **Microsoft Forms / Google Forms**: For embedding registration forms.
- **Google Fonts**: For dynamic font loading based on CMS settings.