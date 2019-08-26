import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { NewsService } from './news.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  category;
  archive;
  recentpost;
  newsdetail;


  constructor(private newsservice: NewsService,private route:ActivatedRoute,private router:Router) {
    this.newsdetail=[];
  }

  
  getbyid() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.newsservice.getnewsid(+params.get('id')))
    .subscribe(data => this.newsdetail =data);  
  }

  getcategory(){
    this.newsservice.gstcategory().subscribe((data) => { 
      this.category = data; },(error) => console.log(error));
  }

  getarchive(){
    this.newsservice.gstarchive().subscribe((data) => { 
      this.archive = data; }, (error) => console.log(error));
  }

  getrecentpost(){
    this.newsservice.getrecentpost().subscribe((data) => { 
      this.recentpost = data; }, (error) => console.log(error));
  }


  ngOnInit(){

    this.getbyid();
    this.getcategory();
    this.getarchive();
    this.getrecentpost();
   /*  
    this.newsid=this.route.snapshot.params["id"];
    this.newsservice.getnewsid(this.newsid).subscribe(
        (data)=>this.newsdetail=data);  */
    }

}

