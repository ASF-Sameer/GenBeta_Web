import {defineField, defineType} from 'sanity'

export const previousEditionType = defineType({
  name: 'previousEdition',
  title: 'Previous Gen Z Edition',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (rule) => rule.required().min(2016).max(2030),
    }),
    defineField({
      name: 'title',
      title: 'Edition Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'whatMadeUsDifferent',
      title: 'What Made Us Different',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Edition Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  orderings: [
    {
      title: 'Year, Newest',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
  ],
})
