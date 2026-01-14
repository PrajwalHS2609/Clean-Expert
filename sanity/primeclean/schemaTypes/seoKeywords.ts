import { defineType, defineField } from "sanity";

export default defineType({
  name: "seoKeywords",
  title: "SEO Keywords",
  type: "object",
  fields: [
    defineField({
      name: "keywords",
      title: "Keywords List",
      type: "array",
      of: [{ type: "string" }],
      description: "Add SEO keyword phrases (one per line)",
    }),
  ],
});
