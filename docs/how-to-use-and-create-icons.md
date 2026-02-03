# How to Handle Icons

This guide explains how to work with icons in the Monero site, including adding new icons and using the provided icon components. The custom icon system using AVIF files ensures compatibility with browsers that block SVG, and provides efficient, scalable icon handling.

## Icon Storage

Icons are stored in `src/assets/icons/` as .avif files. They are organized into subfolders:

- `color/`: Full-color icons (may have `light/`, `dark/`, subfolders for variants).
    - Size: Typically 96x96 pixels.
- `mask/`: Monochrome icons used with CSS masking for dynamic coloring.
    - Size: Typically 48x48 pixels.
    - Mask icons should be fully black on transparent backgrounds.

Most icons are sourced from the [Lucide.dev](https://lucide.dev) library, converted to .avif format for compatibility.

## The `icons` Utility

The `icons` utility in `src/utils/icons.ts` provides a clean way to reference icons without manual imports:

```astro
---
import MaskIcon from "@/components/ui/icons/MaskIcon.astro";
import ColorIcon from "@/components/ui/icons/ColorIcon.astro";
import { icons } from "@/utils/icons";
---

<!-- Mask icons -->
<MaskIcon src={icons.mask("globe")} size="1.5em" />
<MaskIcon src={icons.mask("arrow-right")} size="1em" />

<!-- Color icons with dark mode support -->
<ColorIcon 
  src={icons.color("monero").light} 
  darkSrc={icons.color("monero").dark} 
  size="2em" 
/>
```

- `icons.mask(name)` - returns the icon from `src/assets/icons/mask/<name>.avif`
- `icons.color(name)` - returns `{ light, dark }` for icons in `src/assets/icons/color/`

This is the preferred approach used throughout the codebase.

## Icon Components

The site provides two main components for displaying icons: `MaskIcon` and `ColorIcon`. Always use these for iconography.

### MaskIcon - themeable monochrome icons

For monochrome icons that can be colored dynamically:

```astro
---
import MaskIcon from "@/components/ui/icons/MaskIcon.astro";
import { icons } from "@/utils/icons";
---

<MaskIcon src={icons.mask("globe")} size="1.5em" color="#ff6600" />
```

- **Props**:
  - `src`: Imported icon (required).
  - `size`: Size (default "1em").
  - `color`: Color of the icon. By default it will inherit the text color.
  - `rtl`: Flip for right-to-left pages (boolean). Use `Astro.locals.dir === "rtl"` in pages.
    ```astro
    <MaskIcon src={icons.mask("arrow-right")} rtl={dir === "rtl"} />
    ```
  - `spacing`: (optional) Left margin (string). Example: "0.5em".

For `MaskIcon` usage examples, see `src/components/ui/header/Header.astro`

### ColorIcon - full color icons that require dark mode support

For full-color icons or those needing dark mode variants:

```astro
---
import ColorIcon from "@/components/ui/icons/ColorIcon.astro";
import { icons } from "@/utils/icons";
---

<ColorIcon src={icons.color("monero").light} darkSrc={icons.color("monero").dark} size="2em" />
```

- **Props**:
  - `src`: Imported icon (required).
  - `darkSrc`: Dark mode variant (optional).
  - `size`: Size (default "1em").
  - `class`: Additional CSS class.
  - `rtl`: Flip for right-to-left pages (boolean). Use `Astro.locals.dir === "rtl"` in pages.

- Displays the icon as-is; supports automatic dark mode switching.

For examples using `ColorIcon`, see `src/components/ui/header/NavItem.astro`.

## Best Practices

- **Format**: Icons are stored as .avif files for optimal compression and quality.
- **Import icons**: Always import from `@/assets/icons/` and pass to components.
- **Naming**: Use lowercase with hyphens (e.g., `arrow-right.avif`).
- **Organization**: Use `color/` for full-color icons, `mask/` for monochrome.

## Adding New Icons

1. Convert your icon to .avif format (use tools like ImageMagick or online converters).
2. Place in the appropriate subfolder (`color/` or `mask/`).
3. Import it in your component.
4. Use `MaskIcon` for monochrome or `ColorIcon` for color.
5. Test in both light and dark modes.

