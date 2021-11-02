import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriesComponent } from './components/histories/histories.component';
import { HistoryComponent } from './components/history/history.component';
import { CommentformComponent } from './components/commentform/commentform.component';

const routes: Routes = [
  {
    path: 'comment',
    component: CommentformComponent
  },
  {
    path: '',
    component: HistoriesComponent
  },
  {
    path: ':id',
    component: HistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
