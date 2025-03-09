import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(list:any[] , searchKey:string) {
    return list.filter( (item)=> item.brand.toLowerCase().includes(searchKey.toLowerCase()) );
  }
}
