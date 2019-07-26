import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesServiceService {

url = 'http://wanmuz-rest-api-2019.herokuapp.com/api/places/'
places


  constructor(public httpClient: HttpClient) { }

getAllPlaces(){
  return this.httpClient.get(`${this.url}`).pipe(
    tap(resp=>{this.places = resp}))
}

getPlaceDetailById(id){
  for (let i=0; i< this.places.length; i++){
    if (this.places[i].id == id ){
      return this.places[i]
}

  }
}
}
