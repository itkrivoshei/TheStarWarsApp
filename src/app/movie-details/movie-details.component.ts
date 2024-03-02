import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../services/swapi.service';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Character {
  name: string;
  id: string;
}

interface MovieDetails {
  title: string;
  director: string;
  characters: string[];
}

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie$?: Observable<any>;
  characters: Character[] = [];
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.id = params.get('id');
          if (this.id) {
            return this.swapiService.getMovieDetails(this.id);
          }
          throw new Error('Movie ID not found');
        }),
        switchMap((movie: MovieDetails) => {
          // Fetch all character details in parallel
          const characterObservables = movie.characters.map((url: string) =>
            this.swapiService.getCharacterDetails(this.extractId(url))
          );
          return forkJoin(characterObservables).pipe(
            map((characters) =>
              characters.map((character: any) => ({
                name: character.name,
                id: this.extractId(character.url),
              }))
            ),
            map((characterDetails) => ({
              ...movie,
              characters: characterDetails,
            }))
          );
        })
      )
      .subscribe((movieWithCharacterDetails) => {
        this.movie$ = of(movieWithCharacterDetails);
      });
  }

  extractId(url: string): string {
    const matches = url.match(/\/([0-9]+)\/$/);
    return matches ? matches[1] : '';
  }
}
