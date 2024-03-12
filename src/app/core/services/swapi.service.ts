import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Character } from '../models/character.model';
import { Film } from '../models/film.model';
@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private baseUrl: string = 'https://swapi.info/api/';

  constructor(private http: HttpClient) {}

  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}people/${id}/`);
  }

  getFilm(id: string): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}films/${id}/`);
  }

  getFilms(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}films/`);
  }

  getFilmsByUrls(filmUrls: string[]): Observable<Film[]> {
    const filmObservables = filmUrls.map((url) => this.http.get<Film>(url));
    return forkJoin(filmObservables);
  }
}
