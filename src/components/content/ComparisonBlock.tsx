import type { ReactNode } from 'react';

interface ComparisonBlockProps {
  title: string;
  children: ReactNode;
}

/**
 * Comparison / vs block for topical authority.
 */
export function ComparisonBlock({ title, children }: ComparisonBlockProps) {
  return (
    <section className="my-8 rounded-2xl border border-white/[0.08] backdrop-blur-xl bg-white/[0.04] p-5 md:p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <div className="prose-dark prose prose-sm max-w-none text-slate-300">{children}</div>
    </section>
  );
}
