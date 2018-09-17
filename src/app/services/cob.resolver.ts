import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CobService } from './cob.service';

@Injectable({
  providedIn: 'root'
})
export class CobResolver implements Resolve<any>{

  constructor(private cobService : CobService) { }

  resolve() {
    return this.cobService.initializeCobMonitor();
  }
}
