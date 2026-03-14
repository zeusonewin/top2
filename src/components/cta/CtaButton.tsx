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
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 focus:ring-offset-surface';
  const variants = {
    primary:
      'bg-cta text-surface hover:bg-cta-hover text-black px-6 py-3.5 text-lg shadow-cta-glow hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-surface-elevated text-white border border-surface-border hover:border-cta/50 hover:text-cta px-6 py-3.5 text-lg',
    sticky:
      'fixed bottom-0 left-0 right-0 z-50 bg-cta text-black py-4 text-lg font-bold shadow-[0_-4px_24px_rgba(0,0,0,0.4)] md:hidden pb-safe',
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
