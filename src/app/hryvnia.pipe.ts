import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hryvnia'
})
export class HryvniaPipe implements PipeTransform {

  transform(value: string | number): string {
    return value.toString() + '₴';
  }

}
