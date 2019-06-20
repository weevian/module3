import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { HttpService } from '../http.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  name = 'Wee Vian';
  phoneNumber = '012-3456789';

  selectedProduct
  apiProducts

  newTshirt: Product ={
    name: 'Polo round neck',
    brand: 'Polo',
    id:1,
    price: 199
  }

  items : Product [] = [{
    name: 'iPhone SE',
    brand: 'Apple',
    id:2,
    price: 520.10
  },{
    name: 'Huawei P30',
    brand: 'Huawei',
    id:3,
    price: 3999
  },
  {name: 'Smasung S20',
    brand: 'Samsung',
    id:4,
    price: 2999
  }];

// 2 INJECT

  constructor(public httpService:HttpService) { }

  ngOnInit() {
    this.httpService.getProduct().subscribe(resp=>{
      console.log(resp)
      this.apiProducts = resp["data"]
    },err=>{console.log(err)
    })
  }

  selectProduct(item){
    console.log(item)
    this.selectedProduct = item
  }


}

