import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertNumber } from './convert-number';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    ConvertNumber,
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    ConvertToSpacesPipe,
    ConvertNumber,
  ]
})
export class SharedModule { }
