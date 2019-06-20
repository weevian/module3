import { Injectable } from '@angular/core';
//STEP 1: IMPORT
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
// STEP 2: INJECT
  constructor(public httpClient : HttpClient) { }

// STEP 3: IMPLEMENT

getProduct(){
  return this.httpClient.get('https://reqres.in/api/products')
}
}


