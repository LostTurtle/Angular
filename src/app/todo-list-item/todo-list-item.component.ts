import { Component, Input, OnInit } from '@angular/core';
import {TODO, defaultTodo} from '../interfaces/todos.interface'
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: TODO = defaultTodo;
  // @Output() itemClicked = new EventEmitter();

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }
  deleteItem () {
    this.todosService.deleteTodo(this.todo._id);
  }

}
