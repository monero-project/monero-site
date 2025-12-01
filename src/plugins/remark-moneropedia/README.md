# Moneropedia Plugin for Astro

This Remark plugin keeps keeps the processing of Moneropedia `@` tags consistent by:

- Scanning Markdown AST nodes for `@moneropedia-term` tokens
- Looking up the matching entry (with locale-aware fallbacks) using data from `src/utils/moneropedia.ts`
- Replacing bare text with a `link` AST node that renders as `<a class="moneropedia-link" data-tooltip="…">…</a>`

## How it works

1. **Locale detection** – The plugin inspects the file path to infer which locale the current Markdown file belongs to. If it cannot find one, it falls back to the default locale from `i18n/config`.
2. **Matcher construction** – `buildMoneropediaMatcher` compiles a single regex that matches all `@term` patterns and includes a lookup map to retrieve the full entry metadata in O(1) time.
3. **AST rewrite** – Every regex match is swapped for a `link` AST node built by `createLinkNode`. This does not inject raw HTML strings, which would be unsafe.
