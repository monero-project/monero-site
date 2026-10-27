# How to Handle Assets and Images

This guide explains how to work with images and other assets in the Monero site, including adding, optimizing, and referencing them.

## Types of Assets

- **Static Assets**: Files in `public/` (e.g. `public/robots.txt`, `public/media/`, `public/library/`) are copied to the built site as-is, at the same path (`public/media/x.webm` is served at `/media/x.webm`). Use for files that need a fixed public URL: PDFs, videos, downloads, favicons, QR codes, the default social preview image.
- **Image Assets**: Images in `src/assets/` (`images/`, `icons/`). Hugo mounts this folder as its [assets](https://gohugo.io/hugo-pipes/introduction/) folder, so templates can resize and convert them. Use for every image shown on a page.
- **Content Assets**: Images for blog posts, in `src/content/blog/assets/`, next to the posts.

Assets in `src/assets/` are referred to by their path **without** `src/assets/`: `src/assets/images/landing.avif` is `"images/landing.avif"`. They are only published when a template uses them (resized images get a generated file name).

## Showing an Image in a Template

Always use the `ui/image` partial for images. It resizes the image, converts it, and writes a responsive `srcset` (1x/2x the display width plus the standard breakpoints, never upscaled), with `width`/`height` read from the file so the page doesn't jump while loading:

```go-html-template
{{ partial "ui/image" (dict "src" "images/landing.avif" "alt" "" "format" "avif") }}
```

- **Params**:
  - `src`: Asset path (required). A missing file fails the build.
  - `alt`: Alternative text. Use `""` for decorative images.
  - `width`, `height`: Display size in pixels. Default: the file's own size; if you give only `width`, `height` follows the aspect ratio.
  - `format`: Output format, default `webp`. Most of the site uses `"avif"`.
  - `priority`: Load eagerly with high priority. Use for images above the fold, such as a hero image or logo.
  - `loading`: Default `lazy`.
  - `class`, `attrs`: Extra class and attributes (e.g. your component's `data-c-<name>`, see [How to Create a New Component](how-to-create-a-new-component.md#styling)).

```go-html-template
{{ partial "ui/image" (dict "src" "images/mrl-logo.avif" "alt" "Monero Research Lab logo" "width" 200 "height" 200 "format" "avif" "priority" true "attrs" (dict "data-c-hero-card" true)) }}
```

SVG files work too; they are used as-is, not resized.

Components that show an image (`hero-card`, `content-card`, `category-card`, `external-resource-button`...) take the same kind of asset path, e.g. `"image" "images/community-logo.avif"` or `"logo" "images/wallets/cakewallet.avif"`. See [How to Use the UI Library](how-to-use-the-ui-library.md).

### Light and dark variants

For an image with a dark mode version, use `ui/themeable-image`. It writes both images and shows one depending on the colour scheme. It takes the `ui/image` params plus `darkSrc` and `rtl` (mirror in right-to-left languages):

```go-html-template
{{ partial "ui/themeable-image" (dict "src" "images/what-is-monero/privacy-light.avif" "darkSrc" "images/what-is-monero/privacy-dark.avif" "alt" "") }}
```

### Images in data files

Data files (`src/data/*.yaml`) list images as asset paths, and the template passes them to `ui/image` or a component:

```yaml
# src/data/community/hangouts.yaml
socialLinks:
  - titleKey: "hangouts:social.reddit.title"
    href: "https://reddit.com/r/monero"
    logo: images/social/reddit.avif
```

## Referencing Static Assets

Files in `public/` are linked by their URL, starting with `/`. They are not processed, so keep them small:

```go-html-template
{{ with partial "ui/button" (dict "href" "/media/press-kit/monero-press-kit.zip") }}Download{{ end }}

<video controls preload="none" poster="/media/what-is-monero.webp">
  <source src="/media/what-is-monero.webm" type="video/webm">
</video>
```

Images inside `public/` should normally be moved to `src/assets/images/` and shown with `ui/image` instead. The exception is `public/meta/` (favicons, logo): it is also mounted as assets under `meta/`, so it can be used by both, e.g. the header logo `{{ partial "ui/image" (dict "src" "meta/monerologo.avif" ...) }}`.

## Handling Images in Blog Posts

### Front matter image

1. Place images in `src/content/blog/assets/<post-folder>/`.
2. Reference it in the front matter, relative to the post:

   ```md
   ---
   title: My Post
   author: you
   image: ./assets/my-post-folder/my-image.png
   ---
   ```

3. Nothing else is needed: `layouts/blog/post.html` and the blog cards (`layouts/_partials/pages/blog/blog-card.html`) show it with `ui/image`. The build fails if the file doesn't exist.

### Inline images

For images embedded in the Markdown body, use relative paths to the same folder:

```md
![Governance Process Overview](./assets/2015-year-in-review/governance-process.jpg)
```

- Markdown images are rendered by `layouts/_markup/render-image.html`, which resizes local files like `ui/image` and uses the `![...]` text as `alt`.
- Absolute URLs (`https://...`, `/media/...`) are used as-is.
- Relative paths are only resolved for blog posts. A relative path that doesn't match a file is written unchanged, which shows a broken image, so check the page.

### Social preview card

Each blog post gets a 1200×630 preview image (Open Graph / Twitter card) with its title and summary, drawn at build time by `layouts/_partials/helpers/open-graph-image.html`. You don't need to make one. Other pages use `public/open-graph/default.png`.

## Best Practices

- **Always use `ui/image`**: For all images, use the partial to get resizing, lazy loading, and responsive formats. A plain `<img>` tag bypasses these benefits.
- **File Formats**: Commit the best source you have (PNG, JPEG, AVIF, WebP); `format` sets what is published. AVIF is used for most images.
- **Alt Text**: Always pass a descriptive `alt` (translated with `partial "helpers/t"`), or `""` if the image is decorative.
- **Naming**: Use descriptive, lowercase names with hyphens (e.g., `monero-wallet-screenshot.png`).
- **Folders**: Keep organized (e.g., `src/assets/images/wallets/`, `src/assets/images/exchanges/`).

## Troubleshooting

- **`image not found`** build error: the `src` path is wrong. It is relative to `src/assets/` (`images/x.avif`, not `src/assets/images/x.avif` or `/images/x.avif`).
- **Image from `public/` not found by `ui/image`**: only `public/meta/` is available as an asset; move the image to `src/assets/images/`.
- **Image looks blurry**: the source file is smaller than the display size (`ui/image` never upscales). Use a larger source.

For examples, check existing pages like `layouts/home.html`.
