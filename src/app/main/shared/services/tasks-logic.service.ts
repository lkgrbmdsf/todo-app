import { Injectable } from '@angular/core';
import { DATA } from 'src/assets/data/todo-data';
import { Todo } from 'src/assets/interfaces/todos-interface';

@Injectable()
export class TaskLogicService {
  todos: Todo[] = DATA;

  addTodo(todo: Todo) {
    todo.id = Date.now();
    todo.isDone = false;
    this.todos.push(todo);
  }

  edit(todo: Todo) {
    let editedTodoIndex = this.todos.findIndex((td) => td.id === todo.id);
    this.todos[editedTodoIndex] = { ...todo };
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }
}
