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
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#f4f4f5] md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Demo slot player — main visual of first screen */}
        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">
          <div className="aspect-[2/1] min-h-[280px] bg-zinc-800/50 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center" aria-hidden>
              <span className="text-4xl">⚡</span>
            </div>
          </div>
        </div>

        {/* Primary CTA — large button */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <CtaButton variant="primary" className="!px-10 !py-4 !text-lg w-full sm:w-auto" subid="hero_primary">
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
