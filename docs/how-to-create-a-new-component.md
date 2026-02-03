# How to Create a New Component

For more detailed information, refer to the [Astro component documentation.](https://docs.astro.build/en/basics/astro-components/).

## Quick checklist

- Pick type: UI (`src/components/ui/`) | Page (`src/components/pages/...`).
- Name with PascalCase (e.g., `MyButton.astro`).
- Keep it small, testable, accessible, and well-documented.

## Where to put a new component (ui / pages)

Quick decision guide:

- `src/components/ui/` -> **Reusable UI building blocks**
  - Use for small, style/behavior-focused components that may be used across the site (Buttons, Accordions, Icon wrappers).
  - Keep these dependency-free (accept props, avoid page-specific logic).
  - Subfolders exist for organization: `accordion/`, `header/`, `icons/`, `layout/`, `tabs/`, `toc/`, etc.
  - Example: `src/components/ui/Button.astro`, `src/components/ui/accordion/Accordion.astro`.

- `src/components/pages/<page-name>/` -> **Page-specific or feature components**
  - Use when the component is tightly coupled to one page or feature (e.g., blog listing card, downloads grid, search results component, exchanges table).
  - They can import page-level helpers and expect specific data shapes.
  - Example: `src/components/pages/blog/BlogCard.astro`.

Rules of thumb:
- If it's small and can be reused later -> put it in `ui/` (or a subfolder within `ui/`).
- If it depends on a single page's data or route -> put it in `pages/<page-name>/`.

If you're still unsure, search for similar components in `src/components/` and follow the existing pattern. Add a short comment at the top of the file describing purpose and intended scope.

## Minimal component template

```astro
// MyComponent.astro
---
interface Props { title?: string; class?: string }
const { title = "", class: className = "" } = Astro.props;
---

<div class:list={["card", className]}>
  {title && <h3>{title}</h3>}
  <slot />
</div>

<style>
  .card {
    padding: 0.75rem;
    border-radius: 8px;
    background-color: var(--card-color);
  }
</style>
```

- Usage of `slot` lets you nest content inside the component. Example:
```astro
<MyComponent title="Hello">
  <p>This is nested content inside MyComponent.</p>
</MyComponent>
```


## Props, Types, and Slots

- Define a small props interface in the frontmatter for TypeScript safety.
- Use slots for content and to keep the component flexible.
- Avoid heavy computations in frontmatter; move complex logic to `src/utils/`.

## Styling

- Use component-scoped `<style>` and CSS variables from `src/styles/global.css`.
- Keep styles simple and responsive (follow existing classes and breakpoints).

## Accessibility

- Add ARIA attributes for interactive elements and keyboard support where needed.
- Ensure images/icons have appropriate `aria-hidden` or descriptive text.

## Localization in components

Components can access `Astro.locals` directly for translation and locale utilities. Component-level strings should be added to the `common.json` translation file, under the `components` key.

```astro
---
// MyComponent.astro
interface Props { customLabel?: string }
const { customLabel } = Astro.props;
const { t, dir } = Astro.locals;
---
<div dir={dir}>
  <span>{t("common:components.bookCard.readOnline")}</span>
  {customLabel && <span>{customLabel}</span>}
</div>
```

**Guidelines:**
- Use `Astro.locals.t` for standard UI strings (buttons, labels, aria text).
- Use `Astro.locals.dir` for RTL-aware layouts.
- For component-level strings, add keys to `src/i18n/translations/[locale]/common.json`.
- Page-specific content should still be passed as props from the page.

## Testing & QA

- Run `pnpm dev` and load the page that uses the component.
- Check browser console and TypeScript for errors.
- Run `pnpm lint` and `pnpm format` before opening a PR.

## Documentation

- Add a short comment at the top of the component describing props and usage.
- If the component is part of the shared UI library, add a short example to [How to use the UI library](how-to-use-the-ui-library.md).

## Examples

- Reusable button: `src/components/ui/Button.astro` (variants, `aria-` support).
- Page-only card: `src/components/pages/blog/BlogCard.astro`.

For icon usage see [How to Use and Create Icons](how-to-use-and-create-icons.md).