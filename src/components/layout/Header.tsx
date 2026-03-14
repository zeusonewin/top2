import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { CtaButton } from '@/components/cta/CtaButton';
import { LanguageSwitcher } from './LanguageSwitcher';

export async function Header() {
  const t = await getTranslations('nav');
  const locale = await getLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] backdrop-blur-xl bg-[#0B0B0F]/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link
          href={`/${locale}`}
          className="text-xl font-bold text-white hover:text-slate-300 transition-colors"
          prefetch
        >
          Olympus Slot
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          <Link
            href={`/${locale}/gates-of-olympus`}
            className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
            prefetch
          >
            {t('gatesOfOlympus')}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
            prefetch
          >
            {t('about')}
          </Link>
          <LanguageSwitcher />
          <CtaButton variant="primary" className="!py-2 !px-5 !text-base" subid="header">
            {t('gatesOfOlympus')}
          </CtaButton>
        </nav>
      </div>
    </header>
  );
}
