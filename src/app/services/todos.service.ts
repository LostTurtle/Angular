import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TODO } from '../interfaces/todos.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient, private userService: UserService, private router: Router) { }

  todos: TODO[] = [];
  errors: string[] = [];

  getTodoById(id: string) {
    return this.todos.find(todo => todo._id == id);
  }

  baseUrl: string = 'http://localhost:3000/todos'
  get defaultOptions() {
    return {
      headers: {
        authorization: this.userService.getToken(),
      },
    };
  }

  generateError (msg: string) {
    this.errors.push(msg);
    setTimeout(() => {
      const errIndex = this.errors.indexOf(msg);
      this.errors.splice(errIndex, 1);
    }, 2000);
  }

  fetchTodos () {
    this.http.get<{todos: TODO[]}>(`${this.baseUrl}/getTodos`, this.defaultOptions).subscribe(
      data => this.todos = data.todos,
      err => {
        this.generateError('Faild to Fetch Todos');
      }
    )
  }

  createTodo(data: {title: string, content: string, completed: boolean}) {
    this.http.post(`${this.baseUrl}/createTodo`, data, this.defaultOptions).subscribe(
      data => {
        this.router.navigateByUrl('/')
      },
      err => {
        this.generateError('Faild to Create Todo')
      }
    );
  }

  updateTodo(id: string, data: {title: string, content: string, completed: boolean}) {
    this.http.put(`${this.baseUrl}/updateTodo/${id}`, data, this.defaultOptions).subscribe(
      data => {
        this.router.navigateByUrl('/')
      },
      err => {
        this.generateError('Faild to Update Todo')
      }
    )
  }

  deleteTodo(id: string) {
    this.http.delete(`${this.baseUrl}/deleteTodo/${id}`, this.defaultOptions).subscribe(
      data => {
        const todoIndex = this.todos.findIndex(todo => todo._id == id);
        if (todoIndex == -1) return;
        this.todos.splice(todoIndex, 1)
      },
      err => {
        this.generateError('Faild to Delete Todo')
      }
    )
  }

  // fetchTodos() {
  //   this.http.get<{todos: TODOS[]}>('http://localhost:3000/todos/getTodos', {
  //     headers: {
  //       authorization: this.userService.getToken()
  //     }
  //   }).subscribe(
  //     data => this.todos = data.todos,
  //     err => console.log(err))
  // }
  


  // removeTodo(id: number) {
  //   const todoIndex = this.todos.findIndex(todo => todo.id == id)
  //   if (todoIndex > -1) {
  //     this.todos.splice(todoIndex, 1)
  //   }
  //   console.log(todoIndex)
  // }

  // addNewTodo(todo: TODOS) {
  //   this.todos.push(todo)
  // }

  

  
}

// interface TODO_INTERFACE {
//   title: string;
//   id: number;
//   completed: boolean;
// }

// class TodoClass implements TODO_INTERFACE {
//   title = '';
//   id= 0;
//   complete= false;
// }
