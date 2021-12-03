import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { TODAYSDATE } from 'src/app/shared/const/const-values';
import { Todo } from 'src/app/shared/interfaces/todos-interface';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrls: ['./modal-menu.component.scss'],
})
export class ModalMenuComponent {
  @Input() todo?: Todo;

  @Input() isEdit?: boolean;

  @Output() addTodo = new EventEmitter();

  @Output() edit = new EventEmitter();

  todaysDate: string = TODAYSDATE;

  isTriggered: boolean = false;

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

  forbiddenNameValidator() {
    return (control: FormGroup): ValidationErrors | null => {
      const accepted = control.value.split(' ').filter((str: string) => str.length > 0);
      return accepted.length > 0 && accepted.length <= 4
        ? null
        : { forbidden: { value: control.value } };
    };
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

  addNewTodo() {
    this.isTriggered = true;
    if (this.isTriggered) {
      if (this.todoForm.valid) {
        this.addTodo.emit(this.todoForm);
      }
    }
  }

  editTodo() {
    this.isTriggered = true;
    if (this.isTriggered) {
      if (this.todoForm.valid) {
        this.edit.emit(this.todoForm);
      }
    }
  }
}
