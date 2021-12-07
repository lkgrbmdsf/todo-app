import { Component } from '@angular/core';
import { Todo } from '../shared/interfaces/todos-interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  isCreated: boolean = false;

  isEdit: boolean = false;

  currentTodo?: Todo;

  createTodo(): void {
    this.isCreated = !this.isCreated;
  }

  refresh(edit: boolean) {
    this.isEdit = edit;
  }

  currentTodoEmit(todo: Todo) {
    this.currentTodo = todo;
  }
}
