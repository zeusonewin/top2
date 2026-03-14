import Link from 'next/link';
import { getLocale } from 'next-intl/server';

interface HeroProps {
  title: string;
  subtitle: string;
  /** Optional; if not set, no CTA block is rendered (caller adds it) */
  ctaSlot?: React.ReactNode;
  /** Optional link to pillar */
  guideHref?: string;
  guideLabel?: string;
}

export async function Hero({ title, subtitle, ctaSlot, guideHref, guideLabel }: HeroProps) {
  const locale = await getLocale();

  return (
    <section className="relative overflow-hidden border-b border-surface-border bg-gradient-to-b from-surface-elevated to-surface">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.08),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-4 pt-12 pb-16 md:pt-16 md:pb-20">
        <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-surface-muted md:text-xl">
          {subtitle}
        </p>
        {ctaSlot && (
          <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {ctaSlot}
          </div>
        )}
        {guideHref && guideLabel && (
          <p className="mt-6">
            <Link
              href={guideHref}
              className="text-cta hover:text-cta-hover font-medium transition-colors inline-flex items-center gap-1"
              prefetch
            >
              {guideLabel}
              <span aria-hidden>→</span>
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
