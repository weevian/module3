import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

  constructor() { }

addItem(todo){
this.todos.push(todo)
}
getAllItems(){
return this.todos
}
getItemById(id){
for (let i=0; i< this.todos.length; i++){
  if (this.todos[i].id == id ){
    return this.todos[i]
  }
}
}
deleteItem(i){
this.todos.splice(i,1)
}
markItemDone(todo){
  todo.completed = true
}


}
