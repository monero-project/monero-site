# How to Add a New Download Item

This guide explains how to add a new community download item (e.g., wallet, node software) to the Monero website's Downloads > Community section.

## Files you'll have to edit
- `src/data/downloads/community.json` (where community items are listed)
- `public/media/` (place logo files here; `logo` uses a `/media/...` path)
- `src/i18n/translations/<lang>/translation.json` (add `descriptions` and `tags` keys for translations)

## JSON structure (example)

Add a new object to `src/data/downloads/community.json` in the appropriate section.

Top-level sections:
- `wallets` (has subcategories: `moneroOnly`, `multiCoin`, `lws`)
- `cold` (cold/hardware wallets and offline signer apps)
- `nodes` (node software implementations)

Example for a Monero-only wallet:

```json
{
    "wallets": {
        "moneroOnly": [
            {
                "id": "mywallet",
                "name": "MyWallet",
                "logo": "/media/mywallet.avif",
                "link": "https://mywallet.example",
                "tags": {
                    "mobile": ["android"],
                    "general": ["MIT", "i18n:builtInExchange"]
                }
            }
        ]
    }
}

```

Notes:
- `id` must be unique and is used to look up the description translation at `downloads.community.descriptions.<id>`.
- `logo` is expected to be in `public/media/` and referenced as `/media/<file>`.
- `link` should be a full URL (include `https://`).

## Tags
Tags are grouped under `tags` with these properties:
- `mobile`: array of platforms (accepted: `android`, `ios`).
- `desktop`: array of platforms (accepted: `windows`, `macos`, `linux`).
- `general`: array of general labels (licenses, features, or translatable tags).

Rules and examples:
- Licenses appear as plain strings: `"GPL-3.0"`, `"MIT"`.
- Feature/label tags you want translated: prefix with `i18n:` and use a short key, e.g. `"i18n:builtInExchange"` or `"i18n:qrSigning"`.

Tags with `i18n:` are shown using the site translations via `downloads.community.tags.<key>` (see next section)

## Making tags localizable
1. In `community.json` use `"i18n:<key>"` in your tag list (e.g., `"i18n:builtInExchange"`).
2. Add the label to translations, for example in `src/i18n/translations/en/translation.json`:

```json
{
  "downloads": {
    "community": {
      "tags": {
        "builtInExchange": "Built-in exchange",
        "qrSigning": "QR Signing"
      }
    }
  }
}
```

## Adding descriptions
Descriptions are not stored directly in `community.json`. Instead, add a translation string at `downloads.community.descriptions.<id>`:

```json
{
  "downloads": {
    "community": {
        "descriptions": {
            "mywallet": "MyWallet is a secure Monero wallet with built-in exchange features."
        }
    }
  }
}
```

This keeps text translatable and consistent across locales.

## Testing
- Run the dev server: `pnpm dev` and visit `/downloads/community/`.
- Verify the logo shows up, link opens, platform pills render (desktop/mobile), and general tags appear.
- If you used `i18n:` tags, ensure the translation key exists under `downloads.community.tags.<key>` and displays correctly.

## PR checklist
- [ ] Add the logo to `public/media/` and reference it from `community.json`.
- [ ] Update `src/data/downloads/community.json` with the new item in the correct section.
- [ ] Add `downloads.community.descriptions.<id>` to `src/i18n/translations/<lang>/translation.json` (English at minimum).
- [ ] Add any `downloads.community.tags.<key>` translation keys if you used `i18n:` tags.
- [ ] Run `pnpm dev` and visually check `/downloads/community/`.
