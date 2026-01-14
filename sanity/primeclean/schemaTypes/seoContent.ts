import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'seoContent',
  title: 'SEO Content (Read More)',
  type: 'object',
  fields: [
    defineField({
      name: 'intro',
      title: 'First Content (Always Visible)',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'expanded',
      title: 'Expanded Content (Read More)',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
