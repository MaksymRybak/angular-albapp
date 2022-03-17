import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: string, character: string, newCharacter?: string): string {
    if (newCharacter) {
      return value.replace(character, newCharacter);
    }
    return value.replace(character, ' ');
  }
}
