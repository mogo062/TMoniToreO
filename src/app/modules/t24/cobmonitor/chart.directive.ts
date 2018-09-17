import { Directive, ElementRef, Input, OnInit  } from '@angular/core';

@Directive({
  selector: 'chart'
})
export class ChartDirective implements OnInit{

  constructor(private el : ElementRef ) { }

  ngOnInit(){
    console.log(this.el);
    this.el.nativeElement.innerText="mongi guesmi";
  }

}
