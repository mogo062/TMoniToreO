import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Pipe({
  name: 'isdate'
})
export class IsdatePipe implements PipeTransform {
  private datePipe = new DatePipe("en-US");

  transform(value: any, args?: any): any {
    if((typeof value) === 'number' ) {
      let obj = new String(value);
      if(obj.length === 13){
        console.log(value);
        return this.datePipe.transform(value, 'dd/MM/yyyy');
      }
    }

    return value;
  }

}
