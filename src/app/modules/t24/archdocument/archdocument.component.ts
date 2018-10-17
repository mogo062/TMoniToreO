import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from  '../../../services/alert.service';
import { ArchService } from '../../../services/arch.service';


@Component({
  selector: 'archdocument',
  templateUrl: './archdocument.component.html',
  styleUrls: ['./archdocument.component.css']
})
export class ArchdocumentComponent implements OnInit {
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
    this.title ="Add Archiving Document";
    this.keys = ["id", "name", "format"];
    this.archService.getT24ArchiveDocument().subscribe(success => {
        this.beans = success;
      }, error => {
        console.log(error);
        this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
        return [];
    });
  }


}
