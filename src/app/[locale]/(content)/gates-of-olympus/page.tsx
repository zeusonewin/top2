import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { buildMetadata, buildJsonLdWebPage, buildJsonLdBreadcrumb, buildJsonLdOrganization, buildJsonLdFAQ } from '@/lib/seo';
import { Hero } from '@/components/ui/Hero';
import { CtaButton } from '@/components/cta/CtaButton';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { RelatedPosts } from '@/components/seo/RelatedPosts';
import { TrustBlock } from '@/components/conversion/TrustBlock';
import { FaqBlock } from '@/components/conversion/FaqBlock';
import { getRelatedArticles } from '@/config/content';
import { SITE_CONFIG } from '@/config/site';
import { ExpertiseBlock } from '@/components/content/ExpertiseBlock';

const SLOT_ID = 'gates-of-olympus';
const PAGE_PATH = 'gates-of-olympus';

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
  const locale = await getLocale();
  const t = await getTranslations('pillar');
  const tNav = await getTranslations('nav');
  const tCommon = await getTranslations('common');
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

  const articleLinks = [
    { slug: 'strategy', key: 'strategy' },
    { slug: 'rtp', key: 'rtp' },
    { slug: 'multipliers', key: 'multipliers' },
    { slug: 'bonus-round', key: 'bonusRound' },
    { slug: 'how-to-win', key: 'howToWin' },
    { slug: 'mistakes', key: 'mistakes' },
    { slug: 'demo', key: 'demo' },
    { slug: 'tips', key: 'tips' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Hero
        title={`Gates of Olympus — ${isRu ? 'полный гайд' : 'complete guide'} 2026`}
        subtitle={t('description')}
        ctaSlot={
          <>
            <CtaButton variant="primary" subid="pillar">
              {tCta('play')}
            </CtaButton>
            <TrustBlock />
          </>
        }
      />

      <article className="mx-auto max-w-5xl px-4 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <p className="text-surface-muted text-sm mb-8">
          {tCommon('lastUpdated')}: {dateModified}
        </p>

        <div className="prose-dark prose max-w-none">
          <p className="text-lg text-surface-muted">
            Gates of Olympus — один из самых популярных слотов Pragmatic Play с механикой кластерных выплат и множителями до 500x. В этом гайде: RTP 96.5%, стратегия, бонусный раунд и советы по игре.
          </p>

          <h2 className="text-white">{isRu ? 'Обзор' : 'Overview'}</h2>
          <p className="text-surface-muted">
            Слот Gates of Olympus (Врата Олимпа) — 6 барабанов, кластерные выплаты, каскады (tumble), множители до 500x. В бонусном раунде бесплатных спинов множители суммируются. RTP 96.5%, волатильность высокая.
          </p>

          <h2 className="text-white">{isRu ? 'Ключевые особенности' : 'Key features'}</h2>
          <ul className="text-surface-muted">
            <li>RTP 96.5%</li>
            <li>Множители до 500x</li>
            <li>Бесплатные спины с накопительными множителями</li>
            <li>Демо-режим для практики</li>
          </ul>
        </div>

        <h2 className="mt-14 text-2xl font-bold text-white">
          {isRu ? 'Все материалы' : 'All articles'}
        </h2>
        <p className="mt-1 text-surface-muted text-sm mb-6">
          {isRu ? 'Подробные гайды по стратегии, RTP, множителям, бонусу и советам.' : 'In-depth guides on strategy, RTP, multipliers, bonus and tips.'}
        </p>
        <nav className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Related articles">
          {articleLinks.map(({ slug, key }) => (
            <Link
              key={slug}
              href={`${base}/${PAGE_PATH}/${slug}`}
              className="block p-5 rounded-2xl border border-white/[0.08] backdrop-blur-xl bg-white/[0.04] hover:border-violet-500/20 hover:shadow-glow transition-all duration-300"
              prefetch
            >
              <span className="font-medium text-white group-hover:text-violet-400">{tNav(key)}</span>
            </Link>
          ))}
        </nav>

        <ExpertiseBlock />
        <FaqBlock items={faqItems} />
        <RelatedPosts slotId={PAGE_PATH} posts={related} />
      </article>
    </>
  );
}
