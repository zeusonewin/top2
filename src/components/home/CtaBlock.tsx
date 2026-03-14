import { getTranslations } from 'next-intl/server';
import { CtaButton } from '@/components/cta/CtaButton';

export async function CtaBlock() {
  const t = await getTranslations('home');
  const tCta = await getTranslations('cta');

  return (
    <section className="py-20 border-t border-slate-700/50 bg-[#0f172a]" aria-label="Final CTA">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {t('ctaBlockTitle')}
        </h2>
        <p className="mt-4 text-slate-300">
          {t('ctaBlockSubtitle')}
        </p>
        <div className="mt-8">
          <CtaButton variant="primary" className="!px-10 !py-4 !text-xl" subid="cta_block">
            {tCta('playNow')}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
