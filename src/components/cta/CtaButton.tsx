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
  microcopy,
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
    'inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 focus:ring-offset-surface';
  const variants = {
    primary:
      'bg-gradient-to-r from-cta to-amber-500 text-black px-7 py-4 text-lg shadow-cta-glow hover:shadow-cta-glow-lg hover:scale-[1.03] active:scale-[0.98] border border-amber-400/30 hover:border-amber-300/50',
    secondary:
      'backdrop-blur-[12px] bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-cta/40 hover:text-cta px-7 py-4 text-lg shadow-glass',
    sticky:
      'fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-cta to-amber-500 text-black py-4 text-lg font-bold shadow-[0_-4px_24px_rgba(0,0,0,0.4)] md:hidden pb-safe border-t border-amber-400/30',
  };

  return (
    <div className="flex flex-col gap-2">
      <a
        href={API_CLICK_BASE}
        onClick={handleClick}
        className={`${base} ${variants[variant]} ${className}`}
        data-subid={subid}
      >
        {children}
      </a>
      {microcopy && (
        <p className="text-sm text-surface-muted text-center max-w-md mx-auto">
          {microcopy}
        </p>
      )}
    </div>
  );
}
