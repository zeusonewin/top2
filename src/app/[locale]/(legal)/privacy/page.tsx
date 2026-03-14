import { getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata() {
  const locale = (await getLocale()) as 'ru' | 'en';
  const title = locale === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy';
  const description =
    locale === 'ru' ? 'Как мы обрабатываем данные.' : 'How we process data.';
  return buildMetadata({ title, description, path: 'privacy', locale });
}

export default async function PrivacyPage() {
  const locale = await getLocale();

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-6">
        {locale === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy'}
      </h1>
      <div className="prose-dark prose max-w-none text-surface-muted">
        <p>
          {locale === 'ru'
            ? 'При посещении сайта мы можем собирать технические данные (IP, тип устройства, страницы просмотра) для аналитики и улучшения сервиса. Переход по партнёрским ссылкам может передавать параметры (например, UTM) на сайт партнёра; обработка данных на их стороне регулируется их политикой конфиденциальности.'
            : 'When you visit the site we may collect technical data (IP, device type, pages viewed) for analytics and service improvement. Clicking partner links may pass parameters (e.g. UTM) to the partner site; data processing there is governed by their privacy policy.'}
        </p>
      </div>
    </article>
  );
}
