import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: any, key?:any): any {
    let tbsKeys=key.split(".");
    //console.log(key,tbsKeys.length);
    if(tbsKeys.length> 1){
      let obj = value[tbsKeys[0]];
      if((typeof obj) === 'object' ){
          //console.log(typeof obj +" "+obj[tbsKeys[1]]);
          return obj[tbsKeys[1]];
      }
    }
    //  console.log(args);
    //  return bean[key];
    return value[key];
  }

}
