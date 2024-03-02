import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwapiService } from '../services/swapi.service';

interface Movie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  loading: boolean = true;

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getMovies().subscribe({
      next: (response) => {
        this.movies = response.results.map((movie: Movie) => {
          const id = movie.url.split('/').filter(Boolean).pop();
          return { ...movie, id };
        });
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
