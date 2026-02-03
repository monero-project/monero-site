# How to Add a New Download Item

This guide explains how to add a new community download item (e.g., wallet, node software) to the Monero website's Downloads > Community section.

## Files you'll have to edit
- `src/data/downloads/community.ts` (where community items are listed)
- `src/assets/images/wallets/` or `src/assets/images/nodes/` (place logo files here)
- `src/i18n/translations/<lang>/downloads.json` (add `descriptions` and `tags` keys for translations)

## TypeScript structure (example)

Add a new entry to `src/data/downloads/community.ts` in the appropriate section.

Top-level sections:
- `wallets` (has subcategories: `moneroOnly`, `multiCoin`, `lws`)
- `cold` (cold/hardware wallets and offline signer apps)
- `nodes` (node software implementations)

### Step 1: Import the logo

At the top of the file, add an import for your logo:

```typescript
import mywalletLogo from "@/assets/images/wallets/mywallet.avif";
```

### Step 2: Add the wallet entry

Add a new object to the appropriate array:

```typescript
{
  id: "mywallet",
  name: "MyWallet",
  logo: mywalletLogo,
  link: "https://mywallet.example",
  tags: {
    mobile: ["android"],
    general: ["MIT", "i18n:builtInExchange"],
  },
},
```

Notes:
- `id` must be unique and is used to look up the description translation at `downloads:community.descriptions.<id>`.
- `logo` is an imported image (ImageMetadata type).
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
Descriptions are not stored directly in `community.json`. Instead, add a translation string at `downloads:community.descriptions.<id>` in `downloads.json`:

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
- Run the dev server: `pnpm dev` and visit `/downloads/community/`.
- Verify the logo shows up, link opens, platform pills render (desktop/mobile), and general tags appear.
- If you used `i18n:` tags, ensure the translation key exists under `downloads.community.tags.<key>` and displays correctly.

## PR checklist
- [ ] Add the logo to `src/assets/images/wallets/` (or `nodes/`, `hardware/`) and import it in `community.ts`.
- [ ] Update `src/data/downloads/community.ts` with the new item in the correct section.
- [ ] Add `community.descriptions.<id>` to `src/i18n/translations/<lang>/downloads.json` (English at minimum).
- [ ] Add any `community.tags.<key>` translation keys if you used `i18n:` tags.
- [ ] Run `pnpm dev` and visually check `/downloads/community/`.
