'use client';

import { useTranslations } from 'next-intl';
import { CtaButton } from './CtaButton';

export function StickyCta() {
  const t = useTranslations('cta');
  return (
    <div className="md:hidden">
      <CtaButton variant="sticky">{t('playNow')}</CtaButton>
    </div>
  );
}
