import { Pipe, PipeTransform } from '@angular/core';

/*
 * Truncate words with given arguments
 * Usage:
 *   text | words : 3 : "xxx"
 * Example:
 *   {{ "1234 567 89" | words : 2 }}
 *   formats to: "1234 567…"
 *
 *   or
 *
 *   {{ "1234 567 89" | words : 2 : "xxx" }}
 *   formats to: "1234 567xxx"
 *
 *   or
 *
 *   {{ "1234 567 89" | words : -2 : "…" }}
 *   formats to: "…567 89"
*/

@Pipe({
  // tslint:disable-next-line:pipe-naming
  name: 'words'
})
export class TruncateWordsPipe implements PipeTransform {
  transform(value: string, limit: number = 40, trail: string = '…'): string {
    let result = value || '';

    if (value) {
      const words = value.split(/\s+/);

      if (words.length > Math.abs(limit)) {
        if (limit < 0) {
          limit *= -1;
          result = trail + words.slice(words.length - limit, words.length).join(' ');
        } else {
          result = words.slice(0, limit).join(' ') + trail;
        }
      }
    }

    return result;
  }
}
