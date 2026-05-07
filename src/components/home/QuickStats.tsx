import { getTranslations, getLocale } from 'next-intl/server';

export async function QuickStats() {
  const t = await getTranslations('home');
  const locale = await getLocale();
  const isRu = locale === 'ru';

  const items = [
    { label: t('quickStats.rtp'), value: '96.5%' },
    { label: t('quickStats.volatility'), value: isRu ? 'Высокая' : 'High' },
    { label: t('quickStats.maxMultiplier'), value: '500x' },
    { label: t('quickStats.provider'), value: 'Pragmatic Play' },
  ];

  return (
    <section className="py-20" aria-label="Slot parameters">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-2xl font-bold text-[#f4f4f5] md:text-3xl">
          {t('paramsTitle')}
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 text-center transition hover:-translate-y-0.5 hover:border-emerald-400/40"
            >
              <p className="text-2xl font-extrabold text-[#f4f4f5] group-hover:text-emerald-300">{item.value}</p>
              <p className="mt-1 text-sm text-[#a1a1aa]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
