import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DATA } from '../../assets/data/todo-data';
import { Todo } from '../../assets/interfaces/todos-interface';

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

  doneTodo(todo: Todo) {
    todo.isDone = true;
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((td) => td !== todo);
  }
}
