import { getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata() {
  const locale = (await getLocale()) as 'ru' | 'en';
  const title = locale === 'ru' ? 'Условия использования' : 'Terms of Use';
  const description =
    locale === 'ru' ? 'Условия использования сайта.' : 'Terms of use of the site.';
  return buildMetadata({ title, description, path: 'terms', locale });
}

export default async function TermsPage() {
  const locale = await getLocale();

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-6">
        {locale === 'ru' ? 'Условия использования' : 'Terms of Use'}
      </h1>
      <div className="prose-dark prose max-w-none text-surface-muted">
        <p>
          {locale === 'ru'
            ? 'Использование сайта означает согласие с этими условиями. Материалы предоставляются «как есть». Мы не гарантируем точность данных о RTP и бонусах у операторов — актуальную информацию уточняйте на сайтах казино. Ссылки на внешние сайты не означают одобрения их услуг.'
            : 'By using the site you agree to these terms. Content is provided "as is". We do not guarantee the accuracy of RTP or bonus data at operators — check current information on casino sites. Links to external sites do not constitute endorsement of their services.'}
        </p>
      </div>
    </article>
  );
}
