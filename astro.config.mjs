// @ts-check
import sitemap from "@astrojs/sitemap";
import { filterSitemapByDefaultLocale, i18n } from "astro-i18n-aut/integration";
import { defineConfig } from "astro/config";

import { defaultLocale, locales } from "./src/i18n/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://getmonero.org/",
  trailingSlash: "always",
  build: {
    format: "directory",
    inlineStylesheets: "never",
  },
  integrations: [
    i18n({
      locales,
      defaultLocale,
      exclude: ["pages/**/*.js"],
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],
});
