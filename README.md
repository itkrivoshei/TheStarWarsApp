# Angular SWAPI Explorer

Angular single-page application for browsing Star Wars films and characters from a public SWAPI-compatible dataset.

This repository is maintained as a portfolio project. It demonstrates Angular application structure, API integration, client-side routing, NgRx state management, responsive SCSS styling, and GitHub Pages deployment through GitHub Actions.

## Live Demo

```text
https://itkrivoshei.github.io/angular-swapi-explorer/
```

## Overview

The application loads film and character data from a public API and presents it through a responsive Angular interface.

```text
GitHub Pages
    ↓
Angular SPA
    ↓
SWAPI-compatible public API
    ↓
Films and characters data
```

## Tech Stack

- Angular 17
- TypeScript
- Angular Router
- NgRx Store and Effects
- RxJS
- Angular Material
- SCSS
- GitHub Actions
- GitHub Pages

## Features

- Film list loaded from a public SWAPI-compatible API
- Film detail pages with metadata and character links
- Character detail pages with profile data and related films
- Client-side routing for films and characters
- NgRx-based state management
- Typed API service layer
- Observable-based data flow with RxJS
- Responsive dark UI
- Optional theme audio toggle
- Automated deployment to GitHub Pages from the `main` branch

## Project Structure

```text
src/
├── app/
│   ├── core/
│   │   ├── models/
│   │   └── services/
│   ├── pages/
│   │   ├── home/
│   │   ├── film-details/
│   │   └── character-details/
│   ├── shared/
│   │   └── store/
│   │       ├── actions/
│   │       ├── effects/
│   │       ├── reducers/
│   │       ├── selectors.ts
│   │       └── state.ts
│   ├── app.component.*
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
└── styles.scss
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/itkrivoshei/angular-swapi-explorer.git
cd angular-swapi-explorer
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Open the app locally:

```text
http://localhost:4200
```

## Build

Create a production build:

```bash
npm run build
```

Build for GitHub Pages locally:

```bash
npm run build:pages -- --base-href /angular-swapi-explorer/
```

## Deployment

The project is deployed with GitHub Actions.

Workflow file:

```text
.github/workflows/deploy-pages.yml
```

Deployment flow:

```text
push to main
    ↓
npm ci
    ↓
Angular production build
    ↓
upload GitHub Pages artifact
    ↓
deploy to GitHub Pages
```

GitHub Pages should be configured with:

```text
Settings → Pages → Source → GitHub Actions
```

The workflow calculates the repository name automatically, so the Pages base path stays correct after repository renaming.

## Testing

Run the Angular test suite:

```bash
npm test
```

## Portfolio Notes

This project is useful as a public portfolio repository because it demonstrates:

- Angular standalone application configuration
- API-driven frontend development
- TypeScript models and service abstraction
- RxJS Observable-based data flow
- NgRx actions, effects, reducers, selectors, and typed state
- Dynamic routing with route parameters
- Responsive SCSS interface design
- Static deployment through GitHub Pages
- CI/CD deployment using GitHub Actions

## Status

Maintained as a portfolio project.

The application depends on a public SWAPI-compatible data endpoint, so API availability may affect runtime behavior.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
