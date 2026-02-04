import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'globalOffer',
  title: 'Global Offer',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Offer Label',
      type: 'string',
      description: 'Eg: Republic Day Offer 🎉',
    }),
  ],
})
