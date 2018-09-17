import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';

import { CobService } from '../../../services/cob.service';

let chartTmp ;

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

  constructor(private cobService : CobService, private route : ActivatedRoute) {
    /*this.cobService.initializeCobMonitor().subscribe(success => {
      this.chartOptions = success;
      console.log(this.chartOptions);
    }, error => {
        console.log(error);
    });*/
  }

  ngOnInit() {
     //this.chartOptions = this.route.snapshot.data.message;
  }

  ngOnDestroy(){
    //  console.log(this.Highcharts.charts);
  }

  update(){
      this.cobService.refreshCobMonitor().subscribe(success => {
        console.log(success);
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
      let idx = Math.floor(Math.random()* Math.floor(4));
    //  console.log(idx);
      let value = Math.random() * 100;
    //  console.log(chartTmp.series[0].colorByPoint);
      this.chartOptions.series[0].data[idx].y=value;
      chartTmp.series[0].update({
          //name :   this.chartOptions.series[0].data[idx].name,
          name: 'COB MONITOR',
          colorByPoint : true
        },false);
      chartTmp.redraw();
  }
}
