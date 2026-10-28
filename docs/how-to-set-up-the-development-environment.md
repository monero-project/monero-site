# How to Set Up the Development Environment

Quick, minimal steps to get the site running locally so you can start contributing.

## Requirements

- [Hugo extended](https://gohugo.io/installation/) **v0.167.0**, the version CI and Docker use. Use the release binary from GitHub (or your package manager if it has exactly this version). It must be the *extended* edition.
- Git, for cloning and PRs.
- Optional: Python 3 and [pre-commit](https://pre-commit.com/), to run the checks locally (CI runs them anyway). It downloads the tools the checks use, about 350 MB in `~/.cache/pre-commit/`, see [Git hooks](../README.md#git-hooks-optional).

Verify:

```bash
hugo version   # hugo v0.167.0-...+extended ...
git --version
```

No Hugo? Use Docker instead, see the [main README](../README.md#docker).

## Quick Start

1. Fork the repo on GitHub, then clone your fork:

```bash
git clone https://github.com/your-username/monero-site.git
cd monero-site
```

(Optionally add upstream remote: `git remote add upstream https://github.com/monero-project/monero-site.git`)

2. Start the dev server and open http://localhost:1313:

```bash
hugo server
```

The first start takes a minute or so: Hugo resizes the images and draws the blog's social preview cards, then caches them in `resources/_gen/`. After that, pages reload as you save.

3. Build for production (optional):

```bash
hugo
```

The site is written to `dist/`.

## Useful Commands

- Check component styles: `python3 scripts/check-scoped-css.py`
- Check the built site has no JavaScript: `python3 scripts/check-no-js.py` (after `hugo`)
- Lint CSS and check its formatting: `pre-commit run biome-check --all-files` (it fixes the formatting) (see [How to style your page contents](how-to-style-your-page-contents.md#linting-and-formatting-css-biome))
- Optional: check your staged files before each commit, fixing the formatting of CSS and JSON: `pip install pre-commit`, then `pre-commit install --install-hooks` once (`.pre-commit-config.yaml`)
- Lint the data YAML files: `pre-commit run yamllint --all-files`
- Run all of CI's lint and format checks, fixing what they can: `pre-commit run --all-files` (`pip install pre-commit`)

## Troubleshooting

- `this feature is not available in your current Hugo version`, or image errors: you're not on the extended edition, or not on v0.167.0. Check `hugo version`.
- An error naming a file in `src/content/`: a blog post or Moneropedia entry is missing required front matter. The message says which field.
- Stale images or preview cards: delete `resources/_gen/` and rebuild.

## Quick checklist

- [ ] Forked the repo
- [ ] Cloned it locally
- [ ] `hugo version` shows v0.167.0 extended
- [ ] `hugo server` opens the site at http://localhost:1313

If you get stuck, see the [main README](../README.md) or open an issue. For a short tour of the codebase, see [Understanding the Project Structure](understanding-the-project-structure.md).
