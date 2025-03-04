// schemas/service.ts
import {defineType} from 'sanity'
export const serviceType = defineType({
    name: "service",
    type: "document",
    title: "Service",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Service Title",
      },
      {
        name: "description",
        type: "array",
        title: "Service Description",
        of: [{ type: "block" }], // Rich text support
      },
      {
        name: "icon",
        type: "string",
        title: "Icon Class", // To store "icon-seo"
      },
      {
        name: "link",
        type: "url",
        title: "Read More Link",
      },
      {
        name: "colorClass",
        type: "string",
        title: "Box Color Class",
      },
    ],
  });
  