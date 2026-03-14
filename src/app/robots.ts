import { SITE_CONFIG } from '@/config/site';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = SITE_CONFIG.url.replace(/\/$/, '');
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
