import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  todos: TODO_INTERFACE [] = [];

  fetchTodos () {
    this.http.get<TODO_INTERFACE[]>('https://jsonplaceholder.typicode.com/todos?_limit=10').subscribe(
      (data) => (this.todos = data),
      (err) => console.log(err),
    )
    
  }
  


  removeTodo(id: number) {
    const todoIndex = this.todos.findIndex(todo => todo.id == id)
    if (todoIndex > -1) {
      this.todos.splice(todoIndex, 1)
    }
    console.log(todoIndex)
  }

  addNewTodo(todo: {title: string, id: number, completed: boolean}) {
    this.todos.push(todo)
  }

  

  
}

interface TODO_INTERFACE {
  title: string;
  id: number;
  completed: boolean;
}

// class TodoClass implements TODO_INTERFACE {
//   title = '';
//   id= 0;
//   complete= false;
// }
