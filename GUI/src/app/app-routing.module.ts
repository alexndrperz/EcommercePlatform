import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAdminComponent } from './views/admin/products-admin/products-admin.component';
import { UsersAdminComponent } from './views/admin/users-admin/users-admin.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'admin',
    pathMatch:'full'
  },
  // {
  //   path:'**',
  //   redirectTo:'admin',
  //   pathMatch:'full'
  // },

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
