import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todos-interface';

@Pipe({
  name: 'filterByDone',
  pure: false,
})
export class FilterByDonePipe implements PipeTransform {
  transform(todos: Todo[]): Todo[] {
    return todos.filter((item) => item.isDone);
  }
}
