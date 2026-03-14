import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { CtaButton } from '@/components/cta/CtaButton';
import { LanguageSwitcher } from './LanguageSwitcher';

export async function Header() {
  const t = await getTranslations('nav');
  const locale = await getLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-surface-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/90">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link
          href={`/${locale}`}
          className="text-xl font-bold text-white hover:text-cta transition-colors"
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
