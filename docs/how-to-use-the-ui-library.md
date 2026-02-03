# How to Use the UI Library

This guide documents all reusable UI components in `src/components/ui/`. Components follow the site's design system, support dark mode, RTL locales, and accessibility patterns.

## Quick Rules

- **Reuse existing components** - they handle theming, accessibility, and responsive design.
- **Check props** - open the component file to see the full interface and defaults.
- **Don't duplicate** - if a component exists, use it; if you need something similar, extend it.
- **Page-specific components** belong in `src/components/pages/<page>/`, not `ui/`.

## Component Reference

### Layout Components

Components for structuring page content. Located in `src/components/ui/layout/`.

#### PageContainer
Main content wrapper with consistent bottom padding.
```astro
---
import PageContainer from "@/components/ui/layout/PageContainer.astro";
---
<PageContainer>
  <!-- Page content here -->
</PageContainer>
```

#### Grid
Responsive grid layout. Use `columns` for fixed column count or `minWidth` for fluid layouts.
```astro
---
import Grid from "@/components/ui/layout/Grid.astro";
---
<!-- Fixed 3 columns (collapses responsively) -->
<Grid columns={3} gap="xl">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>

<!-- Fluid: items wrap when smaller than 20rem -->
<Grid minWidth="20rem" gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
</Grid>

<!-- As a list -->
<Grid as="ul" columns={2} gap="sm">
  <li>Item 1</li>
  <li>Item 2</li>
</Grid>
```
**Props**: `columns` (2|3|4), `minWidth` (string), `gap` (2xs|xs|sm|md|lg|xl|2xl|3xl), `as` (div|ul|ol)

#### Column
Vertical flex container.
```astro
---
import Column from "@/components/ui/layout/Column.astro";
---
<Column gap="lg" align="center">
  <p>Stacked vertically</p>
  <p>With gap between</p>
</Column>
```
**Props**: `gap` (2xs–3xl), `align` (start|center|end|stretch), `as` (div|ul|ol|section|nav|article)

#### Row
Horizontal flex container.
```astro
---
import Row from "@/components/ui/layout/Row.astro";
---
<Row gap="md" justify="between" align="center">
  <span>Left</span>
  <span>Right</span>
</Row>

<Row gap="sm" wrap={false}>
  <Button>One</Button>
  <Button>Two</Button>
</Row>
```
**Props**: `gap` (2xs–2xl), `justify` (start|center|end|between|around), `align` (start|center|end|baseline|stretch), `wrap` (boolean, default true), `as` (div|ul|ol|nav)

#### PageSection
Section with optional title, subtitle, and anchor ID for navigation.
```astro
---
import PageSection from "@/components/ui/layout/PageSection.astro";
---
<PageSection 
  title="Getting Started" 
  subtitle="Learn the basics"
  anchorId="getting-started"
  headingLevel={2}
>
  <p>Section content...</p>
</PageSection>
```
**Props**: `title`, `subtitle`, `headingLevel` (default 2), `anchorId`, `ariaLabel`, `centered` (boolean)

---

### Page Header

#### TitleCard
Page hero with title, subtitle, and optional back navigation.
```astro
---
import TitleCard from "@/components/ui/TitleCard.astro";
---
<!-- Simple -->
<TitleCard title="Page Title" subtitle="A brief description" />

<!-- With back link -->
<TitleCard 
  title="Sub Page" 
  subtitle="Description"
  backHref="/parent/"
  backLabel="Back to Parent"
/>

<!-- Centered -->
<TitleCard title="Centered Title" centered />
```
**Props**: `title` (required), `subtitle`, `centered` (boolean), `backHref`, `backLabel`

---

### Cards

#### Card
Base card component. Use as a building block or standalone.
```astro
---
import Card from "@/components/ui/Card.astro";
---
<Card padding="lg" radius="md">
  <p>Card content</p>
</Card>

<!-- As a clickable link -->
<Card as="a" href="/page" hover padding="md">
  Click me
</Card>

<!-- With border, no background -->
<Card border transparent padding="sm">
  Bordered transparent card
</Card>
```
**Props**: `padding` (none|xs|sm|md|lg|xl|2xl), `radius` (none|sm|md|lg|xl), `border` (boolean), `hover` (boolean), `transparent` (boolean), `as` (any HTML tag)

#### ContentCard
Article card with optional image, icon, title, subtitle.
```astro
---
import ContentCard from "@/components/ui/ContentCard.astro";
import { icons } from "@/utils/icons";
import myImage from "@/assets/images/example.avif";
---
<ContentCard 
  title="Card Title"
  subtitle="Optional subtitle"
  icon={icons.mask("book")}
>
  <p>Card body content</p>
  <Button slot="bottom">Action</Button>
</ContentCard>

<!-- With image -->
<ContentCard title="With Image" image={myImage} imageAlt="Description">
  <p>Content below image</p>
</ContentCard>
```
**Props**: `title` (required), `subtitle`, `icon`, `image`, `imageAlt`  
**Slots**: default (body), `bottom` (footer actions)

#### CTACard
Call-to-action card with icon, title, description, and button.
```astro
---
import CTACard from "@/components/ui/CTACard.astro";
import { icons } from "@/utils/icons";
---
<CTACard 
  title="Get Started"
  href="/start"
  linkText="Begin Now"
  icon={icons.mask("rocket")}
>
  Start your journey with Monero today.
</CTACard>

<!-- Centered variant -->
<CTACard title="Join Us" href="/join" linkText="Sign Up" variant="centered">
  Become part of the community.
</CTACard>

<!-- Custom buttons -->
<CTACard title="Choose Option" icon={icons.mask("settings")}>
  Pick the best option for you.
  <Fragment slot="buttons">
    <Button href="/a">Option A</Button>
    <Button href="/b" variant="secondary">Option B</Button>
  </Fragment>
</CTACard>
```
**Props**: `title` (required), `href`, `linkText`, `icon`, `variant` ("centered")  
**Slots**: default (description), `buttons` (custom button area)

#### HeroCard
Large featured card with image, typically for highlighting a workgroup or resource.
```astro
---
import HeroCard from "@/components/ui/HeroCard.astro";
import heroImage from "@/assets/images/hero.avif";
---
<HeroCard 
  image={heroImage}
  imageAlt="Community logo"
  title="Monero Community"
  lead="Join thousands of contributors"
  description="The community workgroup welcomes everyone."
>
  <Button href="/join">Join Now</Button>
</HeroCard>
```
**Props**: `image` (required), `imageAlt` (required), `title`, `lead`, `description`  
**Slots**: default (action buttons)

#### CategoryCard
Navigation card for category pages with image, title, description.
```astro
---
import CategoryCard from "@/components/ui/CategoryCard.astro";
import categoryImage from "@/assets/images/category.avif";
---
<CategoryCard 
  title="Downloads"
  description="Get wallets, nodes, and tools"
  href="/downloads"
  image={categoryImage}
/>

<!-- Custom link text -->
<CategoryCard 
  title="Resources"
  description="Learn more about Monero"
  href="/resources"
  linkText="Browse Resources"
/>
```
**Props**: `title` (required), `description` (required), `href` (required), `image`, `linkText`

---

### Buttons & Links

#### Button
Primary action button with variants.
```astro
---
import Button from "@/components/ui/Button.astro";
import MaskIcon from "@/components/ui/icons/MaskIcon.astro";
import { icons } from "@/utils/icons";
---
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="danger">Danger</Button>

<!-- As a link -->
<Button href="/page" as="a">Go to Page</Button>

<!-- External link -->
<Button href="https://example.com" as="a" target="_blank" rel="noopener noreferrer">
  External
  <MaskIcon src={icons.mask("external-link")} size="1em" />
</Button>
```
**Props**: `variant` (primary|secondary|outline|danger), `href`, `as` (button|a|span), `type` (button|submit|reset)

#### IconLink
Text link with automatic arrow/external icon.
```astro
---
import IconLink from "@/components/ui/IconLink.astro";
import { icons } from "@/utils/icons";
---
<!-- Internal link (shows arrow) -->
<IconLink href="/downloads">View Downloads</IconLink>

<!-- External link (shows external icon automatically) -->
<IconLink href="https://github.com">GitHub</IconLink>

<!-- Custom icon -->
<IconLink href="/docs" icon={icons.mask("book")}>Documentation</IconLink>

<!-- No icon -->
<IconLink href="/about" icon={null}>About</IconLink>

<!-- Styled variants -->
<IconLink href="/page" color="heading" weight="bold" underline>
  Bold Heading Link
</IconLink>
```
**Props**: `href`, `icon` (ImageMetadata|null), `iconPosition` (start|end), `iconSize`, `size` (sm|base|lg), `weight` (normal|medium|semibold|bold), `color` (orange|heading|inherit), `underline` (boolean), `external` (boolean)

#### BackLink
Back navigation link with chevron icon.
```astro
---
import BackLink from "@/components/ui/BackLink.astro";
---
<BackLink href="/parent">Back to Parent</BackLink>

<!-- Large variant -->
<BackLink href="/" size="lg">Home</BackLink>
```
**Props**: `href` (required), `size` (sm|lg)

#### ExternalResourceButton
Card-style button for external resources with logo, title, subtitle.
```astro
---
import ExternalResourceButton from "@/components/ui/ExternalResourceButton.astro";
import logo from "@/assets/images/wallets/cake.avif";
---
<ExternalResourceButton 
  href="https://cakewallet.com"
  title="Cake Wallet"
  subtitle="Mobile wallet for iOS and Android"
  logo={logo}
/>

<!-- With Tor onion link -->
<ExternalResourceButton 
  href="https://example.com"
  title="Service"
  subtitle="Description"
  onionHref="http://example.onion"
/>

<!-- Mini variant -->
<ExternalResourceButton 
  href="https://example.com"
  title="Compact"
  variant="mini"
/>
```
**Props**: `href` (required), `title` (required), `subtitle`, `logo`, `onionHref`, `variant` (default|mini), `border` (boolean)

#### InternalResourceButton
Info bar linking to internal pages with icon and arrow.
```astro
---
import InternalResourceButton from "@/components/ui/InternalResourceButton.astro";
import { icons } from "@/utils/icons";
---
<InternalResourceButton 
  icon={icons.mask("users")}
  title="Join the Community"
  href="/community"
>
  Connect with other Monero users and contributors.
</InternalResourceButton>
```
**Props**: `icon`, `title` (required), `href`  
**Slots**: default (description text)

---

### Navigation Components

#### Accordion
Collapsible sections for FAQs, expandable content.
```astro
---
import Accordion from "@/components/ui/accordion/Accordion.astro";
import AccordionItem from "@/components/ui/accordion/AccordionItem.astro";
---
<!-- Option 1: Using items prop (for simple text content) -->
<Accordion 
  items={[
    { title: "What is Monero?", content: "Monero is a privacy-focused cryptocurrency." },
    { title: "How do I get started?", content: "Download a wallet and acquire some XMR." }
  ]} 
/>

<!-- Option 2: Using slots (for rich content) -->
<Accordion>
  <AccordionItem title="First Question" variant="card" name="faq">
    <p>Answer with <strong>rich formatting</strong>.</p>
  </AccordionItem>
  <AccordionItem title="Second Question" variant="card" name="faq">
    <p>Another answer.</p>
    <Button href="/learn">Learn More</Button>
  </AccordionItem>
</Accordion>

<!-- Allow multiple open (remove name prop or set multiExpand) -->
<Accordion multiExpand>
  <AccordionItem title="Can be open" variant="card">Content 1</AccordionItem>
  <AccordionItem title="At the same time" variant="card">Content 2</AccordionItem>
</Accordion>
```
**Accordion Props**: `items` (array of {title, content}), `multiExpand` (boolean), `variant` (default|card)  
**AccordionItem Props**: `title` (required), `content`, `variant` (default|card), `name` (radio group name), `open` (boolean)

#### PageTabs
Tab navigation - either for same-page panels or page navigation.
```astro
---
import PageTabs from "@/components/ui/tabs/PageTabs.astro";
---
<!-- Same-page panels -->
<PageTabs labels={["Overview", "Details", "FAQ"]}>
  <div slot="panel-0">Overview content</div>
  <div slot="panel-1">Details content</div>
  <div slot="panel-2">FAQ content</div>
</PageTabs>

<!-- Page navigation -->
<PageTabs 
  labels={["Core", "Community"]} 
  links={["/downloads/", "/downloads/community/"]}
  activeIndex={0}
/>

<!-- With initial tab -->
<PageTabs labels={["One", "Two"]} initial={1}>
  <div slot="panel-0">First</div>
  <div slot="panel-1">Second (initially active)</div>
</PageTabs>
```
**Props**: `labels` (required, max 10), `links` (for navigation mode), `activeIndex` (for navigation mode), `initial` (0-based default tab), `id`

#### SectionTabs
Tabs within a section, with optional count badges.
```astro
---
import SectionTabs from "@/components/ui/tabs/SectionTabs.astro";
---
<SectionTabs tabs={[
  { label: "Published", count: 12 },
  { label: "Drafts", count: 3 },
  { label: "Archived" }
]}>
  <div slot="panel-0">Published items</div>
  <div slot="panel-1">Draft items</div>
  <div slot="panel-2">Archived items</div>
</SectionTabs>
```
**Props**: `tabs` (array of {label, count?})

#### TOCContainer / TOCItem
Table of contents for long pages.
```astro
---
import TOCContainer from "@/components/ui/toc/TOCContainer.astro";
import { icons } from "@/utils/icons";
---
<TOCContainer 
  ariaLabel="Page sections"
  sections={[
    { id: "overview", icon: icons.mask("info"), title: "Overview", subtitle: "Introduction to the topic" },
    { id: "details", icon: icons.mask("list"), title: "Details", subtitle: "In-depth information" },
    { id: "faq", icon: icons.mask("help-circle"), title: "FAQ", subtitle: "Common questions" }
  ]}
/>

<!-- Then use matching anchor IDs -->
<PageSection title="Overview" anchorId="overview">...</PageSection>
<PageSection title="Details" anchorId="details">...</PageSection>
<PageSection title="FAQ" anchorId="faq">...</PageSection>
```
**TOCContainer Props**: `sections` (array of {id, icon, title, subtitle}), `ariaLabel` (required)

#### Dropdown
Expandable dropdown menu.
```astro
---
import Dropdown from "@/components/ui/dropdown/Dropdown.astro";
---
<!-- Simple with label -->
<Dropdown label="Options">
  <a href="/option-1">Option 1</a>
  <a href="/option-2">Option 2</a>
</Dropdown>

<!-- Custom trigger -->
<Dropdown>
  <Button slot="trigger" variant="secondary">Custom Trigger</Button>
  <div>Dropdown content</div>
</Dropdown>
```
**Props**: `label`  
**Slots**: `trigger` (custom trigger element), default (dropdown content)

#### Paginator
Pagination for lists with ellipsis for large page counts.
```astro
---
import Paginator from "@/components/ui/Paginator.astro";
---
<!-- Pass the Astro page object from getStaticPaths -->
<Paginator page={page} />
```
**Props**: `page` (Astro Page object from paginate())

---

### Sidebar Components

For pages with a sidebar layout. Located in `src/components/ui/sidebar/`.

#### SidebarLayout
Two-column layout with sticky sidebar.
```astro
---
import SidebarLayout from "@/components/ui/sidebar/SidebarLayout.astro";
import SidebarCard from "@/components/ui/sidebar/SidebarCard.astro";
---
<SidebarLayout sidebarWidth="18rem" sidebarPosition="end" gap="2xl">
  <!-- Main content -->
  <article>
    <h2>Main Content</h2>
    <p>This is the main content area.</p>
  </article>

  <!-- Sidebar -->
  <Fragment slot="sidebar">
    <SidebarCard title="Related">
      <p>Sidebar content</p>
    </SidebarCard>
  </Fragment>
</SidebarLayout>
```
**Props**: `sidebarWidth` (default "20rem"), `sidebarPosition` (start|end), `gap` (lg|xl|2xl|3xl)  
**Slots**: default (main content), `sidebar`

#### SidebarCard
Card for sidebar content with optional title/subtitle.
```astro
---
import SidebarCard from "@/components/ui/sidebar/SidebarCard.astro";
---
<SidebarCard title="Quick Links" subtitle="Useful resources">
  <SidebarLink href="/docs" icon={icons.mask("book")}>Documentation</SidebarLink>
  <SidebarLink href="/faq" icon={icons.mask("help-circle")}>FAQ</SidebarLink>
</SidebarCard>
```
**Props**: `title`, `subtitle`

#### SidebarLink
Link item for sidebars with icon and arrow.
```astro
---
import SidebarLink from "@/components/ui/sidebar/SidebarLink.astro";
import { icons } from "@/utils/icons";
---
<SidebarLink href="/docs" icon={icons.mask("book")}>
  Documentation
</SidebarLink>

<!-- External link -->
<SidebarLink href="https://github.com" icon={icons.mask("github")} external>
  GitHub
</SidebarLink>
```
**Props**: `href` (required), `icon` (required), `external` (boolean)

---

### Disclaimers

#### DisclaimerBar
Prominent disclaimer with icon and title.
```astro
---
import DisclaimerBar from "@/components/ui/disclaimer/DisclaimerBar.astro";
import { icons } from "@/utils/icons";
---
<DisclaimerBar icon={icons.mask("shield-alert")} title="Disclaimer">
  This list is provided for informational purposes only.
  <a href="/terms">Learn more</a>.
</DisclaimerBar>
```
**Props**: `icon`, `title`  
**Slots**: default (description text, can include links)

#### DisclaimerNote
Compact inline disclaimer.
```astro
---
import DisclaimerNote from "@/components/ui/disclaimer/DisclaimerNote.astro";
---
<DisclaimerNote text="Always verify downloads using checksums." />
```
**Props**: `text` (required)

---

### Icons

See [How to Use and Create Icons](how-to-use-and-create-icons.md) for full documentation.

```astro
---
import MaskIcon from "@/components/ui/icons/MaskIcon.astro";
import ColorIcon from "@/components/ui/icons/ColorIcon.astro";
import { icons } from "@/utils/icons";

const { dir } = Astro.locals;
---
<!-- Monochrome (inherits color) -->
<MaskIcon src={icons.mask("download")} size="1.5em" />

<!-- With explicit color -->
<MaskIcon src={icons.mask("check")} size="1em" color="green" />

<!-- RTL-aware (flips arrow direction) -->
<MaskIcon src={icons.mask("arrow-right")} rtl={dir === "rtl"} />

<!-- Color icon with dark mode -->
<ColorIcon 
  src={icons.color("monero").light} 
  darkSrc={icons.color("monero").dark} 
  size="2em" 
/>
```

---

## Best Practices

### Accessibility
- All interactive components include ARIA attributes and keyboard support.
- Use semantic HTML elements via `as` prop where appropriate.
- Provide `ariaLabel` for navigation regions.

### Localization
- Components can access `Astro.locals.t` directly for UI strings.
- Components use `Astro.locals.dir` for RTL support automatically.
- Component-level strings should be added to `common.json`.

### Performance
- Components are server-rendered with zero client-side JavaScript.
- Use the `icons` utility for tree-shaking unused icons.

## Where to Find Examples

| Component | Example Usage |
|-----------|---------------|
| Accordion | [src/pages/get-started/faq.astro](../src/pages/get-started/faq.astro) |
| Grid/Column | [src/pages/community/hangouts.astro](../src/pages/community/hangouts.astro) |
| PageTabs | [src/pages/downloads/index.astro](../src/pages/downloads/index.astro) |
| SidebarLayout | [src/pages/resources/research-lab.astro](../src/pages/resources/research-lab.astro) |
| TOCContainer | [src/pages/resources/library.astro](../src/pages/resources/library.astro) |
| HeroCard | [src/pages/community/workgroups.astro](../src/pages/community/workgroups.astro) |
| CTACard | [src/pages/community/sponsorships.astro](../src/pages/community/sponsorships.astro) |

## Adding New Components

1. Create in `src/components/ui/` (or appropriate subfolder).
2. Use TypeScript interface for props.
3. Support dark mode via CSS variables.
4. Test RTL layout if component has directional elements.
5. Add documentation to this file.
6. Run `pnpm lint` and test across breakpoints.

See [How to Create a New Component](how-to-create-a-new-component.md) for detailed guidelines.
