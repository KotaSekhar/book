import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeformComponent } from './homeform/homeform.component';
import { ReaderformComponent } from './readerform/readerform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegistraionformComponent } from './registraionform/registraionform.component';
import { SearchbookformComponent } from './searchbookform/searchbookform.component';
// import { ToastrModule } from 'ngx-toastr';
import { BuyabookformComponent } from './buyabookform/buyabookform.component';
import { PurchasedbookformComponent } from './purchasedbookform/purchasedbookform.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeformComponent,
    ReaderformComponent,
    LoginformComponent,
    RegistraionformComponent,
    SearchbookformComponent,
    BuyabookformComponent,
    PurchasedbookformComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot({
    //   positionClass :'toast-top-right'
    // }),
    ReactiveFormsModule,
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
