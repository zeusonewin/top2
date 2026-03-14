/**
 * Long-tail SEO: структура для масштабирования низкочастотных запросов.
 * Programmatic SEO (контролируемо): новые страницы генерируются по шаблону
 * с уникальным контентом и автоматической внутренней перелинковкой.
 *
 * Масштабирование: добавляйте новые ключи в LONG_TAIL_CLUSTERS и
 * создавайте маршруты или динамические страницы по slug.
 */

import type { SlotId } from './content';

export type LongTailIntent = 'informational' | 'transactional' | 'navigational';

export interface LongTailPageMeta {
  slug: string;
  titleKey: string;
  descriptionKey: string;
  intent: LongTailIntent;
  /** Родительский pillar или статья для внутренних ссылок */
  parentSlug: string;
  /** Кластер для группировки (например, "rtp", "bonus") */
  cluster: string;
}

/**
 * Примеры long-tail страниц. В production заполняйте из CMS или конфига.
 * Каждая запись → отдельная страница с уникальным контентом, без дублирования.
 * titleKey/descriptionKey — ключи из messages или генерируются по slug.
 */
export const LONG_TAIL_CLUSTERS: Record<SlotId, LongTailPageMeta[]> = {
  'gates-of-olympus': [
    { slug: 'gates-of-olympus-rtp-96', titleKey: 'RTP 96.5%', descriptionKey: 'Gates of Olympus RTP 96.5% explained.', intent: 'informational', parentSlug: 'rtp', cluster: 'rtp' },
    { slug: 'gates-of-olympus-demo-bez-registracii', titleKey: 'Demo without registration', descriptionKey: 'Play Gates of Olympus demo without registration.', intent: 'transactional', parentSlug: 'demo', cluster: 'demo' },
    { slug: 'gates-of-olympus-mnozhiteli-500x', titleKey: '500x multipliers', descriptionKey: 'How 500x multipliers work in Gates of Olympus.', intent: 'informational', parentSlug: 'multipliers', cluster: 'multipliers' },
  ],
};

export function getLongTailPages(slotId: SlotId): LongTailPageMeta[] {
  return LONG_TAIL_CLUSTERS[slotId] ?? [];
}

export function getLongTailByCluster(slotId: SlotId, cluster: string): LongTailPageMeta[] {
  return (LONG_TAIL_CLUSTERS[slotId] ?? []).filter((p) => p.cluster === cluster);
}

/** Для автоматической внутренней перелинковки: ссылки с pillar/статей на long-tail */
export function getInternalLinksToLongTail(slotId: SlotId, fromSlug: string): LongTailPageMeta[] {
  const pages = LONG_TAIL_CLUSTERS[slotId] ?? [];
  return pages.filter((p) => p.parentSlug === fromSlug);
}
