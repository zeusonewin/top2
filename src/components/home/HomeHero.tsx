import Link from 'next/link';

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
  return (
    <section
      className="relative min-h-[90vh] overflow-hidden flex flex-col justify-center"
      aria-label="Hero"
    >
      {/* Background: almost black + radial violet glow */}
      <div className="absolute inset-0 bg-[#0B0B0F]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.08]" />

      <div className="relative mx-auto w-full max-w-5xl px-4 pt-24 pb-28 md:pt-32 md:pb-36 flex flex-col items-center text-center">
        <h1 className="animate-fade-in-up text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-slate-300 md:text-xl lg:text-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5 animate-fade-in-up">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
            {primaryCta}
            {secondaryCta}
          </div>
        </div>

        {trustSlot && (
          <div className="mt-10 animate-fade-in-up w-full flex justify-center">
            {trustSlot}
          </div>
        )}

        <p className="mt-12">
          <Link
            href={guideHref}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium transition-colors text-base"
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
