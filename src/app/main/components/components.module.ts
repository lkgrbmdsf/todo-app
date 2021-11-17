import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodoCardComponent],
})
export class ComponentsModule {}
