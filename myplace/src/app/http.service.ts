import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient:HttpClient) { }

  getAllPlaces(){
    return this.httpClient.get('http://wanmuz-rest-api-2019.herokuapp.com/api/places')
  }

  getPlaceById(id){
    return this.httpClient.get('http://wanmuz-rest-api-2019.herokuapp.com/api/places/' + id)
  }

  registerUser(email, password){
    let data = {
      username:email,
      password:password
    }
    return this.httpClient.post('http://wanmuz-rest-api-week5.herokuapp.com/api/register',data)
  }

  loginUser(email, password){
    let data = {
      username:email,
      password:password
    }
    return this.httpClient.post('http://wanmuz-rest-api-week5.herokuapp.com/api/login',data)
  }
}
