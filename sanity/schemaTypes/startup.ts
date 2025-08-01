import { defineField, defineType } from "sanity";

export const startup = defineType({
  name: "startup",
  type: "document",
  title: "Startup",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "catagory",
      type: "string",
      validation: (Rule) =>
        Rule.min(3)
          .max(30)
          .required()
          .error("catagory must be between 3 and 30 characters"),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required().error("image is required"),
    }),
    defineField({
      name: "pitch",
      type: "markdown",
    }),
  ]
});
