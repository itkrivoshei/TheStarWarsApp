import { createReducer, on } from '@ngrx/store';
import * as DataActions from '../actions/actions';

export interface State {
  character: any | null;
  movie: any | null;
  error: any | null;
}

export const initialState: State = {
  character: null,
  movie: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(DataActions.loadDataSuccess, (state, { apiType, data }) => ({
    ...state,
    [apiType]: data,
    error: null,
  })),
  on(DataActions.loadDataFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
