import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer: Customer;

  constructor() {
    this.customer = new Customer();
   }

  ngOnInit(): void {
  }

  save(): void {
    console.log(`Cliente inserito: ${this.customer.firstName}`);
  }
}
