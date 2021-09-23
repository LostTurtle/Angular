import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todoData: {title: string, id: number, completed: boolean} = {title:'', id: new Date().getTime(), completed: false};
  // @Output() itemClicked = new EventEmitter();

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  deleteItem() {
    // this.itemClicked.emit(this.todoData.id)
    this.todosService.removeTodo(this.todoData.id)
  }

}
