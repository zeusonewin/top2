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
  /** Not displayed in UI — removed for conversion. Kept for API compatibility. */
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
    'inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#0B0B0F]';
  const variants = {
    primary:
      'bg-gradient-to-r from-violet-500 to-purple-600 text-white px-7 py-4 text-lg shadow-glow hover:shadow-glow-lg hover:scale-[1.03] active:scale-[0.98] border border-white/10',
    secondary:
      'backdrop-blur-xl bg-white/[0.04] text-white border border-white/[0.08] hover:bg-white/[0.08] hover:border-violet-500/30 hover:shadow-glow px-7 py-4 text-lg',
    sticky:
      'fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-violet-500 to-purple-600 text-white py-4 text-lg font-bold shadow-[0_-4px_24px_rgba(0,0,0,0.4)] md:hidden pb-safe border-t border-white/10',
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
