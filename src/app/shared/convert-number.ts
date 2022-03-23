import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertNumber'
})
export class ConvertNumber implements PipeTransform {

  transform(value: string, character: string, newCharacter?: string): string {
    if (newCharacter) {
      return value.replace(character, newCharacter);
    }
    return value.replace(character, 'X');
  }
}
