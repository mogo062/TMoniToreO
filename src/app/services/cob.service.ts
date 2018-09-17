import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CobService {

  constructor(private http : HttpClient) { }


  initializeCobMonitor(){
    return this.http.get('./assets/config/cob.monitor.options.ini');
  }

  refreshCobMonitor(){

  //  console.log(this.configService);
    console.log(ConfigService.get('baseWs')+'/cob/cobmonitor');
    return this.http.get(ConfigService.get('baseWs')+'/cob/cobmonitor');
  }

}
