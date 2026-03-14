import { getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata() {
  const locale = (await getLocale()) as 'ru' | 'en';
  const title = locale === 'ru' ? 'Дисклеймер' : 'Disclaimer';
  const description =
    locale === 'ru' ? 'Правовая информация и ограничение ответственности.' : 'Legal information and limitation of liability.';
  return buildMetadata({ title, description, path: 'disclaimer', locale });
}

export default async function DisclaimerPage() {
  const locale = await getLocale();

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-6">
        {locale === 'ru' ? 'Дисклеймер' : 'Disclaimer'}
      </h1>
      <div className="prose-dark prose max-w-none text-surface-muted">
        <p>
          {locale === 'ru'
            ? 'Сайт носит исключительно информационный характер. Мы не являемся оператором азартных игр и не принимаем ставки. Материалы о слоте Gates of Olympus и других продуктах предназначены для ознакомления. Игра в казино может быть запрещена в вашей юрисдикции; ответственность за соблюдение местных законов несёт пользователь.'
            : 'This site is for informational purposes only. We are not a gambling operator and do not accept bets. Materials about Gates of Olympus and other products are for reference. Gambling may be illegal in your jurisdiction; the user is responsible for complying with local laws.'}
        </p>
        <p>
          {locale === 'ru'
            ? 'Ссылки на партнёрские сайты могут приносить нам комиссию. Это не влияет на содержание статей. Рекомендуем играть ответственно и только совершеннолетним.'
            : 'Links to partner sites may earn us a commission. This does not affect the content of our articles. We recommend gambling responsibly and only if you are of legal age.'}
        </p>
      </div>
    </article>
  );
}
