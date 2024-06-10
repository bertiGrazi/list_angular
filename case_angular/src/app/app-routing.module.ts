import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { UpdateItemsComponent } from './components/update-items/update-items.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'additem', component: AddItemComponent},
  {path: 'updateitem/:id', component: UpdateItemsComponent},
  {path: 'login-signup', component: LoginSignupComponent},
  {path: '', redirectTo: 'login-signup', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
