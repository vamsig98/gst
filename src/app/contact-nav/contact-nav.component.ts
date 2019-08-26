import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.css']
})
export class ContactNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('assets/js/v3.js');
  }

}
