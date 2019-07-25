import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos = [];

  constructor(public storage : Storage) {}

addItem(todo){
// this.todos.push(todo);
this.storage.set("todos", this.todos)
}
getAllItems(){
return this.storage.get('todos')
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
