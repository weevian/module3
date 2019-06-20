import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(public httpClient:HttpClient) { }
  getWeathers(city){
    return this.httpClient.get(
      'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&cnt=10&appId=9fd7a449d055dba26a982a3220f32aa2')

}
}