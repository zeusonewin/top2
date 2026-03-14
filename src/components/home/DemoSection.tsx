import { getTranslations } from 'next-intl/server';
import { CtaButton } from '@/components/cta/CtaButton';

export async function DemoSection() {
  const t = await getTranslations('home');
  const tCta = await getTranslations('cta');

  return (
    <section className="py-20 border-t border-slate-700/50 bg-[#0f172a]" aria-label="Demo">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-bold text-white">
          {t('demoTitle')}
        </h2>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          {t('demoSubtitle')}
        </p>
        <div className="mt-8">
          <CtaButton variant="primary" className="!px-8 !py-4 !text-lg" subid="hero_secondary">
            {tCta('tryDemo')}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
