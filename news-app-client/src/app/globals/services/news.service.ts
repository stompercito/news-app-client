import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  getSources():Promise<any>  {
    const apiUrl="https://newsapi.org/v2/";
    const apiKey="1e30c02c90b84a46a828833a44569f18";
    const apiKey2="0baf3e670623453293527fd712ced36a";
    const url = `${apiUrl}/sources?apiKey=${apiKey2}`;
    return this.httpClient.get(url).toPromise();
    //return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

  getNewsByCountry(country:String):Promise<any>  {
    const apiUrl="https://newsapi.org/v2/";
    const apiKey="1e30c02c90b84a46a828833a44569f18";
    const apiKey2="0baf3e670623453293527fd712ced36a";
    const url = `${apiUrl}/top-headlines?country=${country}&apiKey=${apiKey2}`;
    return this.httpClient.get(url).toPromise();
    //return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

  getNewsByQuery(query:String):Promise<any>  {
    const apiUrl="https://newsapi.org/v2/";
    const apiKey="1e30c02c90b84a46a828833a44569f18";
    const apiKey2="0baf3e670623453293527fd712ced36a";
    const url = `${apiUrl}/everything?q=${query}&apiKey=${apiKey2}`;
    return this.httpClient.get(url).toPromise();
    //return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

  getNewsByQueryAndSource(query:String, source:String):Promise<any>  {
    const apiUrl="https://newsapi.org/v2/";
    const apiKey="1e30c02c90b84a46a828833a44569f18";
    const apiKey2="0baf3e670623453293527fd712ced36a";
    const url = `${apiUrl}/everything?sources=${source}&q=${query}&apiKey=${apiKey2}`;
    return this.httpClient.get(url).toPromise();
    //return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

}
