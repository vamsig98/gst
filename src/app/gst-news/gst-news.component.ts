import { NewsService } from './../news-detail/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gst-news',
  templateUrl: './gst-news.component.html',
  styleUrls: ['./gst-news.component.css']
})
export class GstNewsComponent  {

  news;
  index=3;
  status;

  constructor( private newsservice:NewsService) {
    this.news;
   
      this.newsservice.getnews().subscribe(
           (data)=>{this.news=data;},
           (error)=>console.log(error));
        
       }
      
      
}


