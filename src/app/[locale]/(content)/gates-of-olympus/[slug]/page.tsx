import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import {
  buildMetadata,
  buildJsonLdArticle,
  buildJsonLdBreadcrumb,
  buildJsonLdFAQ,
} from '@/lib/seo';
import { CtaButton } from '@/components/cta/CtaButton';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { RelatedPosts } from '@/components/seo/RelatedPosts';
import { TrustBlock } from '@/components/conversion/TrustBlock';
import { FaqBlock } from '@/components/conversion/FaqBlock';
import { QuickAnswer } from '@/components/content/QuickAnswer';
import { RtpTable } from '@/components/content/RtpTable';
import { ComparisonBlock } from '@/components/content/ComparisonBlock';
import { ExpertiseBlock } from '@/components/content/ExpertiseBlock';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { Callout } from '@/components/ui/Callout';
import { CONTENT_MAP, getRelatedArticles, ARTICLE_SLUGS } from '@/config/content';
import { SITE_CONFIG } from '@/config/site';
import { getArticleContent, getLastUpdated } from '@/data/article-content';
import { getRtpTableRows, RTP_TABLE_CAPTION_RU, RTP_TABLE_CAPTION_EN } from '@/data/rtp-table';
import type { ArticleSlug } from '@/config/content';

const SLOT_ID = 'gates-of-olympus';
const PAGE_PATH = 'gates-of-olympus';

const NAV_KEYS: Record<ArticleSlug, string> = {
  strategy: 'strategy',
  rtp: 'rtp',
  multipliers: 'multipliers',
  'bonus-round': 'bonusRound',
  'how-to-win': 'howToWin',
  mistakes: 'mistakes',
  demo: 'demo',
  tips: 'tips',
};

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!ARTICLE_SLUGS.includes(slug as ArticleSlug)) return {};
  const meta = CONTENT_MAP[SLOT_ID][slug as ArticleSlug];
  if (!meta) return {};
  const t = await getTranslations('articles');
  const key = slug === 'bonus-round' ? 'bonusRound' : slug;
  const title = slug === 'bonus-round' ? (await t('bonusRound.title')) : (await t(`${key}.title`));
  const description =
    slug === 'bonus-round' ? (await t('bonusRound.description')) : (await t(`${key}.description`));
  return buildMetadata({
    title,
    description,
    path: `${PAGE_PATH}/${slug}`,
    locale: locale as 'ru' | 'en',
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!ARTICLE_SLUGS.includes(slug as ArticleSlug)) notFound();

  const meta = CONTENT_MAP[SLOT_ID][slug as ArticleSlug];
  if (!meta) notFound();

  const t = await getTranslations('articles');
  const tNav = await getTranslations('nav');
  const tCommon = await getTranslations('common');
  const key = slug === 'bonus-round' ? 'bonusRound' : slug;
  const title = slug === 'bonus-round' ? (await t('bonusRound.title')) : (await t(`${key}.title`));
  const description =
    slug === 'bonus-round' ? (await t('bonusRound.description')) : (await t(`${key}.description`));

  const contentMeta = getArticleContent(slug as ArticleSlug, locale as 'ru' | 'en');
  const dateModified = getLastUpdated(slug as ArticleSlug);
  const datePublished = '2025-01-15';

  const base = `/${locale}`;
  const related = getRelatedArticles(SLOT_ID, slug as ArticleSlug);
  const canonical = `${SITE_CONFIG.url}/${locale}/${PAGE_PATH}/${slug}`;

  const breadcrumbItems = [
    { label: locale === 'ru' ? 'Главная' : 'Home', href: base },
    { label: 'Gates of Olympus', href: `${base}/${PAGE_PATH}` },
    { label: tNav(NAV_KEYS[slug as ArticleSlug]) },
  ];

  const articleJsonLd = buildJsonLdArticle({
    headline: title,
    description,
    url: canonical,
    datePublished,
    dateModified,
    authorName: SITE_CONFIG.author,
  });
  const breadcrumbJsonLd = buildJsonLdBreadcrumb([
    { name: 'Home', url: `${SITE_CONFIG.url}/${locale}` },
    { name: 'Gates of Olympus', url: `${SITE_CONFIG.url}/${locale}/${PAGE_PATH}` },
    { name: title, url: canonical },
  ]);
  const faqJsonLd = buildJsonLdFAQ(contentMeta.faq);

  const quickAnswerHeading = locale === 'ru' ? 'Краткий ответ' : 'Quick answer';
  const tocItems = [
    { id: 'quick-answer', label: quickAnswerHeading },
    { id: 'detail', label: locale === 'ru' ? 'Подробнее' : 'In detail' },
    { id: 'faq', label: locale === 'ru' ? 'Часто задаваемые вопросы' : 'FAQ' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="mx-auto max-w-5xl px-4 py-10">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
          <p className="text-slate-400 text-sm">
            {tCommon('lastUpdated')}: {dateModified}
          </p>
        </header>

        <div className="mb-8">
          <CtaButton variant="primary" subid="article">
            {locale === 'ru' ? 'Играть в Gates of Olympus' : 'Play Gates of Olympus'}
          </CtaButton>
          <TrustBlock />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_240px] lg:gap-12">
          <div>
            <div id="quick-answer">
              <QuickAnswer heading={quickAnswerHeading}>
                <p>{contentMeta.quickAnswer}</p>
              </QuickAnswer>
            </div>

            <div id="detail" className="prose-dark prose max-w-none">
              <p className="lead text-lg text-slate-300">{description}</p>

              {slug === 'rtp' && (
            <>
              <RtpTable
                rows={getRtpTableRows(locale as 'ru' | 'en')}
                caption={locale === 'ru' ? RTP_TABLE_CAPTION_RU : RTP_TABLE_CAPTION_EN}
              />
              <ComparisonBlock
                title={locale === 'ru' ? 'Gates of Olympus и другие слоты Pragmatic' : 'Gates of Olympus vs other Pragmatic slots'}
              >
                <p>
                  {locale === 'ru'
                    ? 'RTP 96.5% совпадает со многими хитами Pragmatic (Sweet Bonanza, The Dog House). Волатильность у Gates of Olympus высокая — выигрыши реже, но крупнее. Для сравнения математики с другими играми смотрите правила на сайте казино.'
                    : 'RTP 96.5% is in line with other Pragmatic hits (Sweet Bonanza, The Dog House). Gates of Olympus is high volatility — fewer but larger wins. Compare with other games in the casino’s game info.'}
                </p>
              </ComparisonBlock>
            </>
          )}

          <h2 className="text-white">{locale === 'ru' ? 'Подробнее' : 'In detail'}</h2>
          <p className="text-slate-300">
            {locale === 'ru'
              ? 'В этом разделе — развёрнутое объяснение темы. Структура статьи рассчитана на 2000–3000 слов: введение, подзаголовки, таблицы при необходимости, внутренние ссылки на другие материалы кластера (стратегия, множители, бонусный раунд) и блок экспертизы ниже.'
              : 'This section holds the full explanation. The article is structured for 2000–3000 words: intro, subheadings, tables where needed, internal links to other cluster pages (strategy, multipliers, bonus round) and an expertise block below.'}
          </p>
          <Callout variant="tip" title={locale === 'ru' ? 'Совет' : 'Tip'}>
            <p>
              {locale === 'ru'
                ? 'Используйте демо-режим для знакомства с механикой перед игрой на деньги.'
                : 'Use demo mode to learn the mechanics before playing for real.'}
            </p>
          </Callout>
          <p className="text-surface-muted">
            <Link href={`${base}/${PAGE_PATH}`} className="text-violet-400 hover:text-white font-medium" prefetch>
              {locale === 'ru' ? 'Гайд Gates of Olympus' : 'Gates of Olympus guide'}
            </Link>
            {' · '}
            <Link href={`${base}/${PAGE_PATH}/strategy`} className="text-violet-400 hover:text-white font-medium" prefetch>
              {tNav('strategy')}
            </Link>
            {' · '}
            <Link href={`${base}/${PAGE_PATH}/multipliers`} className="text-violet-400 hover:text-white font-medium" prefetch>
              {tNav('multipliers')}
            </Link>
            {' · '}
            <Link href={`${base}/${PAGE_PATH}/bonus-round`} className="text-violet-400 hover:text-white font-medium" prefetch>
              {tNav('bonusRound')}
            </Link>
          </p>
        </div>
          </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents items={tocItems} />
          </div>
        </aside>
      </div>

        <ExpertiseBlock />

        <FaqBlock
          items={contentMeta.faq.map((f) => ({ question: f.question, answer: f.answer }))}
          id="faq"
        />

        <div className="mt-10 flex justify-between text-sm">
          <Link href={`${base}/${PAGE_PATH}`} className="text-violet-400 hover:text-white transition-colors" prefetch>
            ← {locale === 'ru' ? 'Назад к гайду' : 'Back to guide'}
          </Link>
        </div>

        <RelatedPosts slotId={PAGE_PATH} posts={related} />
      </article>
    </>
  );
}
