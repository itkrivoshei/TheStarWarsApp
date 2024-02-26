import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../services/swapi.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie$?: Observable<any>;
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.loadMovieDetails(this.id);
      }
    });
  }

  private loadMovieDetails(id: string) {
    this.movie$ = this.swapiService.getMovieDetails(id);
  }

  extractId(url: string): string {
    const matches = url.match(/\/([0-9]+)\/$/);
    return matches ? matches[1] : '';
  }
}
