import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/globals/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  query:any;
  selectedSource:any;
  news:Array<any> [];
  sources:Array<any> [];

  constructor(private newsService:NewsService) {}

  ngOnInit(): void {
    this.newsService.getSources()
      .then( data => {
        console.log(data);
        this.sources = data.sources;
      })
      .catch( err => {
        console.error(err);
      });
  }

  searchNews(): void {
    this.query = document.getElementById('topic-in');
    this.selectedSource = document.getElementById('sources-s');

    console.log(this.query.value);
    console.log(this.selectedSource.options[this.selectedSource.selectedIndex].value);

    if(this.query.value){
      if((this.selectedSource.options[this.selectedSource.selectedIndex].text) == "All"){
        console.log("Busca el query en todo");
        this.searchNewsByQuery();
      } else {
        console.log("Busca el query en un source");
        this.searchNewsByQueryAndSoruce();
      }
    } else {
      this.query = undefined;
    }

  }

  searchNewsByQuery():void {​​
    this.newsService.getNewsByQuery(this.query.value)
      .then( data => {
        console.log(data);
        this.news = data.articles;
      })
      .catch( err => {
        console.error(err);
      });
   }

   searchNewsByQueryAndSoruce():void {​​
    this.newsService.getNewsByQueryAndSource(this.query.value, this.selectedSource.options[this.selectedSource.selectedIndex].value)
      .then( data => {
        console.log(data);
        this.news = data.articles;
      })
      .catch( err => {
        console.error(err);
      });
   }


}
