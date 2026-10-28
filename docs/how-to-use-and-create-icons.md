# How to Handle Icons

This guide explains how to work with icons in the Monero site, including adding new icons and using the provided icon partials. The custom icon system using AVIF files ensures compatibility with browsers that block SVG, and provides efficient, scalable icon handling.

## Icon Storage

Icons are stored in `src/assets/icons/` as .avif files. Hugo mounts `src/assets/` as its assets folder, so templates refer to them by the path after `src/assets/` (e.g. `icons/mask/globe.avif`). They are organized into subfolders:

- `mask/`: Monochrome icons drawn with a CSS mask, so they take the text colour.
    - Size: Typically 48x48 pixels.
    - Mask icons should be fully black on transparent backgrounds.
    - `mask/brand/` holds OS logos (Windows, Apple, Linux...).
- `color/`: Full-colour icons. Icons with a dark mode variant are in `color/light/` and `color/dark/` under the same file name; icons that look right in both modes sit directly in `color/` (e.g. `color/monero.avif`).
    - Size: Typically 96x96 pixels.

Most icons are sourced from the [Lucide.dev](https://lucide.dev) library, converted to .avif format for compatibility.

An icon file is only published to the built site when a template uses it.

## Referring to Icons

There is nothing to import. Pass the icon to a partial as a string:

- **Mask icons** by **name**: the file name without `.avif` from `src/assets/icons/mask/` (`"globe"` means `icons/mask/globe.avif`). Anything containing a `/` is taken as a full asset path instead, which is how you reach subfolders: `"icons/mask/brand/linux.avif"`.
- **Color icons** by **full asset path**: `"icons/color/light/faq.avif"`. Names are not supported here.

Components with an `icon` param (`content-card`, `ctacard`, `sidebar-link`, `toccontainer`, ...) pass it on to the mask icon partial, so they accept both forms too.

In data files (`src/data/*.yaml`) icons are written the same way, usually as asset paths:

```yaml
# src/data/community/workgroups.yaml
communityWorkgroups:
  - nameKey: "workgroups:workgroups.support.name"
    icon: icons/mask/life-buoy.avif

# src/data/navigation.yaml (color icon with a dark variant)
icon: icons/color/light/merchants-exchanges.avif
iconDark: icons/color/dark/merchants-exchanges.avif
```

A name or path that doesn't exist fails the build, so typos are caught by `hugo`. The error points at `mask-icon.html` or `color-icon.html` and reads `nil pointer evaluating resource.Resource.RelPermalink`; look for the `(dict "src" ...)` in the same message to find the caller.

## Icon Partials

The site provides two partials for displaying icons: `ui/icons/mask-icon` and `ui/icons/color-icon`. Always use these for iconography. Neither takes a block.

### mask-icon - themeable monochrome icons

For monochrome icons that can be colored dynamically:

```go-html-template
{{ partial "ui/icons/mask-icon" (dict "src" "globe" "size" "1.5em" "color" "#ff6600") }}
```

- **Params**:
  - `src`: Icon name or asset path (required).
  - `size`: Size (default "1em"). A number is taken as pixels (`24` means `24px`).
  - `color`: Color of the icon. By default it uses the text color (`currentColor`), so it follows the surrounding text in light and dark mode.
  - `rtl`: Mirror the icon (for arrows and other directional icons in right-to-left languages). Use the current language's direction:
    ```go-html-template
    {{ partial "ui/icons/mask-icon" (dict "src" "arrow-right" "rtl" (eq site.Language.Direction "rtl")) }}
    ```
    Inside a component block `site` still works, so this expression can be used anywhere.
  - `spacing`: (optional) Margin at the inline start (left in LTR, right in RTL). Example: "0.5em".

For `mask-icon` usage examples, see `layouts/_partials/ui/header/header.html`.

### color-icon - full color icons that require dark mode support

For full-color icons or those needing dark mode variants:

```go-html-template
{{ partial "ui/icons/color-icon" (dict "src" "icons/color/light/faq.avif" "darkSrc" "icons/color/dark/faq.avif" "size" "2em") }}
```

- **Params**:
  - `src`: Asset path (required).
  - `darkSrc`: Dark mode variant (optional, defaults to `src`).
  - `size`: Size (default "1em", numbers are pixels).
  - `class`: Additional CSS class.
  - `rtl`: Mirror the icon (boolean), as for `mask-icon`.

- Displays the icon as-is and switches to `darkSrc` under `prefers-color-scheme: dark`.

For examples using `color-icon`, see `layouts/_partials/ui/header/nav-dropdown-link.html`.

### Styling an icon from a parent

The icon partials have no `attrs` param, so your component's `data-c-<name>` attribute can't be put on the icon element itself. Wrap the icon and style the wrapper:

```go-html-template
<span class="card-icon" data-c-my-card>
  {{ partial "ui/icons/mask-icon" (dict "src" "shield-check" "size" "2rem") }}
</span>
```

```css
.card-icon[data-c-my-card] {
  color: var(--monero-orange); /* mask icons take this colour */
}
```

## Best Practices

- **Format**: Icons are stored as .avif files for optimal compression and quality.
- **Reference by name**: Use mask icon names in templates (`"globe"`) and asset paths for color icons and in data files.
- **Naming**: Use lowercase with hyphens (e.g., `arrow-right.avif`).
- **Organization**: Use `color/` for full-color icons, `mask/` for monochrome.
- **Decorative**: Icons are decorative. If an icon is the only content of a link or button, give the link an `aria-label`.

## Adding New Icons

1. Convert your icon to .avif format (use tools like ImageMagick or online converters).
2. Place it in the appropriate subfolder of `src/assets/icons/` (`mask/`, or `color/light/` and `color/dark/`).
3. Use it: `mask-icon` with its name for monochrome, `color-icon` with its asset paths for color.
4. Run `hugo server` and test in both light and dark modes.
