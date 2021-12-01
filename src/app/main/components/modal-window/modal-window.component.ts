import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { TODAYSDATE } from 'src/app/shared/const/const-values';
import { DATA } from 'src/app/shared/data/todo-data';
import { Todo } from 'src/app/shared/interfaces/todos-interface';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent {
  @Input() isEdit: boolean = false;

  @Input() isCreated: boolean = false;

  @Input() currentTodo?: Todo;

  @Output() makeChange = new EventEmitter<boolean>();

  isTriggered: boolean = false;

  todos: Todo[] = DATA;

  todaysDate: string = TODAYSDATE;

  todoForm: FormGroup = this.fb.group({
    title: [
      '',
      [Validators.required, this.forbiddenNameValidator(/^(?:\s*\S+(?:\s+\S+){0,3})?\s*$/)],
    ],
    description: ['', [Validators.required, Validators.maxLength(256)]],
    isDone: [false],
    isShown: [false],
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

  forbiddenNameValidator(nameRe: RegExp) {
    return (control: FormGroup): ValidationErrors | null => {
      const accepted = nameRe.test(control.value);
      return accepted ? null : { forbidden: { value: control.value } };
    };
  }

  addTodo(): void {
    this.isTriggered = true;
    if (this.isTriggered) {
      if (this.todoForm.valid) {
        this.todos.push(this.todoForm.value);
        this.isCreated = false;
        this.makeChange.emit(this.isCreated);
        this.isTriggered = false;
      }
    }
  }

  submitEditTodo(): void {
    this.isEdit = false;
    this.makeChange.emit(this.isEdit);

    if (this.currentTodo) {
      this.currentTodo.title = this.formTitle?.value;
      this.currentTodo.description = this.formDescription?.value;
      this.currentTodo.deadlineDate = this.formDeadlineDate?.value;
    }
  }
}

// TODO: make directive by click
