import { SITE_CONFIG, SITE_FAVICON_OG_IMAGE } from '@/config/site';
import type { Metadata } from 'next';

type Locale = 'ru' | 'en';

export function buildCanonical(path: string, locale: Locale): string {
  const base = SITE_CONFIG.url.replace(/\/$/, '');
  const pathClean = path.replace(/^\/+/, '') || '';
  return `${base}/${locale}/${pathClean}`.replace(/\/+/g, '/');
}

export function buildMetadata({
  title,
  description,
  path,
  locale,
  imagePath = SITE_FAVICON_OG_IMAGE,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  imagePath?: string;
  noIndex?: boolean;
}): Metadata {
  const canonical = buildCanonical(path, locale);
  const ogImage = `${SITE_CONFIG.url}${imagePath}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ru: buildCanonical(path, 'ru'),
        en: buildCanonical(path, 'en'),
        'x-default': buildCanonical(path, 'en'),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export function buildJsonLdOrganization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
  };
}

export function buildJsonLdWebPage({
  name,
  description,
  url,
  datePublished,
  dateModified,
}: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
  };
}

export function buildJsonLdArticle({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  image,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/logo.png` },
    },
    ...(image && { image }),
  };
}

export function buildJsonLdBreadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildJsonLdFAQ(faq: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
