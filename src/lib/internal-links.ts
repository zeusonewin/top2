/**
 * Automatic internal linking: suggest links by slug/tags.
 * Scalable for more slots and clusters.
 */

import { CONTENT_MAP } from '@/config/content';
import type { SlotId, ArticleSlug } from '@/config/content';

export function getInternalLinksForSlug(
  slotId: SlotId,
  currentSlug: ArticleSlug | 'index'
): { slug: ArticleSlug | 'index'; labelKey: string }[] {
  const meta = CONTENT_MAP[slotId][currentSlug];
  const related = meta?.relatedSlugs ?? [];
  const labelMap: Record<string, string> = {
    index: 'nav.gatesOfOlympus',
    strategy: 'nav.strategy',
    rtp: 'nav.rtp',
    multipliers: 'nav.multipliers',
    'bonus-round': 'nav.bonusRound',
    'how-to-win': 'nav.howToWin',
    mistakes: 'nav.mistakes',
    demo: 'nav.demo',
    tips: 'nav.tips',
  };
  return related.map((slug) => ({ slug, labelKey: labelMap[slug] ?? slug }));
}

export function getTagsForSlug(slotId: SlotId, slug: ArticleSlug | 'index'): string[] {
  const meta = CONTENT_MAP[slotId][slug];
  return meta?.tags ?? [];
}
