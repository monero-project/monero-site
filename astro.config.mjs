// @ts-check
import sitemap from "@astrojs/sitemap";
import { filterSitemapByDefaultLocale, i18n } from "astro-i18n-aut/integration";
import { defineConfig, fontProviders } from "astro/config";

import { defaultLocale, locales } from "./src/i18n/config";
import { moneropediaLinks } from "./src/plugins/remark-moneropedia";
import rehypeExternalLinks from "rehype-external-links";
import { isExternal } from "./src/utils/links";

const SITE_ROOTDOMAIN = "beta.monerodevs.org";

const isSSR = process.env.SSR === "true";
const skipImageOptimization = process.env.SKIP_IMAGE_OPTIMIZATION === "true";

// https://astro.build/config
export default defineConfig({
  output: isSSR ? "server" : "static",
  adapter: isSSR
    ? (await import("@astrojs/node")).default({ mode: "standalone" })
    : undefined,
  site: `https://${SITE_ROOTDOMAIN}`,
  trailingSlash: "always",
  fonts: [
    {
      provider: fontProviders.npm({ remote: false }),
      name: "DM Sans Variable",
      cssVariable: "--font-dm-sans",
      weights: ["100 1000"],
      styles: ["normal"],
      options: {
        package: "@fontsource-variable/dm-sans",
        file: "index.css",
      },
    },
  ],
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
    concurrency: 4,
  },
  image: {
    responsiveStyles: true,
    layout: "constrained",
    ...(skipImageOptimization && {
      service: { entrypoint: "astro/assets/services/noop" },
    }),
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
