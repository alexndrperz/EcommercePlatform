import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsAdminComponent } from './views/admin/products-admin/products-admin.component';
import { UsersAdminComponent } from './views/admin/users-admin/users-admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentTableComponent } from './components/present-table/present-table.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { BuyProductsComponent } from './views/buyers/buy-products/buy-products.component';
import { SeeTransactsByrComponent } from './views/buyers/see-transacts-byr/see-transacts-byr.component';
import { TransactsAdminComponent } from './views/admin/transacts-admin/transacts-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule } from '@angular/material/tooltip'
import { ImgInputComponent } from './components/img-input/img-input.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    ProductsAdminComponent,
    UsersAdminComponent,
    NavbarComponent,
    PresentTableComponent,
    ModalComponent,
    LoginComponent,
    BuyProductsComponent,
    ImgInputComponent,
    SeeTransactsByrComponent,
    TransactsAdminComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
