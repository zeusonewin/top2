import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { SITE_CONFIG } from '@/config/site';

interface ExpertiseBlockProps {
  /** Optional custom text; otherwise uses default about expertise */
  text?: string;
}

/**
 * E-E-A-T: expertise and author attribution.
 */
export async function ExpertiseBlock({ text }: ExpertiseBlockProps) {
  const locale = await getLocale();
  const defaultText =
    locale === 'ru'
      ? 'Материал подготовлен командой с опытом анализа слотов и казино. Мы опираемся на официальные данные провайдеров и регулярно обновляем статьи.'
      : 'Content is written by a team with experience in slot and casino analysis. We use official provider data and update articles regularly.';

  return (
    <aside className="my-8 rounded-xl border border-surface-border bg-surface-elevated/80 p-5">
      <p className="text-sm text-surface-muted">{text ?? defaultText}</p>
      <p className="mt-2 text-sm">
        <Link
          href={`/${locale}/author`}
          className="font-medium text-cta hover:text-cta-hover transition-colors"
          prefetch
        >
          {locale === 'ru' ? 'Об авторе и экспертизе' : 'About the author & expertise'} →
        </Link>
      </p>
    </aside>
  );
}
