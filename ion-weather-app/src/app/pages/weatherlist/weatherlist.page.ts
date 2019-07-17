import { WeatherService, SearchType } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.page.html',
  styleUrls: ['./weatherlist.page.scss'],
})
export class WeatherlistPage implements OnInit {
results;
city;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {}

  searchPressed() {
    // Call our service function which returns an Observable
    this.results = this.weatherService.searchCity(this.city).subscribe(resp => {
      this.results = resp["list"]
      //console.log(resp)
    })
  }

}