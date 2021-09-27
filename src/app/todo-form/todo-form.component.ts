import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  // @Output() creatingTodo = new EventEmitter();

  constructor(private todosService: TodosService, private route: ActivatedRoute) { }

  editMode: boolean = false;
  id: string = ''
  todoTitle = ''
  content: string = ''
  completed: boolean = false

  get errors() {
    return this.todosService.errors
  }

  ngOnInit(): void {
    const idParams =this.route.snapshot.params.id;
    if (idParams != 'new') {
      this.editMode = true;
      this.id = idParams;
      const todo = this.todosService.getTodoById(this.id)
      if(!todo) return;
      this.todoTitle = todo.title
      this.content = todo.content
    }
  }

  submit () {
    const data = {
      title: this.todoTitle,
      content: this.content,
      completed: this.completed
    }
    if (!this.editMode) {
      this.todosService.createTodo(data);
    } else {
      this.todosService.updateTodo(this.id, data)
    }
  };



  // createTodo() {
  //   const todo = {
  //     title: this.todoTitle,
  //     id: new Date().getTime(),
  //     completed: false
  //   }
  //   // this.creatingTodo.emit(todo)
    
  //   if (this.todoTitle === ''){
  //     alert('please enter todo')
  //   } else {
  //     this.todosService.addNewTodo(todo)
  //   }
  //   this.todoTitle = ''
  // }

}
