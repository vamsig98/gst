import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('../assets/js/vamsi.js');
  }

}
