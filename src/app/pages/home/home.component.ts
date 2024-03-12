import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
    this.films$ = this.store.select(selectAllFilms);
  }

  ngOnInit(): void {
    this.store.dispatch(loadData({ apiType: 'film', id: '' }));
  }
}
