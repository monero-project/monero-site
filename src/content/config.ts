import { defineCollection, z } from "astro:content";

const moneropedia = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    terms: z.array(z.string()),
    summary: z.string(),
  }),
});

export const collections = {
  moneropedia,
};
