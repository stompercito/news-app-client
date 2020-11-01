import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  getNewsByCountry(country:String):Promise<any>  {
    const apiUrl="https://newsapi.org/v2/";
    const apiKey="1e30c02c90b84a46a828833a44569f18";
    const url = `${apiUrl}/top-headlines?country=${country}&apiKey=${apiKey}`;
    return this.httpClient.get(url).toPromise();
    //return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

  getNewsByQuery(query:String):Promise<any>  {
    const apiUrl="https://newsapi.org/v2/";
    const apiKey="1e30c02c90b84a46a828833a44569f18";
    const url = `${apiUrl}/everything?q=${query}&apiKey=${apiKey}`;
    return this.httpClient.get(url).toPromise();
    //return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

  getNewsByQueryAndSource(query:String, source:String):Promise<any>  {
    const apiUrl="https://newsapi.org/v2/";
    const apiKey="1e30c02c90b84a46a828833a44569f18";
    const url = `${apiUrl}/everything?q=${query}&source=${source}&apiKey=${apiKey}`;
    return this.httpClient.get(url).toPromise();
    //return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

}
