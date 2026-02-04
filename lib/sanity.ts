import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'nbpw4115',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source)
}

export function fileUrl(ref: string) {
  const [, id, extension] = ref.split('-')
  return `https://cdn.sanity.io/files/${sanityClient.config().projectId}/${sanityClient.config().dataset}/${id}.${extension}`
}

// Site Settings (global site configuration)
export async function getSiteSettings() {
  return sanityClient.fetch(`
    *[_type == "siteSettings"][0] {
      siteTitle,
      theme {
        colors {
          primary,
          secondary,
          accent,
          navyDark,
          navyLight,
          blue
        },
        fonts {
          headingFont,
          bodyFont
        },
        gradients {
          heroGradientStart,
          heroGradientEnd,
          cardGradientStart,
          cardGradientEnd
        }
      },
      heroSection {
        welcomeText,
        title,
        programName,
        byLine,
        description,
        ctaText,
        ctaLink,
        heroImage
      },
      aboutSection {
        title,
        subtitle,
        description
      },
      pillars[] {
        title,
        description,
        icon,
        color,
        topics,
        bookCover,
        linkUrl
      },
      pillarsSection {
        title,
        subtitle
      },
      programsSection {
        title,
        subtitle
      },
      previousEditionsSection {
        title,
        subtitle
      },
      gallerySection {
        title,
        subtitle
      },
      teamSection {
        title,
        subtitle
      },
      footer {
        copyrightText,
        tagline,
        socialLinks[] {
          platform,
          url,
          icon
        },
        quickLinks[] {
          label,
          url
        },
        zainLinks[] {
          label,
          url
        }
      },
      navLinks[] {
        label,
        url,
        isButton
      }
    }
  `)
}

// Get only theme settings (for layout)
export async function getThemeSettings() {
  return sanityClient.fetch(`
    *[_type == "siteSettings"][0] {
      theme {
        colors {
          primary,
          secondary,
          accent,
          navyDark,
          navyLight,
          blue
        },
        fonts {
          headingFont,
          bodyFont
        },
        gradients {
          heroGradientStart,
          heroGradientEnd,
          cardGradientStart,
          cardGradientEnd
        }
      }
    }
  `)
}

// Programs (Our Programs section - like Reframe, etc.)
export async function getPrograms() {
  return sanityClient.fetch(`
    *[_type == "program"] | order(order asc) {
      _id,
      title,
      slug,
      description,
      shortDescription,
      image,
      featured,
      order
    }
  `)
}

export async function getProgram(slug: string) {
  return sanityClient.fetch(`
    *[_type == "program" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      shortDescription,
      image,
      featured,
      heroTitle,
      heroSubtitle,
      sections
    }
  `, { slug })
}

// Previous Gen Z Editions (2016-2024)
export async function getPreviousEditions() {
  return sanityClient.fetch(`
    *[_type == "previousEdition"] | order(year desc) {
      _id,
      year,
      title,
      description,
      whatMadeUsDifferent,
      image
    }
  `)
}

// Gen Z 2026 Content (legacy - keeping for compatibility)
export async function getGenZ2026() {
  return sanityClient.fetch(`
    *[_type == "genZ2026"][0] {
      _id,
      title,
      subtitle,
      description,
      pillars[] {
        title,
        description,
        color,
        topics
      },
      teamMembers[] {
        name,
        role,
        image,
        email,
        linkedin
      }
    }
  `)
}

// Gallery Images
export async function getGalleryImages() {
  return sanityClient.fetch(`
    *[_type == "galleryImage"] | order(order asc) {
      _id,
      title,
      image,
      alt,
      category,
      order
    }
  `)
}

// Workshops (individual workshop pages like Reframe)
export async function getWorkshops() {
  return sanityClient.fetch(`
    *[_type == "workshop"] | order(order asc) {
      _id,
      title,
      slug,
      shortDescription,
      image,
      featured,
      order
    }
  `)
}

export async function getWorkshop(slug: string) {
  return sanityClient.fetch(`
    *[_type == "workshop" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      shortDescription,
      image,
      featured,
      heroSection {
        badge,
        title,
        subtitle,
        backgroundImage
      },
      aboutSection {
        title,
        description,
        highlights,
        image
      },
      benefitsSection {
        title,
        subtitle,
        benefits[] {
          icon,
          title,
          description
        }
      },
      attendeesSection {
        title,
        subtitle,
        attendeeTypes[] {
          icon,
          title,
          description
        }
      },
      timingSection {
        title,
        details[] {
          icon,
          label,
          value
        }
      },
      readingJourneySection {
        title,
        subtitle,
        books[]-> {
          _id,
          title,
          author,
          coverImage,
          shortDescription,
          isPrimary,
          isDecided,
          placeholderMessage,
          popupContent {
            headline,
            description,
            workshopDetails,
            keyTakeaways,
            duration,
            format
          },
          files[] {
            fileName,
            "fileUrl": file.asset->url,
            description
          },
          links[] {
            label,
            url,
            isExternal
          },
          order
        }
      },
      sessionFlowSection {
        badge,
        title,
        subtitle,
        sessions[] {
          time,
          title,
          description,
          duration,
          icon
        }
      },
      facilitatorsSection {
        title,
        subtitle,
        facilitators[] {
          name,
          role,
          bio,
          image,
          email,
          linkedin,
          specialties
        }
      },
      reserveSpotSection {
        title,
        subtitle,
        ctaText,
        spotsText
      },
      registrationSection {
        title,
        subtitle,
        formEmbedUrl,
        formHeight,
        alternativeText
      }
    }
  `, { slug })
}

// Books
export async function getBooks() {
  return sanityClient.fetch(`
    *[_type == "book"] | order(order asc) {
      _id,
      title,
      author,
      coverImage,
      shortDescription,
      isDecided,
      placeholderMessage,
      order
    }
  `)
}

export async function getBook(id: string) {
  return sanityClient.fetch(`
    *[_type == "book" && _id == $id][0] {
      _id,
      title,
      author,
      coverImage,
      shortDescription,
      isDecided,
      placeholderMessage,
      popupContent {
        headline,
        description,
        workshopDetails,
        keyTakeaways,
        duration,
        format
      },
      files[] {
        fileName,
        "fileUrl": file.asset->url,
        description
      },
      links[] {
        label,
        url,
        isExternal
      }
    }
  `, { id })
}

// Team Members
export async function getTeamMembers() {
  return sanityClient.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      role,
      image,
      email,
      linkedin,
      bio,
      order
    }
  `)
}
