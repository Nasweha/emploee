import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  //method (transform cheyenda content and)
  transform(allEmployee: any[], searchKey: string): any[] {
    
    //logic
    const result: any = []
    if (!allEmployee || searchKey == "") {
      return allEmployee
    }
    else {
      allEmployee.forEach((item: any) => {
        if (item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())) {
          result.push(item)
        }
      })
    }
    return result

  }

}
