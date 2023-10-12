import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAdminComponent } from './views/admin/products-admin/products-admin.component';
import { UsersAdminComponent } from './views/admin/users-admin/users-admin.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuardAdminService } from './services/auth-guard-admin.service';
import { BuyProductsComponent } from './views/buyers/buy-products/buy-products.component';
import { AuthGuardBuyerService } from './services/auth-guard-buyer.service';
import { SeeTransactsByrComponent } from './views/buyers/see-transacts-byr/see-transacts-byr.component';
import { TransactsAdminComponent } from './views/admin/transacts-admin/transacts-admin.component';

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
    path:'buyers',
    canActivate:[AuthGuardBuyerService],
    children:[
      {path:'', redirectTo:'productos', pathMatch:'full'},
      {path:'productos', component:BuyProductsComponent},
      {path:'transacts', component:SeeTransactsByrComponent}
    ]
  },

  {
    path:'admin', 
    canActivate:[AuthGuardAdminService],
    children: [
      {path:'', redirectTo:'productos', pathMatch:'full'},
      {path:'productos',component:ProductsAdminComponent},
      {path:'users',component:UsersAdminComponent},
      {path:'transacts',component:TransactsAdminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
