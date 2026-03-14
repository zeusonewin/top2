import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

interface WhatIsSectionProps {
  pillarHref: string;
  readGuideLabel: string;
}

export async function WhatIsSection({ pillarHref, readGuideLabel }: WhatIsSectionProps) {
  const t = await getTranslations('home');

  return (
    <section id="what-is" className="py-24 scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          {t('whatIsTitle')}
        </h2>
        <p className="mt-6 max-w-3xl text-slate-300 leading-relaxed text-base md:text-lg">
          {t('whatIsText')}
        </p>
        <Link
          href={pillarHref}
          className="mt-6 inline-flex items-center gap-2 text-violet-400 hover:text-white font-semibold text-sm transition-colors"
          prefetch
        >
          {readGuideLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
