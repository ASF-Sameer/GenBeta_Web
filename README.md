# Generation Z Website 🚀

> **Gen Z 2026 Program - 11th Edition** | Zain Group
>
> Empowering the next generation of leaders through hands-on experience in leadership, innovation, and continuous learning.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)

---

## Overview

This website serves as the digital hub for Zain's **Generation Z Program**, featuring the **REFRAME** learning series - an initiative designed to help colleagues rethink, reset, and drive meaningful change.

### Featured Program: REFRAME

The REFRAME series is a workshop-based learning program powered by transformative books:

- **Session 1:** *Reset* by Dan Heath
- **Session 2:** Coming Soon
- **Session 3:** Coming Soon

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | Shadcn/UI + Radix UI |
| **Animations** | CSS + Framer Motion (optional) |
| **Icons** | Lucide React |
| **Forms** | Microsoft Forms (embedded) |
| **Analytics** | Vercel Analytics |
| **Deployment** | Vercel |

---

## Project Structure

```
GenBeta_Web/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with theme
│   ├── page.tsx            # Landing page (Gen Z Hub)
│   ├── globals.css         # Global styles + Tailwind
│   └── reframe/
│       └── page.tsx        # REFRAME program page
├── components/             # React components
│   ├── aurora-background.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── book-carousel.tsx
│   ├── agenda-timeline.tsx
│   ├── facilitators.tsx
│   ├── registration.tsx
│   ├── footer.tsx
│   └── ...
├── hooks/                  # Custom React hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/                    # Utilities
│   └── utils.ts
├── public/                 # Static assets
│   └── images/
└── docs/                   # Documentation
    ├── PRD.md
    └── VISUAL_DESIGN_RECOMMENDATIONS.md
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ASF-Sameer/GenBeta_Web.git
cd GenBeta_Web

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
pnpm start
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Gen Z Hub - Landing page with program overview |
| `/reframe` | REFRAME series page with full details |

---

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Lime** | `#C3D534` | Primary accent, CTAs |
| **Turquoise** | `#00B5AD` | Primary brand, buttons |
| **Blue** | `#0057B8` | Secondary brand |
| **Yellow** | `#F7E73F` | Highlights |
| **Purple** | `#9B4F96` | Accent |
| **Sapphire** | `#1E1A5F` | Dark mode background |

### Key Features

- 🌓 **Dark/Light Mode** - System preference + manual toggle
- 🔮 **Glassmorphism** - Modern frosted glass UI
- ✨ **Aurora Backgrounds** - Animated gradient backgrounds
- 📱 **Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG 2.1 AA compliant
- ⚡ **Performance** - Optimized for Core Web Vitals

---

## Documentation

- [📋 Product Requirements Document (PRD)](./docs/PRD.md)
- [🎨 Visual Design Recommendations](./docs/VISUAL_DESIGN_RECOMMENDATIONS.md)

---

## Team

**Gen Z 2026 Program Facilitators:**

- Ayah Al-Manea
- Ahmed Alonaizi
- Abdulmohsen Alzenki
- Asail Alheis
- Miteb Aloqab
- Jana Alabduljader

---

## License

Copyright © 2026 Zain Group. All rights reserved.

---

## Contact

📧 [generationz@zain.com](mailto:generationz@zain.com)
