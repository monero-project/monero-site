// @ts-check
import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";
import { filterSitemapByDefaultLocale, i18n } from "astro-i18n-aut/integration";
import { defineConfig, fontProviders } from "astro/config";
import { defineHastPlugin } from "satteri";

import { defaultLocale, locales } from "./src/i18n/config";
import { moneropediaLinks } from "./src/plugins/satteri-moneropedia";
import { isExternal } from "./src/utils/links";

const SITE_ROOTDOMAIN = "beta.monerodevs.org";

const isSSR = process.env.SSR === "true";
const skipImageOptimization = process.env.SKIP_IMAGE_OPTIMIZATION === "true";

const externalLinks = defineHastPlugin({
  name: "external-links",
  element: {
    filter: ["a"],
    visit(node, ctx) {
      const href = node.properties.href;
      if (typeof href !== "string" || !/^(https?:|\/\/)/i.test(href)) return;
      if (!isExternal(href, SITE_ROOTDOMAIN)) return;
      ctx.setProperty(node, "target", "_blank");
      ctx.setProperty(node, "rel", ["noopener", "noreferrer", "external"]);
    },
  },
});

// https://astro.build/config
export default defineConfig({
  output: isSSR ? "server" : "static",
  ...(isSSR
    ? {
        adapter: (await import("@astrojs/node")).default({
          mode: "standalone",
        }),
      }
    : {}),
  site: `https://${SITE_ROOTDOMAIN}`,
  trailingSlash: "always",
  compressHTML: true,
  session: false,
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
    processor: satteri({
      features: { smartPunctuation: false },
      mdastPlugins: [moneropediaLinks],
      hastPlugins: [externalLinks],
    }),
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
