import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { RtpTable } from '@/components/content/RtpTable';
import { getRtpTableRows, RTP_TABLE_CAPTION_RU, RTP_TABLE_CAPTION_EN } from '@/data/rtp-table';

interface RtpSectionProps {
  locale: 'ru' | 'en';
  pillarHref: string;
}

export async function RtpSection({ locale, pillarHref }: RtpSectionProps) {
  const t = await getTranslations('home');
  const tNav = await getTranslations('nav');
  const rows = getRtpTableRows(locale);
  const caption = locale === 'ru' ? RTP_TABLE_CAPTION_RU : RTP_TABLE_CAPTION_EN;

  return (
    <section id="params" className="py-24 scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          {t('paramsTitle')}
        </h2>
        <div className="mx-auto mt-8 max-w-3xl">
          <RtpTable rows={rows} caption={caption} />
        </div>
        <Link
          href={`${pillarHref}/rtp`}
          className="mt-6 inline-flex items-center gap-2 text-violet-400 hover:text-white font-semibold text-sm transition-colors"
          prefetch
        >
          {tNav('rtp')} →
        </Link>
      </div>
    </section>
  );
}
