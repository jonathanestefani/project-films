import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWinnersComponent } from './movies-winners.component';

describe('MoviesWinnersComponent', () => {
  let component: MoviesWinnersComponent;
  let fixture: ComponentFixture<MoviesWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesWinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
