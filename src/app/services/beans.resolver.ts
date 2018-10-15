import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { ArchService } from './arch.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class BeansResolverService implements Resolve<any>{

  constructor(private archService :ArchService, private alertService : AlertService) { }

  resolve() {
    return this.archService.getT24ArchiveProcedure().catch(error => {
        this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
        return [];
    });

        //return Observable.of('DEMO');
  }


}
