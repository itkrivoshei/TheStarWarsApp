import { ComponentFixture, TestBed } from '@angular/core/testing';

import { filmDetailsComponent } from './film-details.component';

describe('filmDetailsComponent', () => {
  let component: filmDetailsComponent;
  let fixture: ComponentFixture<filmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [filmDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(filmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
