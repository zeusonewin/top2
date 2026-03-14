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
    <section id="faq" className="py-24 scroll-mt-24" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 id="faq-heading" className="text-2xl font-semibold text-white md:text-3xl">
          {title}
        </h2>
        <dl className="mt-10 space-y-3">
          {items.map((item, i) => {
            const isOpen = openId === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-violet-500/20"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-inset"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    {item.question}
                    <span
                      className={`ml-4 shrink-0 text-violet-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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
                  className={`border-t border-white/[0.08] ${isOpen ? 'block' : 'hidden'}`}
                >
                  <p className="px-6 py-5 text-slate-300 leading-relaxed text-sm md:text-base">
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
