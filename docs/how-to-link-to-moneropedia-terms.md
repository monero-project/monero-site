# How to Link to Moneropedia Terms

This guide shows you how to add links to Moneropedia terms (like "airgap" or "wallet") in your content. Linking helps readers learn more without leaving the page.

There are two ways to do this, depending on where your content is:
- **In Markdown files** (like blog posts or guides): Automatic linking is done.
- **In other places** (like translation files or code): Some utilities need to be used.

## Option 1: Linking in Markdown Content (.md Files)

If you're writing in a Markdown file (e.g., a blog post), the built-in `remark-moneropedia` plugin does the linking for you automatically.

### What It Does
- It looks for terms starting with `@` (like `@airgap`).
- Turns them into clickable links with a short description (tooltip) and an info icon.
- Links go to the Moneropedia page for that term.

### Steps
1. Write your text normally in Markdown.
2. Add `@` before the term you want to link (e.g., `@airgap`).
3. Save the file. The plugin handles the rest when the site builds.

### Example
In your Markdown file:
```markdown
An @airgap is a way to keep your computer safe from the internet.
```

## Option 2: Linking in Non-Markdown Content (e.g., Translations or Code)

For translation strings (JSON) or programmatic content (Astro/React), use the helper `processHTMLString` from `utils/moneropedia.ts` to replace `@term` occurrences with linked HTML. Typically you will:

- Convert your Markdown-like string to HTML (e.g., with `marked`),
- Run `processHTMLString(html, entries, locale)` to inject Moneropedia links and tooltips, and
- Render with `set:html` after sanitizing the result for safety.

**Server-side note:** Call `getMoneropediaEntries(locale)` in server-side/frontmatter code (page `---` block) - do not fetch or run it in client-only/browser code.

### Example (Astro page frontmatter)

```astro
---
import DOMPurify from "isomorphic-dompurify";
import { processHTMLString, getMoneropediaEntries } from "@/utils/moneropedia";
import { marked } from "marked";
import { getLocale, createTInstance } from "@/i18n/utils";

const locale = getLocale(Astro.url);
const t = await createTInstance(locale);
const mpEntries = await getMoneropediaEntries(locale);

const html = marked.parse(t("safetyTip"));
const processed = processHTMLString(html, mpEntries, locale);
---

<div set:html={DOMPurify.sanitize(processed)} />
```

- `processHTMLString` needs the Moneropedia `entries` so it can map `@term` -> page link + tooltip content.
- Always sanitize with `DOMPurify` before using `set:html`.

If your translation string includes multiple `@term` usages, the same process handles them all.

## Tips
- Always use `@term` (with the @) for linking.
- Test your changes with `pnpm dev` to see the links.
- For multiple languages, as long as you follow the setup above, the code handles it automatically.
- For a live example, look at the FAQ page (`src/pages/get-started/faq.astro`) as an example for a implementation.

If you need help, ask in the Monero community!