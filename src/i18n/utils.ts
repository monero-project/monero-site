import { defaultLocale, locales } from "@/i18n/config";
import { getLocale } from "astro-i18n-aut";
import { createInstance } from 'i18next';
import Backend from 'i18next-fs-backend';

export const localizeHref = (locale: string, href: string): string => {
  if (href.startsWith('http')) return href;
  const cleanHref = href.replace(/\/+$/, '');
  const localized = locale === defaultLocale ? cleanHref : `/${locale}${cleanHref}`;
  return `${localized}/`;
};

const getFlagEmoji = (countryCode: string): string => {
  return countryCode
    .toUpperCase()
    .split('')
    .map(char => String.fromCodePoint(char.charCodeAt(0) + 127397))
    .join('');
};

export const getLocaleInfo = (locale: string): { name: string; emoji: string } | null => {
  const fullLocale = (locales as Record<string, string>)[locale];
  if (!fullLocale) return null;
  const countryCode = fullLocale.split('-')[1];
  if (!countryCode) return null;
  const displayNames = new Intl.DisplayNames([locale], { type: 'language' });
  const name = displayNames.of(locale);
  if (!name) return null;
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  const emoji = getFlagEmoji(countryCode);
  return { name: capitalizedName, emoji };
};

export const createTInstance = (locale: string) => {
  const newInstance = createInstance();

  return newInstance.use(Backend).init({
    lng: locale,
    fallbackLng: defaultLocale,
    supportedLngs: Object.keys(locales),
    ns: ['common', 'translation'],
    defaultNS: 'translation',
    backend: {
      loadPath: './src/i18n/locales/{{lng}}/{{ns}}.json',
    },
  });
}
export { getLocale}