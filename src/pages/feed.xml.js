import rss from "@astrojs/rss";
import { getDateStringFromSlug } from "@/utils/blog";
import { getCollection } from "astro:content";
import safeMarkdown from "@/utils/safeMarkdown";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Monero",
    description: "Monero Blog RSS Feed",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: getDateStringFromSlug(post.id),
      description: post.data.summary,
      link: `/blog/${post.id}/`,
      content: safeMarkdown.parse(post.body),
    })),
  });
}
