import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'quoteBlock',
  title: 'Quote Block',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Quote Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author (optional)',
      type: 'string',
    }),
  ],
  preview: {
    select: {text: 'text', author: 'author'},
    prepare({text, author}: {text: string; author?: string}) {
      return {
        title: `"${text}"`,
        subtitle: author ? `— ${author}` : 'Quote',
      }
    },
  },
})
