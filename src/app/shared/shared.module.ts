import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { convertNumber } from './convert-number';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    convertNumber,
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    ConvertToSpacesPipe,
    convertNumber,
  ]
})
export class SharedModule { }
