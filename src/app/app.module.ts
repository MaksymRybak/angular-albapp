import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ListaMagazzinoComponent } from './magazzino/lista-magazzino/lista-magazzino.component';
import { MagazzinoDettagliComponent } from './magazzino/magazzino-dettagli/magazzino-dettagli.component';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { MagazzinoModule } from './magazzino/magazzino.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    MagazzinoModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
