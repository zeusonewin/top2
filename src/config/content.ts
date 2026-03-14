/**
 * Topic cluster & content architecture.
 * Scalable: add new slots, languages, clusters here.
 */

export const SLOT_IDS = ['gates-of-olympus'] as const;
export type SlotId = (typeof SLOT_IDS)[number];

export const ARTICLE_SLUGS = [
  'strategy',
  'rtp',
  'multipliers',
  'bonus-round',
  'how-to-win',
  'mistakes',
  'demo',
  'tips',
] as const;

export type ArticleSlug = (typeof ARTICLE_SLUGS)[number];

export interface ContentMeta {
  slug: ArticleSlug | 'index';
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  relatedSlugs?: ArticleSlug[];
}

export const CONTENT_MAP: Record<SlotId, Record<ArticleSlug | 'index', ContentMeta>> = {
  'gates-of-olympus': {
    index: {
      slug: 'index',
      titleKey: 'pillar.title',
      descriptionKey: 'pillar.description',
      tags: ['gates of olympus', 'slot', 'pragmatic play', 'review'],
      relatedSlugs: ['strategy', 'rtp', 'bonus-round', 'demo'],
    },
    strategy: {
      slug: 'strategy',
      titleKey: 'articles.strategy.title',
      descriptionKey: 'articles.strategy.description',
      tags: ['strategy', 'tactics', 'bankroll'],
      relatedSlugs: ['rtp', 'tips', 'how-to-win', 'mistakes'],
    },
    rtp: {
      slug: 'rtp',
      titleKey: 'articles.rtp.title',
      descriptionKey: 'articles.rtp.description',
      tags: ['rtp', 'volatility', 'payout'],
      relatedSlugs: ['multipliers', 'strategy', 'bonus-round'],
    },
    multipliers: {
      slug: 'multipliers',
      titleKey: 'articles.multipliers.title',
      descriptionKey: 'articles.multipliers.description',
      tags: ['multipliers', 'tumbles', 'cascade'],
      relatedSlugs: ['rtp', 'bonus-round', 'how-to-win'],
    },
    'bonus-round': {
      slug: 'bonus-round',
      titleKey: 'articles.bonusRound.title',
      descriptionKey: 'articles.bonusRound.description',
      tags: ['bonus', 'free spins', 'features'],
      relatedSlugs: ['multipliers', 'how-to-win', 'strategy'],
    },
    'how-to-win': {
      slug: 'how-to-win',
      titleKey: 'articles.howToWin.title',
      descriptionKey: 'articles.howToWin.description',
      tags: ['how to win', 'tips', 'strategy'],
      relatedSlugs: ['strategy', 'tips', 'mistakes', 'bonus-round'],
    },
    mistakes: {
      slug: 'mistakes',
      titleKey: 'articles.mistakes.title',
      descriptionKey: 'articles.mistakes.description',
      tags: ['mistakes', 'errors', 'avoid'],
      relatedSlugs: ['strategy', 'tips', 'how-to-win'],
    },
    demo: {
      slug: 'demo',
      titleKey: 'articles.demo.title',
      descriptionKey: 'articles.demo.description',
      tags: ['demo', 'free play', 'practice'],
      relatedSlugs: ['strategy', 'tips', 'bonus-round'],
    },
    tips: {
      slug: 'tips',
      titleKey: 'articles.tips.title',
      descriptionKey: 'articles.tips.description',
      tags: ['tips', 'advice', 'guide'],
      relatedSlugs: ['strategy', 'how-to-win', 'mistakes'],
    },
  },
};

export function getArticleSlugs(slotId: SlotId): (ArticleSlug | 'index')[] {
  const map = CONTENT_MAP[slotId];
  return ['index', ...ARTICLE_SLUGS];
}

export function getRelatedArticles(
  slotId: SlotId,
  currentSlug: ArticleSlug | 'index'
): ContentMeta[] {
  const meta = CONTENT_MAP[slotId][currentSlug];
  const related = meta?.relatedSlugs ?? [];
  return related.map((s) => CONTENT_MAP[slotId][s]).filter(Boolean);
}
