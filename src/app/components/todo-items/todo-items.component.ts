import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/models/todo';


@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
  @Input() todo:Todo;
  @Output() tododelete: EventEmitter<Todo> = new EventEmitter();
  constructor(){}
  onDelete(todo:Todo)
  {
    this.tododelete.emit(todo);

  }
}
