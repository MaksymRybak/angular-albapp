import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent
      }
    ]),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    SharedModule
  ]
})
export class ProductsModule { }
