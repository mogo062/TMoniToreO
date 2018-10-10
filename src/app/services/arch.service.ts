import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ArchService {

  constructor(private alertService: AlertService, private http : HttpClient) { }

  getT24ArchiveProcedure(){
  //  let headers = new HttpHeaders();
  //  headers.append('Authorization', 'Basic TUctVFJVU1RFRC1DTElFTlQ6c2VjcmV0');
  //  headers.append('Content-Type', 'application/json;charset=UTF-8');
  //  headers.append('Accept', 'application/json');
    return this.http.get<Array<procArch>>(ConfigService.get('baseWs')+'/t24/arch/proc');
    /*
      .subscribe(success => {
          console.log("success : ",success);
          return success;
        }, error => {
          //console.log(error);
          this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
          return [];
      });*/
  }
}

export interface procArch {
  id:number,
  procName:string,
  procLabel:number,
  session:string,
  retention:string,
  periority:number,
  executed:boolean,
  validated:boolean,
  archDate: Date,
  nextExec: Date,
  runDate: Date
}