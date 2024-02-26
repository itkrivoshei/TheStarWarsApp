import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../services/swapi.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  character$: Observable<any> | undefined;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id !== null) {
        this.character$ = this.swapiService.getCharacterDetails(id);
      }
    });
  }
}
