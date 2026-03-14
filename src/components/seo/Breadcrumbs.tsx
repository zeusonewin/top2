import Link from 'next/link';
import { getLocale } from 'next-intl/server';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export async function Breadcrumbs({ items }: BreadcrumbsProps) {
  const locale = await getLocale();

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-surface-muted mb-6">
      <ol className="flex flex-wrap items-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, i) => (
          <li
            key={i}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-1"
          >
            {item.href ? (
              <Link href={item.href} itemProp="item" className="hover:text-cta transition-colors" prefetch>
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name" className="text-white font-medium">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
            {i < items.length - 1 && <span className="px-1">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
