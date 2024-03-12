import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { loadData } from '../../shared/store/actions/actions';
import { AppState } from '../../shared/store/state';
import { switchMap } from 'rxjs/operators';
import { Character } from '../../core/models/character.model';
import { SwapiService } from '../../core/services/swapi.service';
import { Film } from '../../core/models/film.model';
import { selectSelectedCharacter } from '../../shared/store/selectors';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  character$?: Observable<Character | null>;
  films$: Observable<Film[]> | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.store.dispatch(loadData({ apiType: 'character', id }));
        this.character$ = this.store.select(selectSelectedCharacter);
        this.films$ = this.character$?.pipe(
          switchMap((character) =>
            this.swapiService.getFilmsByUrls(character?.films || [])
          )
        );
      }
    });
  }

  public getFilmIdFromUrl(filmUrl: string): string {
    const matches = /\/api\/.*?\/(\d+)(\/?)$/.exec(filmUrl);
    return matches ? matches[1] : '';
  }
}
