import { getTranslations, getLocale } from 'next-intl/server';
import { buildMetadata, buildJsonLdWebPage, buildJsonLdOrganization, buildJsonLdFAQ } from '@/lib/seo';
import { HomeHero } from '@/components/home/HomeHero';
import { QuickStats } from '@/components/home/QuickStats';
import { WhatIsSection } from '@/components/home/WhatIsSection';
import { FeatureCards } from '@/components/home/FeatureCards';
import { StrategySection } from '@/components/home/StrategySection';
import { RtpSection } from '@/components/home/RtpSection';
import { DemoSection } from '@/components/home/DemoSection';
import { FaqAccordion } from '@/components/home/FaqAccordion';
import { CtaBlock } from '@/components/home/CtaBlock';
import { SITE_CONFIG } from '@/config/site';
import { getHomeFaq } from '@/data/home-faq';

export async function generateMetadata() {
  const locale = (await getLocale()) as 'ru' | 'en';
  const t = await getTranslations('pillar');
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '',
    locale,
  });
}

export default async function HomePage() {
  const locale = (await getLocale()) as 'ru' | 'en';
  const isRu = locale === 'ru';
  const t = await getTranslations('cta');
  const tHome = await getTranslations('home');
  const base = `/${locale}`;
  const pillarHref = `${base}/gates-of-olympus`;

  const title = isRu
    ? 'Gates of Olympus — экспертный гайд 2026'
    : 'Gates of Olympus — Expert Guide 2026';
  const subtitle = isRu
    ? 'RTP 96.5%, множители до 500x, стратегия и бонусный раунд. Всё о слоте Pragmatic Play в одном месте.'
    : 'RTP 96.5%, multipliers up to 500x, strategy and bonus round. Everything about the Pragmatic Play slot in one place.';

  const canonical = `${SITE_CONFIG.url}/${locale}`;
  const webPageJsonLd = buildJsonLdWebPage({
    name: title,
    description: subtitle,
    url: canonical,
  });
  const orgJsonLd = buildJsonLdOrganization();
  const homeFaq = getHomeFaq(locale);
  const faqJsonLd = buildJsonLdFAQ(homeFaq);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <HomeHero
        title={title}
        subtitle={subtitle}
        primaryCtaLabel={t('playNow')}
        secondaryCtaLabel={t('tryDemo')}
        guideHref={pillarHref}
        guideLabel={tHome('readGuide')}
      />

      <QuickStats />

      <WhatIsSection pillarHref={pillarHref} readGuideLabel={tHome('readGuide')} />

      <FeatureCards pillarHref={pillarHref} />

      <StrategySection pillarHref={pillarHref} strategyHref={`${pillarHref}/strategy`} />

      <RtpSection locale={locale} pillarHref={pillarHref} />

      <DemoSection />

      <FaqAccordion items={homeFaq} title={tHome('faqTitle')} />

      <CtaBlock />
    </>
  );
}
