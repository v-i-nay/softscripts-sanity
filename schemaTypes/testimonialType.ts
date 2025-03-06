import { defineType, defineField } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text'
    }),
    defineField({
        name: 'testiName',
        title: 'TestiName',
        type: 'string',
       
      }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url'
    })
  ]
})
