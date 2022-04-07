import { Component, OnInit } from '@angular/core';
import { Product } from './newProduct';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  product: Product;

  constructor() {
    this.product = new Product('', '');
   }

  ngOnInit(): void {
  }

  saveProduct(): void {
    console.log(`Nuovo prodotto inserito: ${this.product.nameProduct}`);
  }

}
