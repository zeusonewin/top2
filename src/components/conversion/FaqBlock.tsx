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
    <section id={id} className="mt-12 border-t border-white/10 pt-8" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="text-xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent mb-4">
        {t('faqTitle')}
      </h2>
      <dl className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-white/10 backdrop-blur-[12px] bg-white/[0.05] p-4">
            <dt className="font-semibold text-white">{item.question}</dt>
            <dd className="mt-1 text-sm text-white/70">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
