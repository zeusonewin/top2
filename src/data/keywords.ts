/**
 * Semantic core: keyword clusters by intent.
 * Use for meta, internal linking, content planning.
 */

export type Intent = 'informational' | 'navigational' | 'transactional';

export interface KeywordCluster {
  intent: Intent;
  primary: string;
  secondary: string[];
  longTail: string[];
}

export const KEYWORD_CLUSTERS: KeywordCluster[] = [
  {
    intent: 'informational',
    primary: 'gates of olympus',
    secondary: [
      'gates of olympus slot',
      'gates of olympus review',
      'gates of olympus rtp',
      'gates of olympus правила',
      'gates of olympus как играть',
    ],
    longTail: [
      'gates of olympus что это за слот',
      'gates of olympus обзор 2026',
      'gates of olympus отзывы игроков',
      'gates of olympus сколько платит',
      'gates of olympus волатильность',
    ],
  },
  {
    intent: 'informational',
    primary: 'gates of olympus стратегия',
    secondary: [
      'gates of olympus тактика',
      'gates of olympus банкролл',
      'gates of olympus ставки',
      'gates of olympus советы',
    ],
    longTail: [
      'как выиграть в gates of olympus',
      'стратегия gates of olympus на бонус',
      'gates of olympus управление банкроллом',
    ],
  },
  {
    intent: 'informational',
    primary: 'gates of olympus множители',
    secondary: [
      'gates of olympus тумблы',
      'gates of olympus каскады',
      'gates of olympus 500x',
      'gates of olympus множитель',
    ],
    longTail: [
      'как работают множители в gates of olympus',
      'gates of olympus максимальный множитель',
      'gates of olympus накопление множителей',
    ],
  },
  {
    intent: 'informational',
    primary: 'gates of olympus бонус',
    secondary: [
      'gates of olympus бесплатные спины',
      'gates of olympus бонусный раунд',
      'gates of olympus фриспины',
      'gates of olympus как получить бонус',
    ],
    longTail: [
      'gates of olympus сколько скаттеров на бонус',
      'gates of olympus бонус множители',
      'gates of olympus активация бонуса',
    ],
  },
  {
    intent: 'transactional',
    primary: 'gates of olympus играть',
    secondary: [
      'gates of olympus играть онлайн',
      'gates of olympus казино',
      'gates of olympus на деньги',
      'gates of olympus регистрация',
    ],
    longTail: [
      'gates of olympus играть на рубли',
      'gates of olympus где играть',
      'gates of olympus казино с бонусом',
    ],
  },
  {
    intent: 'transactional',
    primary: 'gates of olympus демо',
    secondary: [
      'gates of olympus бесплатно',
      'gates of olympus без регистрации',
      'gates of olympus демо режим',
      'gates of olympus играть бесплатно',
    ],
    longTail: [
      'gates of olympus демо без регистрации',
      'gates of olympus попробовать бесплатно',
      'gates of olympus тест без депозита',
    ],
  },
  {
    intent: 'navigational',
    primary: 'gates of olympus pragmatic',
    secondary: [
      'gates of olympus pragmatic play',
      'слот gates of olympus',
      'официальный gates of olympus',
    ],
    longTail: ['pragmatic play gates of olympus обзор'],
  },
];

export const PRIMARY_KEYWORDS = KEYWORD_CLUSTERS.map((c) => c.primary);
export const ALL_KEYWORDS: string[] = KEYWORD_CLUSTERS.flatMap((c) => [
  c.primary,
  ...c.secondary,
  ...c.longTail,
]);

export function getKeywordsByIntent(intent: Intent): string[] {
  return KEYWORD_CLUSTERS.filter((c) => c.intent === intent).flatMap((c) => [
    c.primary,
    ...c.secondary,
    ...c.longTail,
  ]);
}
