import { Injectable } from '@angular/core';
import { DATA } from 'src/assets/data/todo-data';
import { Todo } from 'src/assets/interfaces/todos-interface';

@Injectable()
export class TaskLogicService {
  todos: Todo[] = DATA;

  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = Date.now();
    }
    if (!todo.isDone) {
      todo.isDone = false;
    }
    this.todos.push(todo);
  }

  edit(todo: Todo) {
    let editedTodo = this.todos.find((td) => td.id === todo.id);
    // console.log(editedTodo, todo);
    // editedTodo = todo;
    // return editedTodo;
    Object.assign(editedTodo, todo);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }
}
