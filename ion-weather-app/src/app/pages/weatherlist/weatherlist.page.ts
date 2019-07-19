import { WeatherService, SearchType } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router'
import { WeatherdetailsPage } from '../weatherdetails/weatherdetails.page';
 
@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.page.html',
  styleUrls: ['./weatherlist.page.scss'],
})
export class WeatherlistPage implements OnInit {
results;
city;
place;

  constructor(private router:Router, private weatherService: WeatherService, public geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude)
      console.log(resp.coords.longitude)
   this.weatherService.getWeatherByGeo(resp.coords.longitude,resp.coords.latitude).subscribe(resp=>
    {console.log(resp)
    this.results=resp["list"]
  this.place=resp["city"]
})
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  searchPressed() {
    // Call our service function which returns an Observable
     this.weatherService.searchCity(this.city).subscribe(resp => {
       console.log(resp)
      this.results = resp["list"]
      this.place = resp["city"]
      //console.log(resp)
    })
  }
openDetail(result){
this.router.navigate([`weatherdetails/${result["dt"]}/${this.place["name"]}`])
}
}