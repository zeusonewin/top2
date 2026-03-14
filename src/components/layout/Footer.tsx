import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';

export async function Footer() {
  const t = await getTranslations('footer');
  const locale = await getLocale();
  const base = `/${locale}`;

  return (
    <footer className="mt-auto border-t border-white/[0.08] bg-[#0B0B0F]">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-lg font-semibold text-white">Olympus Slot</p>
            <p className="mt-3 text-sm text-slate-400 max-w-sm leading-relaxed">
              {locale === 'ru'
                ? 'Экспертный гайд по слоту Gates of Olympus: RTP, стратегия, бонусы.'
                : 'Expert guide to Gates of Olympus slot: RTP, strategy, bonuses.'}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              {locale === 'ru' ? 'Материалы' : 'Content'}
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`${base}/gates-of-olympus`} className="text-slate-400 hover:text-white transition-colors" prefetch>
                  Gates of Olympus
                </Link>
              </li>
              <li>
                <Link href={`${base}/about`} className="text-slate-400 hover:text-white transition-colors" prefetch>
                  {t('about')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              {locale === 'ru' ? 'Правовая информация' : 'Legal'}
            </p>
            <ul className="space-y-2 text-sm">
              <Link href={`${base}/disclaimer`} className="block text-slate-400 hover:text-white transition-colors" prefetch>{t('disclaimer')}</Link>
              <Link href={`${base}/responsible-gaming`} className="block text-slate-400 hover:text-white transition-colors" prefetch>{t('responsibleGaming')}</Link>
              <Link href={`${base}/privacy`} className="block text-slate-400 hover:text-white transition-colors" prefetch>{t('privacy')}</Link>
              <Link href={`${base}/terms`} className="block text-slate-400 hover:text-white transition-colors" prefetch>{t('terms')}</Link>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/[0.08] text-center text-xs text-slate-500">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
