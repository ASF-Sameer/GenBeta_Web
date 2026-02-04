import {defineField, defineType} from 'sanity'

export const bookType = defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Brief description shown on the card',
    }),
    defineField({
      name: 'isPrimary',
      title: 'Primary Book',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as the default book to show when users first enter this workshop. Only one book per workshop should be primary.',
    }),
    defineField({
      name: 'isDecided',
      title: 'Is Book Decided',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle off to show placeholder message instead of book details',
    }),
    defineField({
      name: 'placeholderMessage',
      title: 'Placeholder Message (when undecided)',
      type: 'text',
      rows: 2,
      description: 'Message to show when book is not yet decided (e.g., "Stay tuned! Something exciting is coming...")',
      initialValue: 'Stay tuned! Something exciting is coming...',
    }),
    defineField({
      name: 'popupContent',
      title: 'Popup Content',
      type: 'object',
      fields: [
        {name: 'headline', title: 'Headline', type: 'string'},
        {name: 'description', title: 'Full Description', type: 'array', of: [{type: 'block'}]},
        {name: 'workshopDetails', title: 'Workshop Details', type: 'text', rows: 4},
        {name: 'keyTakeaways', title: 'Key Takeaways', type: 'array', of: [{type: 'string'}]},
        {name: 'duration', title: 'Session Duration', type: 'string'},
        {name: 'format', title: 'Session Format', type: 'string'},
      ],
    }),
    defineField({
      name: 'files',
      title: 'Attached Files',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'fileName', title: 'File Name', type: 'string'},
          {name: 'file', title: 'File', type: 'file'},
          {name: 'description', title: 'Description', type: 'string'},
        ],
      }],
    }),
    defineField({
      name: 'links',
      title: 'Related Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'label', title: 'Link Label', type: 'string'},
          {name: 'url', title: 'URL', type: 'url'},
          {name: 'isExternal', title: 'Opens in New Tab', type: 'boolean', initialValue: true},
        ],
      }],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      isDecided: 'isDecided',
      isPrimary: 'isPrimary',
      media: 'coverImage',
    },
    prepare({title, author, isDecided, isPrimary, media}) {
      const prefix = isPrimary ? '⭐ ' : ''
      const suffix = isDecided ? '' : ' [Undecided]'
      return {
        title: `${prefix}${title || 'Book'}${suffix}`,
        subtitle: author,
        media,
      }
    },
  },
})
