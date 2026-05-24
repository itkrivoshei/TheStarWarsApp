# Angular SWAPI Explorer

[![Pages workflow](https://img.shields.io/github/actions/workflow/status/itkrivoshei/angular-swapi-explorer/deploy-pages.yml?branch=main&style=flat-square&label=pages)](https://github.com/itkrivoshei/angular-swapi-explorer/actions/workflows/deploy-pages.yml)
[![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=flat-square&logo=angular)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

Angular application for browsing Star Wars films and characters from a SWAPI-compatible public API.

## Tech stack

- Angular 17
- TypeScript
- Angular Router
- NgRx Store and Effects
- RxJS
- Angular Material icons
- SCSS
- GitHub Actions
- GitHub Pages

## Features

- Film list from a SWAPI-compatible API
- Film detail pages with metadata and character links
- Character detail pages with profile data and related films
- Client-side routing for films and characters
- NgRx-based state management
- Responsive dark interface

## Requirements

- Node.js 20 recommended
- npm

## Installation

```bash
npm ci
```

For dependency updates or lockfile regeneration, use:

```bash
npm install
```

## Development

Run the local development server:

```bash
npm start
```

The app runs at:

```text
http://localhost:4200
```

## Build

Create a production build:

```bash
npm run build
```

Build with the GitHub Pages base path:

```bash
npm run build:pages -- --base-href /angular-swapi-explorer/
```

## Test

Run tests once in headless Chrome:

```bash
npm run test:ci
```

Run the default Angular test watcher:

```bash
npm test
```

Run the local verification command:

```bash
npm run verify
```

## Deployment

The repository includes a GitHub Actions workflow for GitHub Pages:

```text
.github/workflows/deploy-pages.yml
```

The workflow installs dependencies with `npm ci`, runs `npm run test:ci`, builds the app with the correct repository base path, adds a SPA fallback, and deploys the generated browser output to GitHub Pages.

GitHub Pages should be configured to use:

```text
Settings → Pages → Source → GitHub Actions
```

## Project structure

```text
src/
├── app/
│   ├── core/
│   │   ├── models/
│   │   └── services/
│   ├── pages/
│   │   ├── character-details/
│   │   ├── film-details/
│   │   └── home/
│   └── shared/
│       └── store/
├── assets/
└── styles.scss
```

## License

This project is licensed under the [MIT License](LICENSE).
