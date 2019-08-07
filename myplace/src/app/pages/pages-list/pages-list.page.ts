import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service'

@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.page.html',
  styleUrls: ['./pages-list.page.scss'],
})
export class PagesListPage implements OnInit {

  constructor(public httpService:HttpService) { }
places
  ngOnInit() {
    this.httpService.getAllPlaces().subscribe(resp=>{
      this.places = resp
    })
  }

}
