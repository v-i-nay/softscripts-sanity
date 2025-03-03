import { defineType, defineField } from "sanity";

export const titleDescriptionType = defineType({
  name: "titleDescription",
  title: "titleDescription",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "array",
      of: [{ type: "block" }], // Rich text format
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});


