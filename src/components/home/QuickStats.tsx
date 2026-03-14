import { getTranslations, getLocale } from 'next-intl/server';

export async function QuickStats() {
  const t = await getTranslations('home');
  const locale = await getLocale();
  const isRu = locale === 'ru';

  const items = [
    { label: t('quickStats.rtp'), value: '96.5%' },
    { label: t('quickStats.volatility'), value: isRu ? 'Высокая' : 'High' },
    { label: t('quickStats.maxMultiplier'), value: '500x' },
    { label: t('quickStats.bonusFeature'), value: '15 FS' },
  ];

  return (
    <section className="py-20 border-t border-slate-700/50 bg-[#0f172a]" aria-label="Stats">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-600 bg-slate-800/40 p-6 text-center"
            >
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="mt-1 text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
