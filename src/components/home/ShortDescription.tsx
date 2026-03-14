import { getTranslations } from 'next-intl/server';

export async function ShortDescription() {
  const t = await getTranslations('home');

  return (
    <section className="py-20" aria-labelledby="what-is-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="what-is-heading" className="text-2xl font-bold text-[#f4f4f5] mb-4">
          {t('whatIsTitle')}
        </h2>
        <p className="text-[#a1a1aa] leading-relaxed max-w-3xl">
          {t('whatIsShortText')}
        </p>
      </div>
    </section>
  );
}
