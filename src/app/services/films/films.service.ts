import { Injectable } from '@angular/core';
import { apiService } from '../api.service';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: apiService,
              private utils: Utils) { }

  public getFilmes(params:any[], page: number = 0, size: number = 15): Promise<any> {
    return this.http.get('movies', '?page=' + page + '&size=' + size + '&' + this.utils.buildQuery(params));
  }

  public getYearsWithMoreThanOneWinner(): Promise<any> {
    return this.http.get('movies', '?projection=years-with-multiple-winners');
  }

  public getStudioWithWinners(): Promise<any> {
    return this.http.get('movies', '?projection=studios-with-win-count');
  }

  public getProducersRange(): Promise<any> {
    return this.http.get('movies', '?projection=max-min-win-interval-for-producers');
  }

  public getFilmByYear(year: number): Promise<any> {
    return this.http.get('movies', '?winner=true&year=' + year);
  }

}
