import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Type Of',
      type: 'select',
      admin: {
        description: `Process is for a walkthru, demonstration is for a presentation.`
      },
      options: [
        {
          label: 'Before',
          value: 'before',
        },
        {
          label: 'Working',
          value: 'working',
        },
        {
          label: 'After',
          value: 'after',
        },
        {
          label: 'Process',
          value: 'process',
        },
        {
          label: 'Demonstration',
          value: 'demonstration',
        },
        {
          label: 'Avatar',
          value: 'avatar',
        }
      ],
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'Photo is for',
      type: 'relationship',
      relationTo: 'jobs',
    },
    {
      name: 'associatedInteractions',
      type: 'join',
      collection: 'interactions',
      on: 'Is for',
    },
  ],
  upload: true,
}
