import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadData } from '../../shared/store/actions/actions';
import { AppState } from '../../shared/store/state';
import { Film } from '../../core/models/film.model';
import { selectAllFilms } from '../../shared/store/selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  films$: Observable<Film[]>;

  constructor(private store: Store<AppState>) {
    this.films$ = this.store
      .select(selectAllFilms)
      .pipe(
        map((films) =>
          films.slice().sort((a, b) => a.episode_id - b.episode_id)
        )
      );
  }

  ngOnInit(): void {
    this.store.dispatch(loadData({ apiType: 'film', id: '' }));
  }
}
