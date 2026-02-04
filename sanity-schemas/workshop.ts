import {defineField, defineType} from 'sanity'

export const workshopType = defineType({
  name: 'workshop',
  title: 'Workshop',
  type: 'document',
  groups: [
    {name: 'basic', title: 'Basic Info'},
    {name: 'hero', title: 'Hero Section'},
    {name: 'about', title: 'About Section'},
    {name: 'benefits', title: 'Benefits & Attendees'},
    {name: 'readingJourney', title: 'Reading Journey'},
    {name: 'sessionFlow', title: 'Session Flow'},
    {name: 'facilitators', title: 'Facilitators'},
    {name: 'registration', title: 'Registration'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'basic',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
      group: 'basic',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      group: 'basic',
    }),
    defineField({
      name: 'image',
      title: 'Workshop Image',
      type: 'image',
      options: {hotspot: true},
      group: 'basic',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      group: 'basic',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'basic',
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        {name: 'badge', title: 'Badge Text', type: 'string', description: 'e.g., "Our first and flagship program in the Gen Z 2026 series"'},
        {name: 'title', title: 'Hero Title', type: 'string'},
        {name: 'subtitle', title: 'Hero Subtitle', type: 'text', rows: 2},
        {name: 'backgroundImage', title: 'Background Image', type: 'image', options: {hotspot: true}},
      ],
    }),
    defineField({
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      group: 'about',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string', description: 'e.g., "About Reframe at Zain"'},
        {name: 'description', title: 'Description', type: 'array', of: [{type: 'block'}]},
        {name: 'highlights', title: 'Key Points', type: 'array', of: [{type: 'string'}]},
        {name: 'image', title: 'Section Image', type: 'image', options: {hotspot: true}},
      ],
    }),
    defineField({
      name: 'benefitsSection',
      title: 'What You\'ll Gain Section',
      type: 'object',
      group: 'benefits',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string', description: 'e.g., "What You\'ll Gain"'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'icon', title: 'Icon Name', type: 'string'},
              {name: 'title', title: 'Title', type: 'string'},
              {name: 'description', title: 'Description', type: 'text'},
            ],
          }],
        },
      ],
    }),
    defineField({
      name: 'attendeesSection',
      title: 'Who Should Attend Section',
      type: 'object',
      group: 'benefits',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string', description: 'e.g., "Who Should Attend"'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {
          name: 'attendeeTypes',
          title: 'Attendee Types',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'icon', title: 'Icon Name', type: 'string'},
              {name: 'title', title: 'Title', type: 'string'},
              {name: 'description', title: 'Description', type: 'text'},
            ],
          }],
        },
      ],
    }),
    defineField({
      name: 'timingSection',
      title: 'Timing & Details Section',
      type: 'object',
      group: 'benefits',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string'},
        {
          name: 'details',
          title: 'Event Details',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'icon', title: 'Icon Name', type: 'string'},
              {name: 'label', title: 'Label', type: 'string'},
              {name: 'value', title: 'Value', type: 'string'},
            ],
          }],
        },
      ],
    }),
    defineField({
      name: 'readingJourneySection',
      title: 'Reading Journey Section',
      type: 'object',
      group: 'readingJourney',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string', description: 'e.g., "The Reading Journey"'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {
          name: 'books',
          title: 'Books',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'book'}]}],
        },
      ],
    }),
    defineField({
      name: 'sessionFlowSection',
      title: 'Session Flow Section',
      type: 'object',
      group: 'sessionFlow',
      fields: [
        {name: 'badge', title: 'Top Badge Text', type: 'string', description: 'Badge text above the session flow'},
        {name: 'title', title: 'Section Title', type: 'string', description: 'e.g., "Session Flow"'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {
          name: 'sessions',
          title: 'Sessions/Agenda Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'time', title: 'Time', type: 'string'},
              {name: 'title', title: 'Title', type: 'string'},
              {name: 'description', title: 'Description', type: 'text'},
              {name: 'duration', title: 'Duration', type: 'string'},
              {name: 'icon', title: 'Icon Name', type: 'string'},
            ],
          }],
        },
      ],
    }),
    defineField({
      name: 'facilitatorsSection',
      title: 'Facilitators Section',
      type: 'object',
      group: 'facilitators',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string', description: 'e.g., "Your Facilitators"'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {
          name: 'facilitators',
          title: 'Facilitators',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'name', title: 'Name', type: 'string'},
              {name: 'role', title: 'Role/Title', type: 'string'},
              {name: 'bio', title: 'Bio', type: 'text'},
              {name: 'image', title: 'Photo', type: 'image', options: {hotspot: true}},
              {name: 'email', title: 'Email', type: 'string'},
              {name: 'linkedin', title: 'LinkedIn URL', type: 'url'},
              {name: 'specialties', title: 'Specialties', type: 'array', of: [{type: 'string'}]},
            ],
          }],
        },
      ],
    }),
    defineField({
      name: 'reserveSpotSection',
      title: 'Reserve Your Spot Section',
      type: 'object',
      group: 'registration',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string', description: 'e.g., "Reserve Your Spot"'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {name: 'ctaText', title: 'CTA Button Text', type: 'string'},
        {name: 'spotsText', title: 'Spots Available Text', type: 'string', description: 'e.g., "Only 30 spots available"'},
      ],
    }),
    defineField({
      name: 'registrationSection',
      title: 'Registration Section',
      type: 'object',
      group: 'registration',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string', description: 'e.g., "Registration"'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {name: 'formEmbedUrl', title: 'Form Embed URL', type: 'url', description: 'Microsoft Forms or other form embed URL'},
        {name: 'formHeight', title: 'Form Height (px)', type: 'number', initialValue: 800},
        {name: 'alternativeText', title: 'Alternative Text', type: 'text', description: 'Text shown if form cannot load'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'image',
    },
  },
})
