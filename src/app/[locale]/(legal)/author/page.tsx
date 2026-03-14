import { getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { SITE_CONFIG } from '@/config/site';

export async function generateMetadata() {
  const locale = (await getLocale()) as 'ru' | 'en';
  const title = locale === 'ru' ? 'Автор' : 'Author';
  const description =
    locale === 'ru'
      ? 'Информация об авторе и экспертизе проекта Gates of Olympus Guide.'
      : 'Author and expertise behind Gates of Olympus Guide.';
  return buildMetadata({ title, description, path: 'author', locale });
}

export default async function AuthorPage() {
  const locale = await getLocale();

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-6">
        {locale === 'ru' ? 'Автор' : 'Author'}
      </h1>
      <div className="prose-dark prose max-w-none text-surface-muted">
        <p>
          {locale === 'ru'
            ? 'Контент на сайте готовит команда с опытом в анализе онлайн-слотов и казино. Мы опираемся на официальные данные провайдеров (RTP, волатильность), тестируем демо-режимы и собираем обратную связь от игроков. Даты статей обновляются при изменении информации.'
            : 'Content is produced by a team with experience in analyzing online slots and casinos. We use official provider data (RTP, volatility), test demo modes and gather player feedback. Article dates are updated when information changes.'}
        </p>
        <p>
          <strong>{locale === 'ru' ? 'Экспертиза' : 'Expertise'}:</strong>{' '}
          {SITE_CONFIG.author} — {locale === 'ru' ? 'анализ слотов, стратегии, обзоры.' : 'slot analysis, strategies, reviews.'}
        </p>
      </div>
    </article>
  );
}
