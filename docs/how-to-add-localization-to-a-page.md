# How to Add Localization to a Page

## Basic Page Localization Setup

1. **Add Translations**: Create/update JSON files in `src/i18n/translations/[locale]/` (e.g., `en/translation.json`).

   Example `src/i18n/translations/en/translation.json`:
   ```json
   ...,
   "myNewPage": {
     "pageTitle": "My Page | Monero - the secure, private, untraceable cryptocurrency",
     "heroTitle": "Welcome to My Page",
     "heroSubtitle": "This is a localized page.",
     "greeting": "Hello, {{name}}!",
     "itemCount": "You have {{count}} items."
   }
   ```

   For dynamic content (links, etc), use `{{variable}}` placeholders. Pass values when calling `t()` (see step 2).

2. **Update the Page**: Import and use the translation instance.

   ```typescript
   ---
   import { createTInstance, getLocale } from "@/i18n/utils";

   const locale = getLocale(Astro.url);
   const t = await createTInstance(locale);
   ---

   <Layout title={t("myNewPage.pageTitle")} description={t("myNewPage.heroSubtitle")}>
     <TitleCard title={t("myNewPage.heroTitle")} subtitle={t("myNewPage.heroSubtitle")} />

     <div id="content">
       <p>{t("myNewPage.greeting", { name: "Alice" })}</p>
       <p>{t("myNewPage.itemCount", { count: 5 })}</p>
     </div>

   </Layout>
   ```

## Utility Functions

### getLocale
**Why**: Retrieves the current locale from the URL, used for most other i18n functions.

**How**: Pass Astro.url.

Example:
```typescript
import { getLocale } from "@/i18n/utils";

const locale = getLocale(Astro.url); // "en"
```

### localizeHref
**Why**: Creates locale-aware URLs for links, ensuring correct paths for different languages.

**How**: Pass locale and href. Handles internal/external links and prefixes.

Example:
```typescript
import { localizeHref, getLocale } from "@/i18n/utils";

const locale = getLocale(Astro.url);
const link = localizeHref(locale, "/blog"); // "/es/blog" for Spanish
```

### localizeNumber
**Why**: Formats numbers according to locale rules (e.g., commas, decimals).

**How**: Pass number, locale, and optional minimum digits.

Example:
```typescript
import { localizeNumber, getLocale } from "@/i18n/utils";

const locale = getLocale(Astro.url);
const formatted = localizeNumber(1234, locale); // "1234" (this helper does not add thousands separators; it localizes digit glyphs)

> Tip: If you need thousands separators/grouping (e.g., "1,234"), use `Intl.NumberFormat` directly with `useGrouping: true` or implement a small wrapper using `number.toLocaleString(localeString, { useGrouping: true })`.
```

### localizeDateString
**Why**: Formats dates in locale-specific ways (e.g., MM/DD/YYYY vs DD/MM/YYYY).

**How**: Pass date string, locale, and optional format options.

Example:
```typescript
import { localizeDateString, getLocale } from "@/i18n/utils";

const locale = getLocale(Astro.url);
const date = localizeDateString("2023-12-16", locale, { year: "numeric", month: "long" }); // "December 2023" in en
```

### getLocaleName
**Why**: Gets the display name of a language (e.g., for language selectors).

**How**: Pass locale code.

Example:
```typescript
import { getLocaleName } from "@/i18n/utils";

const name = getLocaleName("es")?.name; // "Spanish"
```

### getDirection
**Why**: Determines text direction (left-to-right or right-to-left) for RTL languages. Can be used to set the `dir` attribute on HTML elements and `MaskIcon` components.

**How**: Pass locale.

Example:
```typescript
import { getDirection } from "@/i18n/utils";

const dir = getDirection("ar"); // "rtl"
```

### createTInstance
**Why**: Initializes i18n for loading translations from JSON files.

**How**: Pass locale and optional namespaces. It returns an initialized i18next instance which is callable like a `t` function (so `const t = await createTInstance(locale)` lets you call `t("key")` directly).

Example:
```typescript
import { createTInstance } from "@/i18n/utils";

const t = await createTInstance("en", "common");
const text = t("index.pageTitle");
// For arrays/objects (e.g., lists in the FAQ), use:
const items = t("faq.basics.items", { returnObjects: true });
```

## Tips

- For complex strings, use interpolation (e.g., `{{name}}`).
- For getmonero.org links in translation JSON files, use interpolation variables `{{link}}` and pass localized URLs when calling `t()` with `localizeHref()`.
    Example: 
    ```json
    "learnMore": "Learn more on the {{link}}."
    ```
    ```typescript
    const learnMoreText = t("learnMore", { link: localizeHref(locale, "/get-started/") });
    ```