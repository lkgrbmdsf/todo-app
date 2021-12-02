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
    title: ['', [Validators.required, this.forbiddenNameValidator()]],
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

  forbiddenNameValidator() {
    return (control: FormGroup): ValidationErrors | null => {
      const accepted = control.value.split(' ').filter((str: string) => str.length > 0);
      return accepted.length > 0 && accepted.length <= 4
        ? null
        : { forbidden: { value: control.value } };
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

  // TODO: edem na mein

  submitEditTodo(): void {
    this.isEdit = false;
    this.makeChange.emit(this.isEdit);

    if (this.currentTodo) {
      this.currentTodo.title = this.formTitle?.value;
      this.currentTodo.description = this.formDescription?.value;
      this.currentTodo.deadlineDate = this.formDeadlineDate?.value;
    }
  }

  titleErrorHandler() {
    return this.formTitle.errors?.required
      ? 'should not be empty'
      : this.formTitle.errors?.forbidden
      ? 'should be 4 or less words'
      : `${'unknown error: ' + this.formTitle.errors}`;
  }

  descErrorHandler() {
    return this.formDescription.errors?.required
      ? 'should not be empty'
      : this.formDescription.errors?.maxlength
      ? 'should me less then 256 chars'
      : `${'unknown error: ' + this.formDescription.errors}`;
  }
  // TODO: vy toz podtyagivaites rebyata
}

// TODO: what's with edit
