import { CtaButton } from '@/components/cta/CtaButton';

interface HomeHeroProps {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}

export function HomeHero({
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
}: HomeHeroProps) {
  return (
    <section className="border-b border-slate-700/50 bg-[#0f172a]" aria-label="Hero">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CtaButton variant="primary" subid="hero_primary">
            {primaryCtaLabel}
          </CtaButton>
          <CtaButton variant="secondary" subid="hero_secondary">
            {secondaryCtaLabel}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
