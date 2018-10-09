import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AlertService } from  '../../services/alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit, OnChanges, OnDestroy {

  constructor(private alertService : AlertService) { }

  ngOnInit() {  }

  ngOnChanges(changes){  }

  ngOnDestroy(){ }


}
