import { defineType, defineField } from "sanity";

export const bannerType = defineType({
  name: "banner",
  type: "document",
  title: "Banner",
  fields: [
      defineField({
          name: 'title',
          type: 'array',
          of: [{type: 'block'}],
          title:"title",
          validation: (Rule) => Rule.required(),
        }),
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "image",
      type: "image",
      title: "Banner Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "buttonText",
      type: "string",
      title: "Button Text",
    },
    {
      name: "buttonLink",
      type: "slug",
      title: "Button Link",
      
    },
  ],
});
