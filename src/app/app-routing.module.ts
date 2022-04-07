import { MagazzinoDettagliComponent } from './magazzino/magazzino-dettagli/magazzino-dettagli.component';
import { ListaMagazzinoComponent } from './magazzino/lista-magazzino/lista-magazzino.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CustomerComponent } from './home/customer/customer.component';
import { NewProductComponent } from './home/new-product/new-product.component';
import { NewCustomerReactiveComponent } from './home/new-customer-reactive/new-customer-reactive.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'newProduct', component: NewProductComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'customer-reactive', component: NewCustomerReactiveComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
