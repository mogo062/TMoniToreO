import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class TitleResolverService implements Resolve<any>{

  constructor() { }

  resolve() {
      return "DEMO";
  }
}
