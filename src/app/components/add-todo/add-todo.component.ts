import { Component ,Output,EventEmitter} from '@angular/core';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() addtodo: EventEmitter<Todo> = new EventEmitter();
  constructor(){}

  title :string
  description :string
 onSubmit() {
  const todo = {
      title : this.title,
      description : this.description
  }
  this.addtodo.emit(todo)
}
}
