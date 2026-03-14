'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

const API_CLICK_BASE = '/api/click';

function getDevice(): string {
  if (typeof window === 'undefined') return 'desktop';
  return /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
}

function buildClickUrl(page: string, lang: string, device: string, subid?: string): string {
  const url = new URL(API_CLICK_BASE, window.location.origin);
  url.searchParams.set('page', page);
  url.searchParams.set('lang', lang);
  url.searchParams.set('device', device);
  if (subid) url.searchParams.set('subid', subid);
  return url.toString();
}

interface CtaButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'sticky';
  className?: string;
  microcopy?: string;
  subid?: string;
}

export function CtaButton({
  children,
  variant = 'primary',
  className = '',
  microcopy: _microcopy,
  subid = 'seo_button',
}: CtaButtonProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const page = pathname?.replace(/^\//, '').replace(/\//g, '_') || 'home';
  const device = getDevice();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = buildClickUrl(page, locale, device, subid);
    window.location.href = url;
  };

  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0e0e11]';
  const variants = {
    primary:
      'bg-[#22c55e] text-white hover:bg-[#16a34a]',
    secondary:
      'border border-zinc-600 bg-zinc-800/50 text-[#f4f4f5] hover:border-zinc-500 hover:bg-zinc-700/50',
    sticky:
      'fixed bottom-0 left-0 right-0 z-50 bg-[#22c55e] text-white py-4 text-lg font-semibold md:hidden pb-safe',
  };

  return (
    <a
      href={API_CLICK_BASE}
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${className}`}
      data-subid={subid}
    >
      {children}
    </a>
  );
}
