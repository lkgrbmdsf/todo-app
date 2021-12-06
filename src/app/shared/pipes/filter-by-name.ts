import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todos-interface';

@Pipe({
  name: 'filterByName',
  pure: false,
})
export class FilterByNamePipe implements PipeTransform {
  transform(todos: Todo[], value: string): Todo[] {
    return todos.filter((todo) => todo.title.toLowerCase().includes(value.toLowerCase()));
  }
}

// TODO: po imeni
