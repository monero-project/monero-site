# Monero Site Redesign in Astro

This is a work-in-progress (WIP) implementation of the planned Monero page redesign, built with Astro.

## Features

- **Astro**: Static site generation for no JavaScript, optimal performance and SEO.
- **Internationalization (i18n)**: Dynamically generated multi-language pages with namespace support. Weblate friendly (i18next)
- **Responsive Design**: Modern CSS for a desktop and mobile-friendly experience.
- **Component-Based Architecture**: Reusable Astro components for Hero, Header, Footer, and page sections.

## Project Structure

```
/
├── public/
│   └── media/            # Videos, images
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── layout/       # Header, Footer
│   │   ├── pages/        # Page-specific components (something that is only used on one page)
│   │   └── ui/           # UI components (buttons, cards, etc.)
│   ├── i18n/             # Internationalization setup
│   │   ├── locales/      # Translation JSON files
│   │   ├── config.ts     # Locale configuration
│   │   └── utils.ts      # i18n utilities
│   ├── layouts/          # Astro layouts
│   ├── pages/            # Route pages
│   └── styles/           # Global CSS variables
└── package.json
```

## Next steps

- [ ] Set up Weblate for community translations
- [ ] Add icons in place of placeholders
- [ ] Add RSS feed generation
- [ ] Create components for page content
- [ ] Add localized blog content support

## Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Tips

If you'd like to support my development effort, consider sending a tip to the Monero address below:
```
8A2z3j3zTU39vJSp1zCAnP2HuzyX31Zg8AtvcZp6GF2QXT1LMuoMyXqNXViMEqgVdcWHWGumB2buq2ZkNLiy4KFJMeLxPx5
```

## More

- [Astro Documentation](https://docs.astro.build)
- [Monero Project](https://www.getmonero.org)
- [Diego's Figma](https://www.figma.com/design/OuY892nD4zD1CEQDvC2Kty/Monero-Website-Redesign-2024--Copy-?node-id=112-1178&t=Bfi1eK3wLkZeoNXG-0)
