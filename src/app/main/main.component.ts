import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DATA } from '../shared/data/todo-data';
import { Todo } from '../shared/interfaces/todos-interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  isCreated: boolean = false;

  isEdit: boolean = false;

  isSorted: boolean = false;

  todo!: Todo;

  todos: Todo[] = DATA;

  search = new FormControl('');

  openModal() {
    this.isCreated = !this.isCreated;
  }

  addTodo(todo: FormGroup) {
    this.todos.push(todo.value);
    this.isCreated = !this.isCreated;
  }

  submitEditTodo(todo: Todo) {
    this.todo = todo;
    this.isEdit = true;
  }

  edit(todo: FormGroup) {
    this.todo.title = todo.value.title;
    this.todo.description = todo.value.description;
    this.todo.deadlineDate = todo.value.deadlineDate;

    this.isEdit = false;
  }

  deleteTodo(todo: Todo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i] === todo) {
        this.todos.splice(i, 1);
      }
    }
  }
}
