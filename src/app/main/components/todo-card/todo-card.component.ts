import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TODAYSDATE } from 'src/app/shared/const/const-values';
import { DATA } from 'src/app/shared/data/todo-data';
import { Todo } from 'src/app/shared/interfaces/todos-interface';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {
  @Output() makeChange = new EventEmitter<boolean>();

  @Output() todoEmit = new EventEmitter<Todo>();

  @Input() isEdit: boolean = false;

  currentTodo?: Todo;

  @Input() todo!: Todo;

  todos: Todo[] = DATA;

  todaysDate: string = TODAYSDATE;

  isSorted: boolean = false;

  showDesc(todo: Todo): void {
    this.currentTodo = todo;
    this.currentTodo.isShown = !this.currentTodo.isShown;
  }

  deleteTodo(todo: Todo): Todo[] {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].title === todo.title) {
        this.todos.splice(i, 1);
      }
    }
    return this.todos;
  }

  editTodo(todo: Todo): void {
    this.isEdit = !this.isEdit;
    this.currentTodo = todo;
    this.makeChange.emit(this.isEdit);
    this.todoEmit.emit(this.currentTodo);
  }

  doneTodo(todo: Todo): Todo[] {
    this.currentTodo = todo;
    this.currentTodo.isDone = true;
    return this.todos;
  }
}

//TODO male sort be fiter
