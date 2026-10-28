# How to Create a New Component

Components are [Hugo partials](https://gohugo.io/templates/partial/): small HTML templates in `layouts/_partials/` with a matching stylesheet in `assets/css/components/`.

## Quick checklist

- Pick a type: UI (`layouts/_partials/ui/`) or page-specific (`layouts/_partials/pages/<page>/`).
- Name files in kebab-case. The file name (without `.html`) is the component's **name** and must be unique across the site, e.g. `ui/button.html` is `button` and `pages/blog/blog-header.html` is `blog-header`.
- Add `assets/css/components/<name>.css` and import it in `assets/css/main.css`.
- Put `data-c-<name>` on every element the component writes (see [Styling](#styling)).
- Run `scripts/check-scoped-css.py` before opening a PR (CI runs it too).

## Where to put a new component (ui / pages)

- `layouts/_partials/ui/` -> **Reusable UI building blocks**
  - Small, style/behaviour-focused components used across the site (buttons, accordions, icons, layout helpers).
  - Take parameters, no page-specific logic.
  - Example: `ui/button.html`, `ui/accordion/accordion.html`.
- `layouts/_partials/pages/<page>/` -> **Page-specific components**
  - Tied to one page or feature (blog card, downloads card, exchanges table).
  - Example: `pages/blog/blog-card.html`.

If you're unsure, look for a similar component and follow its pattern.

## Minimal component

`layouts/_partials/ui/note.html`:

```go-html-template
{{- /*
  A highlighted note box.

    {{ with partial "ui/note" (dict "title" "Heads up") }}
      <p>Any HTML here.</p>
    {{ end }}

  Params: title (optional), class.
*/ -}}
<div class="note {{ .class }}" data-c-note>
  {{- with .title }}
  <h3 data-c-note>{{ . }}</h3>
  {{- end }}
  {{ templates.Inner . }}
</div>
```

`assets/css/components/note.css`:

```css
.note[data-c-note] {
  padding: 0.75rem;
  border-radius: 8px;
  background-color: var(--card-color);
}

h3[data-c-note] {
  margin-block-start: 0;
}
```

## Parameters and content ("slots")

- A component's context (`.`) is the `dict` it was called with. Document the parameters in the comment at the top of the file.
- Call it as `{{ partial "ui/note" (dict "title" "Hi") }}` when there's no inner content.
- To pass inner content, use the block form, which is Hugo's equivalent of a slot:

  ```go-html-template
  {{ with partial "ui/note" (dict "title" "Hi" "count" 3) }}
    <p>{{ .count }} things</p>
  {{ end }}
  ```

  The component renders the block where it calls `{{ templates.Inner . }}`.
  Inside the block, `.` is the dict you passed to the component, and variables
  defined outside the block (`$foo`) are **not** available. Put anything the
  block needs into the dict. `site`, `hugo` and other partials work as usual.
- Things that trip people up with blocks:
  - A component that renders `templates.Inner` must always be called in block
    form, even with an empty block (`{{ with partial "ui/card" (dict) }}{{ end }}`).
  - `templates.Inner` can't be called inside another component's block. A
    component built on another one renders its own content first and passes it
    on: `{{ $body := templates.Inner . }}` then
    `{{ with partial "ui/card" (dict "body" $body) }}{{ .body }}{{ end }}`.
  - When blocks are nested, collect the page's data into one dict and pass it
    to every block as `"d"`; inside any block it is then `.d.something`
    (see `layouts/_partials/pages/blog/post-list.html`).
- For extra named content (a "named slot"), pass pre-rendered HTML as a parameter,
  e.g. `"meta" (partial "pages/downloads/core-version" .)`.
- Keep logic light. Shared helpers live in `layouts/_partials/helpers/`
  (translation, links, numbers, dates, attributes).

## Styling

Component styles are **scoped** so they can't leak into other components.

1. Every element the component's template writes gets the attribute `data-c-<name>`.
   Content passed in through a block belongs to the *caller*, so the caller's
   attribute goes on it, not the component's.
2. Every selector in `components/<name>.css` includes `[data-c-<name>]` on each
   part: `.card[data-c-card] .title[data-c-card]`, `&[data-c-card]:hover`.
   Pseudo-elements go after the attribute: `.title[data-c-card]::before`.
3. A parent can style a child component's root element by passing its own
   attribute in `attrs`, if the child accepts `attrs`:

   ```go-html-template
   {{ partial "ui/button" (dict "href" "/downloads/" "class" "hero-button" "attrs" (dict "data-c-hero" true)) }}
   ```

   with `.hero-button[data-c-hero]` in `hero.css`. In `main.css` the parent's stylesheet must be imported after the child's.
4. To style HTML you don't control, such as rendered Markdown, scope only the
   container: `.legal-content[data-c-page-legal] h2 { ... }` (see `page-legal.css`).
   The blog post body is the one exception: it is styled through its `#blog-content`
   id, marked `/* global */` in `blog-content.css`.

Use the CSS variables from `assets/css/base/global.css` and the existing breakpoints.

## Attributes helper

Use `partial "helpers/attrs"` to write optional attributes. It skips empty
values and writes `true` as a bare attribute. Use `true` for boolean HTML
attributes (`open`, `hidden`) and scope attributes; data attributes that CSS
matches on a value (`[data-hover="true"]`) need the string `"true"`:

```go-html-template
<a class="link"{{ partial "helpers/attrs" (dict "href" .href "target" .target "aria-current" (cond .active "page" "")) }} data-c-nav-item>
```

## Accessibility

- Add ARIA attributes to interactive elements and make them work with the keyboard.
- Give images and icons an appropriate `aria-hidden` or descriptive text.

## Localization in components

Never hard-code user-facing text. Use translation keys. If a translated string
ends in a space and is followed by a link, put the `<a>` right after the text
on the same line, as a line break would add a second space:

```go-html-template
{{ partial "helpers/t" "common:components.paginator.nextPage" }}
{{ partial "helpers/t" (slice "common:components.guideStep.step" (dict "step" 2)) }}
{{ partial "helpers/href" "/downloads/" }}   {{/* localized link */}}
{{ partial "helpers/number" 404 }}           {{/* localized digits */}}
```

See [How to add localization to a page](./how-to-add-localization-to-a-page.md).
