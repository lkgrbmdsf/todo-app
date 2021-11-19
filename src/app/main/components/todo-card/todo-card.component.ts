import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DATE } from 'src/app/shared/const/const-values';
import { DATA } from 'src/app/shared/data/todo-data';
import { Todo } from 'src/app/shared/interfaces/todos-interface';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {
  constructor(private fb: FormBuilder) {}

  @Input() isCreated: boolean = false;

  isEdit: boolean = false;

  isDone: boolean = false;

  currentTodo?: Todo;

  todos = DATA;

  doneTodos: Todo[] = [];

  todoForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    isDone: [false, Validators.required],
    deadlineDate: [DATE, Validators.required],
  });

  addTodo() {
    console.log(this.todoForm.value);
    this.todos.push(this.todoForm.value);
  }

  showDesc(todo: Todo): void {
    this.currentTodo = todo;
  }

  deleteTodo(todo: Todo): Todo[] {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].title === todo.title) {
        this.todos.splice(i, 1);
      }
    }
    return this.todos;
  }

  deleteDoneTodo(todo: Todo): Todo[] {
    for (let i = 0; i < this.doneTodos.length; i++) {
      if (this.doneTodos[i].title === todo.title) {
        this.doneTodos.splice(i, 1);
      }
    }
    return this.doneTodos;
  }

  editTodo(todo: Todo): void {
    this.isEdit = true;
    this.currentTodo = todo;
  }

  submitTodo(title: string, description: string, deadline: Date): void {
    this.isEdit = false;

    if (this.currentTodo) {
      this.currentTodo.title = title;
      this.currentTodo.description = description;
      this.currentTodo.deadlineDate = deadline;
    }
  }

  doneTodo(todo: Todo) {
    this.currentTodo = todo;
    this.currentTodo.isDone = true;
    this.isDone = true;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].isDone) {
        this.todos.splice(i, 1);
      }
    }
    this.doneTodos.push(this.currentTodo);
  }
}
