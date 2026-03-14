import { getTranslations } from 'next-intl/server';
import { CtaButton } from '@/components/cta/CtaButton';

export async function SlotPreviewBlock() {
  const t = await getTranslations('home');
  const tCta = await getTranslations('cta');

  return (
    <section className="py-20" aria-label="Slot preview">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          {t('slotPreviewTitle')}
        </h2>
        <div className="rounded-xl border border-slate-600 bg-slate-800/40 overflow-hidden">
          <div className="aspect-[2/1] min-h-[200px] bg-slate-800 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center">
              <span className="text-3xl">⚡</span>
            </div>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-300 text-sm">
              Pragmatic Play · RTP 96.5% · 500x max
            </p>
            <CtaButton variant="primary" subid="slot_preview">
              {tCta('playNow')}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
