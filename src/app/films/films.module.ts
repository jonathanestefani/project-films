import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module';
import { FilmsComponent } from './films.component';
import { FormsModule } from '@angular/forms';
import { PaginationDirectiveModule } from '../components/table/pagination.directive.module';

const routes: Routes = [
  { path: '', component: FilmsComponent }
];

@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    PaginationDirectiveModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FilmsModule { }
