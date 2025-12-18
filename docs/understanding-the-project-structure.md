# Understanding the Project Structure

## Top-level files you’ll use

- `astro.config.mjs`, `package.json` - build & dev settings and scripts (run `pnpm dev`, `pnpm build`).
- `docs/` - contributor guides (this folder).
- `public/` - static files served as-is (robots, favicons, social images).

## Key src/ folders (quick tree)

```
src/
├── pages/                    # Routes (each .astro -> a page URL)
├── components/               # UI, page-specific, and layout components
│   ├── ui/
│   ├── pages/
│   └── layout/
├── content/                  # Content collections (blog/, moneropedia/)
│   └── moneropedia/en/       # English source entries (canonical)
├── i18n/                     # Translations and Moneropedia PO workflow (po4a, gen-config)
├── layouts/                  # Layout templates wrapping pages
├── styles/                   # Global CSS (variables, moneropedia-link.css)
├── assets/                   # icons/ (color, mask), images/
├── data/                     # Static JSON data (downloads, merchants, exchanges)
├── utils/                    # Helpers (moneropedia.ts, image.ts, safeMarkdown)
└── plugins/                  # Remark/AST plugins (remark-moneropedia)
```

## Common tasks & where to start

- Add a page -> `src/pages/` (use `TitleCard`, `Layout`) - see [How to Make a New Page](how-to-make-a-new-page.md).
- Add a Moneropedia entry -> `src/content/moneropedia/en/` and follow Moneropedia i18n workflow - see [How to Make a Moneropedia Entry](how-to-make-a-moneropedia-entry.md).
- Create a component -> `src/components/ui/` (reusable) or `src/components/pages/` (page-specific) - see [How to Create a New Component](how-to-create-a-new-component.md).
- Add/replace an icon -> `src/assets/icons/` (AVIF, organized into `mask/` and `color/`) and use `MaskIcon` / `ColorIcon` - see [How to Use and Create Icons](how-to-use-and-create-icons.md).
- Add images -> put content images next to content (`src/content/.../assets/`) or in `src/assets/images/` for shared images; use `<Image />` component (see [How to Handle Assets and Images](how-to-handle-assets-and-images.md)).

## Notes on i18n & Moneropedia

- English files are the source of truth: edit `src/content/moneropedia/en/` and let translators work via Weblate.
- Moneropedia uses a PO-based pipeline (see `src/i18n/moneropedia/`, package scripts: `i18n:moneropedia:*`) and a GitHub Action that prevents direct edits to localized `.md` files.

## Where to look for examples

- Page template: `src/pages/resources/moneropedia/[...slug].astro`
- Moneropedia utils and linking: `src/utils/moneropedia.ts` and `src/plugins/remark-moneropedia/`
- Icon components: `src/components/ui/MaskIcon.astro`, `ColorIcon.astro` - see [How to Use and Create Icons](how-to-use-and-create-icons.md) for usage and conventions.

If anything above is unclear, see the related short guides: [How to Make a New Page](how-to-make-a-new-page.md), [How to Create a New Component](how-to-create-a-new-component.md).