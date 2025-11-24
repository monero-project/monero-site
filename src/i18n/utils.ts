import { getLocale } from "astro-i18n-aut";
import { createInstance } from "i18next";
import Backend from "i18next-fs-backend";

import { defaultLocale, locales, rtlLocales } from "@/i18n/config";

export const localizeHref = (locale: string, href: string): string => {
  if (href.startsWith("http")) return href;
  const cleanHref = href.replace(/\/+$/, "");
  const localized =
    locale === defaultLocale ? cleanHref : `/${locale}${cleanHref}`;
  return `${localized}/`;
};

export const localizeNumber = (
  number: number,
  locale: string,
  minimumIntegerDigits: number = 1,
): string => {
  // We map the short locale (ex. "ar") to the full locale string ("ar-SA") from config.ts
  const localeString =
    (locales as Record<string, string>)[locale] || locales[defaultLocale];
  return number.toLocaleString(localeString, {
    minimumIntegerDigits,
    useGrouping: false,
  });
};

export const getLocaleName = (locale: string): { name: string } | null => {
  const displayNames = new Intl.DisplayNames([locale], { type: "language" });
  const name = displayNames.of(locale);
  if (!name) return null;
  return { name: name.charAt(0).toUpperCase() + name.slice(1) };
};

export const getDirection = (locale: string): "ltr" | "rtl" => {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
};

export const createTInstance = (
  locale: string,
  namespace?: string | string[],
) => {
  const newInstance = createInstance();

  const namespaces = namespace
    ? Array.isArray(namespace)
      ? namespace
      : [namespace]
    : ["common", "translation"];

  const defaultNamespace = Array.isArray(namespace)
    ? namespace[0]
    : namespace || "translation";

  return newInstance.use(Backend).init({
    lng: locale,
    fallbackLng: defaultLocale,
    supportedLngs: Object.keys(locales),
    ns: namespaces,
    defaultNS: defaultNamespace,
    backend: {
      loadPath: "./src/i18n/translations/{{lng}}/{{ns}}.json",
    },
  });
};
export { getLocale };
