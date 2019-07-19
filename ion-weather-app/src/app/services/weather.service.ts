import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export enum SearchType {
city
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url = 'https://api.openweathermap.org/data/2.5/forecast/daily?'
apiKey = '9fd7a449d055dba26a982a3220f32aa2'
weathers

  constructor(public httpClient: HttpClient) { }

  getWeatherByGeo(long,lat){
    return this.httpClient.get(
      `${this.url}lat=${lat}&lon=${long}&appId=${this.apiKey}`).pipe(
        tap(resp=>{
        this.weathers = resp["list"]
        }))
  }

  searchCity(city) {
    return this.httpClient.get(`${this.url}q=${city}&cnt=8&appId=${this.apiKey}`).pipe(tap(resp=>{this.weathers = resp["list"]}))
  };

  getWeatherByTimeStamp(timestamp){
    for (let i=0; i<this.weathers.length; i++){
      if (this.weathers[i]["dt"]==timestamp){
        return this.weathers[i]
      }
    }
//    return this.http.get(`${this.url}?i=${timestamp}&plot=full&apikey=${this.apiKey}`); 
  }
}
    //.pipe(
      //map(results => results['list'])
    //);
//  getDetails(id) {
//    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
//  }
