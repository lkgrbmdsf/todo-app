import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todos-interface';

@Pipe({
  name: 'sortByDone',
  pure: false,
})
export class SortByDonePipe implements PipeTransform {
  transform(todos: Todo[], isSorted: boolean): Todo[] {
    return isSorted ? todos.sort((todo) => (todo.isDone ? -1 : 1)) : todos;
  }
}
