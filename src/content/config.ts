import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { localeKeys } from "@/i18n/keys";
import { idToDateSlug } from "@/utils/blog";

const localizedGlob = (base: string, slugify?: (slug: string) => string) =>
  glob({
    pattern: `@(${localeKeys.join("|")})/**/[^_]*.md`,
    base,
    generateId: ({ entry }) => {
      const id = entry.replace(/\.md$/, "");
      if (!slugify) return id;
      const splitAt = id.indexOf("/") + 1;
      return id.slice(0, splitAt) + slugify(id.slice(splitAt));
    },
  });

const legal = defineCollection({
  loader: localizedGlob("./src/content/legal"),
  schema: z.object({
    title: z.string(),
  }),
});

const moneropedia = defineCollection({
  loader: localizedGlob("./src/content/moneropedia"),
  schema: z.object({
    title: z.string(),
    terms: z.array(z.string()),
    summary: z.string(),
  }),
});

const blog = defineCollection({
  loader: localizedGlob("./src/content/blog", idToDateSlug),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().optional(),
      tags: z.array(z.string()).optional(),
      author: z.string(),
      image: image().optional(),
    }),
});

export const collections = {
  blog,
  legal,
  moneropedia,
};
