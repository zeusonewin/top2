import Link from 'next/link';

interface SectionCardProps {
  id?: string;
  title: string;
  description: string;
  href: string;
  /** Optional short label for link, e.g. "Read guide" */
  linkLabel: string;
}

export function SectionCard({ id, title, description, href, linkLabel }: SectionCardProps) {
  return (
    <article
      id={id}
      className={`group relative rounded-2xl border border-white/10 backdrop-blur-[12px] bg-white/[0.07] p-6 md:p-8 transition-all duration-300 hover:border-cta/30 hover:bg-white/[0.1] hover:shadow-glass-gold hover:scale-[1.02] ${id ? 'scroll-mt-24' : ''}`}
    >
      <h2 className="text-xl font-bold text-white md:text-2xl mb-3 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-white/70 text-sm md:text-base leading-relaxed mb-5">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-cta hover:text-amber-200 font-bold text-sm transition-all group-hover:gap-3 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]"
        prefetch
      >
        {linkLabel}
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
