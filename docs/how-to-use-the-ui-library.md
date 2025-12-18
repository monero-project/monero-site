# How to Use the UI Library

## Quick rules

- Reuse existing components where possible - they follow the site's design system and accessibility patterns.
- Check the component file for prop types and examples before creating a new one.
- Add new shared components only after checking `src/components/ui/`; page-specific pieces belong in `src/components/pages/`.

## Common components (examples)
- TitleCard - hero titles for pages
- Accordion - collapsible FAQ sections (used on `/get-started/faq`)
- Button - styled buttons (variants available)
- Paginator - paginated navigation for lists
- MaskIcon / ColorIcon - icon components (icons live in `src/assets/icons/`)

## How to import and use

1. Import in frontmatter:
```astro
import Button from "@/components/ui/Button.astro";
```
2. Use in markup and pass typed props:
```astro
<Button variant="primary" on:click={handle}>Start</Button>
```

## Accessibility & localization

- Prefer semantic HTML and ARIA attributes (e.g., role, aria-expanded).
- If a component needs localized text, pass the `t` function from the page (see [How to Create a New Component](how-to-create-a-new-component.md)).

## Adding a component to the library

- Create it in `src/components/ui/` with PascalCase and a short comment at the top describing props and usage.
- Add a small example and usage notes to [How to use the UI library](how-to-use-the-ui-library.md) or the component file itself.
- Run `pnpm lint` and `pnpm dev` and test in different screen sizes and locales.

## Small usage snippets

Quick, copyable examples for common UI components - check the component file for full props.

TitleCard
```astro
---
import TitleCard from "@/components/ui/TitleCard.astro";
---
<TitleCard title="Page title" subtitle="Short subtitle" />
```

Accordion
```astro
---
import Accordion from "@/components/ui/Accordion.astro";
---
<Accordion items={[{ title: "Q1", content: "A1" }, { title: "Q2", content: "A2" }]} />
```

Tabs - two usage patterns

1) Navigation links (for page navigation)
```astro
---
import Tabs from "@/components/ui/Tabs.astro";
---
<Tabs labels={["One","Two"]} links={["/one","/two"]} activeIndex={0} />
```

2) Same-page panels (slot-based)
```astro
---
import Tabs from "@/components/ui/Tabs.astro";
---
<Tabs labels={["One","Two"]}>
  <div slot="panel-0">First panel content</div>
  <div slot="panel-1">Second panel content</div>
</Tabs>
```

Notes: provide up to 10 labels; use `links` when you want tabs to navigate to different pages.

Paginator
```astro
---
import Paginator from "@/components/ui/Paginator.astro";
---
<Paginator current={1} total={5} href={(n) => `/blog/page/${n}`} />
```

Button / ExternalResourceButton
```astro
---
import Button from "@/components/ui/Button.astro";
import ExternalResourceButton from "@/components/ui/ExternalResourceButton.astro";
---
<Button variant="primary">Start</Button>
<ExternalResourceButton href="/downloads/wallet" label="Download" />
```

MaskIcon / ColorIcon
```astro
---
import MaskIcon from "@/components/ui/MaskIcon.astro";
import ColorIcon from "@/components/ui/ColorIcon.astro";
import searchIcon from "@/assets/icons/mask/search.avif";
import logo from "@/assets/icons/color/brand/monero.avif";
---
<MaskIcon src={searchIcon} size="1.25em" color="currentColor" />
<ColorIcon src={logo} size="2em" />
```

TOCItem
```astro
---
import TOCItem from "@/components/ui/TOCItem.astro";
---
<TOCItem href="#section" label="Section" />
```

DisclaimerBar / DisclaimerNote
```astro
---
import DisclaimerBar from "@/components/ui/DisclaimerBar.astro";
---
<DisclaimerBar title="Disclaimer">
    This page is a community contribution.
</DisclaimerBar>
```

## Where to look for examples
- FAQ uses `Accordion`: `src/pages/get-started/faq.astro`
- Icon usage: `src/components/ui/MaskIcon.astro`, `ColorIcon.astro`

If you need help deciding whether a component should be shared or page-scoped, ask in a PR description or open an issue for guidance.