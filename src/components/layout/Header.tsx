import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { CtaButton } from '@/components/cta/CtaButton';
import { LanguageSwitcher } from './LanguageSwitcher';

export async function Header() {
  const t = await getTranslations('nav');
  const tCta = await getTranslations('cta');
  const locale = await getLocale();
  const base = `/${locale}`;
  const pillar = `${base}/gates-of-olympus`;

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-slate-700/50 bg-[#0f172a]">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <Link
          href={base}
          className="text-xl font-bold text-white hover:text-slate-200 transition-colors"
          prefetch
        >
          Olympus Slot
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          <Link href={base} className="text-slate-300 hover:text-white transition-colors text-sm font-medium" prefetch>
            {t('home')}
          </Link>
          <Link href={`${pillar}/strategy`} className="text-slate-300 hover:text-white transition-colors text-sm font-medium" prefetch>
            {t('strategy')}
          </Link>
          <Link href={`${pillar}/rtp`} className="text-slate-300 hover:text-white transition-colors text-sm font-medium" prefetch>
            {t('rtp')}
          </Link>
          <Link href={`${pillar}/multipliers`} className="text-slate-300 hover:text-white transition-colors text-sm font-medium" prefetch>
            {t('multipliers')}
          </Link>
          <Link href={`${pillar}/demo`} className="text-slate-300 hover:text-white transition-colors text-sm font-medium" prefetch>
            {t('demo')}
          </Link>
          <LanguageSwitcher />
          <CtaButton variant="primary" className="!rounded-lg !px-6 !py-3 !text-base !font-semibold" subid="header">
            {tCta('playNow')}
          </CtaButton>
        </nav>
      </div>
    </header>
  );
}
