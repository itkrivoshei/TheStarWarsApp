import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CharactersState, FilmsState } from './state';

export const selectCharactersState =
  createFeatureSelector<CharactersState>('characters');
export const selectFilmsState = createFeatureSelector<FilmsState>('films');

export const selectAllCharacters = createSelector(
  selectCharactersState,
  (state: CharactersState) => state.list
);

export const selectSelectedCharacter = createSelector(
  selectCharactersState,
  (state: CharactersState) => state.selected
);

export const selectCharactersError = createSelector(
  selectCharactersState,
  (state: CharactersState) => state.error
);

export const selectAllFilms = createSelector(
  selectFilmsState,
  (filmsState: FilmsState) => (filmsState ? filmsState.list : [])
);

export const selectSelectedFilm = createSelector(
  selectFilmsState,
  (filmsState: FilmsState) => (filmsState ? filmsState.selected : null)
);

export const selectFilmsError = createSelector(
  selectFilmsState,
  (filmsState: FilmsState) => (filmsState ? filmsState.error : null)
);
