import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private baseUrl: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}people/${id}/`);
  }

  getFilm(id: string): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}films/${id}/`);
  }
}
