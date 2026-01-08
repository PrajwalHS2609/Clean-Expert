import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'serviceEssentials',
  title: 'Service Essentials Section',
  type: 'object',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        defineField({
          name: 'review',
          title: 'Review',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Reviewer Image',
              type: 'image',
              options: {hotspot: true},
            }),

            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'location', // ✅ NEW FIELD
              title: 'Location',
              type: 'string',
            }),
            defineField({
              name: 'rating',
              title: 'Rating (1–5)',
              type: 'number',
              validation: (Rule) => Rule.min(1).max(5),
            }),

            defineField({
              name: 'comment',
              title: 'Comment',
              type: 'array',
              of: [{type: 'block'}],
            }),
          ],
        }),
      ],
    }),
  ],
})
