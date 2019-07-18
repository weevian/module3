import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/weather.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.page.html',
  styleUrls: ['./weatherdetails.page.scss'],
})
export class WeatherdetailsPage implements OnInit {
city;
weatherDetails;

  constructor(private activatedRoute: ActivatedRoute, public weatherService: WeatherService) { }

  ngOnInit() {
    let timestamp = this.activatedRoute.snapshot.paramMap.get('timestamp')
  this.city = this.activatedRoute.snapshot.paramMap.get('city')
// Get the information from the API
this.weatherDetails = this.weatherService.getWeatherByTimeStamp(timestamp)}
}
