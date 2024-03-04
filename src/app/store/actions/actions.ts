import { createAction, props } from '@ngrx/store';

export const loadData = createAction(
  '[Data API] Load Data',
  props<{ apiType: 'character' | 'movie'; id: string }>()
);

export const loadDataSuccess = createAction(
  '[Data API] Load Data Success',
  props<{ apiType: 'character' | 'movie'; data: any }>()
);

export const loadDataFailure = createAction(
  '[Data API] Load Data Failure',
  props<{ error: any }>()
);
