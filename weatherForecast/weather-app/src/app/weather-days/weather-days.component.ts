import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-weather-days',
  templateUrl: './weather-days.component.html',
  styleUrls: ['./weather-days.component.css']
})
export class WeatherDaysComponent implements OnInit {

weathers
city

  constructor(private httpService:HttpService) { }

  ngOnInit() {
  }
btnPressed(){  
  this.httpService.getWeathers(this.city).subscribe(resp=>{
    console.log(resp)
    this.weathers = resp["list"]
  },err=>{console.log(err)
  })
}

}
