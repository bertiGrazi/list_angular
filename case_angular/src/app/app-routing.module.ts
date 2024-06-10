import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { UpdateItemsComponent } from './components/update-items/update-items.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'additem', component: AddItemComponent},
  {path: 'updateitem/:id', component: UpdateItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
