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

  isCreated: boolean = false;

  constructor(public service: TaskLogicService) {}

  openModal(): void {
    this.isCreated = !this.isCreated;
  }

  doneTodo(todo: Todo): void {
    todo.isDone = true;
    this.service.edit(todo);
  }

  addTodo(todo: Todo): void {
    this.service.addTodo(todo);
    this.isCreated = false;
  }

  deleteTodo(todo: Todo): void {
    this.service.deleteTodo(todo.id);
  }

  editTodo(todo: Todo): void {
    this.service.edit(todo);
    this.todoToEdit = undefined;
  }

  openModalToEdit(todo: Todo): void {
    this.todoToEdit = todo;
  }

  get todos(): Todo[] {
    return this.service.getAllTodos();
  }
}
