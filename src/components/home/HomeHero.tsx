import Link from 'next/link';
import { getLocale } from 'next-intl/server';

interface HomeHeroProps {
  title: string;
  subtitle: string;
  primaryCta: React.ReactNode;
  secondaryCta: React.ReactNode;
  trustSlot: React.ReactNode;
  guideHref: string;
  guideLabel: string;
}

export async function HomeHero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  trustSlot,
  guideHref,
  guideLabel,
}: HomeHeroProps) {
  const locale = await getLocale();

  return (
    <section
      className="relative min-h-[85vh] overflow-hidden border-b border-surface-border flex flex-col justify-center"
      aria-label="Hero"
    >
      {/* Background #0f172a + gradient + radial golden glow (cta/12) */}
      <div className="absolute inset-0 bg-[#0f172a]" />
      <div className="absolute inset-0 bg-gradient-to-b from-cta/5 via-transparent to-[#0f172a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(251,191,36,0.12),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cta/30 to-transparent" />

      <div className="relative mx-auto w-full max-w-5xl px-4 pt-20 pb-24 md:pt-28 md:pb-32 flex flex-col items-center text-center">
        {/* Кликабельный заголовок: градиент + лёгкое свечение */}
        <h1 className="animate-fade-in-up text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl bg-gradient-to-r from-cta via-amber-200 to-cta bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl lg:text-2xl leading-relaxed mx-auto font-medium">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5 animate-fade-in-up">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
            {primaryCta}
            {secondaryCta}
          </div>
        </div>

        {trustSlot && (
          <div className="mt-8 animate-fade-in-up w-full flex justify-center">
            {trustSlot}
          </div>
        )}

        <p className="mt-10">
          <Link
            href={guideHref}
            className="inline-flex items-center gap-2 text-cta hover:text-amber-200 font-semibold transition-all text-base hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]"
            prefetch
          >
            {guideLabel}
            <span aria-hidden className="text-lg">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
