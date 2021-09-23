import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  // @Output() creatingTodo = new EventEmitter();

  constructor(private todosService: TodosService) { }
  todoTitle = ''

  ngOnInit(): void {
  }

  createTodo() {
    const todo = {
      title: this.todoTitle,
      id: new Date().getTime(),
      completed: false
    }
    // this.creatingTodo.emit(todo)
    this.todosService.addNewTodo(todo)
    if (this.todoTitle === ''){
      console.log('error')
    }
    this.todoTitle = ''
  }

}
