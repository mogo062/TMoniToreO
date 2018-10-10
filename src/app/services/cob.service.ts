import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let headers = new HttpHeaders();
  //  headers.append('Authorization', 'Basic TUctVFJVU1RFRC1DTElFTlQ6c2VjcmV0');
  //  headers.append('Content-Type', 'application/json;charset=UTF-8');
  //  headers.append('Accept', 'application/json');

    //console.log(ConfigService.get('baseWs')+'/cob/cobmonitor');
    return this.http.get(ConfigService.get('baseWs')+'/cob/monitor');
  }

  getSeries(data: any){
     //console.log("data" , data);
     let completed = data.completed;
     let total = data.total;
     let totcompleted=parseFloat(completed.A)+parseFloat(completed.S)+parseFloat(completed.R)
             +parseFloat(completed.D)+parseFloat(completed.O);
     total=parseFloat(total.A)+parseFloat(total.S)+parseFloat(total.R)+parseFloat(total.D)+parseFloat(total.O);
     let tot = totcompleted * 100 / total;

     return [ {"name" : "COB MONITOR","colorByPoint" : true,"data" : [
             {"name" : 'APPLICATION',"y" : parseFloat(data.percentage.A), "drilldown" : null},
             {"name" : 'SYSTEM WIDE',"y" : parseFloat(data.percentage.S), "drilldown" : null},
             {"name" : 'REPORTING',"y" : parseFloat(data.percentage.R), "drilldown" : null},
             {"name" : 'START OF DAY',"y" : parseFloat(data.percentage.D), "drilldown" : null},
             {"name" : 'ONLINE',"y" : parseFloat(data.percentage.O), "drilldown" : null},
             {"name" : 'COB',"y" : tot, "drilldown" : null}
           ]
         }];
   };

}
