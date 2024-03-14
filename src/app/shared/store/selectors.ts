import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CharactersState, FilmsState, AppState } from './state';

export const selectCharactersState = createSelector(
  (state: AppState) => state.characters,
  (charactersState) => charactersState
);
export const selectFilmsState = createFeatureSelector<FilmsState>('films');

export const selectAllCharacters = createSelector(
  (state: AppState) => state.characters,
  (state: CharactersState) => state.list
);

export const selectSelectedCharacter = createSelector(
  selectCharactersState,
  (charactersState) => charactersState?.selected
);

export const selectCharactersError = createSelector(
  selectCharactersState,
  (state: CharactersState) => state.error
);

export const selectAllFilms = createSelector(
  (state: AppState) => state.films,
  (filmsState: FilmsState) => filmsState.list
);

export const selectSelectedFilm = createSelector(
  selectFilmsState,
  (filmsState: FilmsState) => (filmsState ? filmsState.selected : null)
);

export const selectFilmsError = createSelector(
  selectFilmsState,
  (filmsState: FilmsState) => (filmsState ? filmsState.error : null)
);
