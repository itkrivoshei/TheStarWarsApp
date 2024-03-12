import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, forkJoin, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { loadData } from '../../shared/store/actions/actions';
import { AppState } from '../../shared/store/state';
import { Film } from '../../core/models/film.model';
import { selectSelectedFilm } from '../../shared/store/selectors';
import { SwapiService } from '../../core/services/swapi.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./film-details.component.scss'],
})
export class FilmDetailsComponent implements OnInit {
  film$: Observable<Film | null> = of(null);
  characterNames$: Observable<{ name: string; id: string }[]> = of([]);

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    this.film$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        if (id) {
          this.store.dispatch(loadData({ apiType: 'film', id }));
          return this.store.select(selectSelectedFilm);
        }
        throw new Error('Film ID not found');
      })
    );

    this.characterNames$ = this.film$.pipe(
      switchMap((film) => {
        if (film && film.characters) {
          const characterObservables = film.characters.map((url) =>
            this.swapiService.getCharacter(this.extractId(url)).pipe(
              map((character) => ({
                name: character.name,
                id: this.extractId(url),
              }))
            )
          );
          return forkJoin(characterObservables);
        }
        return of([]);
      })
    );
  }

  extractId(url: string): string {
    const match = url.match(/people\/(\d+)/); // Regex to extract the ID
    return match ? match[1] : ''; // Return the captured group which is the ID
  }
}
