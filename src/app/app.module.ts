import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ListaMagazzinoComponent } from './magazzino/lista-magazzino/lista-magazzino.component';
import { MagazzinoDettagliComponent } from './magazzino/magazzino-dettagli/magazzino-dettagli.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { MagazzinoModule } from './magazzino/magazzino.module';
import { CustomerComponent } from './home/customer/customer.component';
import { NewProductComponent } from './home/new-product/new-product.component';
import { NewCustomerReactiveComponent } from './home/new-customer-reactive/new-customer-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CustomerComponent,
    NewProductComponent,
    NewCustomerReactiveComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MagazzinoModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
