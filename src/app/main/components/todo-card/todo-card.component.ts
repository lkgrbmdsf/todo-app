import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TODAYSDATE } from 'src/app/shared/const/const-values';
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

  @Output() makeChange = new EventEmitter<boolean>();

  isEdit: boolean = false;

  currentTodo?: Todo;

  todos: Todo[] = DATA;

  todaysDate: string = TODAYSDATE;

  todoForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.pattern(/^(?:\s*\S+(?:\s+\S+){0,3})?\s*$/)]],
    description: ['', [Validators.maxLength(256), Validators.required]],
    isDone: [false],
    isShown: [false],
    deadlineDate: [TODAYSDATE, Validators.required],
  });

  get formTitle(): AbstractControl {
    return this.todoForm.get('title') as FormGroup;
  }

  get formDescription(): AbstractControl {
    return this.todoForm.get('description') as FormGroup;
  }

  get formDeadlineDate(): AbstractControl {
    return this.todoForm.get('deadlineDate') as FormGroup;
  }

  addTodo(): void {
    this.todos.push(this.todoForm.value);
    this.isCreated = false;
    this.makeChange.emit(this.isCreated);
  }

  submitEditTodo(): void {
    this.isEdit = false;

    if (this.currentTodo) {
      this.currentTodo.title = this.formTitle?.value;
      this.currentTodo.description = this.formDescription?.value;
      this.currentTodo.deadlineDate = this.formDeadlineDate?.value;
    }
  }

  showDesc(todo: Todo): void {
    this.currentTodo = todo;
    this.currentTodo.isShown = !this.currentTodo.isShown;
  }

  deleteTodo(todo: Todo): Todo[] {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].title === todo.title) {
        this.todos.splice(i, 1);
      }
    }
    return this.todos;
  }

  editTodo(todo: Todo): void {
    this.isEdit = !this.isEdit;
    this.currentTodo = todo;
  }

  doneTodo(todo: Todo): Todo[] {
    this.currentTodo = todo;
    this.currentTodo.isDone = true;
    return this.todos;
  }
}
