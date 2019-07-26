import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { PlacesServiceService } from '../../places-service.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
placedetail

  constructor(public activatedRoute: ActivatedRoute, 
    public placesServiceService: PlacesServiceService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      console.log(id)
      this.placedetail = this.placesServiceService.getPlaceDetailById(id)
  });
  }

}
