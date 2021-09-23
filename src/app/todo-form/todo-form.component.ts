import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() creatingTodo = new EventEmitter();

  constructor() { }
  todoTitle = ''

  ngOnInit(): void {
  }

  createTodo() {
    const todo = {
      title: this.todoTitle,
      id: new Date().getTime(),
      completed: false
    }
    this.creatingTodo.emit(todo)
    this.todoTitle = ''
  }

}
