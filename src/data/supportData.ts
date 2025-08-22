import type { SupportData } from '../types/support';

export const SUPPORT_DATA: SupportData = {
  artists: [
    {
      id: 'coco',
      name: 'Coco',
      description: 'Multidisciplinary artist exploring sound, ritual, and sensory storytelling through poetry, rhythm, and community magic.',
      donationLinks: [
        {
          platform: 'kofi',
          url: '#', // TODO: Replace with actual Ko-fi URL
          label: 'Buy Coco a Coffee'
        },
        {
          platform: 'paypal',
          url: '#', // TODO: Replace with actual PayPal URL
          label: 'Donate via PayPal'
        }
      ]
    },
    {
      id: 'gabby',
      name: 'Gabby',
      description: 'Sonic explorer and producer blending analog textures with ethereal vocals, creating immersive worlds of emotion and memory.',
      donationLinks: [
        {
          platform: 'kofi',
          url: '#', // TODO: Replace with actual Ko-fi URL
          label: 'Buy Gabby a Coffee'
        },
        {
          platform: 'paypal',
          url: '#', // TODO: Replace with actual PayPal URL
          label: 'Donate via PayPal'
        }
      ]
    }
  ],
  projectSupport: {
    description: 'Want to support the entire Lyrical Libations project? Your contribution helps fund venue costs, equipment, and future shows.',
    donationLinks: [
      {
        platform: 'kofi',
        url: '#', // TODO: Replace with actual Ko-fi URL
        label: 'Ko-fi'
      },
      {
        platform: 'paypal',
        url: '#', // TODO: Replace with actual PayPal URL
        label: 'PayPal'
      }
    ]
  }
};