# How to Make a Moneropedia Entry

## 1. Add the English source file

Create a new Markdown file in:

```
src/content/moneropedia/en/<slug>.md
```

- Filename: lowercase, hyphen-separated (e.g., `daemon.md`).
- The English file is the source of truth - add your content here.

## 2. Front matter (required)

Use this minimal front matter:

```yaml
---
title: "Daemon"
summary: "Short one-sentence definition (used in tooltips)."
terms:
  - daemon
  - daemon-process
---
```

- `title`: Display name for the entry.
- `summary`: Short definition used in the index and tooltips.
- `terms`: List of terms that should link to this entry (include the primary English term).

**Important:** For translated versions, translators should **append** translated terms to `terms:` while keeping the English words in place (this preserves cross-language linking).

## 3. Write the body (Markdown)

- Keep the style clear and factual. Use short paragraphs and headings.
- Link to other entries using `@term` (e.g., `@block`) - the remark plugin converts these to tooltip links automatically.
- Add images in a local `assets/<file-name>/` folder (e.g., `./assets/daemon/diagram.avif`) and reference them in Markdown: `![Alt text](./assets/daemon/diagram.avif)`.

## 4. I18n & translation workflow

- Do **not** edit localized Markdown files (e.g., `src/content/moneropedia/es/*`) directly - translations are managed via Weblate and compiled by the project's CI (`.github/workflows/moneropedia-translate.yml`).
- If you add or remove English entries, run locally (maintainers):
  - `pnpm run i18n:moneropedia:config` (regenerate po4a config)
  - `pnpm run i18n:moneropedia:update-po` (extract strings)

If you're only adding content in English, submit your PR and the translation team will handle Weblate integration.

## 5. Test & submit

- Run `pnpm dev` and visit `/resources/moneropedia/` and the new entry `/resources/moneropedia/<slug>/`.
- Verify tooltips and `@`-links work, images load, and the summary appears in the index.
- Open a PR with a clear description and link to references or sources.

## PR checklist

- [ ] English source added to `src/content/moneropedia/en/`.
- [ ] Front matter includes `title`, `summary`, and `terms`.
- [ ] Images (if any) placed in `./assets/<file-name>/` and referenced relatively.
- [ ] Run `pnpm dev` and verify entry renders and links work.
- [ ] If you changed files/new files were added, consider running `pnpm run i18n:moneropedia:config` and `pnpm run i18n:moneropedia:update-po` (maintainers may run these during review).

## Examples & references

- See existing entries in `src/content/moneropedia/en/` for style and structure.
- Plugin: `src/plugins/remark-moneropedia/` handles `@term` linking.
- Translation pipeline: `src/i18n/moneropedia/` and `.github/workflows/moneropedia-translate.yml`.

If you need help with content or translation, ask on the Monero localization channels or open an issue on the repo.