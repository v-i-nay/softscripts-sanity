import {defineField, defineType} from 'sanity'

export const footerType = defineType({
name: "footer",
title: "Footer",
type: "document",
fields: [
    {
        name: "footerImage",
        type: "image",
        title: "Footer Image",
        options: {
          hotspot: true,
        },
      },
    defineField({
        name: 'title',
        type: 'array',
        of: [{type: 'block'}],
        title:"title",
        validation: (Rule) => Rule.required(),
      }),
  {
    name: "ctaText",
    title: "Call to Action Text",
    type: "string",
  },
  {
    name: "ctaLink",
    title: "Call to Action Link",
    type: "url",
  },
  defineField({
    name: "copyRight",
    title: "Copy Right",
    type: "array",
    of: [{ type: "block" }],
  }),
  {
    name: "socialLinks",
    title: "Social Links",
    type: "array",
    of: [
      {
        type: "object",
        fields: [
          { name: "platform", title: "Platform", type: "string" },
          { name: "url", title: "Profile URL", type: "url" },
          { name: "icon", title: "social-icon", type: "image" },
        ],
      },
    ],
  },
],
});