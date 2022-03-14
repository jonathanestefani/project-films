import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilmsService } from '../../../services/films/films.service';

@Component({
  selector: 'app-producers-longest',
  templateUrl: './producers-longest.component.html',
  styleUrls: ['./producers-longest.component.scss']
})
export class ProducersLongestComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator = MatPaginator.prototype;
  @ViewChild(MatSort) sort: MatSort = MatSort.prototype;

  displayedColumns = ['followingWin', 'interval', 'previousWin', 'producer'];
  dataSourceMin: MatTableDataSource<any> = new MatTableDataSource([{}]);
  dataSourceMax: MatTableDataSource<any> = new MatTableDataSource([{}]);

  constructor(private filmsService: FilmsService) { }

  ngAfterViewInit() {
    this.filmsService.getProducersRange().then((resp) => {
      this.dataSourceMin = new MatTableDataSource(resp.min);
      this.dataSourceMax = new MatTableDataSource(resp.max);

      this.dataSourceMin.paginator = this.paginator;
      this.dataSourceMin.sort = this.sort;
      this.dataSourceMax.paginator = this.paginator;
      this.dataSourceMax.sort = this.sort;  
    }).catch(err => {
      console.log('erro');
      console.log(err);
    })
  }

}
