import { getTranslations } from 'next-intl/server';

export interface HomeToCItem {
  id: string;
  labelKey: string;
}

const TOC_ITEMS: HomeToCItem[] = [
  { id: 'quick-overview', labelKey: 'home.quickOverviewTitle' },
  { id: 'rtp', labelKey: 'home.sections.rtp' },
  { id: 'strategy', labelKey: 'home.sections.strategy' },
  { id: 'multipliers', labelKey: 'home.sections.multipliers' },
  { id: 'demo', labelKey: 'home.sections.demo' },
  { id: 'params', labelKey: 'home.paramsTitle' },
  { id: 'faq', labelKey: 'home.faqTitle' },
  { id: 'bankroll', labelKey: 'home.sections.bankroll' },
];

export async function HomeToC() {
  const t = await getTranslations('home');

  return (
    <nav
      className="rounded-2xl border border-white/10 backdrop-blur-[12px] bg-white/[0.07] p-5 shadow-glass"
      aria-label={t('tocTitle')}
    >
      <h2 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-3">
        {t('tocTitle')}
      </h2>
      <ul className="space-y-1">
        {TOC_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="toc-link"
            >
              {item.id === 'quick-overview' ? t('quickOverviewTitle') : item.id === 'params' ? t('paramsTitle') : item.id === 'faq' ? t('faqTitle') : t(`sections.${item.id}`)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
