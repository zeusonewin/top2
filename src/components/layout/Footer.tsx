import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';

export async function Footer() {
  const t = await getTranslations('footer');
  const locale = await getLocale();
  const base = `/${locale}`;

  return (
    <footer className="mt-auto border-t border-white/10 backdrop-blur-[12px] bg-white/[0.05]">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-lg font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Olympus Slot</p>
            <p className="mt-2 text-sm text-white/70 max-w-sm">
              {locale === 'ru'
                ? 'Экспертный гайд по слоту Gates of Olympus: RTP, стратегия, бонусы. Только проверенная информация.'
                : 'Expert guide to Gates of Olympus slot: RTP, strategy, bonuses. Verified information only.'}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-3">
              {locale === 'ru' ? 'Материалы' : 'Content'}
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`${base}/gates-of-olympus`} className="text-white/70 hover:text-cta transition-colors" prefetch>
                  Gates of Olympus
                </Link>
              </li>
              <li>
                <Link href={`${base}/about`} className="text-white/70 hover:text-cta transition-colors" prefetch>
                  {t('about')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-3">
              {locale === 'ru' ? 'Правовая информация' : 'Legal'}
            </p>
            <ul className="space-y-2 text-sm">
              <Link href={`${base}/disclaimer`} className="block text-white/70 hover:text-cta transition-colors" prefetch>{t('disclaimer')}</Link>
              <Link href={`${base}/responsible-gaming`} className="block text-white/70 hover:text-cta transition-colors" prefetch>{t('responsibleGaming')}</Link>
              <Link href={`${base}/privacy`} className="block text-white/70 hover:text-cta transition-colors" prefetch>{t('privacy')}</Link>
              <Link href={`${base}/terms`} className="block text-white/70 hover:text-cta transition-colors" prefetch>{t('terms')}</Link>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-xs text-white/60">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
