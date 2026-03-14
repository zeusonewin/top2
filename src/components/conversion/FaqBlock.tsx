import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';

interface FaqItem {
  question: string;
  answer: ReactNode;
}

interface FaqBlockProps {
  items: FaqItem[];
  id?: string;
}

export async function FaqBlock({ items, id = 'faq' }: FaqBlockProps) {
  const t = await getTranslations('common');
  return (
    <section id={id} className="mt-12 border-t border-surface-border pt-8" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="text-xl font-semibold text-white mb-4">
        {t('faqTitle')}
      </h2>
      <dl className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="rounded-lg border border-surface-border bg-surface-elevated/50 p-4">
            <dt className="font-medium text-white">{item.question}</dt>
            <dd className="mt-1 text-sm text-surface-muted">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
