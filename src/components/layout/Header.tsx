import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { CtaButton } from '@/components/cta/CtaButton';
import { LanguageSwitcher } from './LanguageSwitcher';

export async function Header() {
  const t = await getTranslations('nav');
  const locale = await getLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur-[20px] bg-surface/80 supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link
          href={`/${locale}`}
          className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent hover:from-cta hover:to-amber-200 transition-all duration-300"
          prefetch
        >
          Olympus Slot
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          <Link
            href={`/${locale}/gates-of-olympus`}
            className="text-surface-muted hover:text-white transition-colors text-sm font-medium"
            prefetch
          >
            {t('gatesOfOlympus')}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="text-surface-muted hover:text-white transition-colors text-sm font-medium"
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
