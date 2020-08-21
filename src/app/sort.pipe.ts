import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  //if we set pure: false, we would get things sorted whenever things are added
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: string){
    return value.sort((a, b) => {
      if( a[propName] > b[propName]){
        return 1;
      }
      else{
        return -1;
      }
    });
  }
}
