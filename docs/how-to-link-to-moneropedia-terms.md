# How to Link to Moneropedia Terms

This guide shows you how to add links to Moneropedia terms (like "airgap" or "wallet") in your content. Linking helps readers learn more without leaving the page.

There are two ways to do this, depending on where your content is:
- **In Markdown content** (blog posts, Moneropedia entries, legal pages): Automatic linking is done.
- **In translation strings** (the JSON files): render them with the `helpers/markdown` partial.

## Option 1: Linking in Markdown content (.md Files)

If you're writing in a Markdown file under `src/content/` (e.g., a blog post), the linking is done for you when the site builds (`layouts/_partials/helpers/moneropedia-content.html`).

### What It Does
- It looks for terms starting with `@` (like `@airgap`).
- Turns them into clickable links with a short description (tooltip) and an info icon.
- Links go to the Moneropedia page for that term.

### Steps
1. Write your text normally in Markdown.
2. Add `@` before the term you want to link (e.g., `@airgap`).
3. Save the file. The build handles the rest. Terms inside code and inside existing links are left alone.

### Example
In your Markdown file:
```markdown
An @airgap is a way to keep your computer safe from the internet.
```

## Option 2: Linking from Translation Files

For translation strings (JSON), render the string with the `helpers/markdown` partial. It renders the Markdown, links `@term` mentions in the page's language, and escapes any other HTML.

### Example (page template)

```go-html-template
<div>{{ partial "helpers/markdown" (partial "helpers/t" "faq:privacy.ringSignatures.content") }}</div>
```

- Use `(dict "text" $text "inline" true)` instead if you need inline-only HTML for small snippets (no `<p>`).

If your translation string includes multiple `@term` usages, the same process handles them all.

### How terms are matched

- A term matches when it is followed by a space, punctuation or the end of the text, or by `-based`, `-like` or `-form` (`@ringCT-based`).
- Hyphens in the linked text become spaces: `@ring-signature` shows "ring signature".
- Terms come from the `terms` list in each entry's front matter. In a translated page, entries the language doesn't have yet link to the English entry.

## Tips
- Always use `@term` (with the @) for linking.
- Test your changes with `hugo server` to see the links.
- For multiple languages, as long as you follow the setup above, the code handles it automatically.
- For a live example, look at the FAQ page (`layouts/get-started/faq.html`).

If you need help, ask in the Monero community!
