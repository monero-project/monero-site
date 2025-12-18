# How to Set Up the Development Environment

Quick, minimal steps to get the site running locally so you can start contributing.

## Requirements

- Node.js 22 (LTS) or newer – use a version manager (`fnm`, `nvm`) if needed.
- pnpm (recommended, project uses pnpm@10+) – install with `npm install -g pnpm`.
- Git – for cloning and PRs.

Verify:
```bash
node --version   # 22+
pnpm --version   # 10+
git --version
```

## Quick Start

1. Fork the repo on GitHub, then clone your fork:

```bash
git clone https://github.com/your-username/monero-site.git
cd monero-site
```

(Optionally add upstream remote: `git remote add upstream https://github.com/monero-project/monero-site.git`)

2. Install dependencies:

```bash
pnpm install
```

3. Start the dev server and open http://localhost:4321:

```bash
pnpm dev
```

4. Build for production (optional):

```bash
pnpm build
pnpm preview
```

## Useful Commands

- Lint: `pnpm lint`
- CSS lint: `pnpm lint:css`
- Format: `pnpm format`

## Troubleshooting

- Node version mismatch: switch versions with `fnm use 22` or `nvm use 22`.
- pnpm errors: try `pnpm store prune` and `pnpm install` again.
- Permission issues: avoid `sudo` with pnpm; fix filesystem permissions instead.

## Quick checklist

- [ ] Forked the repo
- [ ] Cloned it locally
- [ ] Ran `pnpm install` successfully
- [ ] Verified `pnpm dev` opens the site at / resources

If you get stuck, see the [main README](../README.md) or open an issue. For a short tour of the codebase, see [Understanding the Project Structure](understanding-the-project-structure.md).