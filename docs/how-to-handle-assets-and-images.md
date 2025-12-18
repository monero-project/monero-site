# How to Handle Assets and Images

This guide explains how to work with images and other assets in the Monero site, including importing, optimizing, and referencing them.

## Types of Assets

- **Static Assets**: Files in `public/` (e.g., `public/robots.txt`, `public/media/`) served directly. Use for favicons, global images.
- **Content Assets**: Images in content collections (e.g., `src/content/blog/assets/`) for blogs/Moneropedia.
- **Component Assets**: Images imported in `.astro` or `.ts` files for optimization.

## Referencing Static Assets

For files in `public/`, always use Astro's `<Image />` component for optimization. First, get dimensions using the `getPublicImageDimensions` utility:

```astro
---
import { Image } from "astro:assets";
import { getPublicImageDimensions } from "@/utils/image";

const dimensions = await getPublicImageDimensions("/media/logo.png");
---

<Image src="/media/logo.png" alt="Monero Logo" width={dimensions.width} height={dimensions.height} format="avif" />
```

- This ensures proper optimization, lazy loading, and responsive formats.
- The utility reads image metadata to provide accurate dimensions.
- Suitable for site-wide assets like logos or icons.

## Importing Images in Components

Always use Astro's `<Image />` component for optimized images. Import the image and use it directly:

```astro
---
import { Image } from "astro:assets";
import logo from "@/assets/icons/logo.png";
---

<Image src={logo} alt="Monero Logo" format="avif"/>
```

- `<Image />` provides automatic optimization, lazy loading, and responsive formats.
- Use the `@/` alias for `src/`.
- Imported images do not require fetching dimensions through `getPublicImageDimensions` like for images in `/public` unless specific sizing is needed.
- For simple display without extra props, this is sufficient.

## Handling Images in Content Collections

For blogs and Moneropedia:

1. Place images in `src/content/blog/assets/` or `src/content/moneropedia/en/assets/`.
2. Reference in frontmatter or Markdown:

   ```md
   ---
   title: My Post
   image: ./assets/airgap/my-image.avif
   ---

   ![Alt text](./assets/airgap/my-image.avif)
   ```

3. In the page component, access via `entry.data.image` and use `<Image />`:

   ```astro
   ---
   const { entry } = Astro.props;
   ---

   <Image src={entry.data.image} alt="Post image" format="avif" />
   ```

- Relative paths (`./assets/`) work in collections.
- Images are processed and optimized.

## Best Practices

- **Always use `<Image />`**: For all images, use Astro's `<Image />` component to ensure optimization, lazy loading, and responsive formats. Using standard `<img>` tags bypasses these benefits.
- **File Formats**: Use modern formats like WebP or AVIF; Astro converts automatically.
- **Alt Text**: Always include descriptive `alt` attributes for accessibility.
- **Naming**: Use descriptive, lowercase names with hyphens (e.g., `monero-wallet-screenshot.png`).
- **Folders**: Keep organized (e.g., `assets/icons/`, `assets/screenshots/`).

## Troubleshooting

- **Image not loading**: Check the path; ensure it's in `public/` or imported, and use `<Image />`.
- **Dimensions missing**: For public images, use `getPublicImageDimensions` to set width/height.
- **Build errors**: Ensure images exist, paths are correct, and you're using `<Image />` properly.

For examples, check existing pages like `src/pages/index.astro`.