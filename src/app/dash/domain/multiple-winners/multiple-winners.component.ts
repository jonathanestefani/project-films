import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilmsService } from '../../../services/films/films.service';

@Component({
  selector: 'app-multiple-winners',
  templateUrl: './multiple-winners.component.html',
  styleUrls: ['./multiple-winners.component.scss']
})
export class MultipleWinnersComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator = MatPaginator.prototype;
  @ViewChild(MatSort) sort: MatSort = MatSort.prototype;

  displayedColumns = ['year', 'winnerCount'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource([{}]);

  constructor(private filmsService: FilmsService) { }

  ngAfterViewInit() {
    this.filmsService.getYearsWithMoreThanOneWinner().then((resp) => {
      console.log(resp);
      this.dataSource = new MatTableDataSource(resp.years);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }).catch(err => {
      console.log(err);
    })
  }
}
