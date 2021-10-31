import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriesComponent } from './components/histories/histories.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  {
    path: '',
    component: HistoriesComponent
  },
  {
    path: ':id',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
