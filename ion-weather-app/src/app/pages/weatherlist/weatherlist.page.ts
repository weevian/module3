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
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {}

  searchChanged(city) {
    // Call our service function which returns an Observable
    this.weatherService.searchData(city).subscribe(resp => {
      console.log(resp);
      this.results = resp;
    });
  }
}
