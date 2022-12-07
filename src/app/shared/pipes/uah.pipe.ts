import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'UAH',
})
export class UahPipe implements PipeTransform {
  transform(value: string | number): string {
    return value.toString() + '₴';
  }
}
