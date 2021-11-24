import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todos-interface';

@Pipe({
  name: 'sortByDone',
  pure: false,
})
export class SortByDonePipe implements PipeTransform {
  transform(todos: Todo[]): Todo[] {
    return todos.sort((todo) => (todo.isDone ? -1 : 1));
  }
}
