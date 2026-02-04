# Generation Z Website - Sanity Schemas

These schema files define all CMS-editable content for the Gen Z 11th Edition website.

## Schema Files

| File | Content Type | Description |
|------|--------------|-------------|
| `siteSettings.ts` | Site Settings | Global configuration: hero, about, pillars, footer, nav links |
| `workshop.ts` | Workshop | Full workshop pages with 10 sections (hero, about, benefits, etc.) |
| `book.ts` | Book | Reading journey books with popup content, files, and links |
| `program.ts` | Program | Program overview cards |
| `previousEdition.ts` | Previous Edition | Historical Gen Z editions (2016-2024) |
| `galleryImage.ts` | Gallery Image | Photo gallery images |
| `teamMember.ts` | Team Member | Team member profiles |
| `index.ts` | Schema Registry | Exports all schema types |

## Installation

1. Copy all `.ts` files to your Sanity Studio's `schemaTypes/` folder
2. Replace the existing `index.ts` with the one provided
3. Run `npm run dev` or `npx sanity dev` to start Sanity Studio
4. Deploy with `npx sanity deploy`

## Content Structure

### Site Settings (Singleton)
- Hero Section: welcome text, title, program name, description, CTA button, hero image
- About Section: title, subtitle, description
- Pillars/Themes: array of 5 program themes with icons, colors, topics
- Section Titles: separate titles for pillars, programs, team, gallery, previous editions
- Footer: copyright, social links, quick links, Zain official links
- Navigation: nav links with button option

### Workshop (Full Page Template)
1. Hero Section: badge, title, subtitle, background image
2. About Section: title, rich text, highlights, image
3. Benefits Section: title, subtitle, benefit cards (icon, title, description)
4. Attendees Section: who should attend cards
5. Timing Section: event details (date, time, location, duration)
6. Reading Journey: books for the workshop (references Book documents)
7. Session Flow: timeline of sessions with times and descriptions
8. Facilitators: team members leading the workshop
9. Reserve Spot: CTA section
10. Registration: embeddable form (MS Forms, Google Forms, etc.)

### Book (Reading Journey Items)
- Basic Info: title, author, cover image, short description
- Decided State: boolean to show full content or placeholder
- Popup Content: headline, rich text description, workshop details, key takeaways, duration, format
- Files: downloadable attachments with descriptions
- Links: external resources with labels
- Placeholder Message: shown when book is not yet decided

## Color Palette
- Lime: #C3D534
- Yellow: #F7E73F
- Turquoise: #00B5AD
- Navy: #1C2951
- Purple: #1E1A5F

## Environment Variables (Website)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=nbpw4115
NEXT_PUBLIC_SANITY_DATASET=production
```
