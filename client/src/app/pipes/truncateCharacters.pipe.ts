import { Pipe, PipeTransform } from '@angular/core';

/*
 * Truncate text with given arguments
 * Usage:
 *   text | truncate : 3 : "xxx"
 * Example:
 *   {{ "123456789" | truncate : 3 }}
 *   formats to: "123..."
 *
 *   or
 *
 *   {{ "123456789" | truncate : 3 : "xxx" }}
 *   formats to: "123xxx"
 *
 *   or
 *
 *   {{ "123456789" | truncate : -4 : "…" }}
 *   formats to: "…6789"
*/

@Pipe({
  // tslint:disable-next-line:pipe-naming
  name: 'truncate'
})
export class TruncateCharactersPipe implements PipeTransform {
  transform(value: string, limit: number = 40, trail: string = '…'): string {
    if (!value) { value = ''; }

    if (limit < 0) {
      limit *= -1;
      return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
    } else {
      return value.length > limit ? value.substring(0, limit) + trail : value;
    }
  }
}
