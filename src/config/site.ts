/** Favicon and default OG image: place olympus.png in public/ */
export const SITE_FAVICON_OG_IMAGE = '/olympus.png';

export const SITE_CONFIG = {
  name: 'Gates of Olympus Guide',
  description: 'Expert guide to Gates of Olympus slot: strategy, RTP, multipliers, bonus rounds. Play demo, learn how to win.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://olympus-slot.org',
  locale: 'en_US',
  author: 'Slot Expert Team',
  partnerUrl: 'https://one-vv6649.com/casino/list?open=register',
  utm: {
    source: 'seo',
    campaign: 'gates_of_olympus',
    medium: 'button',
  },
} as const;

export const SUPPORTED_LOCALES = ['ru', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
