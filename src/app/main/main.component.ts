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
  isCreated: boolean = false;

  isEdit: boolean = false;

  search = new FormControl('');

  todos: Todo[] = this.service.todos;

  todo?: Todo;

  constructor(public service: TaskLogicService) {}

  openModal() {
    this.isCreated = !this.isCreated;
  }

  doneTodo(todo: Todo) {
    todo.isDone = true;
    this.service.edit(todo);
  }

  addTodo(todo: Todo) {
    this.service.addTodo(todo);
    this.isCreated = false;
  }

  deleteTodo(todo: Todo) {
    this.service.deleteTodo(todo);
    this.todos = this.service.todos;
    //TODO:  спросить
  }

  editTodo(todo: Todo) {
    this.todo!.title = todo.title;
    this.todo!.description = todo.description;
    this.todo!.deadlineDate = todo.deadlineDate;
    //TODO: спросить

    this.service.edit(todo);
    this.isCreated = false;
    this.todo = undefined;
    //TODO: спросить
  }

  openModalToEdit(todo: Todo) {
    this.isCreated = true;
    this.todo = todo;
  }
}
