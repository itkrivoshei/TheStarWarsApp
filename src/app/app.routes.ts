import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'movies/:id',
    loadComponent: () =>
      import('./movie-details/movie-details.component').then(
        (m) => m.MovieDetailsComponent
      ),
  },
  {
    path: 'characters/:id',
    loadComponent: () =>
      import('./character-details/character-details.component').then(
        (m) => m.CharacterDetailsComponent
      ),
  },
];
