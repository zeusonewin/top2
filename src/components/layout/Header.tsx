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
    <header className="sticky top-0 z-40 h-16 border-b border-white/10 bg-[#0b0b10]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <Link
          href={base}
          className="text-xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-violet-300 via-emerald-300 to-sky-300 bg-clip-text"
          prefetch
        >
          Olympus Slot
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          <Link href={base} className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors text-sm font-medium" prefetch>
            {t('home')}
          </Link>
          <Link href={`${pillar}/strategy`} className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors text-sm font-medium" prefetch>
            {t('strategy')}
          </Link>
          <Link href={`${pillar}/rtp`} className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors text-sm font-medium" prefetch>
            {t('rtp')}
          </Link>
          <Link href={`${pillar}/multipliers`} className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors text-sm font-medium" prefetch>
            {t('multipliers')}
          </Link>
          <Link href={`${pillar}/demo`} className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors text-sm font-medium" prefetch>
            {t('demo')}
          </Link>
          <LanguageSwitcher />
          <CtaButton variant="primary" className="!rounded-xl !px-6 !py-3 !text-base !font-semibold !shadow-lg !shadow-emerald-500/20" subid="header">
            {tCta('playNow')}
          </CtaButton>
        </nav>
      </div>
    </header>
  );
}
