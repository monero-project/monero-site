# Moneropedia Plugin for Astro

This Sätteri mdast plugin keeps the processing of Moneropedia `@` tags consistent by:

- Scanning Markdown text nodes for `@moneropedia-term` tokens
- Looking up the matching entry (with locale-aware fallbacks) using data from `src/utils/moneropedia.ts`
- Replacing bare text with a `link` AST node that renders as `<a class="moneropedia-link" data-tooltip="…">…</a>`

## How it works

1. **Locale detection** – The `before` hook inspects the file URL to infer which locale the current Markdown file belongs to. If it cannot find one, it falls back to the default locale from `i18n/config`.
2. **Matcher construction** – `buildMoneropediaMatcher` compiles a single regex that matches all `@term` patterns and includes a lookup map to retrieve the full entry metadata in O(1) time. The `before` hook stores it on `ctx.data` for the current document.
3. **AST rewrite** – The `text` visitor splits each text node at every match and swaps the match for a `link` AST node built by `createLinkNode`. Text inside links is skipped. This does not inject raw HTML strings, which would be unsafe.
