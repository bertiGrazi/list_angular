import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { UpdateItemsComponent } from './components/update-items/update-items.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: 'list', component: ListComponent, canActivate:[AuthGuard]},
  {path: 'additem', component: AddItemComponent, canActivate:[AuthGuard]},
  {path: 'updateitem/:id', component: UpdateItemsComponent, canActivate:[AuthGuard]},
  {path: 'login-signup', component: LoginSignupComponent},
  {path: '', redirectTo: 'login-signup', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
