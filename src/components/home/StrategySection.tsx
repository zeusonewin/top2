import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';

const TIPS_RU = [
  'Ставка 1–2% от банка на спин',
  'Сначала играйте в демо',
  'Множители в бонусе не сбрасываются',
  'Не гонитесь за бонусом — контролируйте ставку',
];

const TIPS_EN = [
  'Bet 1–2% of bankroll per spin',
  'Try demo mode first',
  'Multipliers in bonus do not reset',
  'Don’t chase the bonus — control your bet',
];

interface StrategySectionProps {
  pillarHref: string;
  strategyHref: string;
}

export async function StrategySection({ pillarHref, strategyHref }: StrategySectionProps) {
  const t = await getTranslations('home');
  const locale = await getLocale();
  const tips = locale === 'ru' ? TIPS_RU : TIPS_EN;

  return (
    <section id="strategy" className="py-24 scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              {t('strategyTitle')}
            </h2>
            <p className="mt-6 text-slate-300 leading-relaxed text-base md:text-lg">
              {t('strategyText')}
            </p>
            <Link
              href={strategyHref}
              className="mt-6 inline-flex items-center gap-2 text-violet-400 hover:text-white font-semibold text-sm transition-colors"
              prefetch
            >
              {t('sections.strategy')} →
            </Link>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl p-6">
            <h3 className="text-lg font-semibold text-white">{t('strategyTipsTitle')}</h3>
            <ul className="mt-4 space-y-3">
              {tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
