import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalWindowComponent } from './modal-window/modal-window.component';

@NgModule({
  declarations: [TodoCardComponent, ModalWindowComponent],
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  exports: [TodoCardComponent, ModalWindowComponent],
})
export class ComponentsModule {}
