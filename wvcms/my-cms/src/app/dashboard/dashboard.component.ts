import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
apiPlaces
  constructor(public httpService:HttpService, public router:Router) { }

  ngOnInit() {
this.httpService.getPlace().subscribe(resp=>{
  console.log(resp);
  this.apiPlaces = resp;
});

  }

}
