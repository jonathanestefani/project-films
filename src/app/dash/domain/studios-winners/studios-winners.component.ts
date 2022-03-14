import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilmsService } from '../../../services/films/films.service';

@Component({
  selector: 'app-studios-winners',
  templateUrl: './studios-winners.component.html',
  styleUrls: ['./studios-winners.component.scss']
})
export class StudiosWinnersComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator = MatPaginator.prototype;
  @ViewChild(MatSort) sort: MatSort = MatSort.prototype;

  displayedColumns = ['name', 'winCount'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource([{}]);

  constructor(private filmsService: FilmsService) {}

  ngAfterViewInit() {
    this.filmsService.getStudioWithWinners().then((resp) => {
      this.dataSource.data = [];
      for(let idx = 0; idx < 3; idx++) {
        this.dataSource.data.push(resp.studios[idx]);
      }
      //  = new MatTableDataSource(resp.studios);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }).catch(err => {
      console.log(err);
    })
  }

}
