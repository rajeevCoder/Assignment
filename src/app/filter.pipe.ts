import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchData implements PipeTransform {
    transform(value: any, searchText: any): any {
        // tslint:disable-next-line:curly
        console.log('value', value);
        console.log('search', searchText);
       // tslint:disable-next-line:curly
       if (searchText == null)
        return value;

       return value.filter(function(search){
           return search.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
       });
    }

}
