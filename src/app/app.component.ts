import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatIconModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TheStarWarsApp';
  private audio?: HTMLAudioElement;
  isPlaying = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audio = new Audio('assets/star-wars-theme.mp3');
      this.audio.volume = 0.5;
      this.audio.load();
    }
  }

  ngOnInit(): void {}

  playMusic() {
    if (this.audio) {
      if (this.audio.paused) {
        this.audio
          .play()
          .then(() => {
            this.isPlaying = true;
          })
          .catch((e) => console.error('Error playing audio:', e));
      } else {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
      }
    }
  }
}
