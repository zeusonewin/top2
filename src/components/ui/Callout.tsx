import type { ReactNode } from 'react';

type CalloutVariant = 'info' | 'tip' | 'warning' | 'default';

interface CalloutProps {
  title?: string;
  children: ReactNode;
  variant?: CalloutVariant;
  className?: string;
}

const variantStyles: Record<CalloutVariant, string> = {
  info: 'border-sky-500/50 bg-sky-500/5',
  tip: 'border-cta/50 bg-cta/5',
  warning: 'border-amber-500/50 bg-amber-500/5',
  default: 'border-surface-border bg-surface-elevated/80',
};

export function Callout({ title, children, variant = 'default', className = '' }: CalloutProps) {
  return (
    <aside
      className={`callout ${variantStyles[variant]} ${className}`}
      role="note"
    >
      {title && (
        <p className="text-sm font-semibold text-white mb-2">{title}</p>
      )}
      <div className="text-sm text-surface-muted [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}
