import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ServiceCategory',
  title: 'ServiceCategory',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'body1',
      title: 'Body1',
      type: 'blockContent',
    }),

    defineField({
      name: 'body2',
      title: 'Body2',
      type: 'blockContent',
    }),

    // ✅ Custom Table Field
    defineField({
      name: 'customTable',
      title: 'Custom Table',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Table Title',
          type: 'string',
        },
        {
          name: 'headers',
          title: 'Table Headers',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'rows',
          title: 'Table Rows',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'tableRow',
              title: 'Row',
              fields: [
                {
                  name: 'cells',
                  title: 'Cells',
                  type: 'array',
                  of: [{type: 'string'}],
                },
              ],
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    }),
    defineField({
      name: 'youtubeVideoUrl',
      title: 'YouTube Video URL',
      type: 'url',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'faq'}]}],
      options: {
        layout: 'tags', // Optional, will show selected FAQs as tags
      },
    }),
    defineField({
      name: 'tableOfContent',
      title: 'Table Of Content',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'tocItem',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
})
