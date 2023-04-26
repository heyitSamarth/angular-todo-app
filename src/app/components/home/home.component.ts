import { Component ,Output,EventEmitter} from '@angular/core';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  todos:Todo[];
  constructor(){
   
  

  this.todos=[
    {
      title:"this is title",
      description:" Description3",

    },
    {
      
      title:"this is title",
      description:" Description1",

    },      {
   
      title:"this is title",
      description:" Description2",
     

    }
  ]
}
deletetodo(todo:Todo){
  

  const index=this.todos.indexOf(todo);
  this.todos.splice(index,1)

}
todoadd(todo:Todo){
  this.todos.push(todo)

}
}
