/**
 * FAQ for homepage. Used for content and JSON-LD.
 */

export interface HomeFaqItem {
  question: string;
  answer: string;
}

export const HOME_FAQ_RU: HomeFaqItem[] = [
  {
    question: 'Какой RTP у Gates of Olympus?',
    answer: 'Официальный RTP слота Gates of Olympus — 96.5%.',
  },
  {
    question: 'Есть ли демо Gates of Olympus без регистрации?',
    answer: 'Да, многие казино дают возможность играть в демо без регистрации.',
  },
  {
    question: 'Какой максимальный множитель в Gates of Olympus?',
    answer: 'Максимальный множитель — 500x. Он может применяться в базовой игре и в бонусных спинах.',
  },
  {
    question: 'Сколько бесплатных спинов в бонусе Gates of Olympus?',
    answer: 'За 4 скаттера даётся 15 бесплатных спинов. За каждый дополнительный скаттер добавляется ещё 5 спинов.',
  },
];

export const HOME_FAQ_EN: HomeFaqItem[] = [
  {
    question: 'What is Gates of Olympus RTP?',
    answer: 'The official RTP of Gates of Olympus is 96.5%.',
  },
  {
    question: 'Is there a Gates of Olympus demo without registration?',
    answer: 'Yes, many casinos offer demo play without registration.',
  },
  {
    question: 'What is the max multiplier in Gates of Olympus?',
    answer: 'The maximum multiplier is 500x. It can apply in both base game and free spins.',
  },
  {
    question: 'How many free spins in Gates of Olympus bonus?',
    answer: '4 scatters award 15 free spins. Each extra scatter adds 5 more spins.',
  },
];

export function getHomeFaq(locale: 'ru' | 'en'): HomeFaqItem[] {
  return locale === 'ru' ? HOME_FAQ_RU : HOME_FAQ_EN;
}
