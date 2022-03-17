import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Product List';
  errorMessage = '';

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  subscription!: Subscription;

  listFilter!: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.subscription = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onFilterChange(): void {
    // let self = this;
    this.filteredProducts = this.products.filter((product: IProduct) => product.productName.indexOf(this.listFilter) >= 0);
  }
}
