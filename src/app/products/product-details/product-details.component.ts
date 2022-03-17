import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagazzino } from 'src/app/magazzino/magazino';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, 
              private productService: ProductService,
              private router: Router) { 
    const id = Number(this.route.snapshot.paramMap.get('id'));  // Cast (Casting) di un tipo all'altro, conversione di un tipo in un altro
                                                                // per esempio convertire il tipo String in Number
    if (id) {
      this.getProduct(id);
    }
  }

  ngOnInit(): void {
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  possoVisualizzareUnProdotto(): boolean {
    return true;
  }
}

