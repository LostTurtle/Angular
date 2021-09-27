import { TodosService } from './../services/todos.service';
import { Component, OnInit } from '@angular/core';
import { TODO } from '../interfaces/todos.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  // get todos () {
  //   return this.todosService.todos;
  // }

  ngOnInit(): void {
      this.todosService.fetchTodos()
  }

  get todos (): TODO[] {
    return this.todosService.todos
  }



  // todos: {title: string, id: number, completed: boolean}[] = [{
  //   id: 1,
  //   title: "delectus aut autem",
  //   completed: false
  //   },
  //   {
  //   id: 2,
  //   title: "quis ut nam facilis et officia qui",
  //   completed: false
  //   },
  //   {
  //   id: 3,
  //   title: "fugiat veniam minus",
  //   completed: false
  //   },
  //   {
  //   id: 4,
  //   title: "et porro tempora",
  //   completed: true
  //   },
  //   {
  //   id: 5,
  //   title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
  //   completed: false
  //   }
  // ]

  // addNewTodo(todo: {title: string, id: number, completed: boolean}) {
  //   this.todos.push(todo)
  // }
  
  // removeTodo(id: number) {
  //   const todoIndex = this.todos.findIndex(todo => todo.id == id)
  //   if (todoIndex > -1) {
  //     this.todos.splice(todoIndex, 1)
  //   }
  //   console.log(todoIndex)
  // }
}
