import { getTranslations, getLocale } from 'next-intl/server';

export async function QuickStats() {
  const t = await getTranslations('home');
  const locale = await getLocale();
  const isRu = locale === 'ru';

  const items = [
    { label: t('quickStats.rtp'), value: '96.5%' },
    { label: t('quickStats.maxMultiplier'), value: '500x' },
    { label: t('quickStats.volatility'), value: isRu ? 'Высокая' : 'High' },
    { label: t('quickStats.bonusFeature'), value: '15 FS' },
  ];

  return (
    <section className="py-24" aria-label="Quick stats">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl p-6 text-center transition-all duration-300 hover:border-violet-500/20"
            >
              <p className="text-2xl font-bold text-white md:text-3xl">{item.value}</p>
              <p className="mt-1 text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
