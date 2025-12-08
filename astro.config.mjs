// @ts-check
import sitemap from "@astrojs/sitemap";
import { filterSitemapByDefaultLocale, i18n } from "astro-i18n-aut/integration";
import { defineConfig } from "astro/config";

import { defaultLocale, locales } from "./src/i18n/config";
import { moneropediaLinks } from "./src/plugins/remark-moneropedia";
import rehypeExternalLinks from "rehype-external-links";
import { isExternal } from "./src/utils/links";

const SITE_ROOTDOMAIN = "getmonero.org";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: `https://${SITE_ROOTDOMAIN}`,
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [moneropediaLinks],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer", "external"],
          /** @param {import('hast').Element} node*/
          test: (node) => isExternal(node, SITE_ROOTDOMAIN),
        },
      ],
    ],
  },
  build: {
    format: "directory",
  },
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  integrations: [
    i18n({
      locales,
      defaultLocale,
      exclude: ["pages/**/*.{js,ts}"],
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
