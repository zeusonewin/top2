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
    <section className="my-8 rounded-xl border border-surface-border bg-surface-elevated/80 p-5 md:p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <div className="prose-dark prose prose-sm max-w-none text-surface-muted">{children}</div>
    </section>
  );
}
