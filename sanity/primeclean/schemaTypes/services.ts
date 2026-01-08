import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        defineField({
          name: 'serviceItem',
          title: 'Service Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Service Link',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Service Image',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'subServices',
      title: 'Sub Services',
      type: 'array',
      of: [
        defineField({
          name: 'subServiceItem',
          title: 'Sub Service',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Sub Service Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Sub Service Link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
