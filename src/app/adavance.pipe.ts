import { element } from 'protractor';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class SummaryData implements PipeTransform {
    transform(value: any, args: any[]) {
        return value.substr(0, 100);
    }

}
