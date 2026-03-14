'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title: string;
}

export function FaqAccordion({ items, title }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 border-t border-slate-700/50 scroll-mt-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="faq-heading" className="text-2xl font-bold text-white mb-8">
          {title}
        </h2>
        <dl className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openId === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-slate-600 bg-slate-800/40 overflow-hidden"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    {item.question}
                    <span
                      className={`ml-4 shrink-0 text-amber-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    >
                      ▼
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`border-t border-slate-600 ${isOpen ? 'block' : 'hidden'}`}
                >
                  <p className="px-6 py-4 text-slate-300 text-sm">
                    {item.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
