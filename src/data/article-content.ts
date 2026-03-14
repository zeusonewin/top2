/**
 * Per-article content: Quick Answer, FAQ, lastUpdated.
 * Single source of truth for freshness and snippet optimization.
 * Scale: add new slots/keys; keep structure for 2–4 articles/week.
 */

import type { ArticleSlug } from '@/config/content';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ArticleContentMeta {
  lastUpdated: string; // ISO date, e.g. 2026-03-14
  quickAnswer: string;
  faq: FaqItem[];
}

/** Default lastUpdated for new/unchanged articles */
const DEFAULT_LAST_UPDATED = '2026-03-14';

const ARTICLE_CONTENT: Record<ArticleSlug, ArticleContentMeta> = {
  strategy: {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer:
      'Оптимальная стратегия в Gates of Olympus: ставка 1–2% от банкролла, не гнаться за бонусом повышением ставки, учитывать высокую волатильность. Бонус активируется от 4 скаттеров; математическое ожидание не зависит от размера ставки.',
    faq: [
      {
        question: 'Какая ставка лучше для Gates of Olympus?',
        answer:
          'Рекомендуется 1–2% от банкролла на спин, чтобы пережить серии проигрышей и дождаться бонусного раунда. Увеличивать ставку после проигрышей не стоит.',
      },
      {
        question: 'Сколько нужно для сессии в Gates of Olympus?',
        answer:
          'Минимум 100–150 спинов при ставке 1% от банка. Например, при банке 10 000 ₽ — ставка 100–200 ₽, на сессию лучше закладывать 50–100 спинов.',
      },
      {
        question: 'Влияет ли размер ставки на шанс бонуса?',
        answer:
          'Нет. Вероятность выпадения 4 скаттеров не зависит от размера ставки. RTP 96.5% одинаков при любой ставке.',
      },
      {
        question: 'Когда выходить из игры в Gates of Olympus?',
        answer:
          'Имеет смысл заранее задать цели: например, остановиться при удвоении банка или при потере 20–30%. Не стоит «отыгрываться» после проигрышей.',
      },
    ],
  },
  rtp: {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer:
      'Gates of Olympus имеет RTP 96.5% и высокую волатильность. В долгой игре теоретически возвращается 96.5% ставок; краткосрочно возможны большие просадки или выигрыши. Множители до 500x дают редкие, но крупные выплаты.',
    faq: [
      {
        question: 'Какой RTP у Gates of Olympus?',
        answer: 'Официальный RTP слота Gates of Olympus — 96.5%. Это средний показатель среди слотов Pragmatic Play.',
      },
      {
        question: 'Что значит волатильность в Gates of Olympus?',
        answer:
          'Высокая волатильность означает редкие, но крупные выигрыши и частые серии проигрышей. Банкролл колеблется сильнее, чем в слотах с низкой волатильностью.',
      },
      {
        question: 'Можно ли изменить RTP в казино?',
        answer:
          'Некоторые операторы используют версии с пониженным RTP (например, 94%). Проверяйте информацию о RTP в разделе «Инфо» или «Правила» на сайте казино.',
      },
      {
        question: 'Как RTP связан с множителями в Gates of Olympus?',
        answer:
          'RTP заложен в частоту и размер выигрышей. Множители до 500x — часть математической модели, обеспечивающей заявленный RTP при длительной игре.',
      },
    ],
  },
  multipliers: {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer:
      'В Gates of Olympus множители появляются на случайных символах при тумблах и суммируются в рамках одной серии каскадов. В бонусных спинах множители накапливаются и применяются к итоговому выигрышу. Максимум — 500x.',
    faq: [
      {
        question: 'До какого множителя можно дойти в Gates of Olympus?',
        answer: 'Максимальный множитель в Gates of Olympus — 500x. Он применяется к выигрышу в серии тумблов или в бонусном раунде.',
      },
      {
        question: 'Как накапливаются множители в бонусе?',
        answer:
          'В бесплатных спинах каждый новый множитель, выпавший на сетке, прибавляется к текущему. Итоговая сумма множителей умножает общий выигрыш спинов.',
      },
      {
        question: 'Множители в обычной игре и в бонусе — одинаковые?',
        answer:
          'Механика одна: множители выпадают на символах и суммируются в рамках одной каскадной серии. В бонусе они не сбрасываются между спинами, что даёт больший потенциал выплат.',
      },
    ],
  },
  'bonus-round': {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer:
      'Бонусный раунд в Gates of Olympus запускается при выпадении 4 или более скаттеров на сетке. Даётся 15 бесплатных спинов; множители накапливаются и не сбрасываются. Дополнительные скаттеры добавляют ещё 5 спинов.',
    faq: [
      {
        question: 'Сколько скаттеров нужно для бонуса в Gates of Olympus?',
        answer: 'Бонусный раунд активируется при 4, 5 или 6 скаттерах на экране. Минимум — 4 скаттера.',
      },
      {
        question: 'Сколько бесплатных спинов в Gates of Olympus?',
        answer: 'За 4 скаттера даётся 15 бесплатных спинов. За каждый дополнительный скаттер (5-й, 6-й) добавляется ещё 5 спинов.',
      },
      {
        question: 'Можно ли повторно войти в бонус во время фриспинов?',
        answer:
          'Да. Новые скаттеры (4+) во время бесплатных спинов добавляют 5 спинов к текущему счёту и продлевают бонусный раунд.',
      },
    ],
  },
  'how-to-win': {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer:
      '«Выиграть» в слоте в долгосрочной перспективе нельзя — преимущество у казино (RTP < 100%). Можно максимизировать время игры и шанс на крупный выигрыш: фиксированная ставка 1–2% от банка, игра в демо для понимания механики, выбор казино с заявленным RTP 96.5%.',
    faq: [
      {
        question: 'Есть ли способ гарантированно выиграть в Gates of Olympus?',
        answer:
          'Нет. Слот работает на ГСЧ; каждый спин независим. Гарантированных стратегий не существует. Можно только управлять риском через размер ставки и банкролл.',
      },
      {
        question: 'Увеличивает ли демо шансы на выигрыш на деньгах?',
        answer:
          'Демо помогает понять механику и частоту бонусов, но не меняет вероятность выигрыша в игре на реальные деньги — результаты там независимы.',
      },
    ],
  },
  mistakes: {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer:
      'Типичные ошибки: повышение ставки после проигрышей в надежде «отыграться», игра на последние деньги, ожидание «скоро должен выпасть бонус», незнание RTP и правил бонусного раунда. Избегайте эмоциональных решений и играйте только на выделенный банкролл.',
    faq: [
      {
        question: 'Почему не стоит повышать ставку после проигрышей?',
        answer:
          'Каждый спин независим; прошлые результаты не влияют на следующие. Увеличение ставки после проигрышей лишь быстрее истощает банкролл и увеличивает риск больших потерь.',
      },
      {
        question: 'Влияет ли время суток или «удача» на слот?',
        answer:
          'Нет. Результаты определяются генератором случайных чисел. Ни время, ни предыдущие сессии не влияют на текущие спины.',
      },
    ],
  },
  demo: {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer:
      'Gates of Olympus в демо-режиме позволяет играть бесплатно без регистрации на виртуальные кредиты. Механика и RTP те же, что в игре на деньги. Демо подходит для знакомства с правилами, множителями и бонусным раундом перед игрой на реальные средства.',
    faq: [
      {
        question: 'Нужна ли регистрация для демо Gates of Olympus?',
        answer:
          'Во многих казино демо доступно без регистрации. В некоторых требуется аккаунт; реальный депозит не нужен.',
      },
      {
        question: 'Отличается ли демо от игры на деньги?',
        answer:
          'Механика, RTP и волатильность те же. Отличие только в том, что в демо вы играете на виртуальный баланс и не можете вывести выигрыш.',
      },
    ],
  },
  tips: {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer:
      'Советы: выделите отдельный банкролл и не превышайте его; ставьте 1–2% от банка на спин; перед игрой на деньги попробуйте демо; проверяйте RTP слота на сайте казино; не играйте в состоянии стресса или под алкоголем; используйте лимиты времени и депозита, если казино их предлагает.',
    faq: [
      {
        question: 'Какой банкролл нужен для Gates of Olympus?',
        answer:
          'Рекомендуется минимум 50–100 ставок. При ставке 100 ₽ — от 5 000 ₽; при 500 ₽ — от 25 000 ₽. Чем больше банк, тем ниже риск быстрого проигрыша.',
      },
      {
        question: 'Стоит ли играть на максимальной ставке?',
        answer:
          'Максимальная ставка увеличивает и выигрыши, и потери. Для большинства игроков разумнее средняя или низкая ставка в рамках 1–2% от банка.',
      },
    ],
  },
};

const ARTICLE_CONTENT_EN: Record<ArticleSlug, ArticleContentMeta> = {
  strategy: {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer:
      'Optimal Gates of Olympus strategy: bet 1–2% of bankroll, don’t chase the bonus by raising stakes, account for high volatility. Bonus triggers from 4 scatters; expected value does not depend on bet size.',
    faq: [
      { question: 'What is the best bet size for Gates of Olympus?', answer: 'Aim for 1–2% of bankroll per spin to survive losing streaks and reach the bonus round. Avoid increasing bet after losses.' },
      { question: 'How much bankroll for a Gates of Olympus session?', answer: 'At least 100–150 spins at 1% of bank. E.g. with €1,000 bank, bet €10–20 and plan for 50–100 spins per session.' },
      { question: 'Does bet size affect bonus chance?', answer: 'No. The chance of 4 scatters is the same at any bet. RTP 96.5% applies regardless of stake.' },
      { question: 'When to stop playing Gates of Olympus?', answer: 'Set goals in advance: e.g. stop when bank doubles or after losing 20–30%. Avoid chasing losses.' },
    ],
  },
  rtp: {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer: 'Gates of Olympus has 96.5% RTP and high volatility. Over the long run, 96.5% of stakes are returned theoretically; short-term swings can be large. Multipliers up to 500x provide rare but big wins.',
    faq: [
      { question: 'What is Gates of Olympus RTP?', answer: 'The official RTP is 96.5%, in line with many Pragmatic Play slots.' },
      { question: 'What does volatility mean in Gates of Olympus?', answer: 'High volatility means less frequent but larger wins and more pronounced losing streaks.' },
      { question: 'Can casinos change RTP?', answer: 'Some operators use builds with lower RTP (e.g. 94%). Check the game info or rules on the casino site.' },
      { question: 'How do multipliers relate to RTP?', answer: 'RTP is built from hit frequency and payout sizes. Multipliers up to 500x are part of that math.' },
    ],
  },
  multipliers: {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer: 'In Gates of Olympus, multipliers appear on random symbols during tumbles and add up within one cascade series. In free spins they accumulate and apply to the total win. Max multiplier is 500x.',
    faq: [
      { question: 'What is the max multiplier in Gates of Olympus?', answer: 'The maximum multiplier is 500x, applied to wins in a cascade series or in the bonus round.' },
      { question: 'How do multipliers stack in the bonus?', answer: 'In free spins, each new multiplier on the grid is added to the current total; the combined multiplier applies to the round’s win.' },
      { question: 'Are multipliers the same in base and bonus?', answer: 'Mechanic is the same; in the bonus they persist between spins, increasing potential payouts.' },
    ],
  },
  'bonus-round': {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer: 'The Gates of Olympus bonus triggers with 4 or more scatters. You get 15 free spins; multipliers accumulate and don’t reset. Extra scatters add 5 more spins.',
    faq: [
      { question: 'How many scatters for the bonus in Gates of Olympus?', answer: 'The bonus triggers with 4, 5, or 6 scatters. Minimum is 4.' },
      { question: 'How many free spins in Gates of Olympus?', answer: '4 scatters award 15 free spins. Each extra scatter (5th, 6th) adds 5 more spins.' },
      { question: 'Can you retrigger the bonus during free spins?', answer: 'Yes. New scatters (4+) during free spins add 5 spins to the current count.' },
    ],
  },
  'how-to-win': {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer: 'You can’t "beat" a slot long-term — the house has an edge (RTP < 100%). You can maximize playtime and upside: fixed 1–2% bet of bankroll, try the demo first, choose casinos that offer 96.5% RTP.',
    faq: [
      { question: 'Is there a guaranteed way to win at Gates of Olympus?', answer: 'No. The slot uses an RNG; each spin is independent. You can only manage risk via bet size and bankroll.' },
      { question: 'Does playing demo improve real-money odds?', answer: 'Demo helps you learn the game but does not change odds when playing for real money.' },
    ],
  },
  mistakes: {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer: 'Common mistakes: raising stakes after losses to "chase", playing with money you can’t afford to lose, assuming the bonus is "due", not checking RTP and bonus rules. Stick to a set bankroll and avoid emotional decisions.',
    faq: [
      { question: 'Why not raise the bet after losses?', answer: 'Each spin is independent. Raising stakes only depletes the bankroll faster.' },
      { question: 'Do time of day or "luck" affect the slot?', answer: 'No. Results are determined by the RNG; past sessions and time have no effect.' },
    ],
  },
  demo: {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer: 'Gates of Olympus demo lets you play for free with virtual credits, often without registration. Mechanics and RTP match the real-money game. Use it to learn rules, multipliers, and the bonus before playing with real funds.',
    faq: [
      { question: 'Do I need to register for Gates of Olympus demo?', answer: 'Many casinos offer demo without registration; some require an account but no deposit.' },
      { question: 'Is demo different from real-money play?', answer: 'Mechanics and RTP are the same; only the balance is virtual and winnings cannot be withdrawn.' },
    ],
  },
  tips: {
    lastUpdated: DEFAULT_LAST_UPDATED,
    quickAnswer: 'Tips: use a dedicated bankroll and don’t exceed it; bet 1–2% of bank per spin; try the demo before real money; check the slot’s RTP at the casino; don’t play under stress or alcohol; use time and deposit limits if the casino offers them.',
    faq: [
      { question: 'What bankroll do I need for Gates of Olympus?', answer: 'Recommend at least 50–100 bets. E.g. at €1 per spin, from €50; at €5, from €250.' },
      { question: 'Should I play at max bet?', answer: 'Max bet amplifies both wins and losses. For most players, a moderate bet within 1–2% of bank is safer.' },
    ],
  },
};

export type LocaleContent = 'ru' | 'en';

export function getArticleContent(slug: ArticleSlug, locale: LocaleContent = 'ru'): ArticleContentMeta {
  const content = locale === 'en' ? ARTICLE_CONTENT_EN[slug] : ARTICLE_CONTENT[slug];
  return content ?? ARTICLE_CONTENT[slug];
}

export function getLastUpdated(slug: ArticleSlug): string {
  return ARTICLE_CONTENT[slug]?.lastUpdated ?? DEFAULT_LAST_UPDATED;
}
