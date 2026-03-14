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
    <section className="py-20" aria-label="Hero">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#f4f4f5] md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-[#a1a1aa]">
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
