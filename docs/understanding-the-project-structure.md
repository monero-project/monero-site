# Understanding the Project Structure

The Monero website is built with [Hugo](https://gohugo.io/). Content, translations and data live under `src/`, where contributors and Weblate expect them; Hugo's own folders (`layouts/`, `assets/`, `content/`) hold the templates and styles. `hugo.toml` maps the `src/` folders into Hugo (the `[module]` mounts).

## Top-level files you'll use

- `hugo.toml` - site configuration: languages, Markdown settings, which folders Hugo reads.
- `layouts/` - the templates (see below).
- `assets/css/` - the stylesheets.
- `content/` - one small stub file per page, plus the blog builder.
- `docs/` - contributor guides (this folder).
- `public/` - static files served as-is (media, PDFs, favicons, social images).
- `downloads/` - `hashes.txt` and its signature, served at `/downloads/`.
- `src/` - content, translations, data, images (see below).

## Key folders (quick tree)

```
layouts/
├── baseof.html               # The frame of every page: <head>, header, footer
├── home.html, legal.html ... # One template per page; the path mirrors the URL
├── get-started/faq.html      #   e.g. /get-started/faq/
├── blog/                     # Blog post, listing and tag pages
├── _markup/                  # How Markdown links, images, headings and code blocks render
└── _partials/
    ├── ui/                   # Reusable UI components
    ├── pages/                # Page-specific components (blog/, get-started/, etc.)
    ├── helpers/              # Translation, localized links/numbers/dates, Markdown, Moneropedia links
    └── head/                 # SEO tags and the stylesheet link

assets/css/
├── main.css                  # Imports all stylesheets, in order
├── base/                     # Global styles: variables, fonts, links
└── components/               # One stylesheet per component, scoped to it

content/
├── get-started/faq.md ...    # Page stubs: front matter picking the template
└── blog/_content.gotmpl      # Builds the blog pages from src/content/blog/

src/
├── content/
│   ├── blog/                 # Blog posts (Markdown) and their images in assets/
│   ├── moneropedia/en/       # English Moneropedia entries (canonical)
│   ├── moneropedia/<lang>/   # Translated entries
│   └── legal/                # Legal documents shown on /legal/
├── i18n/translations/<lang>/ # Translation JSON files, one per namespace (Weblate)
├── assets/                   # icons/ (color, mask), images/
└── data/                     # Data files (downloads, merchants, exchanges - YAML and JSON)
```

## Common tasks & where to start

- Add a page -> a stub in `content/` and a template in `layouts/` - see [How to Make a New Page](how-to-make-a-new-page.md).
- Add a Moneropedia entry -> `src/content/moneropedia/en/` - see [How to Make a Moneropedia Entry](how-to-make-a-moneropedia-entry.md).
- Create a component -> `layouts/_partials/ui/` (reusable) or `layouts/_partials/pages/` (page-specific) - see [How to Create a New Component](how-to-create-a-new-component.md).
- Add/replace an icon -> `src/assets/icons/` (AVIF, organized into `mask/` and `color/`) and use the `ui/icons/mask-icon` / `ui/icons/color-icon` partials - see [How to Use and Create Icons](how-to-use-and-create-icons.md).
- Add images -> put content images next to content (`src/content/blog/assets/`) or in `src/assets/images/` for shared images; use the `ui/image` partial (see [How to Handle Assets and Images](how-to-handle-assets-and-images.md)).

## Important conventions & restrictions

- SVG files are not allowed due to compatibility concerns; use AVIF/PNG/WEBP formats instead.
- There is zero-tolerance towards client-side JS. Everything happens when the site is built.
- Builds are reproducible: don't add anything that depends on the build time or machine (dates, random values, git info). CI builds every change twice and fails if the two `dist.tar.gz` archives differ; on a GitHub release it attaches that archive to the release.
- Files the CI workflows update keep their paths and formats: `src/data/downloads/core.json`, `src/data/contributing/contributing.json` (+ `.asc`), `public/contributing/*.png`, `downloads/hashes.txt` (+ `.sig`).

## Notes on i18n & Moneropedia

- English files are the source of truth: edit `src/i18n/translations/en/` and `src/content/moneropedia/en/`, and let translators work via Weblate.
- Translated Moneropedia entries are stored in locale subfolders (e.g., `src/content/moneropedia/ar/`). An entry a language hasn't translated is shown in English at that language's URL (e.g. `/ar/resources/moneropedia/airgap/`), but isn't listed in its Moneropedia index; `@term` links to it point at the English page.

## Where to look for examples

- Page template: `layouts/resources/tools.html`, `layouts/resources/moneropedia/page.html`
- Moneropedia linking: `layouts/_partials/helpers/moneropedia-links.html` (translation strings) and `helpers/moneropedia-content.html` (Markdown content)
- Icon components: `layouts/_partials/ui/icons/mask-icon.html`, `color-icon.html` - see [How to Use and Create Icons](how-to-use-and-create-icons.md) for usage and conventions.

If anything above is unclear, see the related short guides: [How to Make a New Page](how-to-make-a-new-page.md), [How to Create a New Component](how-to-create-a-new-component.md).
