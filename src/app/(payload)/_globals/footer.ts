import { GlobalConfig } from 'payload'

export const footerGlobal: GlobalConfig = {
  slug: 'footer',
  admin: {
    group: 'Layout',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'contact',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'socialMedia',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'relationship',
          relationTo: 'links',
          required: true,
        },
        {
          name: 'icon',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}