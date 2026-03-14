import Link from 'next/link';
import { getLocale } from 'next-intl/server';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaSlot?: React.ReactNode;
  guideHref?: string;
  guideLabel?: string;
}

export async function Hero({ title, subtitle, ctaSlot, guideHref, guideLabel }: HeroProps) {
  const locale = await getLocale();

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#0B0B0F]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 pt-16 pb-20 md:pt-20 md:pb-24">
        <h1 className="animate-fade-in-up text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300 md:text-xl leading-relaxed">
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
              className="text-violet-400 hover:text-white font-medium transition-colors inline-flex items-center gap-1"
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
