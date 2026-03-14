'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] ?? 'ru';
  const otherLocale = currentLocale === 'ru' ? 'en' : 'ru';
  const pathWithoutLocale = pathname?.replace(/^\/[a-z]{2}/, '') || '';
  const href = `/${otherLocale}${pathWithoutLocale}`;

  return (
    <Link
      href={href}
      className="text-sm font-medium text-surface-muted hover:text-cta uppercase transition-colors"
      prefetch
    >
      {otherLocale === 'ru' ? 'RU' : 'EN'}
    </Link>
  );
}
