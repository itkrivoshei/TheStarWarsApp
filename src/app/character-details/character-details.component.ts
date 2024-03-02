import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../services/swapi.service';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  character$?: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    this.character$ = this.route.params.pipe(
      switchMap((params) => {
        const id = params['id'];
        return this.swapiService.getCharacterDetails(id);
      }),
      switchMap((character) => {
        const filmIDs = character.films.map((filmUrl: string) =>
          this.extractIdFromUrl(filmUrl)
        );
        const filmDetailsObservables = filmIDs.map((id: string) =>
          this.swapiService.getMovieDetails(id)
        );
        return forkJoin(filmDetailsObservables).pipe(
          map((filmDetails) => ({
            ...character,
            films: filmDetails,
          }))
        );
      })
    );
  }

  private extractIdFromUrl(url: string): string {
    const matches = url.match(/\/([0-9]+)\/$/);
    return matches ? matches[1] : '';
  }
}
