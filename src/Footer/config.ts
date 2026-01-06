import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      type: 'group',
      name: 'socialLinks',
      label: 'Link Social Media',
      admin: {
        description: 'Link opzionali ai social media',
      },
      fields: [
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram URL',
          admin: {
            placeholder: 'https://instagram.com/tuoprofilo',
          },
        },
        {
          name: 'youtube',
          type: 'text',
          label: 'YouTube URL',
          admin: {
            placeholder: 'https://youtube.com/@tuocanale',
          },
        },
        {
          name: 'github',
          type: 'text',
          label: 'GitHub URL',
          admin: {
            placeholder: 'https://github.com/tuonome',
          },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
