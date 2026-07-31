import fs from "node:fs";
import path from "node:path";
import { getLocale } from "astro-i18n-aut";
import { createInstance, type TFunction } from "i18next";
import Backend from "i18next-fs-backend";
import type { CollectionEntry, CollectionKey } from "astro:content";
import { getCollection } from "astro:content";

import { defaultLocale, locales, rtlLocales } from "@/i18n/config";
import { localeKeys, localePrefixRe } from "@/i18n/keys";
import { memo } from "@/utils/memo";

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

  const urlPath = (href.startsWith("/") ? href : `/${href}`).replace(
    localePrefixRe,
    "",
  );
  const prefix = locale === defaultLocale ? "" : `/${locale}`;

  return `${prefix}${urlPath}${/[?#]/.test(urlPath) ? "" : "/"}`.replace(
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

export const createTInstance = memo(
  (locale: string): Promise<TFunction> =>
    createInstance()
      .use(Backend)
      .init({
        lng: locale,
        fallbackLng: defaultLocale,
        supportedLngs: localeKeys,
        ns: [...namespaces],
        defaultNS: false,
        backend: {
          loadPath: "./src/i18n/translations/{{lng}}/{{ns}}.json",
        },
      }) as Promise<TFunction>,
);
export { getLocale };

export const splitLocaleId = (id: string): { locale: string; slug: string } => {
  const i = id.indexOf("/");
  return i === -1
    ? { locale: id, slug: id }
    : { locale: id.slice(0, i), slug: id.slice(i + 1) };
};

const getCollectionMap = memo((name: CollectionKey) =>
  getCollection(name).then((entries) => new Map(entries.map((e) => [e.id, e]))),
) as <C extends CollectionKey>(
  name: C,
) => Promise<Map<string, CollectionEntry<C>>>;

export const applyLocale = async <C extends CollectionKey>(
  entries: CollectionEntry<C>[],
  name: C,
  locale: string,
): Promise<CollectionEntry<C>[]> => {
  if (locale === defaultLocale) return entries;
  const map = await getCollectionMap(name);
  return entries.map(
    (e) =>
      (map.get(`${locale}/${splitLocaleId(e.id).slug}`) as
        | CollectionEntry<C>
        | undefined) ?? e,
  );
};

export const getLocalizedCollection = async <C extends CollectionKey>(
  name: C,
  locale: string,
): Promise<CollectionEntry<C>[]> => {
  const map = await getCollectionMap(name);
  const defaults = [...map.values()].filter((e) =>
    e.id.startsWith(`${defaultLocale}/`),
  );
  return applyLocale(defaults, name, locale);
};

export const getLocalizedEntry = async <C extends CollectionKey>(
  name: C,
  locale: string,
  slug: string,
): Promise<CollectionEntry<C> | undefined> => {
  const map = await getCollectionMap(name);
  return map.get(`${locale}/${slug}`) ?? map.get(`${defaultLocale}/${slug}`);
};
