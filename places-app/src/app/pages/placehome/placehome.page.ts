import { Component, OnInit } from '@angular/core';
import { PlacesServiceService } from '../../places-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-placehome',
  templateUrl: './placehome.page.html',
  styleUrls: ['./placehome.page.scss'],
})
export class PlacehomePage implements OnInit {
places;

  constructor(
    public activatedRoute: ActivatedRoute, 
    public placesServiceService: PlacesServiceService) { }

  ngOnInit() {
  console.log('Get all places!!!')
  this.placesServiceService.getAllPlaces().subscribe(resp=>{
    console.log(resp);
    this.places = resp;
})
}
}