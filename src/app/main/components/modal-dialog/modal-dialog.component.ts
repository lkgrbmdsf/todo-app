import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Todo } from 'src/assets/interfaces/todos-interface';
import { TODAYSDATE } from '../constants/const-values';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent {
  @Input() todo?: Todo;

  @Output() addTodo = new EventEmitter();

  @Output() edit = new EventEmitter();

  todaysDate: string = TODAYSDATE;

  isTriggered: boolean = false;

  constructor(private fb: FormBuilder) {}

  todoForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, this.forbiddenNameValidator()]],
    description: ['', [Validators.required, this.maxLentgthValidator()]],
    deadlineDate: [TODAYSDATE, Validators.required],
  });

  get formTitle(): FormGroup {
    return this.todoForm.get('title') as FormGroup;
  }

  get formDescription(): FormGroup {
    return this.todoForm.get('description') as FormGroup;
  }

  get formDeadlineDate(): FormGroup {
    return this.todoForm.get('deadlineDate') as FormGroup;
  }

  forbiddenNameValidator(): null | Object {
    return (control: FormGroup): ValidationErrors | null => {
      const accepted = control.value.split(' ').filter((str: string) => str.length > 0);
      return accepted.length > 0 && accepted.length <= 4
        ? null
        : { forbidden: 'should be 4 words max' };
    };
  }

  maxLentgthValidator(): null | Object {
    return (control: FormGroup): ValidationErrors | null => {
      const accepted = control.value.length;
      return accepted < 256 ? null : { length: 'should be 256 chars max' };
    };
  }

  addNewTodo() {
    this.isTriggered = true;

    if (this.todoForm.valid) {
      this.addTodo.emit(this.todoForm.value as Todo);
    }
  }

  editTodo() {
    this.isTriggered = true;

    if (this.todoForm.valid) {
      const todo = {
        id: this.todo?.id,
        ...this.todoForm.value,
        isDone: this.todo?.isDone,
      };
      this.edit.emit(todo);
    }
  }
}
