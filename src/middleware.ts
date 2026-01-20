import { defineMiddleware } from "astro:middleware";

import {
  createTInstance,
  getDirection,
  getLocale,
  localizeDateString,
  localizeHref as localize,
  localizeNumber,
} from "@/i18n/utils";
import { createSafeMarkdown } from "./utils/safeMarkdown";
import { initMoneropediaCache } from "@/utils/moneropedia";

export const onRequest = defineMiddleware(async (context, next) => {
  const locale = getLocale(context.url);
  const t = await createTInstance(locale);
  const dir = getDirection(locale);

  // Initialize moneropedia cache for this locale
  await initMoneropediaCache(locale);

  context.locals.t = t;
  context.locals.locale = locale;
  context.locals.dir = dir;
  context.locals.localizeHref = (href: string) => localize(locale, href);
  context.locals.localizeNumber = (
    number: number,
    minimumIntegerDigits?: number,
  ) => localizeNumber(locale, number, minimumIntegerDigits);
  context.locals.localizeDateString = (
    date: string | undefined,
    options?: Intl.DateTimeFormatOptions,
  ) => localizeDateString(date, locale, options);
  context.locals.safeMarkdown = createSafeMarkdown(locale);

  return next();
});
