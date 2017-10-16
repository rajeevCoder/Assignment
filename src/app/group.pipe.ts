import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'groupDemo'
})

export class GroupData implements PipeTransform {

    // transform(value: string, letter: string): string {
    //     // tslint:disable-next-line:curly
    //     if (!value || !letter) return value;
    //     // tslint:disable-next-line:quotemark
    //     return value.indexOf(letter) > -1 ? value : "";
    // }

    transform(value: Array<any>, field: string): Array<any> {
        console.log('value', value);
        if (value) {

          // tslint:disable-next-line:prefer-const
          let groupedObj = value.reduce((prev, cur) => {
            console.log('val', prev[cur[field]]);
            if (!prev[cur[field]]) {
                console.log('previous', prev);
              prev[cur[field]] = [cur];
            } else {
              prev[cur[field]].push(cur);
              console.log('else', cur);
            }
            return prev;
          }, {});
          console.log('logging', Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] })));
          return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
        } else {
          return null;
        }
      }
    }
