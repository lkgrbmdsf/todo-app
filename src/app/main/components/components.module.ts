import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoCardComponent],
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  exports: [TodoCardComponent],
})
export class ComponentsModule {}
