import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FilmsService } from './films.service';

fdescribe('FilmsService', () => {
  let service: FilmsService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(FilmsService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getFilms', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getFilms([]);
    expect(spy).toHaveBeenCalled();
  })

  it('getYearsWithMoreThanOneWinner', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getYearsWithMoreThanOneWinner();
    expect(spy).toHaveBeenCalled();
  })

  it('getStudioWithWinners', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getStudioWithWinners();
    expect(spy).toHaveBeenCalled();
  })

  it('getProducersRange', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getProducersRange();
    expect(spy).toHaveBeenCalled();
  })

  it('getFilmByYear', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getFilmByYear(2022);
    expect(spy).toHaveBeenCalled();
  })
});
