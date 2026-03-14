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
        <h2 className="text-2xl font-bold text-[#f4f4f5] mb-8">
          {t('guidesTitle')}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GUIDES.map(({ slug, key }) => (
            <Link
              key={slug}
              href={`${pillarHref}/${slug}`}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-[#f4f4f5] hover:border-zinc-700 transition-colors block"
              prefetch
            >
              <span className="font-semibold">{tNav(key)}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
