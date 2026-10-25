# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Repository scaffolding: `.gitignore`, `.editorconfig`, `.gitattributes`,
  license, contribution guide and GitHub issue/PR templates.
- `README.md` with project overview and page screenshots.

### Changed

- Reorganised the project into `pages/`, `components/` and `assets/` folders and
  renamed every file to `kebab-case`.
- Moved shared header and footer markup into reusable components and wired them
  into every page.
- Extracted inline `<style>` blocks into dedicated stylesheets under
  `assets/css/` and inline `<script>` blocks into dedicated modules under
  `assets/js/`.
