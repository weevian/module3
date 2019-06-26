import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  name = 'Wee Vian';
  phoneNumber = '012-3456789';

  apiProducts

  newTshirt: Product ={
    name: 'Polo round neck',
    brand: 'Polo',
    id:1,
    price: 199
  }
  items

// 2 INJECT

  constructor(public httpService:HttpService, public router:Router, public productService:ProductService) { }

  ngOnInit() {
this.items = this.productService.getProducts()
    this.httpService.getProduct().subscribe(resp=>{
      console.log(resp)
      this.apiProducts = resp["data"]
    },err=>{console.log(err)
    })
  }

  selectProduct(item){
//    console.log(item)
  //  this.selectedProduct = item
  this.router.navigate(["product/" + item.id])
  }


}

