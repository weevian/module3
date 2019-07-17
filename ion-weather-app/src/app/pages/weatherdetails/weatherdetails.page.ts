import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/weather.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.page.html',
  styleUrls: ['./weatherdetails.page.scss'],
})
export class WeatherdetailsPage implements OnInit {
selectWeather;
results;
city;

  constructor(private activatedRoute: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit() {
  }

//  checkWeather(results){
  //  window.open(this.results)
//    this.results = this.weatherService.searchCity(this.city).subscribe(resp => {
 //     this.results = resp["list"]
 // })

//  }
}
