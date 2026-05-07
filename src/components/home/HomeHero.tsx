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
    <section className="relative overflow-hidden py-20" aria-label="Hero">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.2),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_40%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">⚡ SEO-optimized for 2026</span>
          <h1 className="mt-5 bg-gradient-to-r from-white via-emerald-200 to-sky-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Demo slot player — main visual of first screen */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 shadow-[0_0_120px_-45px_rgba(34,197,94,.7)] backdrop-blur">
          <div className="relative aspect-[2/1] min-h-[280px] bg-[linear-gradient(120deg,rgba(24,24,27,.9),rgba(15,23,42,.8))] flex items-center justify-center">
            <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-emerald-400/20 blur-2xl" aria-hidden />
            <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl" aria-hidden />
            <div className="w-24 h-24 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/20" aria-hidden>
              <span className="text-4xl">🏛️</span>
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
