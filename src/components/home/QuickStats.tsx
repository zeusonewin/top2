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
        <h2 className="text-2xl font-bold text-[#f4f4f5] mb-8">
          {t('paramsTitle')}
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-center"
            >
              <p className="text-2xl font-bold text-[#f4f4f5]">{item.value}</p>
              <p className="mt-1 text-sm text-[#a1a1aa]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
