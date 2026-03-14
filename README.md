# Gates of Olympus — SEO Platform

Production-ready SEO-платформа уровня медиасайта для домена **https://olympus-slot.org**. Next.js 14 (App Router), TypeScript, TailwindCSS, MDX, i18n (RU/EN), SSG, Core Web Vitals, Vercel-ready.

## Стек

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **MDX** для контента (опционально подключается к статьям)
- **next-intl** — полная i18n (RU / EN)
- Статическая генерация (SSG) через `generateStaticParams` где применимо

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000). Middleware перенаправит на `/ru` или `/en`.

## Сборка

```bash
npm run build
npm start
```

## Структура

- `src/app/[locale]/` — локализованные страницы (главная, pillar, статьи, legal).
- `src/app/api/click/` — трекинг кликов с редиректом на партнёрскую ссылку (UTM + click_id).
- `src/components/` — CTA, layout, SEO (Breadcrumbs, RelatedPosts), conversion (TrustBlock, FaqBlock), content (QuickAnswer, RtpTable, ComparisonBlock, ExpertiseBlock).
- `src/config/` — site (olympus-slot.org), content (topic cluster, related).
- `src/data/` — keywords, article-content (Quick Answer, FAQ, lastUpdated), rtp-table.
- `src/lib/` — SEO (metadata, JSON-LD), partner URL, internal links.
- `src/content/` — MDX (опционально).

## SEO

- **Metadata:** динамические title/description, canonical, hreflang, OpenGraph, Twitter.
- **Schema:** Organization, WebPage, Article, BreadcrumbList, FAQPage.
- **Sitemap:** `src/app/sitemap.ts` — все локали и страницы.
- **Robots:** `src/app/robots.ts` — allow /, disallow /api/.
- **Внутренняя перелинковка:** конфиг в `content.ts`, блок Related posts, автоматические ссылки из pillar на статьи.

## Конверсия

- Все CTA ведут на `/api/click` (page, lang, device, subid) → редирект на партнёрскую ссылку с utm_source=seo, utm_campaign=gates_of_olympus, utm_medium=button, click_id и subid.
- Sticky-кнопка на мобильных (StickyCta).
- Trust-блоки, FAQ под CTA.

## Масштабирование

- **Новый слот:** добавить ID в `SLOT_IDS` и запись в `CONTENT_MAP`, создать папки `[locale]/(content)/<slot>/` и статьи.
- **Новый язык:** добавить локаль в `routing.locales` и `messages/<locale>.json`.
- **Новые статьи:** добавить slug в `ARTICLE_SLUGS` и в `CONTENT_MAP` для нужного слота.

**Домен по умолчанию:** https://olympus-slot.org (canonical, sitemap, OG, robots). План на 90 дней, линкбилдинг (Reddit, форумы, guest posts, niche edits, крауд-маркетинг), freshness — **SEO_GROWTH_PLAN.md**. Дополнительно: **SEO_STRATEGY.md**.

## Изображения и иконка сайта

- **Чтобы иконка (favicon) отображалась:** поместите файл **`olympus.png`** в папку **`public/`** в корне проекта. Итоговый путь: **`public/olympus.png`**. Тогда иконка будет доступна по адресу `/olympus.png` и подставится в favicon и Apple touch icon. Запросы к `/favicon.ico` перенаправляются на `/olympus.png`.
- Тот же файл используется для Open Graph и Twitter Cards на всех страницах.

## Переменные окружения

- `NEXT_PUBLIC_SITE_URL` — базовый URL (по умолчанию https://olympus-slot.org). Используется для canonical, sitemap, OG, structured data.

Партнёрская ссылка задаётся в `src/config/site.ts` (`partnerUrl`).
