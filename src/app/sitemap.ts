import { SITE_CONFIG } from '@/config/site';
import { ARTICLE_SLUGS } from '@/config/content';
import type { MetadataRoute } from 'next';

const LOCALES = ['ru', 'en'] as const;
const SLOT_PAGES = ['gates-of-olympus'];
const STATIC_PAGES = ['', 'about', 'author', 'disclaimer', 'responsible-gaming', 'privacy', 'terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url.replace(/\/$/, '');
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const page of STATIC_PAGES) {
      const path = page ? `${locale}/${page}` : locale;
      entries.push({
        url: `${base}/${path}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    }
    for (const slot of SLOT_PAGES) {
      entries.push({
        url: `${base}/${locale}/${slot}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.95,
      });
      for (const slug of ARTICLE_SLUGS) {
        entries.push({
          url: `${base}/${locale}/${slot}/${slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.85,
        });
      }
    }
  }

  return entries;
}
