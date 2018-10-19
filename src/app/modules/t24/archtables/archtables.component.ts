import { Component,ElementRef, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlertService } from  '../../../services/alert.service';
import { ArchService } from '../../../services/arch.service';

@Component({
  selector: 'archtables',
  templateUrl: './archtables.component.html',
  styleUrls: ['./archtables.component.css']
})
export class ArchtablesComponent implements OnInit {
  @Input()
  title : string="";
  @Input()
  beans : any = [];
  @Output()
  onClose : EventEmitter<null> = new EventEmitter<null>();
  @Input()
  keys : any;
  constructor(private alertService : AlertService, private archService : ArchService) { }

  ngOnInit() {
    this.title ="Add Archiving Tables";
    this.keys = ["id", "tableName", "order", "procArch.procName","insertDate"];
    this.archService.getT24ArchiveTables().subscribe(success => {
        this.beans = success;
      }, error => {
        console.log(error);
        this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
        return [];
    });
  }

}
