import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddPage } from '../add/add.page';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  todos = [];
  constructor(
    public modalController: ModalController, 
    public dataService:DataService) {}
  
  ngOnInit(){
    this.dataService.getAllItems().then(todos => {if(todos){
      this.todos = todos;
    }})
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: AddPage
    });

modal.present();
const {data} = await modal.onWillDismiss();
console.log(data)
// how to generate a unique id
// let newId = this.dataService.todos.length + 1
let newId = this.todos.length + 1
data.newtodo.id = newId
this.todos.push(data.newtodo)
this.dataService.addItem(data.newtodo)
  }

markDone(todo){
  todo.completed = true;
}

delete(i){
this.todos.splice(i,1)
}

}
