import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { buildMetadata, buildJsonLdWebPage, buildJsonLdBreadcrumb, buildJsonLdOrganization, buildJsonLdFAQ } from '@/lib/seo';
import { HomeHero } from '@/components/home/HomeHero';
import { ShortDescription } from '@/components/home/ShortDescription';
import { QuickStats } from '@/components/home/QuickStats';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { RelatedPosts } from '@/components/seo/RelatedPosts';
import { FaqBlock } from '@/components/conversion/FaqBlock';
import { getRelatedArticles } from '@/config/content';
import { SITE_CONFIG } from '@/config/site';

const SLOT_ID = 'gates-of-olympus';
const PAGE_PATH = 'gates-of-olympus';

const GUIDE_LINKS = [
  { slug: 'strategy', key: 'strategy' as const },
  { slug: 'rtp', key: 'rtp' as const },
  { slug: 'multipliers', key: 'multipliers' as const },
  { slug: 'demo', key: 'demo' as const },
];

export async function generateMetadata() {
  const locale = (await getLocale()) as 'ru' | 'en';
  const t = await getTranslations('pillar');
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: PAGE_PATH,
    locale,
  });
}

export default async function GatesOfOlympusPillarPage() {
  const locale = (await getLocale()) as 'ru' | 'en';
  const t = await getTranslations('pillar');
  const tHome = await getTranslations('home');
  const tNav = await getTranslations('nav');
  const tCta = await getTranslations('cta');
  const base = `/${locale}`;
  const related = getRelatedArticles(SLOT_ID, 'index');
  const canonical = `${SITE_CONFIG.url}/${locale}/${PAGE_PATH}`;
  const dateModified = '2026-03-14';
  const isRu = locale === 'ru';

  const breadcrumbItems = [
    { label: isRu ? 'Главная' : 'Home', href: base },
    { label: 'Gates of Olympus' },
  ];

  const webPageJsonLd = buildJsonLdWebPage({
    name: t('title'),
    description: t('description'),
    url: canonical,
    dateModified,
  });
  const breadcrumbJsonLd = buildJsonLdBreadcrumb([
    { name: 'Home', url: `${SITE_CONFIG.url}/${locale}` },
    { name: 'Gates of Olympus', url: canonical },
  ]);
  const orgJsonLd = buildJsonLdOrganization();

  const faqItems = [
    {
      question: isRu ? 'Какой RTP у Gates of Olympus?' : 'What is Gates of Olympus RTP?',
      answer: isRu ? 'RTP слота Gates of Olympus составляет 96,5%.' : 'Gates of Olympus RTP is 96.5%.',
    },
    {
      question: isRu ? 'Есть ли демо Gates of Olympus?' : 'Is there a Gates of Olympus demo?',
      answer: isRu ? 'Да, многие казино предлагают демо-режим без регистрации.' : 'Yes, many casinos offer a demo mode without registration.',
    },
  ];
  const faqJsonLd = buildJsonLdFAQ(faqItems.map((f) => ({ question: f.question, answer: typeof f.answer === 'string' ? f.answer : '' })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <HomeHero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        primaryCtaLabel={tCta('playForReal')}
        secondaryCtaLabel={tCta('openCasino')}
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <ShortDescription />

        <QuickStats />

        <section className="py-20" aria-label="Guides">
          <h2 className="text-2xl font-bold text-[#f4f4f5] mb-8">
            {tHome('guidesTitle')}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GUIDE_LINKS.map(({ slug, key }) => (
              <Link
                key={slug}
                href={`${base}/${PAGE_PATH}/${slug}`}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-[#f4f4f5] hover:border-zinc-700 transition-colors block"
                prefetch
              >
                <span className="font-semibold">{tNav(key)}</span>
              </Link>
            ))}
          </div>
        </section>

        <FaqBlock items={faqItems.map((f) => ({ question: f.question, answer: f.answer }))} id="faq" />

        <RelatedPosts slotId={PAGE_PATH} posts={related} />
      </div>
    </>
  );
}
