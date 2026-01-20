/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    t: import("i18next").TFunction;
    locale: string;
    dir: "ltr" | "rtl";
    localizeHref: (href: string) => string;
    localizeNumber: (number: number, minimumIntegerDigits?: number) => string;
    localizeDateString: (
      date: string | undefined,
      options?: Intl.DateTimeFormatOptions,
    ) => string | undefined;
    safeMarkdown: {
      parse: (markdown: string) => string;
      parseInline: (markdown: string) => string;
    };
  }
}
