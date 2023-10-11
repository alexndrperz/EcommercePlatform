import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAdminComponent } from './views/admin/products-admin/products-admin.component';
import { UsersAdminComponent } from './views/admin/users-admin/users-admin.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  // {
  //   path:'**',
  //   redirectTo:'admin',
  //   pathMatch:'full'
  // },


  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'admin', 
    children: [
      {path:'', redirectTo:'productos', pathMatch:'full'},
      {path:'productos',component:ProductsAdminComponent},
      {path:'users',component:UsersAdminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
