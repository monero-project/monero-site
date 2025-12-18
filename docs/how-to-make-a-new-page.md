# How to Make a New Page

## Quick checklist

- Create `src/pages/<your-path>/index.astro` or `src/pages/<name>.astro`.
- Use `Layout` and `TitleCard` for consistent header/footer/hero.
- Use components from `src/components/ui/` where needed.
- Run `pnpm dev` and preview at `http://localhost:4321/<your-path>`.

## Minimal page template

```astro
---
import Layout from "@/layouts/Layout.astro";
import TitleCard from "@/components/ui/TitleCard.astro";
---

<Layout title="My page" description="Short description">
  <TitleCard title="My page" subtitle="What this page is about" />

  <div id="content">
    <h2>Section</h2>
    <p>Content goes here.</p>
  </div>
</Layout>

<style>
    #content {
        margin-top: 2rem;
    }
</style>
```

Notes:
- For nested routes, create folders: `src/pages/resources/my-page.astro` -> `/resources/my-page`.
- If you need containers, UI elements, check if anything useful exists in `src/components/ui/`. Refer to [How to Use the UI Library](how-to-use-the-ui-library.md).
- For dynamic routes, use `[...slug].astro` (see existing Moneropedia pages).

## Localization & titles

- Prefer translation keys for visible strings (page titles, hero copy). See [How to Add Localization to a Page](how-to-add-localization-to-a-page.md) for examples using the translation utilities.

## When to extract a component

Extract when a block is:
- repeated, complex, or likely to be reused.
- better tested in isolation (e.g., data fetching, toggles).

Use `src/components/pages/` for page-specific components and `src/components/ui/` for reusable UI components. See [How to Create a New Component](how-to-create-a-new-component.md).

## Accessibility & small best-practices

- Use proper heading order (h1 -> h2 -> …).
- Add `alt` text for images and aria attributes for interactive elements.
- Keep content concise and scannable (short sections, meaningful headings).

## Test & PR checklist

- [ ] `pnpm dev` shows the page and there are no console errors.
- [ ] Links and images work; icons use `MaskIcon`/`ColorIcon` when appropriate (see [How to Use and Create Icons](how-to-use-and-create-icons.md)).
- [ ] If the page has translatable text, add keys and follow the localization guide.
- [ ] Open a PR with a short description and request a review.