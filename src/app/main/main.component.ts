import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from 'src/assets/interfaces/todos-interface';
import { TaskLogicService } from './shared/services/tasks-logic.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [TaskLogicService],
})
export class MainComponent {
  search = new FormControl('');

  todoToEdit?: Todo;

  constructor(public service: TaskLogicService) {}

  openModal(todo?: Todo): void {
    if (todo?.id) {
      this.todoToEdit = todo;
    } else {
      todo = {} as Todo;
      this.todoToEdit = todo;
    }
  }

  doneTodo(todo: Todo): void {
    todo.isDone = !todo.isDone;
    this.service.edit(todo);
  }

  addTodo(todo: Todo): void {
    console.log(todo);
    this.service.addTodo(todo);
    this.todoToEdit = undefined;
  }

  deleteTodo(todo: Todo): void {
    this.service.deleteTodo(todo.id);
  }

  editTodo(todo: Todo): void {
    this.service.edit(todo);
    this.todoToEdit = undefined;
  }

  get todos(): Todo[] {
    return this.service.getAllTodos();
  }
}
