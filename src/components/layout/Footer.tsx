import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';

export async function Footer() {
  const t = await getTranslations('footer');
  const locale = await getLocale();
  const base = `/${locale}`;
  const isRu = locale === 'ru';
  const pillar = `${base}/gates-of-olympus`;

  return (
    <footer className="mt-auto border-t border-zinc-800 bg-[#0e0e11]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#a1a1aa] mb-4">
              {isRu ? 'О проекте' : 'About'}
            </p>
            <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-xs">
              {isRu
                ? 'Экспертный гайд по слоту Gates of Olympus: RTP, стратегия, бонусы.'
                : 'Expert guide to Gates of Olympus slot: RTP, strategy, bonuses.'}
            </p>
            <Link href={`${base}/about`} className="mt-3 inline-block text-sm text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors" prefetch>
              {t('about')} →
            </Link>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#a1a1aa] mb-4">
              {isRu ? 'Гайды' : 'Guides'}
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={pillar} className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors" prefetch>
                  Gates of Olympus
                </Link>
              </li>
              <li>
                <Link href={`${pillar}/strategy`} className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors" prefetch>
                  {isRu ? 'Стратегия' : 'Strategy'}
                </Link>
              </li>
              <li>
                <Link href={`${pillar}/rtp`} className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors" prefetch>
                  RTP
                </Link>
              </li>
              <li>
                <Link href={`${pillar}/demo`} className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors" prefetch>
                  {isRu ? 'Демо' : 'Demo'}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#a1a1aa] mb-4">
              {isRu ? 'Правовая информация' : 'Legal'}
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`${base}/disclaimer`} className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors" prefetch>{t('disclaimer')}</Link>
              </li>
              <li>
                <Link href={`${base}/responsible-gaming`} className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors" prefetch>{t('responsibleGaming')}</Link>
              </li>
              <li>
                <Link href={`${base}/privacy`} className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors" prefetch>{t('privacy')}</Link>
              </li>
              <li>
                <Link href={`${base}/terms`} className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors" prefetch>{t('terms')}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-xs text-[#a1a1aa]">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
