import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ISearch } from '../interfaces/ISearch';
import { FilmsService } from '../services/films/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator = MatPaginator.prototype;
  @ViewChild(MatSort) sort: MatSort = MatSort.prototype;

  displayedColumns = ['id', 'year', 'title', 'winner'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource([{}]);

  public defLimit = 10;
  public lengthItems: number = 0;
  public search: ISearch = {
    page: 1,
    limit: this.defLimit,
    total: 0,
    pagesIndexed: [1]
  };

  constructor(private filmsService: FilmsService) { }

  ngAfterViewInit() {
    this.searchData();
  }

  public searchData(pagination: boolean = false): Promise<boolean> {
    if (pagination === false) {
      this.search.total = 0;
      this.search.page = 1;
    }

    return new Promise((resolve) => {
      this.filmsService.getFilms([], this.search.page, this.search.limit).then((resp) => {
        if (pagination === true) {
          this.dataSource.data.push(...resp.content);
      } else {
          this.dataSource = new MatTableDataSource(resp.content);
          this.search.total = resp.totalElements;
          this.dataSource.paginator = this.paginator;
      }

      this.paginator.pageIndex = this.search.page - 1;
      this.paginator.page.emit(this.paginator);
        resolve(true);
      }).catch(err => {
        console.log(err);
      })
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public onPageEvent($event: any) {
    if (!$event.initialized) {
      let page = $event.pageIndex + 1;
      let lastPage = this.search.pagesIndexed[this.search.pagesIndexed.length - 1];

      if (this.search.pagesIndexed.indexOf(page) < 0) {
        if ((page - lastPage) > 1) {
          this.search.page = lastPage + 1;
          this.search.pagesIndexed.push(this.search.page);

          this.searchData(true).then(() => {
            this.onPageEvent($event);
          });
        } else {
          this.search.pagesIndexed.push(page);
          this.search.page = page;
          this.search.limit = $event.pageSize;
          this.searchData(true).then(() => {
          });
        }
      }
    }
  }
}
