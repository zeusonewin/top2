import Link from 'next/link';

interface SectionCardProps {
  id?: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

export function SectionCard({ id, title, description, href, linkLabel }: SectionCardProps) {
  return (
    <article
      id={id}
      className={`group relative rounded-2xl border border-white/[0.08] backdrop-blur-xl bg-white/[0.04] p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-glass-glow hover:border-violet-500/20 ${id ? 'scroll-mt-24' : ''}`}
    >
      <h2 className="text-xl font-semibold text-white md:text-2xl mb-3">
        {title}
      </h2>
      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-violet-400 hover:text-white font-semibold text-sm transition-colors duration-300 group-hover:gap-3"
        prefetch
      >
        {linkLabel}
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
