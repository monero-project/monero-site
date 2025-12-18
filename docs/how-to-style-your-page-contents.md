# How to Style Pages & Components

## Quick rules

- Use the CSS variables in `src/styles/global.css` (colors, spacing, typographic scales).
- Scope styles to the page or component using a `<style>` block in `.astro` files.
- Prefer mobile-first responsive rules and test at the project's common breakpoints (600, 900, 1200, 1600px).
- Test dark mode and accessibility (contrast, keyboard focus).

## Useful variables (examples)

- Colors: `--monero-orange`, `--card-color`, `--heading-color`, `--text-primary`.
- Spacing: `--page-top-margin`, `--mobile-padding`, `--desktop-padding`.
- Typography: `--font-size-base`, `--font-size-2xl`, `--font-weight-semibold`.

See `src/styles/global.css` for the full list. These variables have built-in dark mode equivalents.

## Minimal page-scoped example

```astro
---
import Layout from "@/layouts/Layout.astro";
import TitleCard from "@/components/ui/TitleCard.astro";
import Button from "@/components/ui/Button.astro";
---

<Layout title="Styling example" description="Short example of page-level styles">
  <TitleCard title="Example section" subtitle="A short intro sentence" />

  <div id="content">
    <div class="two-col">
      <article>
        <h2 class="example-title">Section heading</h2>
        <p>Use CSS variables for color and spacing. This paragraph shows body copy using <code>var(--paragraph-main)</code>.</p>
        <Button variant="primary">Call to action</Button>
      </article>
    </div>
  </div>
</Layout>

<style>
  .example-title {
    font-size: var(--font-size-2xl);
    color: var(--heading-color);
  }
  .two-col {
    display: grid;
    gap: 1.25rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 900px) {
    .two-col {
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
      align-items: start;
    }
  }
</style>
```

## Component styling tips

- Use component-scoped `<style>` to avoid global leakage.
- Use `define:vars` for dynamic CSS variables when a component needs runtime values:

  ```astro
  ---
  const size = "2rem";
  ---
  <div class="icon" />

  <style define:vars={{ size }}>
    .icon {
      width: var(--size);
      height: var(--size);
    }
  </style>
  ```

- Use `:global` to style imported components or global elements within a scoped `<style>` block. Chain it with a local class to target specific instances and avoid global side effects:
  ```astro
  <div class="my-wrapper">
    <Button variant="primary">Click me</Button>
  </div>

  <style>
    .my-wrapper :global(.button) {
      border-radius: 0.5rem;
    }
  </style>
  ```

  `:global` is needed because Astro scopes styles by default to prevent conflicts. Without `:global`, styles only apply to elements within the component. Use it sparingly to avoid unintended global side effects.

  More info on `:global` usage: [Astro: Global Styles](https://docs.astro.build/en/guides/styling/#global-styles)

## Breakpoints & patterns
- Prefer mobile-first patterns (use `@media (min-width: ...)`) unless a component already follows `max-width` patterns.
- These are the common screen width breakpoints used in the project:
  - >= 0px: mobile
  - >= 600px: small tablet
  - >= 900px: tablet
  - >= 1200px: small desktop
  - >= 1536px: desktop


## Accessibility & dark mode

- Check color contrast and focus states. Use `prefers-color-scheme: dark` is already supported via variables.
- Use semantic HTML, ARIA attributes where necessary, and ensure keyboard operability (e.g., focus-visible outlines).

## PR checklist for styles

- [ ] CSS is scoped (page/component level) or added to `src/styles/` with justification.
- [ ] Uses CSS variables instead of hard-coded colors or sizes.
- [ ] Works in dark mode and on common breakpoints.
- [ ] Linted: `pnpm lint` and no console errors in `pnpm dev`.

Links: [How to Make a New Page](how-to-make-a-new-page.md) | [How to Use the UI Library](how-to-use-the-ui-library.md) | [How to Handle Assets and Images](how-to-handle-assets-and-images.md)