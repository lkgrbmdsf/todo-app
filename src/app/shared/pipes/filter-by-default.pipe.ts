import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todos-interface';

@Pipe({
  name: 'filterByDefault',
  pure: false,
})
export class FilterByDefaultPipe implements PipeTransform {
  transform(todos: Todo[]): Todo[] {
    return todos.filter((item) => !item.isDone);
  }
}
