import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { ErrorComponent } from './components/error/error.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  {path:"",component:UsersComponent},
  {path:"users",component:UsersComponent},
  {path:"users/:id",component:UsersDetailsComponent},
  {path:"add",component:AddComponent},
  {path:"**",component:ErrorComponent    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
