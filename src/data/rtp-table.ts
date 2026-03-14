/**
 * RTP and slot specs for Gates of Olympus.
 * Used in RTP article and for topical authority.
 */

export interface RtpTableRow {
  parameter: string;
  value: string;
}

const RTP_TABLE_RU: RtpTableRow[] = [
  { parameter: 'RTP', value: '96,5%' },
  { parameter: 'Волатильность', value: 'Высокая' },
  { parameter: 'Макс. множитель', value: '500x' },
  { parameter: 'Линии выплат', value: 'Кластеры (Pay Anywhere)' },
  { parameter: 'Размер сетки', value: '6×5' },
  { parameter: 'Бонус', value: '15 бесплатных спинов (4+ скаттера)' },
  { parameter: 'Провайдер', value: 'Pragmatic Play' },
  { parameter: 'Мин. ставка', value: 'Зависит от казино' },
  { parameter: 'Макс. ставка', value: 'Зависит от казино' },
];

const RTP_TABLE_EN: RtpTableRow[] = [
  { parameter: 'RTP', value: '96.5%' },
  { parameter: 'Volatility', value: 'High' },
  { parameter: 'Max multiplier', value: '500x' },
  { parameter: 'Paylines', value: 'Clusters (Pay Anywhere)' },
  { parameter: 'Grid', value: '6×5' },
  { parameter: 'Bonus', value: '15 free spins (4+ scatters)' },
  { parameter: 'Provider', value: 'Pragmatic Play' },
  { parameter: 'Min bet', value: 'Depends on casino' },
  { parameter: 'Max bet', value: 'Depends on casino' },
];

export function getRtpTableRows(locale: 'ru' | 'en'): RtpTableRow[] {
  return locale === 'ru' ? RTP_TABLE_RU : RTP_TABLE_EN;
}

export const RTP_TABLE_CAPTION_RU = 'Основные параметры Gates of Olympus';
export const RTP_TABLE_CAPTION_EN = 'Gates of Olympus key parameters';
