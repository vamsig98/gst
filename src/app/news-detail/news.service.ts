import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";



@Injectable()
export class NewsService {

    private newsUrl = 'http://localhost:3000/vamsi';
    

    constructor(private http:HttpClient) { }
    getnews()
    {
        return this.http.get(this.newsUrl);
    }
    
    
    gstcategory(){
        return this.http.get('https://api.gstgola.com/tags-count-json.php');
    }

    gstarchive(){
        return this.http.get('https://api.gstgola.com/month-count.php');
    }
   
    getrecentpost(){
        return this.http.get('https://api.gstgola.com/recent-news.php')
    }
    getnewsid(id:number){
        return this.http.get("  http://localhost:3000/vamsi/"+id);
    }
    

   
}
