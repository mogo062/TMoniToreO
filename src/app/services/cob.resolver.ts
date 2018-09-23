import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CobService } from './cob.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class CobResolver implements Resolve<any>{

  constructor(private cobService : CobService) { }

  resolve() {
    return this.cobService.initializeCobMonitor().catch(()=>{
      //return Observable.empty();
      return Observable.of('Error to initialize cob monitor at this time');
    });
  }
}
