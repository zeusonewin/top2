import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ru', 'en'],
  defaultLocale: 'ru',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/gates-of-olympus': '/gates-of-olympus',
    '/gates-of-olympus/strategy': '/gates-of-olympus/strategy',
    '/gates-of-olympus/rtp': '/gates-of-olympus/rtp',
    '/gates-of-olympus/multipliers': '/gates-of-olympus/multipliers',
    '/gates-of-olympus/bonus-round': '/gates-of-olympus/bonus-round',
    '/gates-of-olympus/how-to-win': '/gates-of-olympus/how-to-win',
    '/gates-of-olympus/mistakes': '/gates-of-olympus/mistakes',
    '/gates-of-olympus/demo': '/gates-of-olympus/demo',
    '/gates-of-olympus/tips': '/gates-of-olympus/tips',
    '/about': '/about',
    '/author': '/author',
    '/disclaimer': '/disclaimer',
    '/responsible-gaming': '/responsible-gaming',
    '/privacy': '/privacy',
    '/terms': '/terms',
  },
});

export type Pathnames = keyof typeof routing.pathnames;
