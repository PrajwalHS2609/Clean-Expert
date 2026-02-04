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
      name: 'subServicesLabel',
      title: 'Sub Services Label',
      type: 'string',
      description: 'Label displayed above sub-services (e.g., "Cleaning Sub Services :")',
      initialValue: 'Cleaning Sub Services :',
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
    defineField({
      name: 'essentials',
      title: 'Service Essentials',
      type: 'serviceEssentials',
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
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'seoKeywords',
    }),

    defineField({
      name: 'seoContent',
      title: 'SEO Content Section',
      type: 'seoContent',
    }),
    /* ---------------- PRICING ---------------- */

    defineField({
      name: 'pricing',
      title: 'Pricing & Offers',
      type: 'object',
      fields: [
        {name: 'originalPrice', title: 'Original Price', type: 'string'},
        {name: 'discountPrice', title: 'Discount Price', type: 'string'},
        {name: 'unit', title: 'Unit', type: 'string'},
        {
          name: 'monthlyBookings',
          title: 'Bookings Last Month',
          type: 'string',
        },
      ],
    }),
  ],
})
