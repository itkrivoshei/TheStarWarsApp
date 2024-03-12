import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as DataActions from '../actions/actions';
import { SwapiService } from '../../../core/services/swapi.service';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.loadData),
      mergeMap((action) =>
        this.fetchData(action.apiType, action.id).pipe(
          map((data) => this.handleSuccess(action.apiType, data)),
          catchError((error) => of(DataActions.loadDataFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private swapiService: SwapiService) {}

  private fetchData(apiType: 'character' | 'film', id?: string) {
    switch (apiType) {
      case 'film':
        return id
          ? this.swapiService.getFilm(id)
          : this.swapiService.getFilms();
      case 'character':
        return id
          ? this.swapiService.getCharacter(id)
          : this.swapiService.getCharacter('');
      default:
        console.warn(`Unhandled apiType or missing id: ${apiType}`);
        return of(null);
    }
  }

  private handleSuccess(apiType: 'character' | 'film', data: any) {
    switch (apiType) {
      case 'film': {
        const films = data.results
          ? data.results
          : Array.isArray(data)
          ? data
          : [data];
        return DataActions.loadFilmsSuccess({ films });
      }
      case 'character': {
        const character = data;
        return DataActions.loadCharacterSuccess({ character });
      }
      default:
        return DataActions.loadDataFailure({ error: 'Invalid apiType' });
    }
  }
}
