import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dash', loadChildren: () => import('./dash/dash.module').then(m => m.DashModule) },
  { path: 'films', loadChildren: () => import('./films/films.module').then(m => m.FilmsModule) },
  { path: '', pathMatch: 'full', redirectTo: 'dash' },
  { path: '**', pathMatch: 'full', redirectTo: 'dash' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
