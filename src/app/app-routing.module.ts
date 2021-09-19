import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListReceipeComponent } from './components/list-receipe/list-receipe.component';
import { DetailReceipeComponent } from './components/detail-receipe/detail-receipe.component';
import { AddReceipeComponent } from './components/add-receipe/add-receipe.component';


const routes: Routes = [
  { path: '', redirectTo: 'receipe', pathMatch: 'full' },
  { path: 'receipe', component: ListReceipeComponent },
  { path: 'receipe/:id', component: DetailReceipeComponent },
  { path: 'add', component: AddReceipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
