import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

// function saluta() {
//   alert('Ciao');
// }

// function calc(x: number, y: number): number {
//   return x * y;
// }

// function sum(x: number, y: number): number {
//   return x + y;
// }

// function zero(x: number, y: number) {
//   return 0;
// }

// function dammiLaFunzioneDaUsare(operazione: string) {
//   if (operazione === 'calc') {
//     return calc;
//   } else if (operazione === 'sum') {
//     return sum;
//   }
//   return zero;
// }

// dammiLaFunzioneDaUsare('sum')(1,2);
// dammiLaFunzioneDaUsare('calc')(1,2);

// function nome(num: number) {
//   console.log(num);
// }
// nome(1);

// let fn = (num: number) => {
//   console.log(num);
// }

// fn(1);

function ratingRange(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => { 
    if (control.value && control.value >= min && control.value <= max) {
      return null;  // valore e' nel range specificato
    } else {
      return {
        range: false  // valore e' fuori il range specificato, validazione KO
      }
    }
  };
}

function valueIsNotEmpty(c: AbstractControl): { [key: string]: boolean } | null {
  let val: string = c.value;
  if (val && val.length > 0) {
    return null;
  } else {
    return {
      valIsEmpty: true
    }
  }
}


@Component({
  selector: 'app-new-customer-reactive',
  templateUrl: './new-customer-reactive.component.html',
  styleUrls: ['./new-customer-reactive.component.scss']
})
export class NewCustomerReactiveComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  get addresses(): FormArray {
    return this.customerForm.get('addresses') as FormArray;
  }
  
  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }),
      phone: ['', valueIsNotEmpty],
      notification: 'email',
      rating: [null, ratingRange(1, 5)],
      sendCatalog: true,
      addresses: this.fb.array([this.buildAddress()])
    });

    const phoneControl = this.customerForm.get('phone');
    phoneControl.valueChanges.subscribe(value => console.log(value));

    phoneControl.setValidators(Validators.minLength(5));
    phoneControl.clearValidators();
    phoneControl.updateValueAndValidity();
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      street1: ['', Validators.required],
      street2: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      emailGroup: { 
        email: 'jack@torchwood.com', 
        confirmEmail: 'jack@torchwood.com' }
      }
    );

    this.customerForm.get('phone').setValue('123456789');
  }

}

