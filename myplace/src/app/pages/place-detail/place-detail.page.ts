import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../http.service'

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
place
  constructor(public route:ActivatedRoute,
    public httpService:HttpService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('place_id')
    this.httpService.getPlaceById(id).subscribe(resp=>{
      this.place = resp})
  }

}
