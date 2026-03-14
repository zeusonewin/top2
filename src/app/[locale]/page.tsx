import { getTranslations, getLocale } from 'next-intl/server';
import { buildMetadata, buildJsonLdWebPage, buildJsonLdOrganization, buildJsonLdFAQ } from '@/lib/seo';
import { HomeHero } from '@/components/home/HomeHero';
import { SlotPreviewBlock } from '@/components/home/SlotPreviewBlock';
import { QuickStats } from '@/components/home/QuickStats';
import { GuidesSection } from '@/components/home/GuidesSection';
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
  const t = await getTranslations('cta');
  const tHome = await getTranslations('home');
  const base = `/${locale}`;
  const pillarHref = `${base}/gates-of-olympus`;

  const canonical = `${SITE_CONFIG.url}/${locale}`;
  const webPageJsonLd = buildJsonLdWebPage({
    name: tHome('heroTitle'),
    description: tHome('heroSubtitle'),
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
        title={tHome('heroTitle')}
        subtitle={tHome('heroSubtitle')}
        primaryCtaLabel={t('playNow')}
        secondaryCtaLabel={t('tryDemo')}
      />

      <SlotPreviewBlock />

      <QuickStats />

      <GuidesSection pillarHref={pillarHref} />

      <DemoSection />

      <FaqAccordion items={homeFaq} title={tHome('faqTitle')} />

      <CtaBlock />
    </>
  );
}
