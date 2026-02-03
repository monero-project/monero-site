# How to Add Localization to a Page

## Basic Page Localization Setup

1. **Add Translations**: Create/update JSON files in `src/i18n/translations/[locale]/`. Each file is a namespace (e.g., `downloads.json` = `downloads` namespace).

   Example `src/i18n/translations/en/my-page.json`:
   ```json
   {
     "pageTitle": "My Page | Monero - the secure, private, untraceable cryptocurrency",
     "heroTitle": "Welcome to My Page",
     "heroSubtitle": "This is a localized page.",
     "greeting": "Hello, {{name}}!",
     "itemCount": "You have {{count}} items."
   }
   ```

   For dynamic content (links, etc), use `{{variable}}` placeholders. Pass values when calling `t()` (see step 2).

2. **Update the Page**: Use the translation utilities from `Astro.locals` (provided by the middleware).

   ```astro
   ---
   import Layout from "@/layouts/Layout.astro";
   import TitleCard from "@/components/ui/TitleCard.astro";

   const { t, localizeHref } = Astro.locals;
   ---

   <Layout title={t("my-page:pageTitle")} description={t("my-page:heroSubtitle")}>
     <TitleCard title={t("my-page:heroTitle")} subtitle={t("my-page:heroSubtitle")} />

     <div id="content">
       <p>{t("my-page:greeting", { name: "Alice" })}</p>
       <p>{t("my-page:itemCount", { count: 5 })}</p>
     </div>
   </Layout>
   ```

   The middleware provides these helpers on `Astro.locals`:
   - `t` - translation function
   - `locale` - current locale string
   - `dir` - text direction ("ltr" or "rtl")
   - `localizeHref` - creates locale-aware URLs
   - `localizeNumber` - formats numbers for the locale
   - `localizeDateString` - formats dates for the locale
   - `safeMarkdown` - renders Markdown with Moneropedia links

## Utility Functions

These utilities are available on `Astro.locals` via the middleware. For advanced use cases, they can also be imported from `@/i18n/utils`.

### locale
**Why**: The current locale string, retrieved automatically by the middleware.

**How**: Access via `Astro.locals.locale`.

Example:
```astro
---
const { locale } = Astro.locals;
// locale is "en", "ar", etc.
---
```

### localizeHref
**Why**: Creates locale-aware URLs for links, ensuring correct paths for different languages.

**How**: Use `Astro.locals.localizeHref(href)`. The locale is automatically applied.

Example:
```astro
---
const { localizeHref } = Astro.locals;
const link = localizeHref("/blog"); // "/es/blog" for Spanish, "/blog" for English
---
```

### localizeNumber
**Why**: Formats numbers according to locale rules (e.g., digit glyphs for Arabic).

**How**: Use `Astro.locals.localizeNumber(number, minimumIntegerDigits?)`.

Example:
```astro
---
const { localizeNumber } = Astro.locals;
const formatted = localizeNumber(1234); // Localizes digit glyphs
---
```

> Tip: If you need thousands separators/grouping (e.g., "1,234"), use `Intl.NumberFormat` directly with `useGrouping: true`.

### localizeDateString
**Why**: Formats dates in locale-specific ways (e.g., MM/DD/YYYY vs DD/MM/YYYY).

**How**: Use `Astro.locals.localizeDateString(date, options?)`.

Example:
```astro
---
const { localizeDateString } = Astro.locals;
const date = localizeDateString("2023-12-16", { year: "numeric", month: "long" }); // "December 2023" in en
---
```

### getLocaleName (advanced)
**Why**: Gets the display name of a language (e.g., for language selectors).

**How**: Import from `@/i18n/utils` and pass locale code.

Example:
```typescript
import { getLocaleName } from "@/i18n/utils";

const name = getLocaleName("es")?.name; // "Spanish"
```

### dir (text direction)
**Why**: Determines text direction (left-to-right or right-to-left) for RTL languages. Can be used to set the `dir` attribute on HTML elements and `MaskIcon` components.

**How**: Use `Astro.locals.dir`.

Example:
```astro
---
const { dir } = Astro.locals;
// dir is "ltr" or "rtl"
---
<div dir={dir}>...</div>
<MaskIcon src={icons.mask("arrow-right")} rtl={dir === "rtl"} />
```

### t (translation function)
**Why**: Loads translations from JSON files.

**How**: Use `Astro.locals.t`. Returns an initialized i18next instance.

Example:
```astro
---
const { t } = Astro.locals;
const text = t("index:pageTitle");
// For objects (e.g., FAQ categories), use:
const basicsSection = t("faq:basics", { returnObjects: true });
---
```

### safeMarkdown
**Why**: Renders Markdown strings with automatic Moneropedia `@term` linking and XSS sanitization.

**How**: Use `Astro.locals.safeMarkdown.parse()` or `.parseInline()` for inline content.

Example:
```astro
---
const { t, safeMarkdown } = Astro.locals;
---
<div set:html={safeMarkdown.parse(t("faq:basics.answer"))} />
```

## Tips
- For getmonero.org links in translation JSON files, use interpolation variables `{{link}}` and pass localized URLs when calling `t()` with `localizeHref()`.
    Example in `src/i18n/translations/en/common.json`: 
    ```json
    "learnMore": "Learn more on the {{link}}."
    ```
    ```astro
    ---
    const { t, localizeHref } = Astro.locals;
    const learnMoreText = t("common:learnMore", { link: localizeHref("/get-started/") });
    ---
    ```