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
    
    if (this.todoTitle === ''){
      alert('please enter todo')
    } else {
      this.todosService.addNewTodo(todo)
    }
    this.todoTitle = ''
  }

}
