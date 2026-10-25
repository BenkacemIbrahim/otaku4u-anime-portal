# Contributing to Otaku4U

Thanks for taking the time to contribute. This document describes the workflow
used in this repository so changes stay easy to review.

## Getting started

1. Fork the repository and clone your fork.
2. Create a branch with a descriptive name:

   ```bash
   git checkout -b feat/anime-details-page
   ```

3. Serve the site locally (a static server is required so relative asset paths
   and `fetch`-based tooling behave the same as in production):

   ```bash
   npx serve .
   ```

4. Open <http://localhost:3000> in your browser.

## Project conventions

- **Naming** - all files and folders use `kebab-case` (`anime-details.html`,
  `assets/css/home.css`).
- **Separation of concerns** - markup lives in `.html`, styling in
  `assets/css/`, behaviour in `assets/js/`. Avoid inline `style` and `<script>`
  blocks; add a rule to a stylesheet or a behaviour to a script file instead.
- **Markup** - keep the shared header and footer markup identical across pages
  so the layout stays consistent.
- **Styling** - the Tailwind design tokens (`primary`, `secondary`,
  `background`, `text`) are defined once in `assets/js/tailwind.config.js` and
  shared by every page. Reuse them instead of hardcoding hex values.
- **JavaScript** - plain, dependency-free ES2019. Prefer small, focused modules
  and guard DOM lookups when a script can run on more than one page.

## Commit messages

This repository follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>
```

Common types: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `perf`.
Keep commits small and focused on a single concern.

## Pull requests

- Describe **what** changed and **why**.
- Link the related issue when one exists.
- Include screenshots for any visual change.
- Confirm that every page still renders correctly at desktop and mobile widths.

## Reporting issues

Use the GitHub issue templates. Screenshots, the browser you used and the exact
steps to reproduce help a lot.
