import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/globals/services/news.service';

@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.component.html',
  styleUrls: ['./titulares.component.scss']
})
export class TitularesComponent implements OnInit {

  titularesCountry:String;
  news:Array<any> [];

  constructor(private activatedRoute:ActivatedRoute, private newsService:NewsService) {
    this.activatedRoute.params.subscribe(params => {
      if(params.id == undefined){
        this.titularesCountry = 'mx';
      } else {
        this.titularesCountry = params.id;
      }
        
        this.searchNews();
    })
  }

    ngOnInit(): void {}
     /*
       Obtain the token and the email from the session,
       for now, it is hardcoded.
     */
    searchNews():void {​​
     this.newsService.getNewsByCountry(this.titularesCountry)
       .then( data => {
         console.log(data);
         this.news = data.articles;
       })
       .catch( err => {
         console.error(err);
       });
    }
 
}
