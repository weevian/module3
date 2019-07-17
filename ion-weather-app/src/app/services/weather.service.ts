import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
city
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url = 'https://api.openweathermap.org/data/2.5/forecast/daily?q='
apiKey = '9fd7a449d055dba26a982a3220f32aa2'

  constructor(private http: HttpClient) { }
  
  searchCity(city) {
    return this.http.get(`${this.url}${city}&cnt=8&appId=${this.apiKey}`)
  };
}
    //.pipe(
      //map(results => results['list'])
    //);
//  getDetails(id) {
//    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
//  }
