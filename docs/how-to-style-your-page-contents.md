# How to Style Pages & Components

## Quick rules

- Use the CSS variables in `assets/css/base/global.css` (colors, spacing, typographic scales).
- Put styles in one stylesheet per page or component, `assets/css/components/<name>.css`, imported in `assets/css/main.css`.
- Scope every selector with the page's or component's `data-c-<name>` attribute (see below). `python3 scripts/check-scoped-css.py` checks this, and CI runs it.
- Prefer mobile-first responsive rules and test at the project's common breakpoints (600, 900, 1200, 1600px).
- Test dark mode and accessibility (contrast, keyboard focus).

## Where styles live

- `assets/css/base/`: global styles. `global.css` holds the CSS variables and the styles for bare HTML elements (`a`, `h1`, `table`...); don't add classes there.
- `assets/css/components/`: one file per component (`button.css` for `ui/button`) and per page (`page-community-hangouts.css` for `layouts/community/hangouts.html`).
- `assets/css/main.css` imports them all, in order: base styles, shared UI components, page-section components, pages. `layouts/_partials/head/css.html` bundles it into the single stylesheet every page loads.

There are no `<style>` blocks in templates. A new stylesheet does nothing until you add an `@import` line for it to `main.css`, in the right group.

## Useful variables (examples)

- Colors: `--monero-orange`, `--card-color`, `--heading-color`, `--text-primary`.
- Spacing: `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`, `--space-2xl` (see global.css for full scale).
- Layout: `--page-top-margin`, `--mobile-padding-inline`, `--desktop-padding-inline`.
- Typography: `--font-size-base`, `--font-size-2xl`, `--font-weight-semibold`.

See `assets/css/base/global.css` for the full list. The colour variables are written with `light-dark()`, so they already switch for dark mode.

## Scoping

Styles are scoped by an attribute instead of a generated class name:

1. Every element your page or component template writes gets `data-c-<name>`. A page uses `data-c-page-<path>`, e.g. `data-c-page-community-hangouts`.
2. Every selector in `<name>.css` includes `[data-c-<name>]`: `.example-title[data-c-page-resources-styling-example]`. Rules nested inside a scoped rule are fine as they are.
3. To style a UI component's root from your page, pass your attribute in its `attrs`.

The details are in [How to Create a New Component](how-to-create-a-new-component.md#styling). To keep typing down, pages put the attribute in a dict once (`$scope`) and pass it along, as in the example below.

## Minimal page-scoped example

`layouts/resources/styling-example.html` (with `content/resources/styling-example.md` containing `layout: styling-example` in its front matter):

```go-html-template
{{ define "meta" }}{{ .Store.Set "meta" (dict "title" "Styling example" "description" "Short example of page-level styles") }}{{ end }}
{{ define "main" }}
{{- $scope := dict "data-c-page-resources-styling-example" true -}}
{{ partial "ui/title-card" (dict "title" "Example section" "subtitle" "A short intro sentence") }}

{{ with partial "ui/layout/page-container" (dict "scope" $scope) }}
  {{ with partial "ui/layout/grid" (dict "columns" 2 "gap" "lg" "scope" .scope) }}
    {{ with partial "ui/layout/column" (dict "gap" "md" "scope" .scope) }}
      <h2 class="example-title" data-c-page-resources-styling-example>Section heading</h2>
      <p data-c-page-resources-styling-example>Use CSS variables for color and spacing.</p>
      {{ with partial "ui/button" (dict "variant" "primary" "class" "example-button" "attrs" .scope) }}Call to action{{ end }}
    {{ end }}
    {{ with partial "ui/layout/column" (dict "gap" "sm") }}
      <p data-c-page-resources-styling-example>Second column content.</p>
    {{ end }}
  {{ end }}
{{ end }}
{{ end }}
```

`assets/css/components/page-resources-styling-example.css`, added to the "Pages" group of `main.css`:

```css
/* Styles for layouts/resources/styling-example.html */
.example-title[data-c-page-resources-styling-example] {
  font-size: var(--font-size-2xl);
  color: var(--heading-color);
}

.example-button[data-c-page-resources-styling-example] {
  border-radius: var(--radius-lg);
}
```

The button rule works because the button's root gets the page's attribute through `attrs`, and the page's stylesheet is imported after `button.css`.

Text is literal here for brevity; real pages use translation keys (see [How to Add Localization to a Page](how-to-add-localization-to-a-page.md)).

### Layout components

The project provides layout partials in `layouts/_partials/ui/layout/`:

- **grid** - Responsive grid with `columns` (2, 3, 4) or `minWidth`. Use for card grids, multi-column layouts.
- **column** - Flexbox column with `gap` and `align`. Use for vertical stacking.
- **row** - Flexbox row with `gap`, `justify`, `align`, and `wrap`. Use for horizontal layouts.
- **page-container** - Standard page content wrapper with the bottom padding.
- **page-section** - Section wrapper for consistent vertical spacing.

Prefer these over writing custom grid/flex CSS. See [How to Use the UI Library](how-to-use-the-ui-library.md).

## Component styling tips

- Never write an unscoped selector to "reach into" another component; pass your attribute in its `attrs` instead.
- For values that come from the template, set a CSS custom property in a `style` attribute and use it in the stylesheet (this is how `ui/layout/grid` passes its gap):

  ```go-html-template
  <div class="icon" style="--size: {{ .size | default "2rem" }}" data-c-my-icon></div>
  ```

  ```css
  .icon[data-c-my-icon] {
    width: var(--size);
    height: var(--size);
  }
  ```

- For HTML you don't write yourself, such as rendered Markdown or translated strings with links, scope only the container and style its children with plain selectors:

  ```css
  /* page-legal.css: the legal documents are rendered Markdown inside .prose */
  .prose[data-c-page-legal] {
    & h3 {
      font-size: var(--font-size-lg);
    }
    & p {
      margin: 0 0 var(--space-md);
    }
  }
  ```

- A rule that really must be global (e.g. a `:root` variable for one page) needs a `/* global */` comment directly before it, or the scope check fails:

  ```css
  /* global */
  :root {
    --hero-min-height: calc(75vh + 3rem);
  }
  ```

## Breakpoints & patterns
- Prefer mobile-first patterns (use `@media (width >= ...)`) unless a component already follows `max-width` patterns.
- These are the common screen width breakpoints used in the project:
  - >= 0px: mobile
  - >= 600px: small tablet
  - >= 900px: tablet
  - >= 1200px: small desktop
  - >= 1600px: desktop

CSS variables can't be used in media queries, so write the numbers.

## Accessibility & dark mode

- Check color contrast and focus states. `prefers-color-scheme: dark` is already supported via the variables; only write a `@media (prefers-color-scheme: dark)` rule for something the variables don't cover.
- Use semantic HTML, ARIA attributes where necessary, and ensure keyboard operability (e.g., focus-visible outlines).

## Linting CSS (Biome)

CI lints `assets/css/` with [Biome](https://biomejs.dev/)'s recommended rules (unknown properties, units, functions and pseudo-classes, duplicates, empty blocks, specificity order…); the settings are in `biome.json`, and warnings fail too. Biome is a single program: download `biome-linux-x64` (or your platform's) from the [release CI uses](https://github.com/biomejs/biome/releases) (see `BIOME_VERSION` in `.github/workflows/ci.yml`), then in the repository:

```bash
biome lint --error-on-warnings
```

To silence a rule for one line, say why: `/* biome-ignore lint/<group>/<rule>: reason */` on the line before.

## PR checklist for styles

- [ ] CSS is in `assets/css/components/<name>.css`, imported in `main.css`, and scoped (or added to `assets/css/base/` with justification).
- [ ] Uses CSS variables instead of hard-coded colors or sizes.
- [ ] Works in dark mode and on common breakpoints.
- [ ] `python3 scripts/check-scoped-css.py` and `python3 scripts/check-css-format.py` pass, and Biome (above) is clean.

Links: [How to Make a New Page](how-to-make-a-new-page.md) | [How to Use the UI Library](how-to-use-the-ui-library.md) | [How to Handle Assets and Images](how-to-handle-assets-and-images.md)
