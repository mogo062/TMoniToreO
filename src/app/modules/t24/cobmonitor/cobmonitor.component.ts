import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';

import { CobService } from '../../../services/cob.service';

let chartTmp ;
let defaultTimeOut = 30000;
@Component({
  selector: 'app-cobmonitor',
  templateUrl: './cobmonitor.component.html',
  styleUrls: ['./cobmonitor.component.css']
})
export class CobMonitorComponent implements OnInit, OnDestroy {

  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart' or 'stockChart' or 'mapChart'
  chartOptions =  this.route.snapshot.data.message; // required
  chartCallbackfunction(chart : any){
    chartTmp = chart;
  }; // optional function, defaults to null
  updateFlag = true; // optional boolean
  oneToOneFlag = false; // optional boolean, defaults to false
  interval : any;
  pendingRequest : any;   // this variable handle http request for cob monitor : used to cancel http request
  refresh : boolean = true;
  // Trigger Timeout Form Group
  triggerForm = new FormGroup({
    refresh: new FormControl(true),
    timeout: new FormControl(defaultTimeOut)

  });

  cobDataTable : any ;

  onAutoRefeshChange(){
    if(!this.triggerForm.value.refresh){
        this.refresh=false;
        clearInterval(this.interval);
    }else{
      this.refresh=true;  // add 14/10/2018 to resolve the cob refresh after reset refresh
      // reactivate trigger cob
      this.cobProcessing();
    }
  }
  onTimeOutChange(){
    if(this.triggerForm.value.timeout && (this.triggerForm.value.timeout != defaultTimeOut)){
      defaultTimeOut=this.triggerForm.value.timeout;
    }
    if(this.interval && this.refresh){
      if(this.pendingRequest){
        this.pendingRequest.unsubscribe();
      }
      clearInterval(this.interval);
      this.cobProcessing();
    }
  }
  constructor(private cobService : CobService, private route : ActivatedRoute) {
    /*this.cobService.initializeCobMonitor().subscribe(success => {
      this.chartOptions = success;
      console.log(this.chartOptions);
    }, error => {
        console.log(error);
    });*/
  }

  ngOnInit() {
      //this.cobDataTable = this.route.snapshot.data.cobDataTable;
      this.cobDataTable = {
        "running": {"A": 0,"S": 0,"R": 0,"D": 0,"O": 0},
        "completed": {"A": 0,"S": 0,"R": 0,"D": 0,"O": 0},
        "total": {"A": 0,"S": 0,"R": 0,"D": 0,"O": 0},
        "percentage": {"A": 0,"S": 0,"R": 0,"D": 0,"O": 0}
      }
     //this.chartOptions = this.route.snapshot.data.message;

     this.cobProcessing();
  }

  ngOnDestroy(){
    if(this.interval){
      clearInterval(this.interval);
    }

  }

  cobProcessing(){
      this.interval = setInterval(()=>{
        if(this.refresh){
           this.pendingRequest=this.update();
         }
      },defaultTimeOut);
  }

  update(){
      return  this.cobService.refreshCobMonitor().subscribe(success => {
        this.cobDataTable = success;
        let series  = this.cobService.getSeries(success);
        console.log(this.cobService.getSeries(success));
        chartTmp.series[0].update({
            name : series[0].name,
            colorByPoint : series[0].colorByPoint
          },false);
          chartTmp.redraw();
          chartTmp.series[0].setData(series[0].data,false);
          chartTmp.redraw();
      }, error => {
          console.log(error);
      });

    //  console.log(Math.floor(Math.random()* Math.floor(4)));
    //  let chartTmp = this.Highcharts.charts[0];
    /*
        this.chartOptions.series[0].data[0].y=50;

        chartTmp.series[0].update({
            name :   this.chartOptions.series[0].data[0].name,
            colorByPoint : '#FFF333'
            //colorByPoint :  this.chartOptions.series[0].data[0].colorByPoint
          },false);
          chartTmp.redraw();
    */
    //  console.log(this.Highcharts);
      // the next flowing code is for test with dynamic values
      //chartTmp.redraw();
      /*
      let idx = Math.floor(Math.random()* Math.floor(4));    //  console.log(idx);
      let value = Math.random() * 100;    //  console.log(chartTmp.series[0].colorByPoint);
      this.chartOptions.series[0].data[idx].y=value;
      chartTmp.series[0].update({
          //name :   this.chartOptions.series[0].data[idx].name,
          name: 'COB MONITOR',
          colorByPoint : true
        },false);
      chartTmp.redraw();
      */

  }
}
