import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as DataActions from '../actions/actions';
import { SwapiService } from '../../services/swapi.service';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.loadData),
      mergeMap(({ apiType, id }) =>
        this.getApiService(apiType, id).pipe(
          map((data) => DataActions.loadDataSuccess({ apiType, data })),
          catchError((error) => of(DataActions.loadDataFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private swapiService: SwapiService) {}

  private getApiService(apiType: 'character' | 'movie', id: string) {
    switch (apiType) {
      case 'character':
        return this.swapiService.getCharacterDetails(id);
      case 'movie':
        return this.swapiService.getMovieDetails(id);
      default:
        return of(null);
    }
  }
}
