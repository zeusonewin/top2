import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { Hero } from '@/components/ui/Hero';
import { CtaButton } from '@/components/cta/CtaButton';
import { TrustBlock } from '@/components/conversion/TrustBlock';

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
  const t = await getTranslations('cta');
  const locale = await getLocale();
  const isRu = locale === 'ru';

  const title = isRu
    ? 'Gates of Olympus — экспертный гайд 2026'
    : 'Gates of Olympus — Expert Guide 2026';
  const subtitle = isRu
    ? 'RTP 96.5%, множители до 500x, стратегия и бонусный раунд. Всё о слоте Pragmatic Play в одном месте.'
    : 'RTP 96.5%, multipliers up to 500x, strategy and bonus round. Everything about the Pragmatic Play slot in one place.';

  return (
    <>
      <Hero
        title={title}
        subtitle={subtitle}
        ctaSlot={
          <>
            <CtaButton variant="primary" microcopy={t('microcopy')} subid="hero">
              {t('playNow')}
            </CtaButton>
            <TrustBlock />
          </>
        }
        guideHref={`/${locale}/gates-of-olympus`}
        guideLabel={isRu ? 'Читать полный гайд' : 'Read full guide'}
      />

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-xl border border-surface-border bg-surface-elevated/80 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            {isRu ? 'Что такое Gates of Olympus?' : 'What is Gates of Olympus?'}
          </h2>
          <p className="text-surface-muted leading-relaxed mb-4">
            {isRu
              ? 'Gates of Olympus — один из самых популярных слотов Pragmatic Play: 6 барабанов, кластерные выплаты, множители до 500x и бонусный раунд бесплатных спинов. RTP 96.5%, высокая волатильность. На этом сайте — проверенная стратегия, разбор RTP и советы по игре.'
              : 'Gates of Olympus is one of Pragmatic Play’s most popular slots: 6 reels, cluster pays, multipliers up to 500x and a free spins bonus round. RTP 96.5%, high volatility. This site covers proven strategy, RTP breakdown and gameplay tips.'}
          </p>
          <Link
            href={`/${locale}/gates-of-olympus`}
            className="inline-flex items-center gap-1 text-cta hover:text-cta-hover font-medium transition-colors"
            prefetch
          >
            {isRu ? 'Полный гайд Gates of Olympus' : 'Full Gates of Olympus guide'}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
