import fs from "node:fs";
import path from "node:path";
import { getLocale } from "astro-i18n-aut";
import { createInstance, type TFunction } from "i18next";
import Backend from "i18next-fs-backend";

import { defaultLocale, locales, rtlLocales } from "@/i18n/config";

const translationsDir = path.join(
  process.cwd(),
  `src/i18n/translations/${defaultLocale}`,
);
const namespaces = fs
  .readdirSync(translationsDir)
  .filter((file) => file.endsWith(".json"))
  .map((file) => file.replace(".json", ""));

export const localizeHref = (locale: string, href: string): string => {
  if (href.startsWith("http")) return href;

  const localeRegex = new RegExp(
    `^/(${Object.keys(locales).join("|")})(?=/|$)`,
  );

  const urlPath = (href.startsWith("/") ? href : `/${href}`).replace(
    localeRegex,
    "",
  );
  const prefix = locale === defaultLocale ? "" : `/${locale}`;

  return `${prefix}${urlPath}${urlPath.includes("#") ? "" : "/"}`.replace(
    /\/+/g,
    "/",
  );
};

export const localizeNumber = (
  locale: string,
  number: number,
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

export const localizeDateString = (
  date: string | undefined,
  locale: string,
  options?: Intl.DateTimeFormatOptions,
): string | undefined => {
  if (!date) return undefined;
  const localeString =
    (locales as Record<string, string>)[locale] || locales[defaultLocale];
  return new Date(date).toLocaleDateString(localeString, options);
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

export function createTInstance(locale: string): Promise<TFunction> {
  const newInstance = createInstance();

  return newInstance.use(Backend).init({
    lng: locale,
    fallbackLng: defaultLocale,
    supportedLngs: Object.keys(locales),
    ns: [...namespaces],
    defaultNS: false,
    backend: {
      loadPath: "./src/i18n/translations/{{lng}}/{{ns}}.json",
    },
  }) as Promise<TFunction>;
}
export { getLocale };
