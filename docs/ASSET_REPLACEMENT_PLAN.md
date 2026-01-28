# Asset Replacement Plan
## Gen Z Website - Real Branding Assets

**Version:** 1.0
**Date:** January 28, 2026
**Status:** In Progress

---

## Executive Summary

This document outlines the plan to replace placeholder SVG assets with official Zain branding and the actual "Reset" book cover for the Gen Z 11th Edition website.

---

## Current State

### Placeholder Assets Currently in Use

| Asset | Location | Type | Status |
|-------|----------|------|--------|
| Zain Logo | `/public/images/zain-logo-white.svg` | SVG | Placeholder (improved) |
| Reset Book Cover | `/public/images/reset-book-cover.svg` | SVG | Placeholder |
| Gen Z Logo | `/public/images/genz-logo.svg` | SVG | Placeholder |
| Zain Pattern | `/public/images/zain-pattern-bubbles.svg` | SVG | Placeholder |

---

## Official Zain Branding

### Brand Elements (Based on Research)

**Logo Design:**
- Spiral/swirl icon in turquoise and purple gradients
- "zain" text in lowercase (except 'N' stylization varies)
- Font: Avenir (corporate typeface)
- Colors: Turquoise (#00B5AD), Purple (#9B4F96), Light Blue (#00B2E3)

**Brand Colors:**
```css
/* Primary */
--zain-turquoise: #00B5AD;
--zain-purple: #9B4F96;
--zain-light-blue: #00B2E3;

/* Secondary (Gen Z Program) */
--lime: #C3D534;
--yellow: #F7E73F;
--blue: #0057B8;
```

### Sources for Official Assets

1. **Brandfetch**: https://brandfetch.com/zaingroup-me.com
2. **Zain Official**: https://www.zain.com
3. **Worldvectorlogo**: https://worldvectorlogo.com/logo/zain-1
4. **Seeklogo**: https://seeklogo.com/vector-logo/328421/zain

---

## Reset Book Cover

### Book Details

- **Title:** Reset: How to Change What's Not Working
- **Author:** Dan Heath
- **Publisher:** Avid Reader Press / Simon & Schuster
- **ISBN:** 9781668062098
- **Release Date:** January 21, 2025

### Cover Design Elements

- **Background:** Bright yellow (#F7E73F)
- **Main Graphic:** Red and white bullseye/target
- **Typography:** Bold sans-serif for "RESET" and author name
- **Subtitle:** "How to Change What's Not Working"

### Sources for Cover Image

1. **Simon & Schuster**: https://www.simonandschuster.com/books/Reset/Dan-Heath/9781668062098
2. **Amazon**: https://www.amazon.com/Reset-How-Change-Whats-Working/dp/1668062097
3. **Barnes & Noble**: https://www.barnesandnoble.com/w/reset-dan-heath/1145661188

---

## Implementation Plan

### Phase 1: Placeholder Improvements (Completed)

1. ✅ Updated Zain logo SVG with spiral icon based on official branding
2. ✅ Updated Reset book cover SVG with accurate design elements
3. ✅ Maintained proper color palette matching brand guidelines

### Phase 2: Real Asset Integration (Pending User Input)

**Required from Zain/User:**

| Asset | Format | Purpose |
|-------|--------|---------|
| Official Zain Logo | SVG or PNG (transparent) | Header, footer branding |
| Gen Z Program Logo | SVG or PNG | Hero section |
| Reset Book Cover | JPG/PNG (high-res) | Book showcase section |
| Facilitator Photos | JPG (headshots) | Team section |

### Phase 3: Asset Optimization

Once real assets are provided:

1. **Image Optimization**
   - Convert to WebP for better performance
   - Create responsive sizes (1x, 2x, 3x)
   - Add blur placeholders for lazy loading

2. **SVG Optimization**
   - Run through SVGO for file size reduction
   - Ensure proper viewBox settings
   - Add accessibility attributes

---

## How to Replace Assets

### Step 1: Obtain Official Assets

Contact Zain Marketing/Brand team for:
- Official logo files (SVG preferred)
- Gen Z program branding kit
- Any required image usage guidelines

### Step 2: Replace Files

```bash
# Replace in public/images/
cp /path/to/official/zain-logo.svg public/images/zain-logo-white.svg
cp /path/to/official/genz-logo.svg public/images/genz-logo.svg
cp /path/to/official/reset-cover.jpg public/images/reset-book-cover.jpg
```

### Step 3: Update Image References

If changing file formats (e.g., SVG to PNG), update imports in:
- `components/genz-landing.tsx`
- `app/reframe/page.tsx`
- Any other components using these images

### Step 4: Test & Deploy

```bash
# Build and test locally
pnpm build
pnpm start

# Verify images load correctly
# Check responsive behavior
# Deploy to Vercel
```

---

## Landing Page Design (10th Edition Style)

### Design Elements to Incorporate

Based on the 10th edition structure (Vite + React):

1. **3D Elements** ✅ (Already added via FloatingCube, ParticleField)
2. **Smooth Animations** ✅ (Framer Motion integrated)
3. **Gradient Backgrounds** ✅ (Aurora-style gradients)
4. **Glass-morphism Cards** ✅ (Glass utility classes)

### Additional Enhancements

- [ ] Add GSAP for advanced scroll animations
- [ ] Integrate Lenis for smooth scrolling
- [ ] Add confetti on registration success
- [ ] Implement page transitions

---

## File Structure After Updates

```
public/
└── images/
    ├── zain-logo-white.svg      # Official Zain logo (white variant)
    ├── zain-logo-color.svg      # Official Zain logo (color variant)
    ├── genz-logo.svg            # Gen Z program logo
    ├── reset-book-cover.jpg     # Official book cover image
    ├── reset-book-cover.svg     # SVG fallback
    ├── zain-pattern-bubbles.svg # Decorative pattern
    └── facilitators/            # Team member photos
        ├── facilitator-1.jpg
        ├── facilitator-2.jpg
        └── ...
```

---

## Next Steps

1. **Immediate:** Use improved SVG placeholders (completed)
2. **Short-term:** Request official assets from Zain brand team
3. **Medium-term:** Replace placeholders with official assets
4. **Long-term:** Set up asset management system for future updates

---

## Contact

For official Zain branding assets, contact:
- Zain Marketing/Brand Team
- Email: generationz@zain.com

---

*Document maintained by the Gen Z Development Team*
