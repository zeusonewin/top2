import { getLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata() {
  const locale = (await getLocale()) as 'ru' | 'en';
  const title = locale === 'ru' ? 'Ответственная игра' : 'Responsible Gaming';
  const description =
    locale === 'ru' ? 'Принципы ответственной игры и полезные ресурсы.' : 'Responsible gaming principles and resources.';
  return buildMetadata({ title, description, path: 'responsible-gaming', locale });
}

export default async function ResponsibleGamingPage() {
  const locale = await getLocale();

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-6">
        {locale === 'ru' ? 'Ответственная игра' : 'Responsible Gaming'}
      </h1>
      <div className="prose-dark prose max-w-none text-surface-muted">
        <p>
          {locale === 'ru'
            ? 'Мы поддерживаем принципы ответственной игры. Азартные игры предназначены для развлечения и не должны использоваться как способ заработка или решения финансовых проблем. Играйте только на те суммы, которые можете позволить себе потерять. Если вы чувствуете, что теряете контроль, обратитесь за помощью к специализированным организациям (например, GamCare, BeGambleAware, GA).'
            : 'We support responsible gaming. Gambling is for entertainment and should not be used as a way to make money or solve financial problems. Only gamble what you can afford to lose. If you feel you are losing control, seek help from specialized organizations (e.g. GamCare, BeGambleAware, GA).'}
        </p>
      </div>
    </article>
  );
}
