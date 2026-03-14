import { getTranslations } from 'next-intl/server';
import { CtaButton } from '@/components/cta/CtaButton';

export async function DemoSection() {
  const t = await getTranslations('home');
  const tCta = await getTranslations('cta');

  return (
    <section id="demo" className="py-24 scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl p-10 md:p-14 text-center">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            {t('demoTitle')}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-slate-300 leading-relaxed">
            {t('demoSubtitle')}
          </p>
          <div className="mt-8">
            <CtaButton variant="primary" className="!px-10 !py-5 !text-xl" subid="hero_secondary">
              {tCta('tryDemo')}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
