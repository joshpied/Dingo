import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DingoGridComponent} from './dingo-grid/dingo-grid.component';
import {DingoSelectionComponent} from './dingo-selection/dingo-selection.component';

const routes: Routes = [
  {path: '', redirectTo: '/dingo-selection', pathMatch: 'full'},
  {path: 'dingo-selection', component: DingoSelectionComponent},
  {path: 'dingo-grid', component: DingoGridComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
