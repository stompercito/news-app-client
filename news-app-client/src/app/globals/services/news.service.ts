import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  apiUrl:String="https://newsapi.org/v2/";
  apiUrl2:String="http://localhost:3000/";
  apiKey:String="1e30c02c90b84a46a828833a44569f18";
  apiKey2:String="0baf3e670623453293527fd712ced36a";

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
