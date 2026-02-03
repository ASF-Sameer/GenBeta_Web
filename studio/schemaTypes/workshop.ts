import {defineField, defineType} from 'sanity'

export const workshopType = defineType({
  name: 'workshop',
  title: 'Workshop',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      title: 'Workshop Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'facilitatedBy',
      title: 'Facilitated By',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'overview',
      title: 'Workshop Overview',
      type: 'object',
      fields: [
        {name: 'title', title: 'Section Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'title', title: 'Title', type: 'string'},
              {name: 'description', title: 'Description', type: 'text'},
            ],
          }],
        },
        {
          name: 'attendees',
          title: 'Who Should Attend',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'title', title: 'Title', type: 'string'},
              {name: 'description', title: 'Description', type: 'text'},
            ],
          }],
        },
        {
          name: 'details',
          title: 'Event Details',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'label', title: 'Label', type: 'string'},
            ],
          }],
        },
      ],
    }),
    defineField({
      name: 'books',
      title: 'Featured Books',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', title: 'Title', type: 'string'},
          {name: 'author', title: 'Author', type: 'string'},
          {name: 'description', title: 'Description', type: 'text'},
          {name: 'image', title: 'Cover Image', type: 'image'},
        ],
      }],
    }),
    defineField({
      name: 'agenda',
      title: 'Agenda',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'time', title: 'Time', type: 'string'},
          {name: 'title', title: 'Title', type: 'string'},
          {name: 'description', title: 'Description', type: 'text'},
          {name: 'duration', title: 'Duration', type: 'string'},
        ],
      }],
    }),
    defineField({
      name: 'team',
      title: 'Workshop Team',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'name', title: 'Name', type: 'string'},
          {name: 'role', title: 'Role', type: 'string'},
          {name: 'image', title: 'Photo', type: 'image'},
          {name: 'email', title: 'Email', type: 'string'},
          {name: 'linkedin', title: 'LinkedIn URL', type: 'url'},
          {name: 'bio', title: 'Bio', type: 'text'},
        ],
      }],
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
    }),
  ],
})
