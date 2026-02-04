import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Generation Z',
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'welcomeText', title: 'Welcome Text', type: 'string', initialValue: 'Welcome to'},
        {name: 'title', title: 'Title', type: 'string', initialValue: 'The 11th Edition of'},
        {name: 'programName', title: 'Program Name', type: 'string', initialValue: 'Generation Z'},
        {name: 'byLine', title: 'By Line', type: 'string', initialValue: 'by Zain'},
        {name: 'description', title: 'Description', type: 'text', rows: 3},
        {name: 'ctaText', title: 'CTA Button Text', type: 'string', initialValue: 'Explore Reframe Program'},
        {name: 'ctaLink', title: 'CTA Button Link', type: 'string', initialValue: '/reframe'},
        {name: 'heroImage', title: 'Hero Image', type: 'image', options: {hotspot: true}},
      ],
    }),
    defineField({
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string', initialValue: 'About Generation Z'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {name: 'description', title: 'Description', type: 'text'},
        {name: 'highlights', title: 'Key Highlights', type: 'array', of: [{type: 'string'}]},
      ],
    }),
    defineField({
      name: 'pillars',
      title: 'Program Pillars/Themes',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', title: 'Title', type: 'string'},
          {name: 'description', title: 'Description', type: 'text'},
          {name: 'icon', title: 'Icon Name', type: 'string', description: 'Icon identifier (e.g., brain, chart, lightbulb)'},
          {name: 'color', title: 'Accent Color', type: 'string', description: 'Hex color code'},
          {name: 'topics', title: 'Topics', type: 'array', of: [{type: 'string'}]},
          {name: 'bookCover', title: 'Book Cover Image', type: 'image', options: {hotspot: true}},
          {name: 'linkUrl', title: 'Link URL', type: 'string'},
        ],
      }],
    }),
    defineField({
      name: 'pillarsSection',
      title: 'Pillars/Themes Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string', initialValue: '11th Edition Program Theme'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
      ],
    }),
    defineField({
      name: 'programsSection',
      title: 'Programs Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string', initialValue: 'Our Programs'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
      ],
    }),
    defineField({
      name: 'previousEditionsSection',
      title: 'Previous Editions Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string', initialValue: 'Previous Gen Z Programs'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
      ],
    }),
    defineField({
      name: 'gallerySection',
      title: 'Gallery Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string', initialValue: 'Our Experiences'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
      ],
    }),
    defineField({
      name: 'teamSection',
      title: 'Team Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string', initialValue: 'Meet the Team'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        {name: 'copyrightText', title: 'Copyright Text', type: 'string'},
        {name: 'tagline', title: 'Tagline', type: 'string'},
        {
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'platform', title: 'Platform', type: 'string', description: 'e.g., LinkedIn, Twitter, Instagram'},
              {name: 'url', title: 'URL', type: 'url'},
              {name: 'icon', title: 'Icon', type: 'string'},
            ],
          }],
        },
        {
          name: 'quickLinks',
          title: 'Quick Links',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'label', title: 'Label', type: 'string'},
              {name: 'url', title: 'URL', type: 'string'},
            ],
          }],
        },
        {
          name: 'zainLinks',
          title: 'Zain Official Links',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'label', title: 'Label', type: 'string'},
              {name: 'url', title: 'URL', type: 'url'},
            ],
          }],
        },
      ],
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'label', title: 'Label', type: 'string'},
          {name: 'url', title: 'URL', type: 'string'},
          {name: 'isButton', title: 'Is Button Style', type: 'boolean', initialValue: false},
        ],
      }],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
