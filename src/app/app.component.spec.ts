import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';

describe('FilmDetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FilmDetailsComponent,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FilmDetailsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
