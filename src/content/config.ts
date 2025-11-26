import { defineCollection, z } from "astro:content";

const moneropedia = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    terms: z.array(z.string()),
    summary: z.string(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    author: z.string(),
  }),
});

export const collections = {
  blog,
  moneropedia,
};
