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

  titleError: string = '';

  descError: string = '';

  constructor(private fb: FormBuilder) {}

  todoForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, this.forbiddenNameValidator()]],
    description: ['', [Validators.required, Validators.maxLength(256)]],
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
        : { forbidden: { value: control.value } };
    };
  }

  titleErrorHandler(): string {
    return this.formTitle.errors?.required
      ? (this.titleError = 'should not be empty')
      : this.formTitle.errors?.forbidden
      ? (this.titleError = 'should be 4 or less words')
      : (this.titleError = `${'unknown error: ' + this.formTitle.errors}`);
  }

  descErrorHandler(): string {
    return this.formDescription.errors?.required
      ? (this.descError = 'should not be empty')
      : this.formDescription.errors?.maxlength
      ? (this.descError = 'should me less then 256 chars')
      : (this.descError = `${'unknown error: ' + this.formDescription.errors}`);
  }

  // TODO: make var
  // TODO: {error: custom string}

  addNewTodo() {
    this.isTriggered = true;

    this.titleErrorHandler();
    this.descErrorHandler();

    if (this.isTriggered) {
      if (this.todoForm.valid) {
        this.addTodo.emit(this.todoForm);
      }
    }
  }

  editTodo() {
    this.isTriggered = true;

    this.titleErrorHandler();
    this.descErrorHandler();

    if (this.isTriggered) {
      if (this.todoForm.valid) {
        this.edit.emit(this.todoForm);
      }
    }
  }
}
