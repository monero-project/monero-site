# How to Use the UI Library

This guide documents the reusable UI components in `layouts/_partials/ui/`. Components follow the site's design system, support dark mode, RTL locales, and accessibility patterns.

Every component is a Hugo partial. If you haven't written one yet, read [How to Create a New Component](how-to-create-a-new-component.md) first: it explains the two ways to call a partial, what `.` is inside a block, and how `attrs` and `data-c-<name>` work. In short:

```go-html-template
{{/* no inner content */}}
{{ partial "ui/title-card" (dict "title" "Page title") }}

{{/* with inner content (the "block"), which the component renders where it calls templates.Inner */}}
{{ with partial "ui/layout/page-container" (dict) }}
  <p>Page content</p>
{{ end }}
```

## Quick Rules

- **Reuse existing components** - they handle theming, accessibility, and responsive design.
- **Check params** - the comment at the top of each partial lists every parameter and its default. This guide is a summary.
- **Block or not** - a component that renders inner content must be called with `{{ with partial ... }}...{{ end }}`, even if the block is empty. Each section below says whether it takes a block.
- **Inside a block, `.` is the dict you passed** - outer variables (`$foo`) are not available; pass what the block needs in the dict (see [the "d" pattern](how-to-create-a-new-component.md#parameters-and-content-slots)).
- **Links aren't localized for you** - wrap site paths in `partial "helpers/href"` (e.g. `(partial "helpers/href" "/downloads/")`) before passing them as `href`.
- **Icons** are given by mask icon name (`"book"`) or asset path (`"icons/mask/book.avif"`), see [Icons](#icons).
- **Images** are asset paths under `src/assets/` (`"images/mrl-logo.avif"`), see [How to Handle Assets and Images](how-to-handle-assets-and-images.md).
- **Don't duplicate** - if a component exists, use it; if you need something similar, extend it.
- **Page-specific components** belong in `layouts/_partials/pages/<page>/`, not `ui/`.
- Most components accept `class` and `attrs`. Use `attrs` to put your page's scope attribute on the component's root so your CSS can target it (`"attrs" (dict "data-c-page-foo" true)`).

The examples use literal text to stay short. On real pages, text comes from `partial "helpers/t"` (see [How to Add Localization to a Page](how-to-add-localization-to-a-page.md)).

## Component Reference

### Layout Components

Components for structuring page content. Located in `layouts/_partials/ui/layout/`. All take a block.

#### page-container
Main content wrapper with consistent bottom padding.
```go-html-template
{{ with partial "ui/layout/page-container" (dict) }}
  <!-- Page content here -->
{{ end }}
```
**Params**: `id`, `class`, `attrs`

#### grid
Responsive grid layout. Give **either** `columns` (a column count that collapses responsively) **or** `minWidth` (fluid columns); the build fails if you give both or neither.
```go-html-template
{{/* Fixed 3 columns (collapses responsively) */}}
{{ with partial "ui/layout/grid" (dict "columns" 3 "gap" "xl") }}
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
{{ end }}

{{/* Fluid: items wrap when smaller than 20rem */}}
{{ with partial "ui/layout/grid" (dict "minWidth" "20rem" "gap" "md") }}
  <div>Item 1</div>
  <div>Item 2</div>
{{ end }}

{{/* As a list */}}
{{ with partial "ui/layout/grid" (dict "as" "ul" "columns" 2 "gap" "sm") }}
  <li>Item 1</li>
  <li>Item 2</li>
{{ end }}
```
**Params**: `columns` (2|3|4), `minWidth` (string), `gap` (2xs..3xl, default lg), `as` (div|ul|ol), `class`, `attrs`

#### column
Vertical flex container.
```go-html-template
{{ with partial "ui/layout/column" (dict "gap" "lg" "align" "center") }}
  <p>Stacked vertically</p>
  <p>With gap between</p>
{{ end }}
```
**Params**: `gap` (2xs..3xl, default md), `align` (start|center|end|stretch, default stretch), `as` (div|ul|ol|section|nav|article), `class`, `attrs`

#### row
Horizontal flex container.
```go-html-template
{{ with partial "ui/layout/row" (dict "gap" "md" "justify" "between" "align" "center") }}
  <span>Left</span>
  <span>Right</span>
{{ end }}

{{ with partial "ui/layout/row" (dict "gap" "sm" "wrap" false) }}
  {{ with partial "ui/button" (dict) }}One{{ end }}
  {{ with partial "ui/button" (dict) }}Two{{ end }}
{{ end }}
```
**Params**: `gap` (2xs..2xl, default md), `justify` (start|center|end|between|around), `align` (start|center|end|baseline|stretch, default center), `wrap` (default true), `as` (div|ul|ol|nav), `class`, `attrs`

#### page-section
Section with optional title, subtitle, and anchor ID for navigation. The heading gets the `anchorId` as its `id`, and the section is labelled by it.
```go-html-template
{{ with partial "ui/layout/page-section" (dict
  "title" "Getting Started"
  "subtitle" "Learn the basics"
  "anchorId" "getting-started"
  "headingLevel" 2
) }}
  <p>Section content...</p>
{{ end }}
```
**Params**: `title`, `subtitle`, `headingLevel` (default 2), `anchorId`, `ariaLabel`, `centered`, `class`, `attrs`

#### media-section
Two columns: content (the block) next to an aside (usually an image), stacked on narrow screens. Takes a block.
```go-html-template
{{ with partial "ui/media-section" (dict "reverse" true "aside" (partial "ui/image" (dict "src" "images/server.avif" "alt" "" "format" "avif"))) }}
  <h2>Run a node</h2>
  <p>...</p>
{{ end }}
```
**Params**: `aside` (HTML), `reverse`, `hideAsideOnMobile` (default true), `as` (section|div|article), `class`, `attrs`

---

### Page Header

#### title-card
Page title (`<h1>`) with optional subtitle and back link. No block.
```go-html-template
{{/* Simple */}}
{{ partial "ui/title-card" (dict "title" "Page Title" "subtitle" "A brief description") }}

{{/* With back link (needs both backHref and backLabel) */}}
{{ partial "ui/title-card" (dict
  "title" "Sub Page"
  "subtitle" "Description"
  "backHref" (partial "helpers/href" "/resources/knowledge-base/")
  "backLabel" "Back to Knowledge Base"
) }}

{{/* Centered */}}
{{ partial "ui/title-card" (dict "title" "Centered Title" "centered" true) }}
```
**Params**: `title`, `subtitle`, `centered`, `backHref`, `backLabel`

---

### Cards

#### card
Base card. Use as a building block or standalone. Takes a block.
```go-html-template
{{ with partial "ui/card" (dict "padding" "lg" "radius" "md") }}
  <p>Card content</p>
{{ end }}

{{/* As a clickable link: the tag is "a", the href goes in attrs */}}
{{ with partial "ui/card" (dict "as" "a" "hover" true "padding" "md" "attrs" (dict "href" (partial "helpers/href" "/downloads/"))) }}
  Click me
{{ end }}

{{/* With border, no background */}}
{{ with partial "ui/card" (dict "border" true "transparent" true "padding" "sm") }}
  Bordered transparent card
{{ end }}
```
**Params**: `as` (any tag, default div), `padding` (none|xs|sm|md|lg|xl|2xl, default xl), `radius` (none|sm|md|lg|xl, default md), `border`, `hover`, `transparent`, `class`, `attrs`

#### content-card
Article card with optional image, icon and subtitle. The block is the body; `bottom` is optional footer HTML (e.g. buttons).
```go-html-template
{{ with partial "ui/content-card" (dict
  "title" "Card Title"
  "subtitle" "Optional subtitle"
  "icon" "book-text"
  "bottom" (partial "inline/my-page-buttons" .)
) }}
  <p>Card body content</p>
{{ end }}

{{/* With image */}}
{{ with partial "ui/content-card" (dict "title" "With Image" "image" "images/server.avif" "imageAlt" "A server") }}
  <p>Content below image</p>
{{ end }}
```
**Params**: `title`, `subtitle`, `icon`, `image` (asset path), `imageAlt`, `bottom` (HTML), `class`, `attrs`

`bottom` is HTML rendered before the call. Components that take a block can't be called inline in a dict, so put them in an inline partial defined in the same page template (`layouts/get-started/mining.html` does this with `inline/mining-card-link`):
```go-html-template
{{- define "_partials/inline/my-page-buttons" -}}
  {{ with partial "ui/button" (dict "href" "/a/") }}Option A{{ end }}
  {{ with partial "ui/button" (dict "href" "/b/" "variant" "secondary") }}Option B{{ end }}
{{- end -}}
```

#### ctacard
Call-to-action card with icon, title, description (the block) and a button.
```go-html-template
{{ with partial "ui/ctacard" (dict
  "title" "Get Started"
  "href" (partial "helpers/href" "/get-started/what-is-monero/")
  "linkText" "Begin Now"
  "icon" "zap"
) }}
  Start your journey with Monero today.
{{ end }}

{{/* Centered variant */}}
{{ with partial "ui/ctacard" (dict "title" "Join Us" "href" "mailto:dev@getmonero.org" "linkText" "Contact us" "variant" "centered") }}
  Become part of the community.
{{ end }}
```
Custom buttons replace the default one. Render them first (with an inline partial like `inline/my-page-buttons` [above](#content-card)) and pass them as `buttons`:
```go-html-template
{{ with partial "ui/ctacard" (dict "title" "Choose Option" "icon" "component" "buttons" (partial "inline/my-page-buttons" .)) }}
  Pick the best option for you.
{{ end }}
```
**Params**: `title`, `href` + `linkText` (the default button), `buttons` (HTML), `icon`, `variant` ("centered"), `class`, `attrs`

#### hero-card
Large featured card with a 200px image, typically for highlighting a workgroup or resource. The block holds the action buttons.
```go-html-template
{{ with partial "ui/hero-card" (dict
  "image" "images/community-logo.avif"
  "imageAlt" ""
  "title" "Monero Community"
  "lead" "Join thousands of contributors"
  "description" "The community workgroup welcomes everyone."
) }}
  {{ with partial "ui/button" (dict "href" "https://matrix.to/#/#monero-community:monero.social" "target" "_blank" "rel" "noopener noreferrer") }}Join Now{{ end }}
{{ end }}
```
**Params**: `image` (asset path, required), `imageAlt`, `title`, `lead`, `description`, `class`. It has no `attrs`.

#### category-card
Clickable navigation card with image, title, description and a "link" line. No block.
```go-html-template
{{ partial "ui/category-card" (dict
  "title" "Library"
  "description" "Books and guides about Monero"
  "href" (partial "helpers/href" "/resources/library/")
  "image" "images/knowledge-base/library.avif"
) }}

{{/* Custom link text (default: "Explore") */}}
{{ partial "ui/category-card" (dict
  "title" "Resources"
  "description" "Learn more about Monero"
  "href" (partial "helpers/href" "/resources/knowledge-base/")
  "linkText" "Browse Resources"
) }}
```
**Params**: `title`, `description`, `href`, `image` (asset path), `linkText`

---

### Buttons & Links

#### button
Primary action button with variants. The block is the label. It renders `<a>` when `href` is set, otherwise `<button>` (or `<span role="button">` with `"as" "span"`, e.g. inside a `<summary>`).
```go-html-template
{{ with partial "ui/button" (dict "variant" "primary") }}Primary{{ end }}
{{ with partial "ui/button" (dict "variant" "secondary") }}Secondary{{ end }}
{{ with partial "ui/button" (dict "variant" "outline") }}Outline{{ end }}
{{ with partial "ui/button" (dict "variant" "danger") }}Danger{{ end }}

{{/* As a link */}}
{{ with partial "ui/button" (dict "href" (partial "helpers/href" "/downloads/")) }}Go to Page{{ end }}

{{/* External link */}}
{{ with partial "ui/button" (dict "href" "https://example.com" "target" "_blank" "rel" "noopener noreferrer") }}
  External
  {{ partial "ui/icons/mask-icon" (dict "src" "external-link" "size" "1em") }}
{{ end }}
```
**Params**: `href`, `target`, `rel`, `variant` (primary|secondary|outline|danger), `as` (button|span, ignored with `href`), `type` (button|submit|reset), `class`, `attrs`

#### icon-link
Text link with an icon: an arrow, or the external-link icon for links starting with `http` or `//` (which also open in a new tab). The block is the link text. Arrows are mirrored in RTL languages automatically.
```go-html-template
{{/* Internal link (shows arrow) */}}
{{ with partial "ui/icon-link" (dict "href" (partial "helpers/href" "/downloads/")) }}View Downloads{{ end }}

{{/* External link (shows external icon automatically) */}}
{{ with partial "ui/icon-link" (dict "href" "https://github.com") }}GitHub{{ end }}

{{/* Custom icon */}}
{{ with partial "ui/icon-link" (dict "href" "/docs/" "icon" "book-text") }}Documentation{{ end }}

{{/* No icon */}}
{{ with partial "ui/icon-link" (dict "href" "/about/" "icon" "") }}About{{ end }}

{{/* Styled variants */}}
{{ with partial "ui/icon-link" (dict "href" "/page/" "color" "heading" "weight" "bold" "underline" true) }}
  Bold Heading Link
{{ end }}
```
**Params**: `href`, `icon` (`""` for none), `iconPosition` (start|end), `iconSize` (default 1em), `size` (sm|base|lg), `weight` (normal|medium|semibold|bold), `color` (orange|heading|inherit), `underline`, `external` (default: guessed from `href`), `as` (tag; default `a`, or `span` without `href`), `class`, `attrs`

#### back-link
Back navigation link with a chevron (mirrored in RTL). The block is the label.
```go-html-template
{{ with partial "ui/back-link" (dict "href" (partial "helpers/href" "/resources/moneropedia/")) }}Back to Moneropedia{{ end }}

{{/* Large variant */}}
{{ with partial "ui/back-link" (dict "href" (partial "helpers/href" "/") "size" "lg") }}Home{{ end }}
```
**Params**: `href`, `size` (sm|lg), `class`, `attrs`

#### external-resource-button
Card-style link to an external site with logo, title, subtitle and an optional Tor link. No block.
```go-html-template
{{ partial "ui/external-resource-button" (dict
  "href" "https://cakewallet.com"
  "title" "Cake Wallet"
  "subtitle" "Mobile wallet for iOS and Android"
  "logo" "images/wallets/cakewallet.avif"
) }}

{{/* With Tor onion link */}}
{{ partial "ui/external-resource-button" (dict
  "href" "https://xmrchain.net"
  "title" "xmrchain.net"
  "subtitle" "Block explorer"
  "onionHref" "http://example.onion"
) }}

{{/* Mini variant */}}
{{ partial "ui/external-resource-button" (dict "href" "https://example.com" "title" "Compact" "variant" "mini") }}
```
**Params**: `href`, `title`, `subtitle`, `logo` (asset path), `onionHref`, `variant` (default|mini), `border`, `class`, `attrs`

#### internal-resource-button
Info bar with icon, title and description (the block). With `href` the whole bar is a link with an arrow.
```go-html-template
{{ with partial "ui/internal-resource-button" (dict
  "icon" "users"
  "title" "Join the Community"
  "href" (partial "helpers/href" "/community/workgroups/")
) }}
  Connect with other Monero users and contributors.
{{ end }}
```
**Params**: `icon`, `title`, `href`. It has no `class` or `attrs`.

---

### Navigation Components

#### accordion
Collapsible sections for FAQs and expandable content. Items share a `<details name>`, so opening one closes the others, unless `multiExpand` is set.
```go-html-template
{{/* Option 1: items (no block). content must be HTML, e.g. from helpers/markdown */}}
{{ partial "ui/accordion/accordion" (dict "items" (slice
  (dict "title" "What is Monero?" "content" (partial "helpers/markdown" "Monero is a **privacy-focused** cryptocurrency."))
  (dict "title" "How do I get started?" "content" (partial "helpers/markdown" "Download a wallet and acquire some XMR."))
)) }}

{{/* Option 2: block with accordion-item partials (for rich content). Give the items the same name. */}}
{{ with partial "ui/accordion/accordion" (dict) }}
  {{ with partial "ui/accordion/accordion-item" (dict "title" "First Question" "variant" "card" "name" "faq") }}
    <p>Answer with <strong>rich formatting</strong>.</p>
  {{ end }}
  {{ with partial "ui/accordion/accordion-item" (dict "title" "Second Question" "variant" "card" "name" "faq") }}
    <p>Another answer.</p>
    {{ with partial "ui/button" (dict "href" (partial "helpers/href" "/get-started/what-is-monero/")) }}Learn More{{ end }}
  {{ end }}
{{ end }}

{{/* Allow several open: with items, set multiExpand; with a block, leave out name */}}
{{ with partial "ui/accordion/accordion" (dict) }}
  {{ with partial "ui/accordion/accordion-item" (dict "title" "Can be open" "variant" "card") }}Content 1{{ end }}
  {{ with partial "ui/accordion/accordion-item" (dict "title" "At the same time" "variant" "card") }}Content 2{{ end }}
{{ end }}
```
**accordion Params**: `items` (list of dict `title`, `content`), `multiExpand`, `variant` (default|card)  
**accordion-item Params**: `title`, `content` (if set, used instead of the block, which may then be empty), `variant` (default|card), `name` (shared by items that close each other), `open`

With a block, `multiExpand` and `variant` on the accordion are ignored: set `variant` and `name` on each item.

#### page-tabs
Tabs, either switching panels on the same page (CSS only) or as navigation links to other pages. No block: panels are passed as a list of HTML. `id` is required and must be unique on the page.
```go-html-template
{{/* Same-page panels */}}
{{ partial "ui/tabs/page-tabs" (dict
  "id" "tabs-example"
  "labels" (slice "Overview" "Details" "FAQ")
  "panels" (slice ("<p>Overview content</p>" | safeHTML) ("<p>Details content</p>" | safeHTML) ("<p>FAQ content</p>" | safeHTML))
  "initial" 1
) }}

{{/* Page navigation */}}
{{ partial "ui/tabs/page-tabs" (dict
  "id" "tabs-downloads"
  "labels" (slice "Core" "Community")
  "links" (slice (partial "helpers/href" "/downloads/") (partial "helpers/href" "/downloads/community/"))
  "activeIndex" 0
) }}
```
In practice each panel is rendered by a partial (e.g. `(partial "inline/my-panel" .)`), see `layouts/downloads.html` and `layouts/_partials/pages/blog/post-list.html`.

**Params**: `id` (required), `labels` (1 to 10), `links` (one per label: navigation mode), `activeIndex` (highlighted link), `panels` (HTML, one per label: same-page mode), `initial` (0-based tab shown first)

#### section-tabs
Tabs within a section, with optional count badges. No block; panels are a list of HTML, as for page-tabs. At most 5 tabs get a panel.
```go-html-template
{{ partial "ui/tabs/section-tabs" (dict
  "tabs" (slice (dict "label" "Published" "count" 12) (dict "label" "Drafts" "count" 3) (dict "label" "Archived"))
  "panels" (slice ("Published items" | safeHTML) ("Draft items" | safeHTML) ("Archived items" | safeHTML))
) }}
```
**Params**: `tabs` (list of dict `label`, `count`), `panels` (HTML, one per tab), `class`

See `layouts/resources/research-lab.html` for panels rendered by an inline partial.

#### toccontainer / tocitem
Table of contents for long pages. No block. `toccontainer` writes one `tocitem` per section, linking to `#<id>`.
```go-html-template
{{ partial "ui/toc/toccontainer" (dict
  "ariaLabel" "Page sections"
  "sections" (slice
    (dict "id" "overview" "icon" "globe" "title" "Overview" "subtitle" "Introduction to the topic")
    (dict "id" "details" "icon" "search" "title" "Details" "subtitle" "In-depth information")
  )
) }}

{{/* Then use matching anchor IDs */}}
{{ with partial "ui/layout/page-section" (dict "title" "Overview" "anchorId" "overview") }}...{{ end }}
{{ with partial "ui/layout/page-section" (dict "title" "Details" "anchorId" "details") }}...{{ end }}
```
**toccontainer Params**: `sections` (list of dict `id`, `icon`, `title`, `subtitle`), `ariaLabel`  
**tocitem Params**: `href`, `icon`, `title`, `subtitle`, `tag` (a|span), `class`, `attrs`

#### dropdown
Expandable menu (`<details>`). The block is the menu content, usually `dropdown-item` and `dropdown-separator` partials.
```go-html-template
{{ with partial "ui/dropdown/dropdown" (dict "label" "Options" "name" "example-menu") }}
  {{ with partial "ui/dropdown/dropdown-item" (dict "href" "/option-1/" "meta" "95 MB") }}Option 1{{ end }}
  {{ partial "ui/dropdown/dropdown-separator" . }}
  {{ with partial "ui/dropdown/dropdown-item" (dict "href" "/option-2/") }}Option 2{{ end }}
{{ end }}
```
**dropdown Params**: `label` (text of the default trigger button), `name` (dropdowns with the same name close each other), `trigger` (HTML replacing the default button)  
**dropdown-item Params**: `href`, `meta` (text or HTML shown at the end), `class`, `attrs`. The block is the label.  
**dropdown-separator**: no params.

See `layouts/_partials/pages/downloads/core-card.html`.

#### paginator
Page navigation for a paginated list, with "…" for large page counts. Its context is a Hugo pager (no dict, no block). Nothing is written when there is only one page.
```go-html-template
{{ partial "ui/paginator" .Paginator }}
```
Anything shaped like a pager works (`PageNumber`, `TotalPages`, `Pagers`, `Prev`, `Next`, each page with a `URL`); the blog builds its own in `layouts/_partials/pages/blog/post-list.html`.

---

### Sidebar Components

For pages with a sidebar layout. Located in `layouts/_partials/ui/sidebar/`.

#### sidebar-layout
Two-column layout with a sticky sidebar, stacked on narrow screens. The block is the main content; the sidebar is passed as HTML.
```go-html-template
{{ with partial "ui/sidebar/sidebar-layout" (dict "sidebar" (partial "inline/my-page-sidebar" .) "sidebarWidth" "18rem" "gap" "2xl") }}
  <article>
    <h2>Main Content</h2>
    <p>This is the main content area.</p>
  </article>
{{ end }}
```
with the sidebar defined in the same page template:
```go-html-template
{{- define "_partials/inline/my-page-sidebar" -}}
  {{ with partial "ui/sidebar/sidebar-card" (dict "title" "Related") }}
    <p>Sidebar content</p>
  {{ end }}
{{- end -}}
```
**Params**: `sidebar` (HTML), `sidebarWidth` (default 20rem), `sidebarPosition` (start|end), `gap` (lg|xl|2xl|3xl), `class`, `attrs`

#### sidebar-card
Box for sidebar content with optional title/subtitle. Takes a block.
```go-html-template
{{ with partial "ui/sidebar/sidebar-card" (dict "title" "Quick Links" "subtitle" "Useful resources") }}
  {{ with partial "ui/sidebar/sidebar-link" (dict "href" "/resources/library/" "icon" "book-text") }}Library{{ end }}
  {{ with partial "ui/sidebar/sidebar-link" (dict "href" "/get-started/faq/" "icon" "faq") }}FAQ{{ end }}
{{ end }}
```
**Params**: `title`, `subtitle`, `class`, `attrs`

#### sidebar-link
Sidebar link with icon and arrow. The block is the link text.
```go-html-template
{{ with partial "ui/sidebar/sidebar-link" (dict "href" (partial "helpers/href" "/resources/library/") "icon" "book-text") }}
  Library
{{ end }}

{{/* External link: unlike icon-link, external is not guessed from the href */}}
{{ with partial "ui/sidebar/sidebar-link" (dict "href" "https://github.com/monero-project" "icon" "code-xml" "external" true) }}
  GitHub
{{ end }}
```
**Params**: `href`, `icon` (required), `external` (opens in a new tab), `class`, `attrs`

---

### Disclaimers

#### disclaimer-bar
Prominent disclaimer with icon and title. The block is the text; it goes inside a `<p>`, so keep it inline HTML (links are fine).
```go-html-template
{{ with partial "ui/disclaimer/disclaimer-bar" (dict "icon" "shield-alert" "title" "Disclaimer") }}
  This list is provided for informational purposes only.
  <a href="{{ partial "helpers/href" "/legal/" }}">Learn more</a>.
{{ end }}
```
**Params**: `icon`, `title`

#### disclaimer-note
Compact inline disclaimer with a shield icon. No block.
```go-html-template
{{ partial "ui/disclaimer/disclaimer-note" (dict "text" "Always verify downloads using checksums.") }}
```
**Params**: `text`

---

### Media

#### image / themeable-image
Responsive images from `src/assets/`. See [How to Handle Assets and Images](how-to-handle-assets-and-images.md).
```go-html-template
{{ partial "ui/image" (dict "src" "images/landing.avif" "alt" "" "format" "avif") }}
{{ partial "ui/themeable-image" (dict "src" "images/what-is-monero/privacy-light.avif" "darkSrc" "images/what-is-monero/privacy-dark.avif" "alt" "") }}
```

#### video-container
Sizes a `<video>` (the block).
```go-html-template
{{ with partial "ui/video-container" (dict "maxWidth" "854px" "centered" true) }}
  <video controls preload="none" poster="/media/what-is-monero.webp">
    <source src="/media/what-is-monero.webm" type="video/webm">
  </video>
{{ end }}
```
**Params**: `maxWidth` (default 100%), `centered`, `class`, `attrs`

---

### Icons

See [How to Use and Create Icons](how-to-use-and-create-icons.md) for full documentation. Neither icon takes a block.

```go-html-template
{{/* Monochrome (takes the text colour) */}}
{{ partial "ui/icons/mask-icon" (dict "src" "wallet" "size" "1.5em") }}

{{/* With explicit color */}}
{{ partial "ui/icons/mask-icon" (dict "src" "shield-check" "size" "1em" "color" "green") }}

{{/* RTL-aware (flips arrow direction) */}}
{{ partial "ui/icons/mask-icon" (dict "src" "arrow-right" "rtl" (eq site.Language.Direction "rtl")) }}

{{/* Color icon with dark mode */}}
{{ partial "ui/icons/color-icon" (dict "src" "icons/color/light/faq.avif" "darkSrc" "icons/color/dark/faq.avif" "size" "2em") }}
```

---

### Site chrome

`ui/header/*`, `ui/footer` and `ui/preview-banner` are rendered once by `layouts/baseof.html`; you don't call them from pages. Header and footer links are data: `src/data/navigation.yaml` and `src/data/footer.yaml`.

---

## Best Practices

### Accessibility
- Interactive components include ARIA attributes and keyboard support.
- Use semantic HTML elements via the `as` param where appropriate (`"as" "ul"` on a grid of `<li>`).
- Provide `ariaLabel` for navigation regions (e.g. `toccontainer`).

### Localization
- Components get their own UI strings with `partial "helpers/t"` (keys under `components.` in `src/i18n/translations/<lang>/common.json`).
- Components read the text direction from `site.Language.Direction` and mirror arrows in RTL automatically. Only pass `rtl` yourself when you place a directional icon directly.
- Localize site paths with `partial "helpers/href"` before passing them to a component.

### Performance
- Components render to static HTML and CSS: there is no client-side JavaScript. Tabs, accordions and dropdowns work with `<details>` and radio inputs.
- Icons and images are only published when a template uses them.

## Where to Find Examples

| Component | Example Usage |
|-----------|---------------|
| accordion | [layouts/get-started/accept-monero.html](../layouts/get-started/accept-monero.html) |
| grid/column | [layouts/community/hangouts.html](../layouts/community/hangouts.html) |
| page-tabs | [layouts/downloads.html](../layouts/downloads.html) |
| sidebar-layout, section-tabs | [layouts/resources/research-lab.html](../layouts/resources/research-lab.html) |
| toccontainer | [layouts/resources/library.html](../layouts/resources/library.html) |
| hero-card | [layouts/community/workgroups.html](../layouts/community/workgroups.html) |
| ctacard | [layouts/community/sponsorships.html](../layouts/community/sponsorships.html) |
| content-card | [layouts/get-started/mining.html](../layouts/get-started/mining.html) |
| category-card | [layouts/resources/tools.html](../layouts/resources/tools.html) |
| dropdown | [layouts/_partials/pages/downloads/core-card.html](../layouts/_partials/pages/downloads/core-card.html) |
| media-section, themeable-image | [layouts/get-started/what-is-monero.html](../layouts/get-started/what-is-monero.html) |

## Adding New Components

1. Create it in `layouts/_partials/ui/` (or an appropriate subfolder).
2. Document its params and an example in the comment at the top of the file.
3. Support dark mode via CSS variables.
4. Test RTL layout if the component has directional elements.
5. Add documentation to this file.
6. Run `python3 scripts/check-scoped-css.py`, build with `hugo`, and test across breakpoints.

See [How to Create a New Component](how-to-create-a-new-component.md) for detailed guidelines.
