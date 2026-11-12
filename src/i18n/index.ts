export const locales = ['pt-br', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt-br';

export const htmlLang: Record<Locale, 'pt-BR' | 'en'> = { 'pt-br': 'pt-BR', en: 'en' };

type ContentKey = 'pt' | 'en';
const contentKeys: Record<Locale, ContentKey> = { 'pt-br': 'pt', en: 'en' };

export function contentKey(locale: Locale): ContentKey {
  return contentKeys[locale];
}

export function localize<T>(value: Record<ContentKey, T>, locale: Locale): T {
  return value[contentKey(locale)];
}

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export const homePath: Record<Locale, string> = { 'pt-br': '/', en: '/en/' };

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'pt-br' : 'en';
}
