import { getTranslations, getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import Link from 'next/link';

export async function generateMetadata() {
  const locale = (await getLocale()) as 'ru' | 'en';
  const title = locale === 'ru' ? 'О проекте' : 'About';
  const description =
    locale === 'ru'
      ? 'Информационный проект о слоте Gates of Olympus. Экспертные гайды и обзоры.'
      : 'Informational project about Gates of Olympus slot. Expert guides and reviews.';
  return buildMetadata({ title, description, path: 'about', locale });
}

export default async function AboutPage() {
  const locale = await getLocale();
  const t = await getTranslations('nav');
  const base = `/${locale}`;

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-6">
        {locale === 'ru' ? 'О проекте' : 'About'}
      </h1>
      <div className="prose-dark prose max-w-none text-surface-muted">
        <p>
          {locale === 'ru'
            ? 'Этот сайт — информационный проект, посвящённый слоту Gates of Olympus от Pragmatic Play. Мы публикуем экспертные гайды, разбор RTP и волатильности, стратегии и советы по игре. Цель — помочь игрокам разобраться в механике слота и принимать осознанные решения.'
            : 'This site is an informational project about the Gates of Olympus slot by Pragmatic Play. We publish expert guides, RTP and volatility breakdowns, strategies and gameplay tips. Our goal is to help players understand the slot mechanics and make informed decisions.'}
        </p>
        <p>
          <Link href={`${base}/author`} className="text-violet-400 hover:text-white transition-colors" prefetch>
            {locale === 'ru' ? 'Об авторе' : 'About the author'} →
          </Link>
        </p>
      </div>
    </article>
  );
}
