import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddPage } from '../add/add.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todos = [
{
id:1,
  name:"Buy Milk Tea",
place:"Family Mart",
description:"Buy Oolong Milk Tea With Pearl and Teh Tarik With Pearl",
completed: false
},
{
  id:2,
  name:"Check market",
place:"Home Living Room",
description:"Check DJI 30 and S&P 500",
completed: true
},
{
  id:3,
  name:"Log in to FFBE",
place:"Home Bedroom",
description:"Claim log in rewards, send and receive gifts to/ from friends",
completed: true
},
{
  id:4,
  name:"Check chocolate shop",
place:"Home Bedroom",
description:"Look for chocholate shops nearby",
completed: false
}
]
  constructor(public modalController: ModalController) {}
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddPage
    });

modal.present();
const {data} = await modal.onWillDismiss();
console.log(data)
// how to generate a unique id

this.todos.push(data.newtodo)
  }
}
