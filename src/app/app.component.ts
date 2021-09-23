import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular';

  // showPassword = false;
  // togglePasswordView() {
  //   this.showPassword = !this.showPassword
  // }

  // isHeader = true

  // toggleHeaderView () {
  //   this.isHeader = !this.isHeader
  // }

  // classes () {
  //   return {
  //     bold: this.isHeader,
  //     underline: this.isHeader,
  //     header: this.isHeader,
  //     subHeader: !this.isHeader,
  //     italic: !this.isHeader,
  //   }
  // }


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
  //   },
  // ]


  // // newTodo: {title: string}[] = [{
  // //   title: ''
  // // }]

  // newTodo = ""
  // addNewTodo() {
  //   const todo = {
  //     title: this.newTodo,
  //     id: new Date().getTime(),
  //     completed: false
  //   }
  //   this.todos.push(todo);
  //   this.newTodo = '';
  // }

  // removeTodo(id: number) {
  //   const todoIndex = this.todos.findIndex(todo => todo.id == id)
  //   if (todoIndex > -1) {
  //     this.todos.splice(todoIndex, 1)
  //   }
  // }

}
