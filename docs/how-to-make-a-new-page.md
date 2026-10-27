# How to Make a New Page

A page is two files: a small **stub** in `content/` that creates the URL and picks a template, and the **template** in `layouts/`. The template's path mirrors the URL.

## Minimal page

`content/resources/my-page.md` (creates `/resources/my-page/` in every language):

```yaml
---
layout: my-page
---
```

`layouts/resources/my-page.html`:

```go-html-template
{{ define "meta" }}{{ .Store.Set "meta" (dict "title" "My page" "description" "Short description") }}{{ end }}

{{ define "main" }}
{{ partial "ui/title-card" (dict "title" "My page" "subtitle" "What this page is about") }}

{{ with partial "ui/layout/page-container" (dict) }}
  <h2 data-c-page-resources-my-page>Section</h2>
  <p data-c-page-resources-my-page>Content goes here.</p>
{{ end }}
{{ end }}
```

Page-specific styles go in `assets/css/components/page-resources-my-page.css` (scoped with `[data-c-page-resources-my-page]`, see [How to Create a New Component](how-to-create-a-new-component.md#styling)), imported in `assets/css/main.css` under "Pages".

Notes:
- The page frame (head, header, footer) comes from `layouts/baseof.html`. A page only fills in the `meta` and `main` blocks (and `head`, for extra `<head>` tags).
- `meta` fields: `title`, `description`, and optionally `ogTitle`, `ogImage`, `ogImageAlt`. A title without `|` gets the site suffix. See `layouts/_partials/head/seo.html`.
- For a page that has pages below it, like `/resources/tools/` with `/resources/tools/accept/`, the stub is `content/resources/tools/_index.md` and the template is still `layouts/resources/tools.html`.
- If you need containers or UI elements, check what exists in `layouts/_partials/ui/`. Refer to [How to Use the UI Library](how-to-use-the-ui-library.md).
- Blog and Moneropedia pages are made from Markdown files instead, see [How to Make a Blog Post](how-to-make-a-blog-post.md) and [How to Make a Moneropedia Entry](how-to-make-a-moneropedia-entry.md).

## Localization & titles

- After you have written your page, move the text into a translation file so the page can be translated. See [How to Add Localization to a Page](how-to-add-localization-to-a-page.md).

## When to extract a component

Extract when a block is repeated, complex, or likely to be reused.

Use `layouts/_partials/pages/` for page-specific components and `layouts/_partials/ui/` for reusable UI components. See [How to Create a New Component](how-to-create-a-new-component.md).

## Accessibility & small best-practices

- Use proper heading order (h1 -> h2 -> …).
- Add `alt` text for images and aria attributes for interactive elements. If an image is decorative, use `alt=""`.
- Keep content concise and scannable (short sections, meaningful headings).

## Quick checklist

- Create `content/<your-path>.md` with `layout: <name>`.
- Create `layouts/<your-path>.html` with `meta` and `main` blocks.
- Use `ui/title-card` and `ui/layout/page-container` for a consistent layout.
- Run `hugo server` and preview at `http://localhost:1313/<your-path>/`.

## Test & PR checklist

- [ ] `hugo server` shows the page without errors or warnings in the terminal.
- [ ] Links and images work; icons use `ui/icons/mask-icon` / `ui/icons/color-icon` when appropriate (see [How to Use and Create Icons](how-to-use-and-create-icons.md)).
- [ ] If the page has translatable text, add keys and follow the localization guide.
- [ ] `python3 scripts/check-scoped-css.py` passes.
- [ ] Open a PR with a short description and request a review.
