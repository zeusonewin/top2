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
  const displayItems = items.slice(0, 4);

  return (
    <section id="faq" className="py-20 scroll-mt-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="faq-heading" className="text-2xl font-bold text-[#f4f4f5] mb-8">
          {title}
        </h2>
        <dl className="space-y-3">
          {displayItems.map((item, i) => {
            const isOpen = openId === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-[#f4f4f5] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    {item.question}
                    <span
                      className={`ml-4 shrink-0 text-[#a1a1aa] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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
                  className={`border-t border-zinc-800 ${isOpen ? 'block' : 'hidden'}`}
                >
                  <p className="px-6 py-4 text-[#a1a1aa] text-sm">
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
