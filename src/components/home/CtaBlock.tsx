import { getTranslations } from 'next-intl/server';
import { CtaButton } from '@/components/cta/CtaButton';

export async function CtaBlock() {
  const t = await getTranslations('home');
  const tCta = await getTranslations('cta');

  return (
    <section className="py-24" aria-label="Final CTA">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-b from-violet-500/10 to-transparent backdrop-blur-xl p-10 md:p-14 text-center">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            {t('ctaBlockTitle')}
          </h2>
          <p className="mt-4 text-slate-300">
            {t('ctaBlockSubtitle')}
          </p>
          <div className="mt-8">
            <CtaButton variant="primary" className="!px-12 !py-5 !text-xl" subid="cta_block">
              {tCta('playNow')}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
