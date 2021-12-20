import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/assets/interfaces/todos-interface';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {
  @Input() todo!: Todo;

  @Output() deleteTodo = new EventEmitter();

  @Output() openModal = new EventEmitter();

  @Output() doneTodo = new EventEmitter();

  isShown: boolean = false;

  deleteCurrent() {
    this.deleteTodo.emit(this.todo);
  }

  openModalToEdit() {
    this.openModal.emit(this.todo);
  }

  makeDone(): void {
    this.doneTodo.emit(this.todo);
  }

  showDesc(): void {
    this.isShown = !this.isShown;
  }
}
