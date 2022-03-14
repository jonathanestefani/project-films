import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilmsService } from '../../../services/films/films.service';

@Component({
  selector: 'app-movies-winners',
  templateUrl: './movies-winners.component.html',
  styleUrls: ['./movies-winners.component.scss']
})
export class MoviesWinnersComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator = MatPaginator.prototype;
  @ViewChild(MatSort) sort: MatSort = MatSort.prototype;

  displayedColumns = ['id', 'year', 'title'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource([{}]);
  search_year: number = 2000;

  constructor(private filmsService: FilmsService) { }

  ngAfterViewInit() {
    this.search();
  }

  public search() {
    this.filmsService.getFilmByYear(this.search_year).then((resp) => {
      this.dataSource = new MatTableDataSource(resp);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }).catch(err => {
      console.log(err);
    })
  }

}
