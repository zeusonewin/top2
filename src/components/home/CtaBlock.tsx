import { getTranslations } from 'next-intl/server';
import { CtaButton } from '@/components/cta/CtaButton';

export async function CtaBlock() {
  const t = await getTranslations('home');
  const tCta = await getTranslations('cta');

  return (
    <section className="py-20" aria-label="Final CTA">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-2xl font-bold text-[#f4f4f5] md:text-3xl">
          {t('ctaBlockTitle')}
        </h2>
        <p className="mt-4 text-[#a1a1aa]">
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
