import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilmsService } from '../../../services/films/films.service';

@Component({
  selector: 'app-studios-winners',
  templateUrl: './studios-winners.component.html',
  styleUrls: ['./studios-winners.component.scss']
})
export class StudiosWinnersComponent implements OnInit {

  displayedColumns = ['name', 'winCount'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource([{}]);

  constructor(private filmsService: FilmsService) {}

  ngAfterViewInit() {
    this.filmsService.getStudioWithWinners().then((resp) => {
      console.log(resp);
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(resp.studios);

    }).catch(err => {
      console.log('erro');
      console.log(err);
    })

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {}

  @ViewChild(MatPaginator) paginator: MatPaginator = MatPaginator.prototype;
  @ViewChild(MatSort) sort: MatSort = MatSort.prototype;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
