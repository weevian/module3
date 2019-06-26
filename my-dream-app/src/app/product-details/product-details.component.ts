// 1. IMPORT
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct
  
  // 2. INJECT
  constructor(public route:ActivatedRoute, public productService:ProductService) { }
  
  // 3. IMPLEMENT 
  ngOnInit() {
    this.route.params.subscribe(params=>{
      console.log(params["id"])
      this.selectedProduct =
      this.productService.getProductById(params["id"])
    })
  }

}
