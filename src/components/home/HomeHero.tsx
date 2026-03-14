import Link from 'next/link';
import { CtaButton } from '@/components/cta/CtaButton';
import { TrustBlock } from '@/components/conversion/TrustBlock';

interface HomeHeroProps {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  guideHref: string;
  guideLabel: string;
}

export function HomeHero({
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  guideHref,
  guideLabel,
}: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08]" aria-label="Hero">
      <div className="absolute inset-0 bg-[#0B0B0F]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(168,85,247,0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(168,85,247,0.08),transparent_40%)]" />

      <div className="container mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl xl:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300 leading-relaxed md:text-xl">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-4">
              <CtaButton variant="primary" subid="hero_primary">
                {primaryCtaLabel}
              </CtaButton>
              <CtaButton variant="secondary" subid="hero_secondary">
                {secondaryCtaLabel}
              </CtaButton>
            </div>
            <div className="mt-8">
              <TrustBlock />
            </div>
            <p className="mt-8">
              <Link
                href={guideHref}
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium transition-colors text-sm"
                prefetch
              >
                {guideLabel}
                <span aria-hidden>→</span>
              </Link>
            </p>
          </div>
          <div className="relative flex items-center justify-center">
            <div
              className="aspect-[4/3] w-full max-w-md rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl flex items-center justify-center"
              aria-hidden
            >
              <div className="h-24 w-24 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                <span className="text-4xl opacity-60">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
