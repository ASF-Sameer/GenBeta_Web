# GenZ Website

## Overview
A Next.js 16 website for "Generation Z" - 11th Edition 2026. The site is a modern, visually rich application built with React 19, featuring animations with Framer Motion and GSAP, 3D elements with Three.js, and UI components from Radix UI with Tailwind CSS styling.

## Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components (includes Radix UI components)
- `hooks/` - Custom React hooks (mobile detection, toast notifications)
- `lib/` - Utility functions
- `public/` - Static assets
- `docs/` - Project documentation

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **UI**: React 19, Radix UI, Tailwind CSS v4
- **Animations**: Framer Motion, GSAP, Lenis (smooth scrolling)
- **3D**: Three.js, @react-three/fiber, @react-three/drei
- **Form handling**: React Hook Form with Zod validation

## Running the Project
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`
- Production: `npm run start`

## Configuration
- The Next.js config allows all dev origins for Replit's proxy environment
- Images are set to unoptimized mode
- TypeScript errors are ignored during builds

## Recent Changes
- 2026-01-28: Initial Replit setup
  - Configured Next.js to run on port 5000 with host 0.0.0.0
  - Removed macOS-specific dependency (@next/swc-darwin-arm64)
  - Added allowedDevOrigins for Replit proxy compatibility
