import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

const GUIDES = [
  { slug: 'strategy', key: 'strategy' as const },
  { slug: 'rtp', key: 'rtp' as const },
  { slug: 'multipliers', key: 'multipliers' as const },
  { slug: 'demo', key: 'demo' as const },
];

interface GuidesSectionProps {
  pillarHref: string;
}

export async function GuidesSection({ pillarHref }: GuidesSectionProps) {
  const t = await getTranslations('home');
  const tNav = await getTranslations('nav');

  return (
    <section className="py-20" aria-label="Guides">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-2xl font-bold text-[#f4f4f5] md:text-3xl">
          {t('guidesTitle')}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GUIDES.map(({ slug, key }) => (
            <Link
              key={slug}
              href={`${pillarHref}/${slug}`}
              className="group block rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-slate-900/80 to-emerald-500/10 p-6 text-[#f4f4f5] transition-all hover:-translate-y-1 hover:border-emerald-400/50"
              prefetch
            >
              <span className="text-sm text-slate-400">Guide</span>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-semibold">{tNav(key)}</span>
                <span className="text-emerald-300 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
