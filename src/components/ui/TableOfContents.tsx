import { getTranslations } from 'next-intl/server';

export interface TocItem {
  id: string;
  label: string;
  level?: number; // 2 = h2, 3 = h3
}

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export async function TableOfContents({ items, className = '' }: TableOfContentsProps) {
  const t = await getTranslations('common');
  if (!items.length) return null;

  return (
    <nav
      className={`rounded-2xl border border-white/[0.08] backdrop-blur-xl bg-white/[0.04] p-5 ${className}`}
      aria-label={t('tableOfContents')}
    >
      <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
        {t('tableOfContents')}
      </h2>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="toc-link"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
