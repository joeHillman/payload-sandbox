import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminFieldLevel } from '../access/isAdmin';
import { isAdminOrSelf } from '@/access/isAdminOrSelf';

// who logs into admin panel
export const Teams: CollectionConfig = {
  slug: 'teams',
  fields: [
    {
      name: 'pageMeta', // required
      type: 'group', // required
      interfaceName: 'Meta', // optional
      fields: [
        // required
        {
          name: 'title',
          type: 'text',
          required: true,
          minLength: 20,
          maxLength: 100,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          minLength: 40,
          maxLength: 160,
        },
      ],
    },
  ],
}
