import { NewsService } from './../news-detail/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  news;
  index=3;
  constructor( private newsservice:NewsService) {
    this.news;
   
     
       }
ngOnInit(){
  this.newsservice.getnews().subscribe(
    (data)=>{this.news=data;},
    (error)=>console.log(error));
  
}
      }
