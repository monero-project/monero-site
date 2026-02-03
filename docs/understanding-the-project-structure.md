# Understanding the Project Structure

The Monero website is built with the [Astro](https://astro.build/) framework. The project structure is designed to keep content, components, styles, and utilities organized for easy development and maintenance.

## Top-level files you’ll use

- `astro.config.mjs`, `package.json` - build & dev settings and scripts (run `pnpm dev`, `pnpm build`).
- `docs/` - contributor guides (this folder).
- `public/` - static files served as-is (robots, favicons, social images).
- `src/` - main source code (see below for details).

## Key src/ folders (quick tree)

```
src/
├── pages/                    # Routes (each .astro -> a page URL)
├── components/
│   ├── ui/                   # Reusable UI components
│   └── pages/                # Page-specific components (blog/, get-started/, etc.)
├── content/                  # Content collections (blog/, moneropedia/)
│   └── moneropedia/en/       # English source entries (canonical)
├── i18n/                     # Translations
├── layouts/                  # Layout templates wrapping pages
├── styles/                   # Global CSS (variables, moneropedia-link.css)
├── assets/                   # icons/ (color, mask), images/
├── data/                     # Data files (downloads, merchants, exchanges - TS and JSON)
├── utils/                    # Helpers (icons.ts, moneropedia.ts, image.ts, safeMarkdown.ts)
└── plugins/                  # Remark/AST plugins (remark-moneropedia)
```

## Common tasks & where to start

- Add a page -> `src/pages/` (use `TitleCard`, `Layout`, `PageContainer`) - see [How to Make a New Page](how-to-make-a-new-page.md).
- Add a Moneropedia entry -> `src/content/moneropedia/en/` and follow Moneropedia i18n workflow - see [How to Make a Moneropedia Entry](how-to-make-a-moneropedia-entry.md).
- Create a component -> `src/components/ui/` (reusable) or `src/components/pages/` (page-specific) - see [How to Create a New Component](how-to-create-a-new-component.md).
- Add/replace an icon -> `src/assets/icons/` (AVIF, organized into `mask/` and `color/`) and use `icons` utility with `MaskIcon` / `ColorIcon` - see [How to Use and Create Icons](how-to-use-and-create-icons.md).
- Add images -> put content images next to content (`src/content/.../assets/`) or in `src/assets/images/` for shared images; use `<Image />` component (see [How to Handle Assets and Images](how-to-handle-assets-and-images.md)).

## Important conventions & restrictions
- SVG files are not allowed due to compatibility concerns; use AVIF/PNG/WEBP formats instead.
- There is zero-tolerance towards client-side JS. JavaScript is only used during build time.

## Notes on i18n & Moneropedia

- English files are the source of truth: edit `src/content/moneropedia/en/` and let translators work via Weblate.
- Translated Moneropedia entries are stored in locale subfolders (e.g., `src/content/moneropedia/ar/`, `src/content/moneropedia/es/`).

## Where to look for examples

- Page template: `src/pages/resources/moneropedia/[...slug].astro`
- Moneropedia utils and linking: `src/utils/moneropedia.ts` and `src/plugins/remark-moneropedia/`
- Icon components: `src/components/ui/icons/MaskIcon.astro`, `ColorIcon.astro` - see [How to Use and Create Icons](how-to-use-and-create-icons.md) for usage and conventions.
- Icons utility: `src/utils/icons.ts` - provides `icons.mask()` and `icons.color()` helpers for cleaner icon imports.

If anything above is unclear, see the related short guides: [How to Make a New Page](how-to-make-a-new-page.md), [How to Create a New Component](how-to-create-a-new-component.md).