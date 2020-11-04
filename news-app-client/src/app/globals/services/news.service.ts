import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  apiUrl:String="https://newsapi.org/v2/";
  apiUrl2:String="http://localhost:3000/";

  getSources():Promise<any>  {
    const url = `${this.apiUrl2}fuentes`;
    return this.httpClient.get(url).toPromise();
    //return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

  getNewsByCountry(country:String):Promise<any>  {
    const url = `${this.apiUrl2}top-headlines?country=${country}`;
    return this.httpClient.get(url).toPromise();
    //return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

  getNewsByQuery(query:String):Promise<any>  {
    const url = `${this.apiUrl2}noticias?q=${query}`;
    return this.httpClient.get(url).toPromise();
    //return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

  getNewsByQueryAndSource(query:String, source:String):Promise<any>  {
    const url = `${this.apiUrl2}noticias?q=${query}&source=${source}`;
    return this.httpClient.get(url).toPromise();
    //return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

}
