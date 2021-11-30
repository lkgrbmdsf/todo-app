import { Component } from '@angular/core';
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

  currentTodo?: Todo;

  todos: Todo[] = DATA;

  createTodo(): void {
    this.isCreated = !this.isCreated;
  }

  refresh(edit: boolean) {
    this.isEdit = edit;
  }

  refreshCreated(isCreated: boolean) {
    this.isCreated = isCreated;
  }

  currentTodoEmit(todo: Todo) {
    this.currentTodo = todo;
  }

  sort() {
    this.isSorted = !this.isSorted;
  }
}
