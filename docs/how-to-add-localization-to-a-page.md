# How to Add Localization to a Page

## Basic Page Localization Setup

1. **Add Translations**: Create/update JSON files in `src/i18n/translations/[locale]/`. Each file is a namespace (e.g., `downloads.json` = `downloads` namespace). Only edit the English files; Weblate handles the other languages.

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

   For dynamic content (links, etc), use `{{variable}}` placeholders and pass the values when translating (see step 2).

2. **Update the Page**: Use the helpers in `layouts/_partials/helpers/`. They always work in the language of the page being built.

   ```go-html-template
   {{ define "meta" }}{{ .Store.Set "meta" (dict "title" (partial "helpers/t" "my-page:pageTitle") "description" (partial "helpers/t" "my-page:heroSubtitle")) }}{{ end }}

   {{ define "main" }}
   {{ partial "ui/title-card" (dict "title" (partial "helpers/t" "my-page:heroTitle") "subtitle" (partial "helpers/t" "my-page:heroSubtitle")) }}

   <div id="content">
     <p>{{ partial "helpers/t" (slice "my-page:greeting" (dict "name" "Alice")) }}</p>
     <p>{{ partial "helpers/t" (slice "my-page:itemCount" (dict "count" 5)) }}</p>
   </div>
   {{ end }}
   ```

   The helpers:
   - `helpers/t` - translate a key
   - `helpers/href` - locale-aware URLs
   - `helpers/number` - numbers in the language's digits
   - `helpers/date` - long dates for the language
   - `helpers/markdown` - render Markdown from a translation, with Moneropedia links
   - `helpers/t-keys` - the keys of a translation object, in file order
   - `site.Language.Lang` - the current language code; `site.Language.Direction` - "rtl" for right-to-left languages

## Helpers

### site.Language.Lang
**Why**: The current language code (`en`, `ar`, ...).

```go-html-template
{{ if eq site.Language.Lang "en" }}...{{ end }}
```

### helpers/href
**Why**: Creates locale-aware URLs for links, ensuring correct paths for different languages. It adds the language prefix and the trailing slash; absolute URLs are returned unchanged.

```go-html-template
<a href="{{ partial "helpers/href" "/blog" }}">  {{/* "/ar/blog/" in Arabic, "/blog/" in English */}}
<a href="{{ partial "helpers/href" (slice "zh" "/blog") }}">  {{/* a specific language: "/zh/blog/" */}}
```

### helpers/number
**Why**: Formats whole numbers with the language's digit glyphs (e.g. Arabic-Indic digits). Pass a second number to zero-pad.

```go-html-template
{{ partial "helpers/number" 404 }}              {{/* "٤٠٤" in Arabic */}}
{{ partial "helpers/number" (slice 3 2) }}      {{/* "03" */}}
```

### helpers/date
**Why**: Formats a date as day, month name and year the way the language writes it ("April 22, 2020", "٢٢ أبريل ٢٠٢٠", "2020年4月22日"). Takes a date or a `YYYY-MM-DD` string. The formats live in `data/locale.yaml`.

```go-html-template
{{ partial "helpers/date" "2023-12-16" }}
```

### Language names and text direction
**Why**: The language names in the language menu come from the `label` of each language in `hugo.toml`. Right-to-left languages have `direction = "rtl"` there; use it to mirror direction-dependent icons.

```go-html-template
{{ partial "ui/icons/mask-icon" (dict "src" "arrow-right" "rtl" (eq site.Language.Direction "rtl")) }}
```

### helpers/t (translation)
**Why**: Loads translations from the JSON files. Missing or empty strings (Weblate leaves untranslated strings empty) fall back to English. A `defaultValue` var is used if even English has no such key.

```go-html-template
{{ partial "helpers/t" "index:pageTitle" }}
{{ partial "helpers/t" (slice "blog:tagLabels.mining" (dict "defaultValue" "mining")) }}
{{/* objects (e.g. a FAQ section) are returned as maps */}}
{{ $basics := partial "helpers/t" "faq:basics" }}
```

Maps come back sorted alphabetically. When the order of the keys matters (FAQ questions, lists), loop over `helpers/t-keys`, which gives the keys in the order of the JSON file:

```go-html-template
{{ range partial "helpers/t-keys" "faq:basics" }}
  {{ partial "helpers/t" (printf "faq:basics.%s.title" .) }}
{{ end }}
```

### helpers/markdown
**Why**: Renders Markdown from a translation string, with automatic Moneropedia `@term` linking. Translations come from outside contributors, so all HTML in them is escaped except a few reviewed shapes (links with `target="_blank"`/`rel="noopener noreferrer"`, and `<span style="color: …">`). Use it for any translated text that contains Markdown.

```go-html-template
{{ partial "helpers/markdown" (partial "helpers/t" "faq:basics.whatIsMonero.content") }}
{{/* inline: no <p>, newlines become <br> */}}
{{ partial "helpers/markdown" (dict "text" (partial "helpers/t" "index:hero.subtitle") "inline" true) }}
```

Never mark a translation as safe HTML yourself (`safeHTML`); CI rejects unreviewed uses.

## Tips
- For getmonero.org links in translation JSON files, use interpolation variables `{{link}}` and pass localized URLs when translating with `helpers/href`.
    Example in `src/i18n/translations/en/common.json`:
    ```json
    "learnMore": "Learn more on the {{link}}."
    ```
    ```go-html-template
    {{ partial "helpers/t" (slice "common:learnMore" (dict "link" (partial "helpers/href" "/get-started/"))) }}
    ```
- If a translated string ends in a space and is followed by a link in the template, put the `<a>` on the same line right after it; a line break would add a second space.
