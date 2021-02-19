import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
      console.log('ARGS', args)
    return value.toUpperCase();
  }

}
