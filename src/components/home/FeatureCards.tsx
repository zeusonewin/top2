import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

const FEATURE_KEYS = ['multipliers', 'freeSpins', 'volatility', 'bonus'] as const;

interface FeatureCardsProps {
  pillarHref: string;
}

export async function FeatureCards({ pillarHref }: FeatureCardsProps) {
  const t = await getTranslations('home');
  const tNav = await getTranslations('nav');

  const titles: Record<(typeof FEATURE_KEYS)[number], string> = {
    multipliers: tNav('multipliers'),
    freeSpins: tNav('bonusRound'),
    volatility: t('quickStats.volatility'),
    bonus: t('quickStats.bonusFeature'),
  };

  return (
    <section id="features" className="py-24 scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          {t('featureTitle')}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURE_KEYS.map((key) => (
            <div
              key={key}
              className="flex min-h-[180px] flex-col rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl p-6 transition-all duration-300 hover:border-violet-500/20 hover:shadow-glow"
            >
              <h3 className="text-lg font-semibold text-white">{titles[key]}</h3>
              <p className="mt-3 flex-1 text-sm text-slate-300 leading-relaxed">
                {t(`features.${key}`)}
              </p>
            </div>
          ))}
        </div>
        <Link
          href={pillarHref}
          className="mt-8 inline-flex items-center gap-2 text-violet-400 hover:text-white font-semibold text-sm transition-colors"
          prefetch
        >
          {t('readGuide')}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
