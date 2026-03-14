import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { buildMetadata, buildJsonLdWebPage, buildJsonLdOrganization, buildJsonLdFAQ } from '@/lib/seo';
import { HomeHero } from '@/components/home/HomeHero';
import { SectionCard } from '@/components/home/SectionCard';
import { HomeToC } from '@/components/home/HomeToC';
import { CtaButton } from '@/components/cta/CtaButton';
import { TrustBlock } from '@/components/conversion/TrustBlock';
import { RtpTable } from '@/components/content/RtpTable';
import { FaqBlock } from '@/components/conversion/FaqBlock';
import { SITE_CONFIG } from '@/config/site';
import { getRtpTableRows, RTP_TABLE_CAPTION_RU, RTP_TABLE_CAPTION_EN } from '@/data/rtp-table';
import { getHomeFaq } from '@/data/home-faq';

export async function generateMetadata() {
  const locale = (await getLocale()) as 'ru' | 'en';
  const t = await getTranslations('pillar');
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '',
    locale,
  });
}

export default async function HomePage() {
  const locale = await getLocale();
  const isRu = locale === 'ru';
  const t = await getTranslations('cta');
  const tHome = await getTranslations('home');
  const tNav = await getTranslations('nav');
  const base = `/${locale}`;
  const pillarHref = `${base}/gates-of-olympus`;

  const title = isRu
    ? 'Gates of Olympus — экспертный гайд 2026'
    : 'Gates of Olympus — Expert Guide 2026';
  const subtitle = isRu
    ? 'RTP 96.5%, множители до 500x, стратегия и бонусный раунд. Всё о слоте Pragmatic Play в одном месте.'
    : 'RTP 96.5%, multipliers up to 500x, strategy and bonus round. Everything about the Pragmatic Play slot in one place.';

  const canonical = `${SITE_CONFIG.url}/${locale}`;
  const webPageJsonLd = buildJsonLdWebPage({
    name: title,
    description: subtitle,
    url: canonical,
  });
  const orgJsonLd = buildJsonLdOrganization();
  const homeFaq = getHomeFaq(locale as 'ru' | 'en');
  const faqJsonLd = buildJsonLdFAQ(homeFaq);

  const sectionCards = [
    {
      id: 'rtp',
      title: tHome('sections.rtp'),
      description: isRu
        ? 'RTP 96.5%, волатильность и как это влияет на выплаты. Полный разбор математики слота.'
        : 'RTP 96.5%, volatility and how it affects payouts. Full slot math breakdown.',
      href: `${pillarHref}/rtp`,
    },
    {
      id: 'strategy',
      title: tHome('sections.strategy'),
      description: isRu
        ? 'Управление банкроллом, выбор ставок и тактика игры. Проверенные советы от экспертов.'
        : 'Bankroll management, bet sizing and gameplay tactics. Proven expert tips.',
      href: `${pillarHref}/strategy`,
    },
    {
      id: 'multipliers',
      title: tHome('sections.multipliers'),
      description: isRu
        ? 'Множители до 500x: механика тумблов, каскады и накопление в бонусном раунде.'
        : 'Multipliers up to 500x: tumble mechanics, cascades and accumulation in the bonus.',
      href: `${pillarHref}/multipliers`,
    },
    {
      id: 'demo',
      title: tHome('sections.demo'),
      description: isRu
        ? 'Демо-режим без регистрации. Практика и тестирование стратегий перед игрой на деньги.'
        : 'Demo mode without registration. Practice and test strategies before playing for real.',
      href: `${pillarHref}/demo`,
    },
    {
      id: 'faq',
      title: tHome('sections.faq'),
      description: isRu
        ? 'Ответы на частые вопросы: RTP, бонус, множители, демо и правила игры.'
        : 'Answers to common questions: RTP, bonus, multipliers, demo and game rules.',
      href: '#faq',
    },
    {
      id: 'bankroll',
      title: tHome('sections.bankroll'),
      description: isRu
        ? 'Как рассчитать банкролл, сколько ставить на спин и как не слить депозит.'
        : 'How to size your bankroll, bet per spin and avoid blowing your deposit.',
      href: `${pillarHref}/strategy`,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <HomeHero
        title={title}
        subtitle={subtitle}
        primaryCta={
          <CtaButton variant="primary" subid="hero_primary">
            {t('playNow')}
          </CtaButton>
        }
        secondaryCta={
          <CtaButton variant="secondary" subid="hero_secondary">
            {t('tryDemo')}
          </CtaButton>
        }
        trustSlot={<TrustBlock />}
        guideHref={pillarHref}
        guideLabel={tHome('readGuide')}
      />

      <div className="mx-auto max-w-5xl px-4 py-20 md:py-24">
        {/* Mobile ToC */}
        <div className="mb-10 lg:hidden">
          <HomeToC />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_240px] lg:gap-16">
          <div>
            {/* Quick Overview — стекло + премиум типографика */}
            <section id="quick-overview" className="scroll-mt-24">
              <div className="rounded-2xl border border-white/[0.08] backdrop-blur-xl bg-white/[0.04] p-6 md:p-8 shadow-glass">
                <h2 className="text-2xl font-semibold text-white mb-4 md:text-3xl">
                  {tHome('quickOverviewTitle')}
                </h2>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  {tHome('quickOverview')}
                </p>
                <p className="mt-4 text-slate-400 text-sm md:text-base">
                  {isRu ? 'Подробнее: ' : 'More: '}
                  <Link href={pillarHref} className="text-violet-400 hover:text-white font-semibold transition-colors" prefetch>{isRu ? 'полный гайд' : 'full guide'}</Link>
                  {' · '}
                  <Link href={`${pillarHref}/rtp`} className="text-violet-400 hover:text-white font-semibold transition-colors" prefetch>{tNav('rtp')}</Link>
                  {' · '}
                  <Link href={`${pillarHref}/strategy`} className="text-violet-400 hover:text-white font-semibold transition-colors" prefetch>{tNav('strategy')}</Link>
                  {' · '}
                  <Link href={`${pillarHref}/multipliers`} className="text-violet-400 hover:text-white font-semibold transition-colors" prefetch>{tNav('multipliers')}</Link>
                  {' · '}
                  <Link href={`${pillarHref}/demo`} className="text-violet-400 hover:text-white font-semibold transition-colors" prefetch>{tNav('demo')}</Link>
                </p>
                <Link
                  href={pillarHref}
                  className="mt-5 inline-flex items-center gap-2 text-violet-400 hover:text-white font-bold transition-all duration-300"
                  prefetch
                >
                  {tHome('readGuide')}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </section>

            {/* Section cards grid */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
              {sectionCards.map((card) => (
                <SectionCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  href={card.href}
                  linkLabel={tHome('readGuide')}
                />
              ))}
            </div>

            {/* Parameters table */}
            <section id="params" className="mt-20 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-white mb-6 md:text-3xl">
                {tHome('paramsTitle')}
              </h2>
              <RtpTable
                rows={getRtpTableRows(locale as 'ru' | 'en')}
                caption={isRu ? RTP_TABLE_CAPTION_RU : RTP_TABLE_CAPTION_EN}
              />
              <Link
                href={`${pillarHref}/rtp`}
                className="mt-4 inline-flex items-center gap-2 text-violet-400 hover:text-white font-semibold text-sm transition-colors"
                prefetch
              >
                {tNav('rtp')} →
              </Link>
            </section>

            {/* FAQ */}
            <section id="faq" className="mt-20 scroll-mt-24">
              <FaqBlock
                items={homeFaq.map((f) => ({ question: f.question, answer: f.answer }))}
                id="faq"
              />
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <HomeToC />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
