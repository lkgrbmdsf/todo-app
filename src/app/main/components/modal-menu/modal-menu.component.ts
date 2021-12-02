import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DATA } from 'src/app/shared/data/todo-data';
import { Todo } from 'src/app/shared/interfaces/todos-interface';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrls: ['./modal-menu.component.scss'],
})
export class ModalMenuComponent {
  @Input() isEdit?: boolean;

  @Input() isCreated?: boolean;

  @Input() isTriggered?: boolean;

  @Input() addTodo!: () => void;

  @Input() submitEditTodo!: (todo: Todo) => void;

  @Input() todoForm!: FormGroup;

  @Input() formTitle!: FormGroup;

  @Input() formDescription!: FormGroup;

  @Input() formDeadlineDate!: FormGroup;

  @Input() todaysDate?: string;

  @Input() titleErrorHandler?: string;

  @Input() descErrorHandler?: string;

  @Input() todo?: Todo;

  @Input() todos: Todo[] = DATA;
}
