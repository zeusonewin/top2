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
      className={`group relative rounded-2xl border border-surface-border bg-surface-elevated/80 p-6 md:p-8 transition-all duration-300 hover:border-cta/30 hover:shadow-card ${id ? 'scroll-mt-24' : ''}`}
    >
      <h2 className="text-xl font-bold text-white md:text-2xl mb-3">
        {title}
      </h2>
      <p className="text-surface-muted text-sm md:text-base leading-relaxed mb-5">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-cta hover:text-cta-hover font-semibold text-sm transition-colors group-hover:gap-3"
        prefetch
      >
        {linkLabel}
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
