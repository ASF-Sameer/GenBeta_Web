# GenZ Website

## Overview
The GenZ Website is a modern, visually rich Next.js 16 application designed for the "Generation Z - 11th Edition 2026" event. It integrates content management via Sanity.io, allowing all textual and media content, from hero sections to workshop details and team member profiles, to be fully CMS-editable. The project aims to provide a dynamic and engaging user experience with advanced animations and 3D elements, combining the strengths of previous editions into a unified and performant platform.

## User Preferences
None specified.

## System Architecture
The project is built with Next.js 16 using the App Router, React 19, Radix UI, and Tailwind CSS v4.
UI/UX decisions include:
- **Styling**: Glassmorphism, brand color palette (lime #C3D534, yellow #F7E73F, turquoise #00B5AD), animated gradient orbs.
- **Animations**: Framer Motion, GSAP, and Lenis for smooth scrolling.
- **3D Elements**: Three.js, @react-three/fiber, and @react-three/drei for interactive 3D components like floating cubes and particle backgrounds.
- **Content Management**: All content is managed via Sanity.io, including site settings, programs, previous editions, workshops, books, gallery images, and team members.
- **Dynamic Content**: Workshop pages (`/workshop/[slug]`) and specific program pages (`/reframe`) are fully CMS-driven.
- **Interactive Elements**: Features interactive book selection with full-page detail views and dynamic form embedding for registrations.
- **Accessibility**: Implements WCAG 2.1 AA compliance with improved color contrast, reduced motion support, consistent focus indicators, screen reader support, skip navigation links, and keyboard navigation.
- **Theming**: CMS-editable theme settings for fonts and colors applied via CSS variables.

## External Dependencies
- **CMS**: Sanity.io (headless CMS)
- **UI Libraries**: Radix UI, Tailwind CSS v4
- **Animation Libraries**: Framer Motion, GSAP, Lenis (for smooth scrolling)
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Rich Text Rendering**: @portabletext/react
- **Form Management**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics
- **Forms Embedding**: Microsoft Forms, Google Forms (via embed URL)