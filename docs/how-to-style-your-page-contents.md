# How to Style Pages & Components

## Quick rules

- Use the CSS variables in `src/styles/global.css` (colors, spacing, typographic scales).
- Scope styles to the page or component using a `<style>` block in `.astro` files.
- Prefer mobile-first responsive rules and test at the project's common breakpoints (600, 900, 1200, 1600px).
- Test dark mode and accessibility (contrast, keyboard focus).

## Useful variables (examples)

- Colors: `--monero-orange`, `--card-color`, `--heading-color`, `--text-primary`.
- Spacing: `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`, `--space-2xl` (see global.css for full scale).
- Layout: `--page-top-margin`, `--mobile-padding-inline`, `--desktop-padding-inline`.
- Typography: `--font-size-base`, `--font-size-2xl`, `--font-weight-semibold`.

See `src/styles/global.css` for the full list. These variables have built-in dark mode equivalents.

## Minimal page-scoped example

```astro
---
import Layout from "@/layouts/Layout.astro";
import PageContainer from "@/components/ui/layout/PageContainer.astro";
import TitleCard from "@/components/ui/TitleCard.astro";
import Grid from "@/components/ui/layout/Grid.astro";
import Column from "@/components/ui/layout/Column.astro";
import Button from "@/components/ui/Button.astro";
---

<Layout title="Styling example" description="Short example of page-level styles">
  <TitleCard title="Example section" subtitle="A short intro sentence" />

  <PageContainer>
    <Grid columns={2} gap="lg">
      <Column gap="md">
        <h2 class="example-title">Section heading</h2>
        <p>Use CSS variables for color and spacing.</p>
        <Button variant="primary">Call to action</Button>
      </Column>
      <Column gap="sm">
        <p>Second column content.</p>
      </Column>
    </Grid>
  </PageContainer>
</Layout>

<style>
  .example-title {
    font-size: var(--font-size-2xl);
    color: var(--heading-color);
  }
</style>
```

### Layout components

The project provides layout primitives in `src/components/ui/layout/`:

- **Grid** - Responsive grid with `columns` (2, 3, 4) or `minWidth` prop. Use for card grids, multi-column layouts.
- **Column** - Flexbox column with `gap` and `align` props. Use for vertical stacking.
- **Row** - Flexbox row with `gap`, `justify`, `align`, and `wrap` props. Use for horizontal layouts.
- **PageContainer** - Standard page content wrapper with max-width and padding.
- **PageSection** - Section wrapper for consistent vertical spacing.

Prefer these components over writing custom grid/flex CSS.

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

- Pass classes to components to allow style overrides:
  ```astro
  <div class="my-wrapper">
    <Button variant="primary" class="button">Click me</Button>
  </div>

  <style>
    .my-wrapper .button {
      border-radius: 0.5rem;
    }
  </style>
  ```

## Breakpoints & patterns
- Prefer mobile-first patterns (use `@media (min-width: ...)`) unless a component already follows `max-width` patterns.
- These are the common screen width breakpoints used in the project:
  - >= 0px: mobile
  - >= 600px: small tablet
  - >= 900px: tablet
  - >= 1200px: small desktop
  - >= 1600px: desktop


## Accessibility & dark mode

- Check color contrast and focus states. Use `prefers-color-scheme: dark` is already supported via variables.
- Use semantic HTML, ARIA attributes where necessary, and ensure keyboard operability (e.g., focus-visible outlines).

## PR checklist for styles

- [ ] CSS is scoped (page/component level) or added to `src/styles/` with justification.
- [ ] Uses CSS variables instead of hard-coded colors or sizes.
- [ ] Works in dark mode and on common breakpoints.
- [ ] Linted: `pnpm lint` and no console errors in `pnpm dev`.

Links: [How to Make a New Page](how-to-make-a-new-page.md) | [How to Use the UI Library](how-to-use-the-ui-library.md) | [How to Handle Assets and Images](how-to-handle-assets-and-images.md)