import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todos-interface';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {
  @Input() todo?: Todo;

  @Output() deleteTodo = new EventEmitter();

  @Output() editTodo = new EventEmitter();

  isDone: boolean = false;

  isShown: boolean = false;

  deleteCurrent() {
    this.deleteTodo.emit(this.todo);
  }

  edit() {
    this.editTodo.emit(this.todo);
  }

  showDesc(): void {
    this.isShown = !this.isShown;
  }

  doneTodo(): void {
    this.isDone = !this.isDone;
  }
}
