import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class CustomPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    let changedNumber = value * (1 - args[0] / 100);
    return changedNumber;
  }
}
