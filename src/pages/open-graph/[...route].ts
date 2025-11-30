import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";

export const prerender = true;

const posts = await getCollection("blog");
const pages = posts.reduce(
  (acc, post) => ({
    ...acc,
    // astro-og-canvas trims anything after the last dot, so its necessary to include a dummy .md extension, don't remove this!
    [`blog/${post.id}.md`]: {
      title: post.data.title ?? "Blog post",
      description: post.data.summary ?? "",
    },
  }),
  {} as Record<string, { title: string; description: string }>,
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,

    bgGradient: [[23, 23, 23]], // --bg-color (dark) = #171717

    border: {
      color: [226, 97, 31], // --monero-orange = #e2611f
      width: 18,
      side: "inline-start",
    },

    fonts: [
      "./node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2",
      "./node_modules/@fontsource/dm-sans/files/dm-sans-latin-500-normal.woff2",
      "./node_modules/@fontsource/dm-sans/files/dm-sans-latin-600-normal.woff2",
      "./node_modules/@fontsource/dm-sans/files/dm-sans-latin-700-normal.woff2",
    ],

    font: {
      title: {
        size: 56,
        lineHeight: 1.1,
        families: ["DM Sans"],
        weight: "SemiBold",
        color: [240, 240, 240], // --heading-color (dark) = #f0f0f0
      },

      description: {
        size: 30,
        lineHeight: 1.5,
        families: ["DM Sans"],
        weight: "Light",
        color: [198, 198, 208], // --paragraph-main (dark) = #c6c6d0
      },
    },

    padding: 96,

    logo: {
      path: "./public/meta/monerologo.png",
      size: [80, 80],
    },

    quality: 100,
  }),
});
