import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-cobmonitor',
  templateUrl: './cobmonitor.component.html',
  styleUrls: ['./cobmonitor.component.css']
})
export class CobMonitorComponent implements OnInit {
  chart : any;
  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart' or 'stockChart' or 'mapChart'
  chartOptions = {
         chart: {
           type: "bar"
         },
         title: {
           text: "COB PROGRESS"
         },
         subtitle: {
           text: ""
         },
         xAxis: {
           categories: ["APPLICATION", "SYSTEM WIDE", "REPORTING", "START OF DAY", "ONLINE", "TOTAL"],
           title: {
             text: "stages"
           }
         },
         yAxis: {
           title: {
             text: "Total percent"
           },
           max: 100
         },
         legend: {
           enabled: true
         },
         plotOptions: {
           series: {
             borderWidth: 0,
             dataLabels: {
               enabled: true,
               format: "{point.y:.1f}%"
             }
           }
         },
         tooltip: {
           headerFormat: "<span style=\"font-size:11px\">{series.name}</span><br>",
           pointFormat: "<span style=\"color:{point.color}\">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>"
         },
         series: [{
           name: "COB MONITOR",
           colorByPoint: true,
           data: [{
               name: "APPLICATION",
               y: 0
             }, {
               name: "SYSTEM WIDE",
               y: 0
             }, {
               name: "REPORTING",
               y: 0
             },
             {
               name: "START OF DAY",
               y: 0
             }, {
               name: "ONLINE",
               y: 0
             }, {
               name: "COB",
               y: 100
             }
           ]
         }]
        }; // required
  chartCallbackfunction(chart : any){
  //  console.log(chart);
  }; // optional function, defaults to null
  updateFlag = true; // optional boolean
  oneToOneFlag = false; // optional boolean, defaults to false

  constructor() { }

  ngOnInit() {
  }


  update(){
  //  console.log(Math.floor(Math.random()* Math.floor(4)));
    let chartTmp = this.Highcharts.charts[0];
/*
    this.chartOptions.series[0].data[0].y=50;

    chartTmp.series[0].update({
        name :   this.chartOptions.series[0].data[0].name,
        colorByPoint : '#FFF333'
        //colorByPoint :  this.chartOptions.series[0].data[0].colorByPoint
      },false);
      chartTmp.redraw();
*/
      // the next flowing code is for test with dynamic values
      chartTmp.redraw();
      let idx = Math.floor(Math.random()* Math.floor(4));
    //  console.log(idx);
      let value = Math.random() * 100;
    //  console.log(value);
      this.chartOptions.series[0].data[idx].y=value;
      chartTmp.series[0].update({
          //name :   this.chartOptions.series[0].data[idx].name,
          name: 'COB MONITOR',
          colorByPoint : '#FFF333'
        },false);
      chartTmp.redraw();
    //chartTmp.series[0].setData(tmp.series[0].data,false);
    //chartTmp.series[0].redraw();
    //console.log(chartTmp);
  }
}
