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

// Gen Z 2026 Content
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
        topics[]
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
    *[_type == "workshop"] | order(date desc) {
      _id,
      title,
      slug,
      shortDescription,
      image,
      date,
      location,
      featured
    }
  `)
}

export async function getWorkshop(slug: string) {
  return sanityClient.fetch(`
    *[_type == "workshop" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      heroTitle,
      heroSubtitle,
      description,
      image,
      date,
      time,
      location,
      facilitatedBy,
      overview {
        title,
        subtitle,
        benefits[] {
          title,
          description
        },
        attendees[] {
          title,
          description
        },
        details[] {
          label
        }
      },
      books[] {
        title,
        author,
        description,
        image
      },
      agenda[] {
        time,
        title,
        description,
        duration
      },
      team[] {
        name,
        role,
        image,
        email,
        linkedin,
        bio
      },
      registrationUrl
    }
  `, { slug })
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
