# How to Configure a New Language

## Overview

- Add the language to `hugo.toml`.
- Seed translation JSON files for the language under `src/i18n/translations/<lang>/` (copy from `en/`), unless Weblate already created them.
- Add the language's date and digit formats to `data/locale.yaml`.

## 1. Add the language to hugo.toml (required)

Add a block next to the existing `[languages.*]` blocks. Use the short code (ISO 639-1) as the key:

```toml
[languages.de]
  weight = 4               # order in the language menu
  label = "Deutsch"        # the language's own name, shown in the language menu
  locale = "de-DE"         # language-REGION, used in the sitemap
  # direction = "rtl"      # only for right-to-left languages (Arabic, Hebrew, Persian, Urdu)
```

Then, in the `[module]` section, give the language its Moneropedia entries, next to the `ar`/`zh` mounts (before the `en` one, so a translated entry wins over the English one):

```toml
  [[module.mounts]]
    source = "src/content/moneropedia/de"
    target = "content/resources/moneropedia"
    files = ["! **/_*"]
    [module.mounts.sites.matrix]
      languages = ["de"]
```

Notes:
- Every page, the language menu, `hreflang` links and the sitemap pick up the new language automatically. Its pages are built under `/de/`.
- Use the same short code consistently across the repo (e.g., `de`, `pt-br`, `nb-no`), including the folder names in `src/i18n/translations/` and `src/content/moneropedia/`.

## 2. Create translation files (required)

Create a folder for the new language translations:

```
mkdir -p src/i18n/translations/<lang>/
```

Copy all JSON namespace files from `src/i18n/translations/en/` into the new folder to seed the translation keys. Example:

```
cp src/i18n/translations/en/*.json src/i18n/translations/de/
```

Important:
- Commit and push these seed files so the translation system (Weblate) can pick them up.
- Do not manually translate large numbers of strings in the repo; use Weblate for community-driven translations. Small one-off edits for testing are fine.
- Strings that are still empty (untranslated) show in English on the site.

## 3. Add date and number formats (required)

Dates and digits are formatted from `data/locale.yaml`. Add the language under `months` (month names as used in a full date), `dateLong` (with `{d}`, `{month}`, `{y}` placeholders) and, if the language doesn't use 0-9, `digits`. For example:

```yaml
months:
  de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
dateLong:
  de: "{d}. {month} {y}"
```

The browser can tell you the right values: in its console, `new Date(2020, 3, 22).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" })` shows the date format, and `(1234567890).toLocaleString("ar-SA", { useGrouping: false })` the digits. Languages missing here fall back to English formats.

## 4. Test the language locally

- Run: `hugo server`.
- Visit the site and open the language selector - the new language should be listed.
- Check a page with dates (the blog) and one with numbers (the 404 page).
- For RTL languages, preview pages and verify layout/direction looks correct.

## PR checklist

- [ ] Added the language block (and Moneropedia mount) to `hugo.toml`.
- [ ] Created `src/i18n/translations/<lang>/` and seeded all namespace JSON files.
- [ ] Added the language to `data/locale.yaml`.
- [ ] Tested with `hugo server` and confirmed the language appears in the selector and basic strings resolve.

## Troubleshooting

- Language not appearing: check the `[languages.<lang>]` block in `hugo.toml` and restart `hugo server`.
- Missing keys: ensure your namespace files contain the same keys as `en/` (missing ones show in English).
- RTL layout issues: check `direction = "rtl"` is set; open an issue if complex layout changes are required.
