import { Injectable } from '@angular/core';
//STEP 1: IMPORT
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient : HttpClient ) { }
  
  getPlace (){
    return this.httpClient.get('https://wanmuz-rest-api-2019.herokuapp.com/api/places')
  }
}
