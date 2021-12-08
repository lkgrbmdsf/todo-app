import { Injectable } from '@angular/core';
import { DATA } from 'src/assets/data/todo-data';
import { Todo } from 'src/assets/interfaces/todos-interface';

@Injectable()
export class TaskLogicService {
  todos: Todo[] = DATA;

  todo!: Todo;

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  edit(todo: Todo) {
    this.todo = todo;
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((td) => td !== todo);
  }
}
