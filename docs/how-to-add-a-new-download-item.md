# How to Add a New Download Item

This guide explains how to add a new community download item (e.g., wallet, node software) to the Monero website's Downloads > Community section.

## Files you'll have to edit
- `src/data/downloads/community.yaml` (where community items are listed)
- `src/assets/images/wallets/` or `src/assets/images/nodes/` (place logo files here)
- `src/i18n/translations/<lang>/downloads.json` (add `descriptions` and `tags` keys for translations)

## Data structure (example)

Add a new entry to `src/data/downloads/community.yaml` in the appropriate section.

Top-level sections (under `community:`):
- `wallets` (has subcategories: `moneroOnly`, `multiCoin`, `lws`)
- `cold` (cold/hardware wallets and offline signer apps)
- `nodes` (node software implementations)

### Step 1: Add the logo

Put the logo in `src/assets/images/wallets/` (or `nodes/`, `wallets/hardware/`). AVIF or WebP preferred.

### Step 2: Add the wallet entry

Add a new item to the appropriate list:

```yaml
      - id: mywallet
        name: MyWallet
        logo: images/wallets/mywallet.avif
        link: "https://mywallet.example"
        tags:
          mobile:
            - android
          general:
            - MIT
            - "i18n:builtInExchange"
```

Notes:
- `id` must be unique and is used to look up the description translation at `downloads:community.descriptions.<id>`.
- `logo` is the image's path inside `src/assets/` (the build resizes it).
- `link` should be a full URL (include `https://`).
- Wallets are listed by number of supported platforms, then by name; the order in the file doesn't matter.

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
1. In `community.yaml` use `"i18n:<key>"` in your tag list (e.g., `"i18n:builtInExchange"`).
2. Add the label to `src/i18n/translations/en/downloads.json` under `community.tags`:

```json
{
  "community": {
    "tags": {
      "builtInExchange": "Built-in exchange",
      "qrSigning": "QR Signing"
    }
  }
}
```

## Adding descriptions
Descriptions are not stored directly in `community.yaml`. Instead, add a translation string at `downloads:community.descriptions.<id>` in `downloads.json`:

```json
{
  "community": {
    "descriptions": {
      "mywallet": "MyWallet is a secure Monero wallet with built-in exchange features."
    }
  }
}
```

This keeps text translatable and consistent across locales.

## Testing
- Run the dev server: `hugo server` and visit `/downloads/community/`.
- Verify the logo shows up, link opens, platform pills render (desktop/mobile), and general tags appear.
- If you used `i18n:` tags, ensure the translation key exists under `downloads.community.tags.<key>` and displays correctly.

## PR checklist
- [ ] Add the logo to `src/assets/images/wallets/` (or `nodes/`, `wallets/hardware/`) and reference it in `community.yaml`.
- [ ] Update `src/data/downloads/community.yaml` with the new item in the correct section.
- [ ] Add `community.descriptions.<id>` to `src/i18n/translations/<lang>/downloads.json` (English at minimum).
- [ ] Add any `community.tags.<key>` translation keys if you used `i18n:` tags.
- [ ] Run `hugo server` and visually check `/downloads/community/`.
