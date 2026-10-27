# How to Make a Blog Post

This guide explains how to create a new blog post for the Getmonero website. Blog posts are Markdown files in `src/content/blog/`; `content/blog/_content.gotmpl` turns them into pages, the listings and the RSS feed.

## Steps

### 1. Create the Blog Post File

Navigate to `src/content/blog/` and create a new Markdown file. Follow the naming convention: `YYYY-MM-DD-title-slug.md` (e.g., `2023-12-16-my-awesome-post.md`). Use lowercase, hyphens for spaces, and no special characters.

The file name decides the date and the address of the post: `2023-12-16-my-awesome-post.md` is published at `/blog/2023/12/16/my-awesome-post/`. Files starting with `_` (like `_template.md`) are ignored.

Example file path: `src/content/blog/2023-12-16-my-awesome-post.md`

### 2. Add Front Matter

At the top of the file, add the front matter in YAML format. Use the following structure:

```yaml
---
title: "Your Blog Post Title"
summary: "A brief one or two sentence summary of the post."
author: "Your Name or Pseudonym(s)"
image: "./assets/2023-12-16-my-awesome-post/featured-image.avif"
tags:
    - tag1
    - tag2
---
```

- `title` (required): The full title of the post.
- `summary`: A short description (used in previews and SEO).
- `tags`: A YAML list of tags (e.g., community, dev diaries). Choose from [existing tags](https://getmonero.org/blog/tags) or add new ones if appropriate.
- `author` (required): Your name or pseudonym. Use your GitHub username or handle for consistency (e.g., `tom`). If you need to list multiple authors, use a comma-separated string (e.g., `alice, bob`), or seperate with "and" (e.g., `alice and bob`).
- `image`: Path to a featured image, shown on the post and its card in the listing (optional). See the images section below.

The build stops with an error naming the file if `title` or `author` is missing, `tags` isn't a list, or the `image` doesn't exist. A social media preview card is drawn automatically from the title and summary.

### 3. Write the Content

After the front matter, write your blog post in [Markdown](https://www.markdownguide.org/basic-syntax/). Use standard Markdown syntax for formatting, links, lists, etc.

- Keep it concise but informative.
- Use headings (e.g., ## Subheading) for structure.
- Link to other pages of getmonero.org using relative paths. Links to other sites open in a new tab automatically.
- Mention Moneropedia terms with `@term` to link them, see [How to link to Moneropedia terms](how-to-link-to-moneropedia-terms.md).
- Quotes, apostrophes, `--` and `...` appear exactly as you type them (no automatic “smart” punctuation).

### 4. Embedding Images

Images should be stored in the `src/content/blog/assets/` folder, so the build can resize them and serve modern formats.

#### Step 4.1: Create an Assets Folder
- Create a subfolder in `src/content/blog/assets/` named after your post's .md file (e.g., `2023-12-16-my-awesome-post/`).
- This keeps assets organized and colocated with the content.

Example folder structure:
```
src/content/blog/assets/2023-12-16-my-awesome-post/
  ├── featured-image.avif
  ├── diagram.avif
  └── screenshot.webp
```

#### Step 4.2: Optimize Images
- Use modern formats like AVIF or WebP for better performance.
- Ensure images are accessible (add alt text).

#### Step 4.3: Reference Images in the Post
Use relative paths starting from the blog content directory.

Example in Markdown:
```markdown
Here's a diagram explaining the concept:

![Diagram of Monero's ring signatures](./assets/2023-12-16-my-awesome-post/diagram.avif)
```

Example for featured image in front matter:
```yaml
image: "./assets/2023-12-16-my-awesome-post/featured-image.avif"
```

Relative paths are resolved from the post's file. Do not use absolute paths like `/blog/assets/...`: they are used as-is and won't be resized.

### 5. Test and Build

- Run `hugo server` to preview the site locally.
- Check that the post appears on the blog index page (`/blog`).
- Verify images load correctly and the post renders properly.
- Ensure the build passes: `hugo`.

### 6. Submit a Pull Request

- Commit your changes (file + images).
- Push to a branch and open a PR.
- Include a description of the post and any relevant context.

## PR checklist

- [ ] Blog post file added under `src/content/blog/` with correct filename (`YYYY-MM-DD-title-slug.md`).
- [ ] Front matter includes `title`, `summary`, `author`, and optional `image`.
- [ ] Images placed in `src/content/blog/assets/<slug>/` and referenced relatively.
- [ ] Alt text provided for images.
- [ ] Run `hugo server` and `hugo` and verify the post renders correctly.

## Tips

- Review existing posts in `src/content/blog/` for examples.
- If adding new tags, ensure they make sense and don't duplicate existing ones. Refer to the [tag index](https://getmonero.org/blog/tags) for guidance.
- If the post needs updates, edit the file directly and rebuild.
- Try not to write HTML directly in your content. If not possible (iframes, etc.), ensure it is safe and sanitized.

If you encounter issues, check the [Hugo documentation](https://gohugo.io/documentation/) or ask in the Monero community channels.
