# How to Configure a New Language

## Overview

- Add the new locale code to `src/i18n/config.ts`.
- Seed translation JSON files for the language under `src/i18n/translations/<lang>/` (copy from `en/`).

## 1. Update the i18n configuration (required)

Edit `src/i18n/config.ts` and add your language to the `locales` object. Use the short code (ISO 639-1) as the key and a locale string (`lang-REGION`) as the value:

```typescript
export const defaultLocale = "en";
export const locales = {
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE", // <-- add your language here
};

// If the language is right-to-left (RTL), add it to this list:
export const rtlLocales = ["ar", "he", "fa", "ur"];
```

Notes:
- Adding a locale here will automatically make it available to the language dropdown and all other i18n utilities (e.g., `getLocale`, `localizeHref`).
- Use the same short code consistently across the repo (e.g., `de`, `pt-br`, `nb-no`).

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

## 3. Test the language locally

- Run: `pnpm dev`.
- Visit the site and open the language selector - the new language should be listed.
- Verify translated UI strings with `t()` work by replacing a string in a namespace file (e.g., `common.json`) for a quick smoke test.
- For RTL languages, preview pages and verify layout/direction looks correct.

## PR checklist

- [ ] Added the new locale to `src/i18n/config.ts`.
- [ ] Created `src/i18n/translations/<lang>/` and seeded all namespace JSON files.
- [ ] If applicable, added the locale to `rtlLocales` (for RTL languages).
- [ ] Tested with `pnpm dev` and confirmed the language appears in the selector and basic strings resolve.

## Troubleshooting

- Language not appearing: confirm `src/i18n/config.ts` was edited correctly and the dev server restarted.
- Missing keys: ensure your namespace files contain the same keys as `en/`.
- RTL layout issues: add the code to `rtlLocales` and verify styles; open an issue if complex layout changes are required.
