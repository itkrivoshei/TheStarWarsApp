# Star Wars Explorer

Angular single-page application for browsing Star Wars films and characters from the public SWAPI dataset.

This repository is kept as a portfolio project because it shows Angular application structure, API integration, routing, NgRx state management, Angular Material usage, and GitHub Pages deployment.

## Live Demo

https://itkrivoshei.github.io/TheStarWarsApp/

## Tech Stack

- Angular 17
- TypeScript
- NgRx Store and Effects
- Angular Router
- Angular Material
- SCSS
- SWAPI data API
- GitHub Pages deployment

## Features

- Film list loaded from SWAPI
- Film detail pages with metadata and character links
- Character detail pages with profile data and related films
- Client-side routing for films and characters
- NgRx-based state management for loaded data
- Responsive dark UI suitable for a public portfolio project
- Optional theme audio toggle

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
└── styles.scss
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/itkrivoshei/TheStarWarsApp.git
cd TheStarWarsApp
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm start
```

Open:

```text
http://localhost:4200
```

## Build

Create a production build:

```bash
npm run build
```

For GitHub Pages, build with the repository base path:

```bash
ng build --configuration production --base-href /TheStarWarsApp/
```

## Tests

Run the Angular test suite:

```bash
npm test
```

## Portfolio Notes

This project is useful as a public portfolio repository because it demonstrates:

- Angular standalone configuration
- API-driven frontend development
- Observable-based data flow with RxJS
- NgRx actions, effects, reducers, selectors, and typed state
- Client-side routing and dynamic route parameters
- Responsive SCSS UI implementation
- Static deployment workflow for GitHub Pages

## Status

Maintained as a portfolio project. The application depends on public SWAPI-compatible data endpoints, so API availability may affect runtime behavior.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
