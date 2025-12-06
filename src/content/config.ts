import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { idToDateSlug } from "@/utils/blog";

const moneropedia = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/moneropedia",
  }),
  schema: z.object({
    title: z.string(),
    terms: z.array(z.string()),
    summary: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/blog",
    generateId: ({ entry }) => {
      return idToDateSlug(entry.replace(/\.md$/, ""));
    },
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog,
  moneropedia,
};
