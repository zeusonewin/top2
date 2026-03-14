import type { ReactNode } from 'react';

interface QuickAnswerProps {
  children: ReactNode;
  /** Optional heading for snippet targeting */
  heading?: string;
}

/**
 * Quick Answer / Featured Snippet block at the start of articles.
 * Optimized for Google 2026 snippet extraction.
 */
export function QuickAnswer({ children, heading }: QuickAnswerProps) {
  return (
    <aside
      className="my-6 rounded-2xl border border-violet-500/20 bg-violet-500/5 backdrop-blur-xl p-5 md:p-6"
      aria-label={heading ?? 'Quick answer'}
    >
      {heading && (
        <h2 className="mb-3 text-lg font-semibold text-white md:text-xl">
          {heading}
        </h2>
      )}
      <div className="text-slate-300 leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}
