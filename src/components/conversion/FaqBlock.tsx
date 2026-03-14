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
    <section id={id} className="mt-12 border-t border-white/[0.08] pt-8" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="text-xl font-semibold text-white mb-4">
        {t('faqTitle')}
      </h2>
      <dl className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="rounded-2xl border border-white/[0.08] backdrop-blur-xl bg-white/[0.04] p-4 md:p-5 transition-all duration-300 hover:border-violet-500/20">
            <dt className="font-semibold text-white">{item.question}</dt>
            <dd className="mt-1 text-sm text-slate-300 leading-relaxed">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
