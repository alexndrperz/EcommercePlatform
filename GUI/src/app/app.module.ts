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

@NgModule({
  declarations: [
    AppComponent,
    ProductsAdminComponent,
    UsersAdminComponent,
    NavbarComponent,
    PresentTableComponent,
    ModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
