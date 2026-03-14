import { getTranslations } from 'next-intl/server';
import { CtaButton } from '@/components/cta/CtaButton';

export async function SlotPreviewBlock() {
  const t = await getTranslations('home');
  const tCta = await getTranslations('cta');

  return (
    <section className="py-20" aria-label="Slot preview">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 overflow-hidden">
          <div className="aspect-[2/1] min-h-[200px] bg-zinc-800/50 rounded-lg flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center">
              <span className="text-3xl">⚡</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#a1a1aa] text-sm">
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
