# Monero Site Redesign in Hugo

This is an implementation of the planned Monero page redesign, built with [Hugo](https://gohugo.io).

## Features

- **Hugo**: Static site generation, no JavaScript, reproducible builds (the same commit always produces the same files).
- **Internationalization (i18n)**: Multi-language pages from i18next-style JSON translations with namespace support. Weblate friendly.
- **Responsive Design**: Modern CSS for a desktop and mobile-friendly experience.
- **Component-Based Architecture**: Reusable partials for the header, footer, cards and page sections, each with its own scoped stylesheet.

## Project Structure

```
/
├── assets/
│   ├── css/
│   │   ├── base/         # Global styles, fonts, CSS variables
│   │   ├── components/   # One stylesheet per component (scoped)
│   │   └── main.css      # Imports everything, in order
│   └── fonts/, images/   # Site fonts, Open Graph card background
├── content/              # Page stubs (one per page) and the blog builder
├── data/                 # Hugo-only data (locale formats, font metrics)
├── downloads/            # hashes.txt and its signature, served at /downloads/
├── layouts/
│   ├── _markup/          # How Markdown links, images, headings and code render
│   ├── _partials/
│   │   ├── helpers/      # Translation, links, numbers, dates, Markdown...
│   │   ├── pages/        # Page-specific components
│   │   └── ui/           # Shared UI components (buttons, cards, etc.)
│   ├── baseof.html       # The page frame (head, header, footer)
│   └── ...               # One template per page, mirroring the URL
├── public/               # Files copied as-is (media, PDFs, favicons)
├── scripts/              # Checks run in CI
├── src/
│   ├── assets/           # Images and icons used by templates
│   ├── content/          # Markdown: blog, Moneropedia, legal
│   ├── data/             # Site data (downloads, exchanges, ...)
│   └── i18n/translations # Translation JSON files (Weblate)
└── hugo.toml             # Hugo configuration
```

See [Understanding the project structure](docs/understanding-the-project-structure.md) for more.

## Commands

You need [Hugo extended](https://gohugo.io/installation/) **v0.167.0** (the version CI and Docker use). The checks below also need Python 3, `jq`, [yamlfmt](https://github.com/google/yamlfmt) and [Biome](https://biomejs.dev/); nothing needs Node.js.

| Command                                | Action                                                 |
| :------------------------------------- | :----------------------------------------------------- |
| `hugo server`                          | Starts a local dev server at `localhost:1313`          |
| `hugo`                                 | Builds the site to `./dist/`                           |
| `python3 scripts/check-scoped-css.py`  | Checks that component styles only style their component |
| `python3 scripts/check-no-js.py`       | Checks the built site in `./dist/` has no JavaScript   |
| `python3 scripts/check-css-format.py`  | Checks stylesheets follow the project's formatting     |
| `biome lint --error-on-warnings`       | Lints the stylesheets ([Biome](https://biomejs.dev/), rules in `biome.json`) |
| `yamlfmt` / `yamlfmt -lint`            | Formats / checks the data YAML files ([yamlfmt](https://github.com/google/yamlfmt)) |
| `jq . file.json > tmp && mv tmp file.json` | Formats a JSON data file the way CI expects        |

A full build takes about a minute and a half the first time (it resizes images and draws the blog's preview cards); after that Hugo reuses its cache in `resources/_gen/`.

## Docker

You can build and run the site without installing Hugo. Three targets are available:

| Target         | Purpose                        | Output                  |
| :------------- | :----------------------------- | :---------------------- |
| `dev`          | Local development, live reload | Dev server on `:1313`   |
| `static`       | Export static site to host     | `dist/` on your machine |
| `serve-static` | Production static via Caddy    | Static server on `:80`  |

### `dev`

```bash
docker build --target dev -t monero-site-dev .
docker run -p 1313:1313 -v $(pwd):/app monero-site-dev
```

Then open [http://127.0.0.1:1313](http://127.0.0.1:1313).

### `static`

```bash
docker build --target static --output dist .
```

The built site will be output to the `dist/` directory on your host.

### `serve-static`

```bash
docker build --target serve-static -t monero-site .
docker run -p 8080:80 monero-site
```

Then open [http://127.0.0.1:8080](http://127.0.0.1:8080).

### Build args

| Arg            | Description                 | Example   |
| :------------- | :-------------------------- | :-------- |
| `HUGO_VERSION` | Hugo version to build with  | `0.167.0` |

`COOLIFY_PREVIEW`, `COOLIFY_BRANCH`, `COOLIFY_REPO` and `SOURCE_COMMIT` are passed through too: on a Coolify pull request preview they show the preview banner.

### Coolify

Deploy with the **Dockerfile** build pack, target `serve-static`, port `80`, and no build or install command. Pull request previews use the same settings.

To make preview builds fast (seconds instead of about two minutes), give the previews these build variables; production leaves them unset and builds everything. CI does the same for pushes and pull requests, keeping the posts and languages the change touches (`scripts/ci-build-scope.sh`); a release builds the whole site:

| Variable                       | Effect                                          |
| :----------------------------- | :---------------------------------------------- |
| `LIMIT_POSTS=10`               | only the newest 10 blog posts                   |
| `SKIP_OG=true`                 | posts use the default social card (none drawn)  |
| `SKIP_IMAGE_OPTIMIZATION=true` | images served as they are, not resized          |

## More

- [Contributor documentation](docs/README.md)
- [Beta Preview](https://beta.monerodevs.org)
- [Hugo Documentation](https://gohugo.io/documentation/)
- [Monero Project](https://www.getmonero.org)
- [Diego's Figma](https://www.figma.com/design/y53fDBe55sM1GvhxXXjQEp/Monero-Website-Redesign-2024--Copy-?node-id=140-1399&t=TThf0slioIblcNoq-0)
