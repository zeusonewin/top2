import { SITE_CONFIG } from '@/config/site';

export interface ClickParams {
  subid?: string;
  clickId?: string;
  page?: string;
  lang?: string;
  device?: string;
}

export function buildPartnerUrl(params: ClickParams = {}): string {
  const url = new URL(SITE_CONFIG.partnerUrl);
  url.searchParams.set('utm_source', SITE_CONFIG.utm.source);
  url.searchParams.set('utm_campaign', SITE_CONFIG.utm.campaign);
  url.searchParams.set('utm_medium', SITE_CONFIG.utm.medium);
  if (params.subid) url.searchParams.set('subid', params.subid);
  if (params.clickId) url.searchParams.set('click_id', params.clickId);
  return url.toString();
}

export function getClickRedirectUrl(clickId: string, subid?: string): string {
  return buildPartnerUrl({ clickId, subid: subid ?? 'seo_button' });
}
