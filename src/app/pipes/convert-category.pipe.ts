import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCategory'
})
export class ConvertCategoryPipe implements PipeTransform {

  transform(value: String) {
    if (value == "suv"){
      return "Джип"
    }
    else if (value == "car"){
      return "Лек автомобил"
    }
    else if (value == "minivan"){
      return "Миниван"
    }
    else{
      return "Пикап"
    }
  }

}
