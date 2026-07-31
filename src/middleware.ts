import { defineMiddleware } from "astro:middleware";
import { HTMLRewriter } from "htmlrewriter";

import {
  createTInstance,
  getDirection,
  getLocale,
  localizeDateString,
  localizeHref,
  localizeNumber,
} from "@/i18n/utils";
import { defaultLocale } from "@/i18n/config";
import { localePrefixRe } from "@/i18n/keys";
import { createSafeMarkdown } from "./utils/safeMarkdown";
import { warmMoneropedia } from "@/utils/moneropedia";

const fileExtRe = /\.[a-z0-9]{2,5}(\/|$)/i;

const shouldSkip = (p: string): boolean =>
  !p.startsWith("/") ||
  p.startsWith("//") ||
  p.startsWith("/_astro/") ||
  localePrefixRe.test(p) ||
  fileExtRe.test(p);

const localePrefixRewriter = (prefix: string) => {
  const prefixAttr = (attr: "href" | "src") => ({
    element(el: {
      getAttribute(n: string): string | null;
      setAttribute(n: string, v: string): void;
    }) {
      const v = el.getAttribute(attr);
      if (!v || shouldSkip(v)) return;
      el.setAttribute(attr, prefix + v);
    },
  });
  const href = prefixAttr("href");
  const src = prefixAttr("src");
  return new HTMLRewriter()
    .on("main a[href]", href)
    .on("main area[href]", href)
    .on("main img[src]", src)
    .on("main source[src]", src)
    .on("main video[src]", src)
    .on("main audio[src]", src)
    .on("main iframe[src]", src);
};

export const onRequest = defineMiddleware(async (context, next) => {
  const locale = getLocale(context.url);
  const t = await createTInstance(locale);
  const dir = getDirection(locale);

  await warmMoneropedia(locale);

  context.locals.t = t;
  context.locals.locale = locale;
  context.locals.dir = dir;
  context.locals.localizeHref = (href: string) => localizeHref(locale, href);
  context.locals.localizeNumber = (
    number: number,
    minimumIntegerDigits?: number,
  ) => localizeNumber(locale, number, minimumIntegerDigits);
  context.locals.localizeDateString = (
    date: string | undefined,
    options?: Intl.DateTimeFormatOptions,
  ) => localizeDateString(date, locale, options);
  context.locals.safeMarkdown = createSafeMarkdown(locale);

  const response = await next();

  if (locale === defaultLocale) return response;
  if (!response.headers.get("content-type")?.includes("text/html")) {
    return response;
  }
  if (!response.body) return response;

  const transformed = localePrefixRewriter(`/${locale}`).transform(response);
  transformed.headers.delete("content-encoding");
  return transformed;
});
