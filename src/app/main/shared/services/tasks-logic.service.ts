import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DATA } from 'src/assets/data/todo-data';
import { Todo } from 'src/assets/interfaces/todos-interface';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class TaskLogicService {
  isCreated: boolean = false;

  isEdit: boolean = false;

  todos: Todo[] = DATA;

  todo!: Todo;

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
