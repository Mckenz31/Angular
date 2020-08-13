import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(value: any, selectStatus: string, filtering: any){
    const Array = [];
    if(value.length === 0 || selectStatus == ''){
      return value;
    }
    for (const item of value) {
      if(item[filtering] === selectStatus){
        Array.push(item)
      }
    }
    return Array;
  }

}
