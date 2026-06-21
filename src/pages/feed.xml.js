import rss from "@astrojs/rss";
import { defaultLocale } from "@/i18n/config";
import { splitLocaleId } from "@/i18n/utils";
import { getDateStringFromId, getLocalizedBlog } from "@/utils/blog";
import { createSafeMarkdown } from "@/utils/safeMarkdown";

const safeMarkdown = createSafeMarkdown();

export async function GET(context) {
  const blog = await getLocalizedBlog(defaultLocale);
  return rss({
    title: "Monero",
    description: "Monero Blog RSS Feed",
    site: context.site,
    items: blog.map((post) => {
      const { slug } = splitLocaleId(post.id);
      return {
        title: post.data.title,
        pubDate: getDateStringFromId(slug),
        description: post.data.summary,
        link: `/blog/${slug}/`,
        content: safeMarkdown.parse(post.body),
      };
    }),
  });
}
