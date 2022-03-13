import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module';
import { MultipleWinnersComponent } from './domain/multiple-winners/multiple-winners.component';
import { StudiosWinnersComponent } from './domain/studios-winners/studios-winners.component';
import { ProducersLongestComponent } from './domain/producers-longest/producers-longest.component';
import { MoviesWinnersComponent } from './domain/movies-winners/movies-winners.component';

const routes: Routes = [
  { path: '', component: DashComponent }
];

@NgModule({
  declarations: [
    DashComponent,
    MultipleWinnersComponent,
    StudiosWinnersComponent,
    ProducersLongestComponent,
    MoviesWinnersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashModule { }
