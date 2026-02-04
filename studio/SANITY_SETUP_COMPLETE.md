# Complete Sanity Studio Setup

Copy all files from the `studio/schemaTypes/` folder to your Sanity Studio's `schemaTypes/` folder.

## Files to Copy (8 total)

1. `index.ts` - Schema registry
2. `siteSettings.ts` - Global settings, theme, hero, footer
3. `workshop.ts` - Workshop pages with all sections
4. `book.ts` - Books with popup content
5. `program.ts` - Programs listing
6. `previousEdition.ts` - Historical editions
7. `galleryImage.ts` - Gallery images
8. `teamMember.ts` - Team members

## Quick Setup Commands

```bash
# In your Sanity Studio project folder:

# 1. Replace your schemaTypes folder with the files from this project
# (copy the entire studio/schemaTypes folder contents)

# 2. Deploy to Sanity
npx sanity deploy
```

## What Each Schema Controls

| Schema | Controls |
|--------|----------|
| **siteSettings** | Hero, About, Pillars, Footer, Nav Links, **Theme (colors/fonts/gradients)** |
| **workshop** | Individual workshop pages with 8 sections: hero, about, benefits, attendees, timing, reading journey, session flow, facilitators, registration |
| **book** | Books with popup content, files, links, **Primary badge**, placeholder for undecided books |
| **program** | Main programs list |
| **previousEdition** | Historical Gen Z editions (2016-2024) |
| **galleryImage** | Photo gallery images |
| **teamMember** | Team member profiles |

## After Deploying

Your Sanity Studio will show these document types:
- Site Settings (singleton - only one)
- Workshop (multiple)
- Book (multiple)
- Program (multiple)
- Previous Gen Z Edition (multiple)
- Gallery Image (multiple)
- Team Member (multiple)

## Theme Settings Location

In Sanity Studio:
1. Click "Site Settings"
2. Click the "Theme & Design" tab
3. Set your colors, fonts, and gradients
4. Click "Publish"

The website will automatically use your new theme within 60 seconds.
