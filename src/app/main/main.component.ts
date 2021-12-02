import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { TODAYSDATE } from '../shared/const/const-values';
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

  isTriggered: boolean = false;

  todaysDate: string = TODAYSDATE;

  currentTodo?: Todo;

  todos: Todo[] = DATA;

  todoForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, this.forbiddenNameValidator()]],
    description: ['', [Validators.required, Validators.maxLength(256)]],
    deadlineDate: [TODAYSDATE, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  get formTitle(): FormGroup {
    return this.todoForm.get('title') as FormGroup;
  }

  get formDescription(): FormGroup {
    return this.todoForm.get('description') as FormGroup;
  }

  get formDeadlineDate(): FormGroup {
    return this.todoForm.get('deadlineDate') as FormGroup;
  }

  forbiddenNameValidator() {
    return (control: FormGroup): ValidationErrors | null => {
      const accepted = control.value.split(' ').filter((str: string) => str.length > 0);
      return accepted.length > 0 && accepted.length <= 4
        ? null
        : { forbidden: { value: control.value } };
    };
  }

  createTodo(): void {
    this.isCreated = !this.isCreated;
  }

  // TODO: naming

  refresh(edit: boolean) {
    this.isEdit = edit;
  }

  refreshCreated(isCreated: boolean) {
    this.isCreated = isCreated;
  }

  currentTodoEmit(todo: Todo) {
    this.currentTodo = todo;
  }

  // TODO curent todo nado ubrat

  sort() {
    this.isSorted = !this.isSorted;
  }

  addTodo(): void {
    this.isTriggered = true;
    if (this.isTriggered) {
      if (this.todoForm.valid) {
        this.todos.push(this.todoForm.value);
        this.isCreated = false;
        this.isTriggered = false;
      }
    }
  }

  submitEditTodo(todo: Todo): void {
    this.isEdit = false;

    if (this.currentTodo) {
      todo.title = this.formTitle?.value;
      todo.description = this.formDescription?.value;
      todo.deadlineDate = this.formDeadlineDate?.value;
    }
  }

  titleErrorHandler(): string {
    return this.formTitle.errors?.required
      ? 'should not be empty'
      : this.formTitle.errors?.forbidden
      ? 'should be 4 or less words'
      : `${'unknown error: ' + this.formTitle.errors}`;
  }

  descErrorHandler(): string {
    return this.formDescription.errors?.required
      ? 'should not be empty'
      : this.formDescription.errors?.maxlength
      ? 'should me less then 256 chars'
      : `${'unknown error: ' + this.formDescription.errors}`;
  }
}
