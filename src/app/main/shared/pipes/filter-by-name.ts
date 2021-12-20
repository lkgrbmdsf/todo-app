import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../../../assets/interfaces/todos-interface';

@Pipe({
  name: 'filterByName',
  pure: false,
})
export class FilterByNamePipe implements PipeTransform {
  transform(todos: Todo[], value: string): Todo[] {
    return todos.filter((todo) =>
      value.length >= 3 ? todo.title.toLowerCase().includes(value.toLowerCase()) : todo,
    );
  }
}
