import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import type { ContentMeta } from '@/config/content';

interface RelatedPostsProps {
  slotId: string;
  posts: ContentMeta[];
}

const NAV_KEYS: Record<string, string> = {
  index: 'gatesOfOlympus',
  strategy: 'strategy',
  rtp: 'rtp',
  multipliers: 'multipliers',
  'bonus-round': 'bonusRound',
  'how-to-win': 'howToWin',
  mistakes: 'mistakes',
  demo: 'demo',
  tips: 'tips',
};

export async function RelatedPosts({ slotId, posts }: RelatedPostsProps) {
  const t = await getTranslations('nav');
  const locale = await getLocale();
  const tCommon = await getTranslations('common');
  const base = `/${locale}/${slotId}`;

  if (!posts.length) return null;

  return (
    <aside className="mt-12 p-6 backdrop-blur-xl bg-white/[0.04] rounded-2xl border border-white/[0.08]">
      <h2 className="text-lg font-semibold text-white mb-4">{tCommon('relatedArticles')}</h2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {posts.map((post) => {
          const href = post.slug === 'index' ? base : `${base}/${post.slug}`;
          const titleKey = NAV_KEYS[post.slug] ?? post.slug;
          return (
            <li key={post.slug}>
              <Link
                href={href}
                className="text-violet-400 hover:text-white font-medium transition-colors"
                prefetch
              >
                {t(titleKey)}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
