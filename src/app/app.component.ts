import { TitleService } from './shared/title.service';
import { Component,AfterViewInit, OnInit} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

declare var $ ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})

export class AppComponent implements  OnInit {

constructor(private router: Router,
  private titleService: TitleService,
  private activatedRoute: ActivatedRoute) {}

ngOnInit() {
  $.getScript('../assets/js/script.js');
  $.getScript('../assets/js/jquery-plugin-collection.js');

  this.router.events.subscribe((evt) => {
    if (!(evt instanceof NavigationEnd)) {

        return;
    }
/*     window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
 */
   $("html,body").animate({
      scrollTop: 0
  }, 700);  });
 

this.router.events.filter((event) => event instanceof NavigationEnd).subscribe((event) => {
  this.titleService.GenerateTitle(this.router.routerState.snapshot.root);
});

}
}
