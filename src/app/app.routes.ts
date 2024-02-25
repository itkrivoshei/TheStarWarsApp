import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
];
